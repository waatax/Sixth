// Robust Native Web Speech Synthesis Engine for English Learning
// Supports pitch, rate, voice selection, playing status listener, and fallback

class SpeechEngine {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.currentUtterance = null;
    this.activeId = null;
    this.isPlaying = false;
    this.rate = 1.0;
    this.listeners = new Set();
    this.voices = [];

    if (this.synth) {
      this.loadVoices();
      if (typeof window !== 'undefined' && window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  loadVoices() {
    if (!this.synth) return;
    this.voices = this.synth.getVoices();
  }

  getBestEnglishVoice() {
    if (!this.voices || this.voices.length === 0) {
      this.loadVoices();
    }
    // Priority order: Google US English / Samantha / Microsoft Natural / en-US / en-GB / any en
    const englishVoices = this.voices.filter(v => v.lang.startsWith('en'));
    if (englishVoices.length === 0) return null;

    const preferred = englishVoices.find(v => 
      v.name.includes('Google') || 
      v.name.includes('Samantha') || 
      v.name.includes('Natural') || 
      v.name.includes('Jenny') ||
      v.name.includes('Aria')
    );

    if (preferred) return preferred;

    const usVoice = englishVoices.find(v => v.lang === 'en-US');
    if (usVoice) return usVoice;

    return englishVoices[0];
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notifyListeners() {
    const state = {
      isPlaying: this.isPlaying,
      activeId: this.activeId,
      rate: this.rate
    };
    this.listeners.forEach(fn => fn(state));
  }

  cleanText(text) {
    if (!text) return '';
    // Strip markdown formatting, symbols, LaTeX math tags
    return text
      .replace(/\$\\[a-zA-Z]+\{[^}]*\}\{([^}]*)\}\$/g, '$1') // e.g. $\textcolor{#fff}{\textbf{word}}$ -> word
      .replace(/\$[^$]*\$/g, '') // remove remaining math
      .replace(/[*_#`~[\]]/g, '') // remove markdown marks
      .replace(/\\text\{([^}]*)\}/g, '$1')
      .replace(/[\n\r]+/g, ' ')
      .trim();
  }

  speak(text, options = {}) {
    if (!this.synth) {
      console.warn('Speech synthesis not supported in this environment');
      return;
    }

    const {
      id = null,
      rate = this.rate || 1.0,
      pitch = 1.0,
      lang = 'en-US',
      onStart = null,
      onEnd = null,
      onError = null,
      interrupt = true
    } = options;

    if (interrupt) {
      this.stop();
    }

    const cleanedText = this.cleanText(text);
    if (!cleanedText) return;

    const utterance = new SpeechSynthesisUtterance(cleanedText);
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.lang = lang;

    const voice = this.getBestEnglishVoice();
    if (voice) {
      utterance.voice = voice;
    }

    this.activeId = id;
    this.isPlaying = true;
    this.currentUtterance = utterance;
    this.notifyListeners();

    utterance.onstart = () => {
      this.isPlaying = true;
      this.activeId = id;
      this.notifyListeners();
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.activeId = null;
      this.currentUtterance = null;
      this.notifyListeners();
      if (onEnd) onEnd();
    };

    utterance.onerror = (event) => {
      // Don't treat user-cancelled speech as an application error
      if (event.error !== 'canceled' && event.error !== 'interrupted') {
        console.warn('SpeechSynthesis error:', event.error);
      }
      this.isPlaying = false;
      this.activeId = null;
      this.currentUtterance = null;
      this.notifyListeners();
      if (onError) onError(event);
    };

    try {
      this.synth.speak(utterance);
    } catch (e) {
      console.error('Failed to trigger speech synthesis', e);
      this.isPlaying = false;
      this.activeId = null;
      this.notifyListeners();
    }
  }

  stop() {
    if (this.synth) {
      try {
        this.synth.cancel();
      } catch (e) {}
    }
    this.isPlaying = false;
    this.activeId = null;
    this.currentUtterance = null;
    this.notifyListeners();
  }

  pause() {
    if (this.synth && this.isPlaying) {
      this.synth.pause();
    }
  }

  resume() {
    if (this.synth) {
      this.synth.resume();
    }
  }

  setRate(newRate) {
    this.rate = newRate;
    this.notifyListeners();
  }

  speakSlow(text, id = null) {
    this.speak(text, { id, rate: 0.75 });
  }

  speakNormal(text, id = null) {
    this.speak(text, { id, rate: 1.0 });
  }

  speakFast(text, id = null) {
    this.speak(text, { id, rate: 1.25 });
  }
}

export const speechEngine = new SpeechEngine();
