import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Play, 
  Sparkles, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Flame, 
  Compass,
  GraduationCap
} from 'lucide-react';
import { coursesData } from '../../data/courses';
import SubjectIconBadge from '../common/SubjectIconBadge';
import { useGamification } from '../../context/GamificationContext';
import { triggerHaptic, playSound } from '../../utils/soundEffects';

export const ResumeLearningBanner = () => {
  const navigate = useNavigate();
  const { unitStars } = useGamification();
  const [lastUnitId, setLastUnitId] = useState(null);
  const [masteredCount, setMasteredCount] = useState(0);

  useEffect(() => {
    try {
      const savedUnit = localStorage.getItem('sixth_last_unit');
      if (savedUnit) {
        setLastUnitId(savedUnit);
        const concepts = localStorage.getItem(`sixth_mastered_concepts_${savedUnit}`);
        if (concepts) {
          setMasteredCount(JSON.parse(concepts).length);
        }
      }
    } catch (e) {
      setLastUnitId(null);
    }
  }, []);

  // Find unit & subject
  const lastUnitInfo = useMemo(() => {
    if (!lastUnitId) return null;
    for (const subject of coursesData.subjects) {
      const units = coursesData.units[subject.id] || [];
      const found = units.find(u => u.id === lastUnitId);
      if (found) {
        return { unit: found, subject };
      }
    }
    return null;
  }, [lastUnitId]);

  // Default recommendation if no previous history
  const defaultRecommendation = useMemo(() => {
    const mathSub = coursesData.subjects.find(s => s.id === 'math');
    const firstUnit = coursesData.units.math?.[0];
    return { unit: firstUnit, subject: mathSub };
  }, []);

  const info = lastUnitInfo || defaultRecommendation;
  if (!info || !info.unit) return null;

  const { unit, subject } = info;
  const isResume = !!lastUnitInfo;
  const stars = unitStars[unit.id] || 0;
  const totalConcepts = unit.keyConcepts?.length || 4;

  const handleResume = () => {
    triggerHaptic('medium');
    playSound('ios_tap');
    navigate(`/lesson/${unit.id}`);
  };

  return (
    <div
      className="card ios-glass-card animate-fade-in"
      style={{
        padding: '20px 24px',
        borderRadius: '24px',
        backgroundColor: 'var(--bg-secondary)',
        border: '1.5px solid var(--border-light)',
        borderLeft: `6px solid ${subject.color}`,
        background: `linear-gradient(135deg, var(--bg-secondary) 0%, ${subject.color}0d 100%)`,
        boxShadow: 'var(--shadow-md)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left Section: Subject Badge + Unit Details */}
        <div className="flex items-start sm:items-center gap-3.5 flex-1 min-w-0">
          <div className="flex-shrink-0">
            <SubjectIconBadge id={subject.id} size="md" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span 
                className="badge font-black text-[11px]" 
                style={{
                  backgroundColor: `${subject.color}18`,
                  color: subject.color,
                  border: `1px solid ${subject.color}35`,
                  padding: '2px 8px',
                  borderRadius: '999px'
                }}
              >
                {isResume ? '🎯 接續上次學習進度' : '🌱 推薦學習起點'}
              </span>

              <span className="badge badge-secondary text-[11px] font-bold">
                {subject.shortName}・{unit.semester === '6A' ? '6上' : '6下'}
              </span>

              {isResume && stars > 0 && (
                <span className="text-amber-500 font-extrabold text-xs">
                  {'⭐'.repeat(stars)}
                </span>
              )}

              <span className="text-[11px] text-tertiary flex items-center gap-1 font-semibold">
                <Clock size={11} />
                約 {unit.estimatedMinutes || 15} 分鐘
              </span>
            </div>

            <h3 
              className="font-black text-base text-primary truncate m-0"
              style={{ letterSpacing: '-0.01em' }}
            >
              {unit.title}
            </h3>

            <p className="text-xs text-secondary truncate mt-1 mb-0 max-w-xl">
              {unit.description}
            </p>

            {/* Key concepts chips preview */}
            <div className="flex items-center gap-1.5 mt-2 flex-wrap">
              <span className="text-[10px] text-tertiary font-bold">核心考點：</span>
              {(unit.keyConcepts || []).slice(0, 3).map((c, idx) => (
                <span 
                  key={idx}
                  className="text-[10px] font-bold px-2 py-0.5 rounded"
                  style={{
                    backgroundColor: 'var(--bg-tertiary)',
                    color: 'var(--text-secondary)',
                    border: '1px solid var(--border-light)'
                  }}
                >
                  #{c}
                </span>
              ))}
              {isResume && masteredCount > 0 && (
                <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                  <CheckCircle2 size={10} />
                  已熟練 {masteredCount}/{totalConcepts} 項
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right Section: Quick Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0 w-full md:w-auto justify-end flex-wrap pt-2 md:pt-0 border-t md:border-t-0 border-light">
          {/* Notes Button */}
          <Link
            to={`/exam-notes/${subject.id}`}
            onClick={() => { triggerHaptic('light'); playSound('ios_tap'); }}
            className="ios-pressable btn-outline flex items-center gap-1 text-xs font-bold py-2 px-3"
            style={{ borderRadius: 'var(--radius-md)', textDecoration: 'none' }}
            title="查閱本單元講義重點"
          >
            <FileText size={13} />
            <span className="hidden sm:inline">複習講義</span>
          </Link>

          {/* Quiz Button */}
          <Link
            to={`/quiz/${unit.id}`}
            onClick={() => { triggerHaptic('light'); playSound('ios_tap'); }}
            className="ios-pressable btn-outline flex items-center gap-1 text-xs font-bold py-2 px-3"
            style={{ borderRadius: 'var(--radius-md)', textDecoration: 'none' }}
            title="直接進入隨堂觀念測驗"
          >
            <CheckCircle2 size={13} style={{ color: 'var(--accent-success)' }} />
            <span className="hidden sm:inline">測驗驗收</span>
          </Link>

          {/* Primary Resume Button */}
          <button
            onClick={handleResume}
            className="ios-pressable btn-primary flex items-center gap-1.5 text-xs font-black py-2.5 px-4"
            style={{
              backgroundColor: subject.color,
              borderColor: subject.color,
              color: '#ffffff',
              borderRadius: 'var(--radius-md)',
              boxShadow: `0 3px 12px ${subject.color}40`,
              cursor: 'pointer'
            }}
          >
            <Play size={13} style={{ fill: 'currentColor' }} />
            <span>{isResume ? '立即續讀 ➔' : '開始學習 ➔'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeLearningBanner;
