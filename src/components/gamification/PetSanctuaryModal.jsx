import { useState } from 'react';
import { X, Heart, Sparkles, Zap, Award, CheckCircle2, ChevronRight, Utensils, Shield, Crown } from 'lucide-react';
import { useGamification, PET_TEMPLATES, SHOP_ITEMS } from '../../context/GamificationContext';
import confetti from 'canvas-confetti';
import { playSound } from '../../utils/soundEffects';

const PetSanctuaryModal = ({ isOpen, onClose }) => {
  const { 
    activePetId, 
    petStats, 
    inventory, 
    selectPet, 
    feedPet,
    coins,
    gems
  } = useGamification();

  const [selectedPetKey, setSelectedPetKey] = useState(activePetId);
  const [feedSuccessMsg, setFeedSuccessMsg] = useState(null);

  if (!isOpen) return null;

  const currentTemplate = PET_TEMPLATES[selectedPetKey] || PET_TEMPLATES.fox;
  const currentStats = petStats[selectedPetKey] || { level: 1, xp: 0, hunger: 80, happiness: 80, equipped: [] };
  const isCurrentlyActive = activePetId === selectedPetKey;

  const currentEvolutionStage = currentTemplate.evolutions.slice().reverse().find(e => currentStats.level >= e.minLevel) || currentTemplate.evolutions[0];
  const nextEvolutionStage = currentTemplate.evolutions.find(e => currentStats.level < e.minLevel);

  const xpNeeded = currentStats.level * 80;
  const xpPercent = Math.min(100, Math.round((currentStats.xp / xpNeeded) * 100));

  const availableFoods = [
    { id: 'pet_food_fish', name: '🐟 活力小魚乾', count: inventory.pet_food_fish || 0, desc: '+30 飽食 / +25 XP' },
    { id: 'pet_food_fruit', name: '🍎 智慧神聖果', count: inventory.pet_food_fruit || 0, desc: '+100 飽食 / +100 XP' },
    { id: 'pet_food_candy', name: '🍬 彩虹星光糖', count: inventory.pet_food_candy || 0, desc: '直接升 1 級！' }
  ];

  const handleFeed = (foodId) => {
    const success = feedPet(foodId);
    if (success) {
      confetti({ particleCount: 35, spread: 50, origin: { y: 0.6 } });
      const foodItem = availableFoods.find(f => f.id === foodId);
      setFeedSuccessMsg(`✨ 餵食成功！${currentTemplate.name} 開心地品嚐了 ${foodItem?.name}！`);
      setTimeout(() => setFeedSuccessMsg(null), 2500);
    } else {
      playSound('wrong');
    }
  };

  const handlePetAffection = () => {
    playSound('pet_happy');
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.5 },
      shapes: ['circle']
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        className="card animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '780px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
          border: '2px solid var(--border-light)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          padding: '28px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-4 mb-4 border-b border-light">
          <div className="flex items-center gap-3">
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.4rem',
                boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)'
              }}
            >
              🐾
            </div>
            <div>
              <h2 className="h3" style={{ margin: 0, fontSize: '1.3rem', color: 'var(--text-primary)' }}>
                守護神獸殿堂 (Pet Sanctuary)
              </h2>
              <span className="text-xs text-secondary">
                選擇並培育你的專屬知識神獸，解鎖專屬天賦加成與神獸形態！
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-outline"
            style={{ padding: '6px', borderRadius: '50%', minHeight: 'auto' }}
            title="關閉殿堂"
          >
            <X size={20} />
          </button>
        </div>

        {/* Pet Tabs Carousel */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-4" style={{ scrollbarWidth: 'none' }}>
          {Object.entries(PET_TEMPLATES).map(([key, pet]) => {
            const isSelected = selectedPetKey === key;
            const isActive = activePetId === key;
            const pStats = petStats[key] || { level: 1 };
            return (
              <button
                key={key}
                onClick={() => { setSelectedPetKey(key); playSound('click'); }}
                className="flex items-center gap-2 p-2.5 rounded-xl transition-all"
                style={{
                  border: isSelected ? '2px solid var(--accent-primary)' : '1px solid var(--border-light)',
                  backgroundColor: isSelected ? 'var(--accent-soft)' : 'var(--bg-tertiary)',
                  minWidth: '135px',
                  cursor: 'pointer',
                  flexShrink: 0
                }}
              >
                <div style={{ fontSize: '1.6rem' }}>{pet.emoji}</div>
                <div className="text-left">
                  <div style={{ fontWeight: 700, fontSize: '0.86rem', color: 'var(--text-primary)' }}>
                    {pet.name.split(' ')[0]}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-secondary">
                    <span>Lv.{pStats.level}</span>
                    {isActive && <span className="text-emerald-500 font-bold">● 出戰中</span>}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pet Detail Card */}
        <div 
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {/* Left: Interactive Pet Avatar Stage */}
          <div
            className="card flex flex-col items-center justify-between p-6 text-center"
            style={{
              background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, var(--bg-tertiary) 75%)',
              border: '1.5px solid var(--border-strong)',
              borderRadius: 'var(--radius-xl)',
              minHeight: '320px',
              position: 'relative'
            }}
          >
            {/* Active Companion Tag */}
            <div className="flex justify-between items-center w-full">
              <span className="badge badge-accent text-xs font-bold">
                {currentEvolutionStage.name}
              </span>
              <span className="badge badge-success text-xs font-bold flex items-center gap-1">
                <Sparkles size={12} />
                {currentTemplate.buffText}
              </span>
            </div>

            {/* Huge Animated Pet Sprite */}
            <div
              onClick={handlePetAffection}
              className="my-4 cursor-pointer select-none transition-transform hover:scale-110 active:scale-95"
              style={{
                fontSize: '5.5rem',
                filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.15))',
                animation: 'float 3s ease-in-out infinite'
              }}
              title="點擊撫摸神獸！"
            >
              {currentEvolutionStage.emoji}
            </div>

            {/* Pet Status Summary */}
            <div className="w-full">
              <h3 style={{ margin: '0 0 6px 0', fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {currentTemplate.name}
              </h3>
              <p className="text-xs text-secondary mb-3">
                {currentTemplate.description}
              </p>

              {/* Set Active Pet Button */}
              {!isCurrentlyActive ? (
                <button
                  onClick={() => { selectPet(selectedPetKey); playSound('levelup'); }}
                  className="btn-primary w-full py-2.5 text-sm font-bold flex items-center justify-center gap-1.5"
                  style={{ borderRadius: 'var(--radius-md)' }}
                >
                  <CheckCircle2 size={16} /> 設為當前學習夥伴
                </button>
              ) : (
                <div className="badge badge-success w-full py-2 text-center text-xs font-bold">
                  ✨ 當前陪伴出戰中
                </div>
              )}
            </div>
          </div>

          {/* Right: Evolution, Levels & Feeding Controls */}
          <div className="flex flex-col gap-4">
            {/* Level & XP Bar */}
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)' }}>
              <div className="flex justify-between items-center mb-1.5 text-xs font-bold">
                <span style={{ color: 'var(--accent-primary)' }}>神獸等級：Lv.{currentStats.level}</span>
                <span className="text-secondary">{currentStats.xp} / {xpNeeded} XP ({xpPercent}%)</span>
              </div>
              <div style={{ height: '8px', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${xpPercent}%`,
                    height: '100%',
                    backgroundColor: 'var(--accent-primary)',
                    borderRadius: '4px',
                    transition: 'width 0.4s ease'
                  }}
                />
              </div>

              {/* Evolution Target */}
              <div className="mt-3 pt-3 border-t border-light flex items-center justify-between text-xs">
                <span className="text-secondary">下一形態目標：</span>
                {nextEvolutionStage ? (
                  <span className="font-bold text-amber-500 flex items-center gap-1">
                    <span>{nextEvolutionStage.name} (Lv.{nextEvolutionStage.minLevel} 解鎖)</span>
                    <Sparkles size={13} />
                  </span>
                ) : (
                  <span className="font-bold text-emerald-500">🏆 已達究極形態！</span>
                )}
              </div>
            </div>

            {/* Hunger & Happiness Vitals */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <div className="text-xs text-secondary mb-1">🍖 飽食度</div>
                <div className="font-bold text-base" style={{ color: currentStats.hunger < 30 ? 'var(--accent-error)' : 'var(--accent-success)' }}>
                  {currentStats.hunger} / 100
                </div>
              </div>
              <div className="p-3 rounded-xl text-center" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                <div className="text-xs text-secondary mb-1">💖 開心度</div>
                <div className="font-bold text-base text-pink-500">
                  {currentStats.happiness} / 100
                </div>
              </div>
            </div>

            {/* Feeding Box */}
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-light)' }}>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-1.5 text-xs font-bold text-secondary">
                  <Utensils size={14} />
                  <span>餵食提升神獸親密度與經驗：</span>
                </div>
              </div>

              {feedSuccessMsg && (
                <div className="p-2 mb-3 rounded-lg text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 animate-fade-in">
                  {feedSuccessMsg}
                </div>
              )}

              <div className="flex flex-col gap-2">
                {availableFoods.map(food => (
                  <div
                    key={food.id}
                    className="flex justify-between items-center p-2 rounded-lg"
                    style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}
                  >
                    <div>
                      <div className="text-xs font-bold" style={{ color: 'var(--text-primary)' }}>
                        {food.name}
                      </div>
                      <div className="text-[11px] text-secondary">
                        {food.desc} (持有: <strong>{food.count}</strong>)
                      </div>
                    </div>

                    <button
                      onClick={() => handleFeed(food.id)}
                      disabled={food.count <= 0}
                      className="btn-primary text-xs"
                      style={{
                        padding: '5px 12px',
                        borderRadius: 'var(--radius-full)',
                        opacity: food.count <= 0 ? 0.4 : 1
                      }}
                    >
                      {food.count > 0 ? '餵食' : '已耗盡'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetSanctuaryModal;
