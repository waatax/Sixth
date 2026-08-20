// Robust Native Web Speech Synthesis Engine for English Learning
// Supports pitch, rate, voice selection, playing status listener, and fallback

class SpeechEngine {
  constructor() {
    this.synth = typeof window !== 'undefined' ? window.speechSynthesis : null;
    this.currentUtterance = null;
    this.activeId = null;
    this.isPlaying = false;
    
    // Load persisted speed or default 1.0
    let savedRate = 1.0;
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('sixth_speech_rate');
        if (stored) savedRate = parseFloat(stored) || 1.0;
      } catch (e) {}
    }
    this.rate = savedRate;
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

  getBestChineseVoice() {
    if (!this.voices || this.voices.length === 0) {
      this.loadVoices();
    }
    const chineseVoices = this.voices.filter(v => v.lang.startsWith('zh'));
    if (chineseVoices.length === 0) return null;

    const preferred = chineseVoices.find(v => 
      v.name.includes('Google') || 
      v.name.includes('Taiwan') ||
      v.name.includes('Yunjian') ||
      v.name.includes('Xiaoxiao')
    );

    if (preferred) return preferred;
    
    const twVoice = chineseVoices.find(v => v.lang === 'zh-TW');
    if (twVoice) return twVoice;

    return chineseVoices[0];
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

    const voice = lang.startsWith('zh') ? this.getBestChineseVoice() : this.getBestEnglishVoice();
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
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('sixth_speech_rate', String(newRate));
      } catch (e) {}
    }
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

// Recursive extractor for Markdown/Rehype/KaTeX AST node content
export function extractTextFromNode(node) {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (node.value) {
    let val = node.value;
    val = val.replace(/\\textcolor\{[^}]*\}\{([^}]*)\}/g, '$1');
    val = val.replace(/\\textbf\{([^}]*)\}/g, '$1');
    val = val.replace(/\\text\{([^}]*)\}/g, '$1');
    val = val.replace(/\$+/g, '');
    return val;
  }
  if (node.children && Array.isArray(node.children)) {
    return node.children.map(extractTextFromNode).join('');
  }
  return '';
}

// Smart English sentence / word extractor from mixed English/Chinese strings
export function extractEnglishSentence(fullText) {
  if (!fullText || typeof fullText !== 'string') return '';

  // Clean LaTeX math tags
  let cleaned = fullText
    .replace(/\$\\[a-zA-Z]+\{[^}]*\}\{([^}]*)\}\$/g, '$1')
    .replace(/\\textcolor\{[^}]*\}\{([^}]*)\}/g, '$1')
    .replace(/\\textbf\{([^}]*)\}/g, '$1')
    .replace(/\\text\{([^}]*)\}/g, '$1')
    .replace(/\\rightarrow/g, ' to ')
    .replace(/➔|→/g, ' to ')
    .replace(/\$[^$]*\$/g, '')
    .replace(/\$+/g, '')
    .trim();

  // 1. Quoted English sentence: e.g. "The movie starts at half past two."
  const quoteMatch = cleaned.match(/["“]([^"”]+)["”]/);
  if (quoteMatch && /[a-zA-Z]{2,}/.test(quoteMatch[1])) {
    return quoteMatch[1].trim();
  }

  // 2. Dialogue format: e.g. "Leo: What time do you usually wake up?"
  const dialogueMatch = cleaned.match(/^(?:[A-Za-z]+|[^\s\w]+)\s*[:：]\s*([A-Za-z0-9\s',.?!:;/-]+)/);
  if (dialogueMatch && /[a-zA-Z]{2,}/.test(dialogueMatch[1])) {
    return dialogueMatch[1].trim();
  }

  // 3. Sentence before Chinese parentheses: e.g. "It's a quarter to eight. (差1刻到8點)"
  const beforeParenMatch = cleaned.match(/^([A-Za-z0-9\s',.?!:;/-]+?)(?:\s*[\(（][\u4e00-\u9fa5a-zA-Z0-9\s/，。！？、：]*[\)）]|$)/);
  if (beforeParenMatch && /[a-zA-Z]{2,}/.test(beforeParenMatch[1])) {
    const candidate = beforeParenMatch[1].trim();
    if (candidate.length >= 2 && /[a-zA-Z]/.test(candidate)) {
      return candidate;
    }
  }

  // 4. Fallback extract English word sequences
  const engMatches = cleaned.match(/[A-Za-z0-9',.?!/-]{2,}(?:\s+[A-Za-z0-9',.?!/-]+)*/g);
  if (engMatches && engMatches.length > 0) {
    const valid = engMatches.filter(m => /[a-zA-Z]/.test(m));
    if (valid.length > 0) {
      return valid[0].trim();
    }
  }

  return '';
}

