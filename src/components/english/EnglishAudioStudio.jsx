import { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  Volume1, 
  Square, 
  Play, 
  Pause, 
  RotateCcw, 
  Headphones, 
  BookOpen, 
  MessageSquare, 
  Sparkles, 
  Zap, 
  HelpCircle,
  Check
} from 'lucide-react';
import { englishAudioData } from '../../data/englishAudioData';
import { speechEngine } from '../../utils/speechHelper';
import './EnglishAudioStudio.css';

const EnglishAudioStudio = ({ unitId }) => {
  const audioData = englishAudioData[unitId];
  const [activeTab, setActiveTab] = useState('passage'); // 'passage' | 'vocab' | 'dialogue' | 'patterns'
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSpeechId, setActiveSpeechId] = useState(null);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [continuousPlaying, setContinuousPlaying] = useState(false);
  const continuousRef = useRef(false);

  useEffect(() => {
    continuousRef.current = continuousPlaying;
  }, [continuousPlaying]);

  // Subscribe to speechEngine events
  useEffect(() => {
    const unsubscribe = speechEngine.subscribe((state) => {
      setIsPlaying(state.isPlaying);
      setActiveSpeechId(state.activeId);
    });

    return () => {
      unsubscribe();
      speechEngine.stop();
    };
  }, []);

  if (!audioData) return null;

  const handleSetRate = (rate) => {
    setSpeechRate(rate);
    speechEngine.setRate(rate);
  };

  const handleStopAll = () => {
    setContinuousPlaying(false);
    speechEngine.stop();
  };

  // Play single item
  const handlePlayItem = (text, id, rate = speechRate) => {
    setContinuousPlaying(false);
    if (activeSpeechId === id && isPlaying) {
      speechEngine.stop();
    } else {
      speechEngine.speak(text, {
        id,
        rate,
        onEnd: () => {
          // done
        }
      });
    }
  };

  // Play passage paragraph-by-paragraph continuously
  const playParagraph = (index, rate = speechRate) => {
    if (!audioData.readAloudPassage || !audioData.readAloudPassage.paragraphs) return;
    const paragraphs = audioData.readAloudPassage.paragraphs;
    if (index >= paragraphs.length) {
      setContinuousPlaying(false);
      setCurrentParagraphIndex(0);
      return;
    }

    const currentP = paragraphs[index];
    setCurrentParagraphIndex(index);

    speechEngine.speak(currentP.text, {
      id: currentP.id,
      rate,
      onEnd: () => {
        if (continuousRef.current && index + 1 < paragraphs.length) {
          setTimeout(() => {
            if (continuousRef.current) {
              playParagraph(index + 1, rate);
            }
          }, 600);
        } else {
          setContinuousPlaying(false);
        }
      },
      onError: () => {
        setContinuousPlaying(false);
      }
    });
  };

  const handleToggleContinuousPassage = () => {
    if (continuousPlaying || (isPlaying && activeSpeechId?.startsWith('eng-u'))) {
      handleStopAll();
    } else {
      setContinuousPlaying(true);
      playParagraph(0, speechRate);
    }
  };

  // Play entire dialogue continuously
  const playDialogueLine = (index, rate = speechRate) => {
    const lines = audioData.dialogues;
    if (!lines || index >= lines.length) {
      setContinuousPlaying(false);
      return;
    }
    const line = lines[index];
    const lineId = `dlg-${index}`;

    speechEngine.speak(line.en, {
      id: lineId,
      rate,
      onEnd: () => {
        if (continuousRef.current && index + 1 < lines.length) {
          setTimeout(() => {
            if (continuousRef.current) {
              playDialogueLine(index + 1, rate);
            }
          }, 800);
        } else {
          setContinuousPlaying(false);
        }
      },
      onError: () => {
        setContinuousPlaying(false);
      }
    });
  };

  const handleToggleContinuousDialogue = () => {
    if (continuousPlaying && activeSpeechId?.startsWith('dlg-')) {
      handleStopAll();
    } else {
      setContinuousPlaying(true);
      playDialogueLine(0, speechRate);
    }
  };

  return (
    <div className="english-audio-studio animate-fade-in">
      {/* Studio Header */}
      <div className="studio-header">
        <div className="flex items-center gap-3">
          <span className="studio-title-badge">
            <Headphones size={16} />
            英語發音與聽力朗讀工作台 (Audio Studio)
          </span>
          <span className="badge badge-success text-xs font-bold">
            ✨ 原生美語標準音質
          </span>
        </div>

        {/* Global Playback & Rate Controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="speed-selector-group">
            <span className="text-xs px-2 text-secondary font-bold">語速:</span>
            <button 
              className={`speed-btn ${speechRate === 0.75 ? 'active' : ''}`}
              onClick={() => handleSetRate(0.75)}
              title="0.75x 慢速跟讀模式"
            >
              🐢 0.75x
            </button>
            <button 
              className={`speed-btn ${speechRate === 1.0 ? 'active' : ''}`}
              onClick={() => handleSetRate(1.0)}
              title="1.0x 標準美式發音"
            >
              🎯 1.0x
            </button>
            <button 
              className={`speed-btn ${speechRate === 1.25 ? 'active' : ''}`}
              onClick={() => handleSetRate(1.25)}
              title="1.25x 挑戰進階聽力"
            >
              🚀 1.25x
            </button>
          </div>

          {isPlaying && (
            <button className="btn-audio-stop" onClick={handleStopAll}>
              <Square size={13} style={{ fill: 'currentColor' }} />
              停止播放
            </button>
          )}
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="studio-tabs-bar">
        <button 
          className={`studio-tab-btn ${activeTab === 'passage' ? 'active' : ''}`}
          onClick={() => setActiveTab('passage')}
        >
          <BookOpen size={15} />
          <span>🎙️ 課文語音導讀 ({audioData.readAloudPassage?.paragraphs?.length || 0}段)</span>
        </button>

        <button 
          className={`studio-tab-btn ${activeTab === 'vocab' ? 'active' : ''}`}
          onClick={() => setActiveTab('vocab')}
        >
          <Sparkles size={15} />
          <span>🗣️ 核心字彙發音 ({audioData.vocabularies?.length || 0}字)</span>
        </button>

        <button 
          className={`studio-tab-btn ${activeTab === 'dialogue' ? 'active' : ''}`}
          onClick={() => setActiveTab('dialogue')}
        >
          <MessageSquare size={15} />
          <span>💬 生活情境對話 ({audioData.dialogues?.length || 0}句)</span>
        </button>

        <button 
          className={`studio-tab-btn ${activeTab === 'patterns' ? 'active' : ''}`}
          onClick={() => setActiveTab('patterns')}
        >
          <Zap size={15} />
          <span>🎯 實用句型朗讀 ({audioData.sentencePatterns?.length || 0}組)</span>
        </button>
      </div>

      {/* Tab 1: Read-Aloud Passage */}
      {activeTab === 'passage' && (
        <div>
          <div className="player-controls-row mb-3">
            <div className="flex items-center gap-3">
              <button 
                className={`btn-audio-play ${continuousPlaying ? 'active' : ''}`}
                onClick={handleToggleContinuousPassage}
              >
                {continuousPlaying ? (
                  <>
                    <Pause size={16} /> 暫停全文朗讀
                  </>
                ) : (
                  <>
                    <Play size={16} style={{ fill: 'currentColor' }} /> 播放全文導讀音檔
                  </>
                )}
              </button>

              <button 
                className="btn-outline text-xs" 
                style={{ padding: '8px 14px', borderRadius: 'var(--radius-full)' }}
                onClick={() => {
                  setContinuousPlaying(true);
                  playParagraph(0, speechRate);
                }}
              >
                <RotateCcw size={13} /> 從頭播放
              </button>
            </div>

            {isPlaying && (
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-primary">朗讀中...</span>
                <div className="sound-wave">
                  <div className="sound-wave-bar" />
                  <div className="sound-wave-bar" />
                  <div className="sound-wave-bar" />
                  <div className="sound-wave-bar" />
                  <div className="sound-wave-bar" />
                </div>
              </div>
            )}
          </div>

          <div className="reading-passage-box">
            {audioData.readAloudPassage?.paragraphs?.map((p, idx) => {
              const isCurrent = activeSpeechId === p.id;
              return (
                <div 
                  key={p.id}
                  className={`passage-paragraph-item ${isCurrent ? 'active-speaking' : ''}`}
                  onClick={() => handlePlayItem(p.text, p.id)}
                  title="點擊單獨播放此段落發音"
                >
                  <div style={{ flex: 1 }}>
                    <div className="passage-en-text">{p.text}</div>
                    <div className="passage-zh-text">{p.zh}</div>
                  </div>
                  <button 
                    className={`btn-speak-icon ${isCurrent ? 'slow' : ''}`} 
                    style={{ flexShrink: 0, marginTop: '2px' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayItem(p.text, p.id);
                    }}
                  >
                    {isCurrent ? <Volume1 size={13} /> : <Volume2 size={13} />}
                    <span>{isCurrent ? '發音中' : '點擊聆聽'}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Vocabularies Pronunciation */}
      {activeTab === 'vocab' && (
        <div className="vocab-cards-grid">
          {audioData.vocabularies?.map((v) => {
            const isWordSpeaking = activeSpeechId === `w-${v.id}`;
            const isSlowSpeaking = activeSpeechId === `ws-${v.id}`;
            const isExSpeaking = activeSpeechId === `we-${v.id}`;

            return (
              <div 
                key={v.id} 
                className={`vocab-card ${(isWordSpeaking || isSlowSpeaking || isExSpeaking) ? 'active-speaking' : ''}`}
              >
                <div>
                  <div className="vocab-header-row">
                    <span className="vocab-word-text">{v.word}</span>
                    <span className="vocab-ipa-tag">{v.ipa}</span>
                  </div>
                  <div className="vocab-meaning-text">{v.meaning}</div>

                  <div className="vocab-example-box">
                    <div className="vocab-example-en">💬 {v.example}</div>
                    <div className="vocab-example-zh">{v.exampleZh}</div>
                  </div>
                </div>

                <div className="vocab-card-actions mt-2">
                  <button 
                    className="btn-speak-icon"
                    onClick={() => handlePlayItem(v.word, `w-${v.id}`, 1.0)}
                    title="標準發音"
                  >
                    <Volume2 size={13} />
                    <span>{isWordSpeaking ? '發音中...' : '🔊 發音'}</span>
                  </button>

                  <button 
                    className="btn-speak-icon slow"
                    onClick={() => handlePlayItem(v.word, `ws-${v.id}`, 0.7)}
                    title="慢速清晰發音 (0.7x)"
                  >
                    <span>🐢 慢速</span>
                  </button>

                  <button 
                    className="btn-outline text-xs"
                    style={{ padding: '5px 10px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem' }}
                    onClick={() => handlePlayItem(v.example, `we-${v.id}`, speechRate)}
                    title="聆聽整句例句"
                  >
                    <span>{isExSpeaking ? '朗讀例句中' : '💬 聽例句'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 3: Situational Dialogues */}
      {activeTab === 'dialogue' && (
        <div>
          <div className="player-controls-row mb-4">
            <button 
              className={`btn-audio-play ${continuousPlaying ? 'active' : ''}`}
              onClick={handleToggleContinuousDialogue}
            >
              {continuousPlaying ? (
                <>
                  <Pause size={16} /> 暫停對話播放
                </>
              ) : (
                <>
                  <Play size={16} style={{ fill: 'currentColor' }} /> ▶️ 播放整段情境對話
                </>
              )}
            </button>
            <p className="text-xs text-secondary">
              💡 點選任一角色對話氣泡或旁邊的發音按鈕，即可單句跟讀練習！
            </p>
          </div>

          <div className="dialogue-chat-container">
            {audioData.dialogues?.map((item, idx) => {
              const lineId = `dlg-${idx}`;
              const isSpeaking = activeSpeechId === lineId;

              return (
                <div key={idx} className="dialogue-item-bubble">
                  <div className="dialogue-avatar">{item.avatar}</div>
                  <div 
                    className={`dialogue-content-box ${isSpeaking ? 'active-speaking' : ''}`}
                    onClick={() => handlePlayItem(item.en, lineId)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="dialogue-speaker-name">{item.speaker}</span>
                      <button 
                        className="btn-speak-icon"
                        style={{ padding: '3px 8px', fontSize: '0.72rem' }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayItem(item.en, lineId);
                        }}
                      >
                        <Volume2 size={12} />
                        <span>{isSpeaking ? '播放中' : '聆聽'}</span>
                      </button>
                    </div>
                    <div className="dialogue-en-text">{item.en}</div>
                    <div className="dialogue-zh-text">{item.zh}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 4: Sentence Patterns */}
      {activeTab === 'patterns' && (
        <div className="pattern-cards-list">
          {audioData.sentencePatterns?.map((sp) => {
            const isPatternSpeaking = activeSpeechId === `sp-${sp.id}`;

            return (
              <div key={sp.id} className="pattern-card-item">
                <div style={{ flex: 1 }}>
                  <div className="pattern-formula-tag">{sp.pattern}</div>
                  <div className="pattern-example-line">
                    <strong>例句: </strong>{sp.example}
                  </div>
                  <div className="text-xs text-secondary mt-1">
                    💡 用法說明: {sp.meaning}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    className="btn-speak-icon"
                    onClick={() => handlePlayItem(sp.example, `sp-${sp.id}`, speechRate)}
                  >
                    <Volume2 size={13} />
                    <span>{isPatternSpeaking ? '朗讀中...' : '🔊 聆聽例句'}</span>
                  </button>

                  <button 
                    className="btn-speak-icon slow"
                    onClick={() => handlePlayItem(sp.example, `sps-${sp.id}`, 0.75)}
                  >
                    <span>🐢 慢速跟讀</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EnglishAudioStudio;
