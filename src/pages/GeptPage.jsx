import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, BookOpen, Volume2, Volume1, 
  Square, Play, Pause, RotateCcw, Headphones, 
  MessageSquare, Sparkles, Zap, Award
} from 'lucide-react';
import { geptData } from '../data/geptData';
import { geptAudioData } from '../data/geptAudioData';
import { speechEngine } from '../utils/speechHelper';
import '../components/english/EnglishAudioStudio.css';

const GeptPage = () => {
  const [activeLevel, setActiveLevel] = useState('elementary');
  const [activeTab, setActiveTab] = useState('passage'); // 'passage' | 'vocab' | 'dialogue' | 'patterns'
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSpeechId, setActiveSpeechId] = useState(null);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [continuousPlaying, setContinuousPlaying] = useState(false);
  const continuousRef = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeLevel]);

  useEffect(() => {
    continuousRef.current = continuousPlaying;
  }, [continuousPlaying]);

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

  const handleSetRate = (rate) => {
    setSpeechRate(rate);
    speechEngine.setRate(rate);
  };

  const handleStopAll = () => {
    setContinuousPlaying(false);
    speechEngine.stop();
  };

  const handlePlayItem = (text, id, rate = speechRate) => {
    setContinuousPlaying(false);
    if (activeSpeechId === id && isPlaying) {
      speechEngine.stop();
    } else {
      speechEngine.speak(text, { id, rate });
    }
  };

  const playParagraph = (index, rate = speechRate) => {
    const paragraphs = currentAudioData.readAloudPassages;
    if (!paragraphs || index >= paragraphs.length) {
      setContinuousPlaying(false);
      return;
    }
    const currentP = paragraphs[index];
    speechEngine.speak(currentP.text, {
      id: currentP.id,
      rate,
      onEnd: () => {
        if (continuousRef.current && index + 1 < paragraphs.length) {
          setTimeout(() => {
            if (continuousRef.current) playParagraph(index + 1, rate);
          }, 600);
        } else {
          setContinuousPlaying(false);
        }
      },
      onError: () => setContinuousPlaying(false)
    });
  };

  const handleToggleContinuousPassage = () => {
    if (continuousPlaying || (isPlaying && activeSpeechId?.startsWith('gept-'))) {
      handleStopAll();
    } else {
      setContinuousPlaying(true);
      playParagraph(0, speechRate);
    }
  };

  const playDialogueLine = (index, rate = speechRate) => {
    const lines = currentAudioData.dialogues;
    if (!lines || index >= lines.length) {
      setContinuousPlaying(false);
      return;
    }
    const line = lines[index];
    const lineId = `dlg-${activeLevel}-${index}`;
    speechEngine.speak(line.en, {
      id: lineId,
      rate,
      onEnd: () => {
        if (continuousRef.current && index + 1 < lines.length) {
          setTimeout(() => {
            if (continuousRef.current) playDialogueLine(index + 1, rate);
          }, 800);
        } else {
          setContinuousPlaying(false);
        }
      },
      onError: () => setContinuousPlaying(false)
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

  const levelData = geptData.levels.find(l => l.id === activeLevel);
  const currentAudioData = geptAudioData[activeLevel];

  return (
    <div className="page-container animate-fade-in pb-16">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link to="/" className="btn-icon" title="返回首頁">
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-3xl font-black text-primary">全民英檢 (GEPT) 課綱專區</h1>
          <p className="text-secondary mt-1 text-sm font-medium">完整五級課綱與英語朗讀練習</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 p-1 bg-secondary/10 rounded-2xl w-fit">
        {geptData.levels.map(lvl => (
          <button
            key={lvl.id}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              activeLevel === lvl.id
                ? 'bg-white shadow-sm text-primary'
                : 'text-secondary hover:text-primary hover:bg-white/50'
            }`}
            onClick={() => setActiveLevel(lvl.id)}
            style={{ color: activeLevel === lvl.id ? lvl.color : undefined }}
          >
            {lvl.emoji} {lvl.name} 
            {lvl.recommended && <span className="ml-1 text-xs px-1.5 py-0.5 rounded-full bg-orange-100 text-orange-600">推薦</span>}
          </button>
        ))}
      </div>

      {/* Level Content */}
      <div className="space-y-6">
        {/* Overview Card */}
        <div className="card shadow-sm border-l-4" style={{ borderLeftColor: levelData.color }}>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2" style={{ color: levelData.color }}>
                  {levelData.emoji} {levelData.name} ({levelData.nameEn})
                </h2>
                <div className="flex items-center gap-3 mt-2">
                  <span className="badge font-bold" style={{ backgroundColor: `${levelData.color}20`, color: levelData.color }}>CEFR {levelData.cefr}</span>
                  <span className="badge badge-accent font-bold">{levelData.badge}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-secondary font-bold">目標詞彙量</div>
                <div className="text-xl font-black text-primary">{levelData.vocabularyRange}</div>
              </div>
            </div>
            
            <p className="text-secondary font-medium mt-4 pt-4 border-t border-gray-100">
              <strong className="text-primary">適用對象：</strong>{levelData.targetAudience}
            </p>
          </div>
        </div>

        {/* Audio Studio Section */}
        <div className="english-audio-studio">
          <div className="studio-header">
            <div className="flex items-center gap-3">
              <span className="studio-title-badge">
                <Headphones size={16} />
                英語發音與聽力朗讀工作台
              </span>
              <span className="badge badge-success text-xs font-bold">✨ 原生美語音質</span>
            </div>
            
            <div className="flex items-center gap-3 flex-wrap">
              <div className="speed-selector-group">
                <span className="text-xs px-2 text-secondary font-bold">語速:</span>
                <button className={`speed-btn ${speechRate === 0.75 ? 'active' : ''}`} onClick={() => handleSetRate(0.75)}>🐢 0.75x</button>
                <button className={`speed-btn ${speechRate === 1.0 ? 'active' : ''}`} onClick={() => handleSetRate(1.0)}>🎯 1.0x</button>
                <button className={`speed-btn ${speechRate === 1.25 ? 'active' : ''}`} onClick={() => handleSetRate(1.25)}>🚀 1.25x</button>
              </div>
              {isPlaying && (
                <button className="btn-audio-stop" onClick={handleStopAll}>
                  <Square size={13} style={{ fill: 'currentColor' }} /> 停止播放
                </button>
              )}
            </div>
          </div>

          <div className="studio-tabs-bar">
            <button className={`studio-tab-btn ${activeTab === 'passage' ? 'active' : ''}`} onClick={() => setActiveTab('passage')}>
              <BookOpen size={15} /> <span>🎙️ 朗讀短文 ({currentAudioData?.readAloudPassages?.length || 0})</span>
            </button>
            <button className={`studio-tab-btn ${activeTab === 'vocab' ? 'active' : ''}`} onClick={() => setActiveTab('vocab')}>
              <Sparkles size={15} /> <span>🗣️ 核心字彙 ({currentAudioData?.vocabularies?.length || 0})</span>
            </button>
            <button className={`studio-tab-btn ${activeTab === 'dialogue' ? 'active' : ''}`} onClick={() => setActiveTab('dialogue')}>
              <MessageSquare size={15} /> <span>💬 情境對話 ({currentAudioData?.dialogues?.length || 0})</span>
            </button>
            <button className={`studio-tab-btn ${activeTab === 'patterns' ? 'active' : ''}`} onClick={() => setActiveTab('patterns')}>
              <Zap size={15} /> <span>🎯 實用句型 ({currentAudioData?.sentencePatterns?.length || 0})</span>
            </button>
          </div>

          {/* Audio Studio Tabs Content */}
          <div className="mt-4">
            {activeTab === 'passage' && (
              <div>
                <div className="player-controls-row mb-3">
                  <div className="flex items-center gap-3">
                    <button className={`btn-audio-play ${continuousPlaying ? 'active' : ''}`} onClick={handleToggleContinuousPassage}>
                      {continuousPlaying ? <><Pause size={16} /> 暫停朗讀</> : <><Play size={16} style={{ fill: 'currentColor' }} /> 播放全文</>}
                    </button>
                    <button className="btn-outline text-xs px-3 py-1.5 rounded-full" onClick={() => { setContinuousPlaying(true); playParagraph(0, speechRate); }}>
                      <RotateCcw size={13} /> 從頭播放
                    </button>
                  </div>
                  {isPlaying && activeSpeechId?.startsWith('gept-') && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-primary">朗讀中...</span>
                      <div className="sound-wave"><div className="sound-wave-bar"/><div className="sound-wave-bar"/><div className="sound-wave-bar"/></div>
                    </div>
                  )}
                </div>
                <div className="reading-passage-box">
                  {currentAudioData?.readAloudPassages?.map((p) => {
                    const isCurrent = activeSpeechId === p.id;
                    return (
                      <div key={p.id} className={`passage-paragraph-item ${isCurrent ? 'active-speaking' : ''}`} onClick={() => handlePlayItem(p.text, p.id)}>
                        <div style={{ flex: 1 }}>
                          <div className="passage-en-text">{p.text}</div>
                          <div className="passage-zh-text">{p.zh}</div>
                        </div>
                        <button className={`btn-speak-icon ${isCurrent ? 'slow' : ''}`} style={{ flexShrink: 0 }}>
                          {isCurrent ? <Volume1 size={13} /> : <Volume2 size={13} />}
                          <span>{isCurrent ? '發音中' : '聆聽'}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'vocab' && (
              <div className="vocab-cards-grid">
                {currentAudioData?.vocabularies?.map((v) => {
                  const isW = activeSpeechId === `w-${v.id}`;
                  const isEx = activeSpeechId === `ex-${v.id}`;
                  return (
                    <div key={v.id} className={`vocab-card ${(isW || isEx) ? 'active-speaking' : ''}`}>
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
                        <button className="btn-speak-icon" onClick={() => handlePlayItem(v.word, `w-${v.id}`, 1.0)}><Volume2 size={13} /> <span>發音</span></button>
                        <button className="btn-speak-icon slow" onClick={() => handlePlayItem(v.word, `w-${v.id}`, 0.75)}><span>🐢 慢速</span></button>
                        <button className="btn-outline text-xs px-2.5 py-1 rounded-full" onClick={() => handlePlayItem(v.example, `ex-${v.id}`, speechRate)}>💬 聽例句</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {activeTab === 'dialogue' && (
              <div>
                <div className="player-controls-row mb-4">
                  <button className={`btn-audio-play ${continuousPlaying ? 'active' : ''}`} onClick={handleToggleContinuousDialogue}>
                    {continuousPlaying ? <><Pause size={16} /> 暫停對話</> : <><Play size={16} style={{ fill: 'currentColor' }} /> ▶️ 播放整段對話</>}
                  </button>
                </div>
                <div className="dialogue-chat-container">
                  {currentAudioData?.dialogues?.map((item, idx) => {
                    const lineId = `dlg-${activeLevel}-${idx}`;
                    const isSpeaking = activeSpeechId === lineId;
                    return (
                      <div key={idx} className="dialogue-item-bubble">
                        <div className="dialogue-avatar">{item.avatar}</div>
                        <div className={`dialogue-content-box ${isSpeaking ? 'active-speaking' : ''}`} onClick={() => handlePlayItem(item.en, lineId)}>
                          <div className="flex justify-between items-center mb-1">
                            <span className="dialogue-speaker-name">{item.speaker}</span>
                            <button className="btn-speak-icon py-0.5 px-2 text-[0.7rem]"><Volume2 size={12} /> <span>聆聽</span></button>
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

            {activeTab === 'patterns' && (
              <div className="pattern-cards-list">
                {currentAudioData?.sentencePatterns?.map((sp) => {
                  const isSpeaking = activeSpeechId === `sp-${sp.id}`;
                  return (
                    <div key={sp.id} className="pattern-card-item">
                      <div style={{ flex: 1 }}>
                        <div className="pattern-formula-tag">{sp.pattern}</div>
                        <div className="pattern-example-line"><strong>例句: </strong>{sp.example}</div>
                        <div className="text-xs text-secondary mt-1">💡 用法說明: {sp.meaning}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="btn-speak-icon" onClick={() => handlePlayItem(sp.example, `sp-${sp.id}`, speechRate)}>
                          <Volume2 size={13} /> <span>聆聽例句</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Structure & Grammar Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Exam Structure */}
          <div className="card p-6">
            <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <Award size={20} className="text-blue-500" /> 測驗架構
            </h3>
            <div className="space-y-4">
              {['listening', 'reading', 'writing', 'speaking'].map(skill => {
                const data = levelData.examStructure[skill];
                if (!data) return null;
                const iconMap = { listening: '🎧', reading: '📖', writing: '✍️', speaking: '🗣️' };
                return (
                  <div key={skill} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-bold text-slate-800">{iconMap[skill]} {data.name}</div>
                      <div className="text-xs font-bold text-slate-500 bg-slate-200 px-2 py-0.5 rounded">{data.stage} | {data.duration}</div>
                    </div>
                    {data.types && (
                      <ul className="text-sm text-slate-600 space-y-1 mt-2">
                        {data.types.map((t, i) => (
                          <li key={i}><span className="font-bold text-slate-700">{t.type}:</span> {t.desc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Grammar Focus & Topics */}
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-emerald-500" /> 文法重點
              </h3>
              <div className="space-y-4">
                {levelData.grammarFocus.map((g, idx) => (
                  <div key={idx}>
                    <div className="text-sm font-bold text-slate-700 mb-2">{g.category}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((item, i) => (
                        <span key={i} className="text-[13px] bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-1 rounded-md">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-bold text-primary mb-4">🎯 常見主題範圍</h3>
              <div className="flex flex-wrap gap-2">
                {levelData.topicAreas.map((topic, i) => (
                  <span key={i} className="badge bg-slate-100 text-slate-600 border-none px-3 py-1.5">
                    # {topic}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="card p-6 bg-blue-50/50 border-blue-100">
              <h3 className="text-lg font-bold text-blue-800 mb-3">💡 備考建議</h3>
              <ul className="space-y-2">
                {levelData.prepTips.map((tip, i) => (
                  <li key={i} className="text-sm text-slate-700">
                    <span className="font-bold text-blue-600 mr-2">✓ {tip.tip}:</span>
                    {tip.detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GeptPage;
