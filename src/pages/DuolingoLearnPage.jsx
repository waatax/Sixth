import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Sparkles,
  BookOpen,
  Layers,
  Trophy,
  Flame,
  Heart,
  Search,
  X,
  Play,
  FileText,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Compass
} from 'lucide-react';
import {
  TEXTBOOK_VERSIONS_108,
  REFERENCE_BOOK_SERIES_108,
  CURRICULUM_SUBJECT_GROUPS,
  getAll108Subjects,
  getUnitsBySubject108
} from '../data/curriculumCatalog108';
import { useGamification } from '../context/GamificationContext';
import DuolingoSkillTree from '../components/duolingo/DuolingoSkillTree';
import DuolingoLessonModal from '../components/duolingo/DuolingoLessonModal';
import TextbookReferenceCompendiumModal from '../components/duolingo/TextbookReferenceCompendiumModal';
import DuolingoLeagueSidebar from '../components/duolingo/DuolingoLeagueSidebar';
import { playSound, triggerHaptic } from '../utils/soundEffects';

const DuolingoLearnPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject') || 'math';

  const {
    unitCrowns = {},
    unitStars = {},
    selectedTextbookVersion = 'all',
    setPreferredTextbookVersion
  } = useGamification();

  const allSubjects = useMemo(() => getAll108Subjects(), []);
  const [activeCategoryGroup, setActiveCategoryGroup] = useState('all'); // 'all' | 'basic' | 'specialized'
  const [activeSubjectId, setActiveSubjectId] = useState(initialSubject);
  const [selectedSemester, setSelectedSemester] = useState('all'); // 'all' | '6A' | '6B'
  const [viewTab, setViewTab] = useState('skill_tree'); // 'skill_tree' | 'master_catalog'
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [activeLessonUnit, setActiveLessonUnit] = useState(null);
  const [compendiumUnit, setCompendiumUnit] = useState(null);

  const currentSubject = allSubjects.find(s => s.id === activeSubjectId) || allSubjects[0];
  const rawSubjectUnits = useMemo(() => getUnitsBySubject108(currentSubject.id), [currentSubject.id]);

  // Filter subjects by Basic vs Specialized group
  const visibleSubjects = useMemo(() => {
    if (activeCategoryGroup === 'all') return allSubjects;
    return allSubjects.filter(s => s.category === activeCategoryGroup);
  }, [allSubjects, activeCategoryGroup]);

  // Filter units by semester & search query
  const filteredUnits = useMemo(() => {
    return rawSubjectUnits.filter(u => {
      const matchSem = selectedSemester === 'all' || u.semester === selectedSemester;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        u.title.toLowerCase().includes(q) ||
        u.description.toLowerCase().includes(q) ||
        (u.keyConcepts && u.keyConcepts.some(k => k.toLowerCase().includes(q))) ||
        u.catalog?.textbooks?.kangHsuan?.chapterTitle?.toLowerCase().includes(q) ||
        u.catalog?.textbooks?.nanI?.chapterTitle?.toLowerCase().includes(q) ||
        u.catalog?.textbooks?.hanLin?.chapterTitle?.toLowerCase().includes(q);
      return matchSem && matchSearch;
    });
  }, [rawSubjectUnits, selectedSemester, searchQuery]);

  // Calculate total subject crowns
  const subjectCrowns = rawSubjectUnits.reduce(
    (acc, u) => acc + (unitCrowns[u.id] ?? (unitStars[u.id] ? Math.min(3, unitStars[u.id]) : 0)),
    0
  );
  const maxSubjectCrowns = rawSubjectUnits.length * 5;

  const handleSelectSubject = (subId) => {
    setActiveSubjectId(subId);
    setSearchParams({ subject: subId });
    playSound('ios_tap');
    triggerHaptic('selection');
  };

  return (
    <div className="flex flex-col gap-6 py-2 pb-20 animate-fade-in">
      {/* ============================================================ */}
      {/* 🦉 1. Duolingo Gamified Curriculum Hub Hero Banner */}
      {/* ============================================================ */}
      <div
        className="card p-5 sm:p-7 relative overflow-hidden"
        style={{
          borderRadius: '26px',
          background:
            'linear-gradient(135deg, rgba(34, 197, 94, 0.12) 0%, rgba(59, 130, 246, 0.1) 55%, rgba(168, 85, 247, 0.1) 100%)',
          border: '2px solid rgba(34, 197, 94, 0.45)',
          boxShadow: 'var(--shadow-md)'
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span
                className="badge font-black text-xs px-3 py-1 text-white"
                style={{ backgroundColor: '#16a34a' }}
              >
                🦉 Duolingo 遊戲化技能闖關中心
              </span>
              <span className="badge badge-accent font-black text-xs">
                108 課綱六年級上下學期 (6上 / 6下) 全科目
              </span>
              <span className="badge font-bold text-xs bg-amber-500/15 text-amber-600 dark:text-amber-400">
                📚 康軒・南一・翰林・何嘉仁課本 ＆ 自修評量講義全編列
              </span>
            </div>

            <h1 className="h1 m-0" style={{ fontSize: '1.85rem', lineHeight: 1.3 }}>
              108 課綱全科目・全版本課本與參考書 Duolingo 闖關樹
            </h1>
            <p className="text-secondary text-xs sm:text-sm mt-2 mb-0 leading-relaxed">
              涵蓋<strong>部定基本科目（國、數、自、社、英）</strong>與<strong>專業素養科目（藝術、健體、綜合、資訊科技運算思維、本土語與雙語、國中七年級先修）</strong>共 11 大領域 76 關卡！每關皆整合<strong>字塊拼圖、配對消消樂、重點填空、聽力辨識、防雷是非與參考書實戰題</strong>。
            </p>
          </div>

          {/* Switch View Tab: Winding Skill Tree vs Full Textbook & Reference Matrix + Quick Quiz */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open_quick_quiz_menu', {
                  detail: { subject: activeSubjectId, semester: selectedSemester === 'all' ? '6A' : selectedSemester, scope: 'midterm' }
                }));
                playSound('ios_tap');
              }}
              className="px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm text-white flex items-center gap-1.5 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #ef4444 0%, #f59e0b 100%)',
                border: 'none',
                boxShadow: '0 3px 0 #b91c1c'
              }}
            >
              <span>⚡ 快速段考測驗選單</span>
            </button>

            <div className="flex items-center gap-2 bg-white/80 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-light flex-shrink-0">
              <button
                onClick={() => {
                  setViewTab('skill_tree');
                  playSound('ios_tap');
                }}
                className="px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer transition-all"
                style={{
                  backgroundColor: viewTab === 'skill_tree' ? '#16a34a' : 'transparent',
                  color: viewTab === 'skill_tree' ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  boxShadow: viewTab === 'skill_tree' ? '0 3px 0 #15803d' : 'none'
                }}
              >
                <span>🦉 蛇形闖關技能樹</span>
              </button>
              <button
                onClick={() => {
                  setViewTab('master_catalog');
                  playSound('ios_tap');
                }}
                className="px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer transition-all"
                style={{
                  backgroundColor: viewTab === 'master_catalog' ? '#4f46e5' : 'transparent',
                  color: viewTab === 'master_catalog' ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  boxShadow: viewTab === 'master_catalog' ? '0 3px 0 #3730a3' : 'none'
                }}
              >
                <span>📚 全版本課本＆參考書總表</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 🧭 2. Subject Category Group & 11-Subject Selector Bar */}
      {/* ============================================================ */}
      <div
        className="card p-4 flex flex-col gap-3.5"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '22px',
          border: '1.5px solid var(--border-light)'
        }}
      >
        {/* Row 1: Basic vs Specialized Curriculum Filter + Textbook Version Switcher */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 pb-3 border-b border-light">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-black text-secondary mr-1">課綱領域分類：</span>
            {[
              { id: 'all', label: '🌟 全部 11 大領域 (76單元)' },
              { id: 'basic', label: '🏛️ 部定基本核心科目 (國/數/自/社/英)' },
              { id: 'specialized', label: '🎨 專業與素養科目 (藝/體/綜/科技/雙語/先修)' }
            ].map((grp) => (
              <button
                key={grp.id}
                onClick={() => {
                  setActiveCategoryGroup(grp.id);
                  playSound('ios_tap');
                }}
                className={`btn-pill text-xs font-black px-3 py-1.5 ${
                  activeCategoryGroup === grp.id ? 'active' : ''
                }`}
              >
                {grp.label}
              </button>
            ))}
          </div>

          {/* Textbook Version Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-black text-secondary">課本版本對齊：</span>
            {TEXTBOOK_VERSIONS_108.map((ver) => {
              const isVerActive = selectedTextbookVersion === ver.id;
              return (
                <button
                  key={ver.id}
                  onClick={() => {
                    setPreferredTextbookVersion(ver.id);
                    playSound('ios_tap');
                  }}
                  className="px-2.5 py-1 rounded-xl text-xs font-black cursor-pointer transition-all"
                  style={{
                    backgroundColor: isVerActive ? ver.color : 'var(--bg-tertiary)',
                    color: isVerActive ? '#ffffff' : 'var(--text-secondary)',
                    border: isVerActive ? `1.5px solid ${ver.color}` : '1px solid var(--border-light)'
                  }}
                >
                  {ver.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 2: 11 Subject Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {visibleSubjects.map((sub) => {
            const isSubActive = sub.id === currentSubject.id;
            return (
              <button
                key={sub.id}
                onClick={() => handleSelectSubject(sub.id)}
                className="px-3.5 py-2 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 whitespace-nowrap cursor-pointer transition-all"
                style={{
                  backgroundColor: isSubActive ? sub.color : 'var(--bg-tertiary)',
                  color: isSubActive ? '#ffffff' : 'var(--text-primary)',
                  border: isSubActive ? `2px solid ${sub.color}` : '1.5px solid var(--border-light)',
                  boxShadow: isSubActive ? '0 4px 10px rgba(0,0,0,0.18)' : 'none'
                }}
              >
                <span className="text-base">{sub.emoji}</span>
                <span>{sub.shortName}</span>
                <span
                  className="text-[10px] px-1.5 py-0.5 rounded-full font-extrabold"
                  style={{
                    backgroundColor: isSubActive ? 'rgba(255,255,255,0.22)' : 'var(--bg-secondary)',
                    color: isSubActive ? '#ffffff' : 'var(--text-secondary)'
                  }}
                >
                  {sub.category === 'basic' ? '基本' : '專業'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Row 3: Semester (6上 / 6下) & Search Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2 border-t border-light">
          <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
            {[
              { id: 'all', label: `全部學期 (${rawSubjectUnits.length} 單元)` },
              {
                id: '6A',
                label: `📘 六年級上學期 6上 (${rawSubjectUnits.filter(u => u.semester === '6A').length})`
              },
              {
                id: '6B',
                label: `📗 六年級下學期 6下 (${rawSubjectUnits.filter(u => u.semester === '6B').length})`
              }
            ].map((sem) => (
              <button
                key={sem.id}
                onClick={() => {
                  setSelectedSemester(sem.id);
                  playSound('ios_tap');
                }}
                className={`btn-pill text-xs font-black px-3 py-1.5 ${
                  selectedSemester === sem.id ? 'active' : ''
                }`}
              >
                {sem.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <span className="text-xs font-black text-amber-500 whitespace-nowrap">
              👑 本科皇冠：{subjectCrowns} / {maxSubjectCrowns}
            </span>
            <div className="relative flex-1 sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary" />
              <input
                type="text"
                placeholder="搜尋課本章節、單元或考點..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-8 pr-7 py-1.5 text-xs w-full"
                style={{ borderRadius: '999px' }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-tertiary"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 🗺️ 3. Main Content Area: Duolingo Skill Tree vs Master Catalog */}
      {/* ============================================================ */}
      {viewTab === 'skill_tree' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left 8 Columns: Winding Duolingo Skill Path */}
          <div
            className="lg:col-span-8 card p-4 sm:p-6"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '26px',
              border: '1.5px solid var(--border-light)'
            }}
          >
            <DuolingoSkillTree
              units={filteredUnits}
              subject={currentSubject}
              selectedVersion={selectedTextbookVersion}
              onStartLesson={(u) => setActiveLessonUnit(u)}
              onOpenCompendium={(u) => setCompendiumUnit(u)}
            />
          </div>

          {/* Right 4 Columns: League Leaderboard, Hearts, Daily Goal & Reference Series */}
          <div className="lg:col-span-4">
            <DuolingoLeagueSidebar
              onOpenCompendiumOverview={() => setViewTab('master_catalog')}
            />
          </div>
        </div>
      ) : (
        /* ============================================================ */
        /* 📚 Full 108 Curriculum Textbook & Reference Book Master Table */
        /* ============================================================ */
        <div className="flex flex-col gap-5">
          {/* Reference Book 4 Pillars Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {REFERENCE_BOOK_SERIES_108.map((series) => (
              <div
                key={series.id}
                className="card p-4 flex flex-col gap-2"
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '20px',
                  borderTop: `4px solid ${series.color}`
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-xs" style={{ color: series.color }}>
                    {series.tag}
                  </span>
                </div>
                <div className="font-black text-sm text-primary">{series.title}</div>
                <div className="flex flex-col gap-1.5 mt-1">
                  {series.books.map((b, idx) => (
                    <div key={idx} className="text-xs text-secondary">
                      • <strong>{b.name}</strong>：{b.features}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Unit-by-Unit Complete Textbook & Reference Book Matrix */}
          <div className="flex flex-col gap-4">
            {filteredUnits.map((unit, idx) => {
              const cat = unit.catalog;
              const crowns = unitCrowns[unit.id] ?? (unitStars[unit.id] ? Math.min(3, unitStars[unit.id]) : 0);
              return (
                <div
                  key={unit.id}
                  className="card p-5 flex flex-col gap-3.5"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: '22px',
                    border: '1.5px solid var(--border-light)'
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span
                          className="badge font-black text-xs"
                          style={{
                            backgroundColor: unit.semester === '6A' ? 'rgba(37, 99, 235, 0.14)' : 'rgba(5, 150, 105, 0.14)',
                            color: unit.semester === '6A' ? '#2563eb' : '#059669'
                          }}
                        >
                          {unit.semester === '6A' ? '📘 六年級上學期 (6上)' : '📗 六年級下學期 (6下)'}・{cat.termLabel}
                        </span>
                        <span className="badge text-xs font-bold bg-indigo-500/15 text-indigo-600">
                          課綱指標：{cat.competencyCode}
                        </span>
                        <span className="badge badge-warning text-xs font-black">
                          👑 皇冠 {crowns}/5
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-black text-primary m-0">
                        第 {idx + 1} 關｜{unit.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCompendiumUnit(unit)}
                        className="btn-outline text-xs font-black py-2 px-3 rounded-xl cursor-pointer"
                      >
                        📖 詳閱參考書解析
                      </button>
                      <button
                        onClick={() => setActiveLessonUnit(unit)}
                        className="py-2 px-4 rounded-xl font-black text-xs text-white flex items-center gap-1.5 cursor-pointer"
                        style={{
                          background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                          border: 'none',
                          boxShadow: '0 3px 0 #15803d'
                        }}
                      >
                        <Play size={13} className="fill-white" />
                        <span>Duolingo 闖關</span>
                      </button>
                    </div>
                  </div>

                  {/* 4 Textbook Versions Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(5, 150, 105, 0.08)', border: '1px solid rgba(5, 150, 105, 0.3)' }}>
                      <div className="font-black text-emerald-700 dark:text-emerald-400">📗 康軒版課本</div>
                      <div className="font-bold text-primary mt-0.5">{cat.textbooks.kangHsuan.chapterTitle}</div>
                      <div className="text-secondary mt-1">{cat.textbooks.kangHsuan.focus}</div>
                    </div>
                    <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
                      <div className="font-black text-blue-700 dark:text-blue-400">📘 南一版課本</div>
                      <div className="font-bold text-primary mt-0.5">{cat.textbooks.nanI.chapterTitle}</div>
                      <div className="text-secondary mt-1">{cat.textbooks.nanI.focus}</div>
                    </div>
                    <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(217, 119, 6, 0.08)', border: '1px solid rgba(217, 119, 6, 0.3)' }}>
                      <div className="font-black text-amber-700 dark:text-amber-400">📙 翰林版課本</div>
                      <div className="font-bold text-primary mt-0.5">{cat.textbooks.hanLin.chapterTitle}</div>
                      <div className="text-secondary mt-1">{cat.textbooks.hanLin.focus}</div>
                    </div>
                    <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(219, 39, 119, 0.08)', border: '1px solid rgba(219, 39, 119, 0.3)' }}>
                      <div className="font-black text-pink-700 dark:text-pink-400">📕 何嘉仁/雙語延伸</div>
                      <div className="font-bold text-primary mt-0.5">{cat.textbooks.hessLongman.chapterTitle}</div>
                      <div className="text-secondary mt-1">{cat.textbooks.hessLongman.focus}</div>
                    </div>
                  </div>

                  {/* Reference Books Row */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs pt-2 border-t border-light">
                    <div className="p-2.5 rounded-xl bg-tertiary">
                      <strong className="text-blue-600 dark:text-blue-400">📘 自修重點：</strong>
                      <span className="text-secondary ml-1">{cat.referenceBooks.selfStudy}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-tertiary">
                      <strong className="text-emerald-600 dark:text-emerald-400">📗 評量必考：</strong>
                      <span className="text-secondary ml-1">{cat.referenceBooks.workbook}</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-tertiary">
                      <strong className="text-red-600 dark:text-red-400">📕 講義防雷：</strong>
                      <span className="text-secondary ml-1">{cat.referenceBooks.examTrap.replace(/\$/g, '')}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 🎮 Interactive Modals */}
      {/* ============================================================ */}
      <DuolingoLessonModal
        isOpen={!!activeLessonUnit}
        onClose={() => setActiveLessonUnit(null)}
        unit={activeLessonUnit}
        subject={currentSubject}
      />

      <TextbookReferenceCompendiumModal
        isOpen={!!compendiumUnit}
        onClose={() => setCompendiumUnit(null)}
        unit={compendiumUnit}
        subject={currentSubject}
        onStartDuolingoLesson={(u) => setActiveLessonUnit(u)}
      />
    </div>
  );
};

export default DuolingoLearnPage;
