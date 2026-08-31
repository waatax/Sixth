import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Backpack, Check, Zap, AlertCircle } from 'lucide-react';
import { useGamification, SHOP_ITEMS } from '../context/GamificationContext';
import PetSanctuaryModal from '../components/gamification/PetSanctuaryModal';
import confetti from 'canvas-confetti';
import { playSound } from '../utils/soundEffects';

const ShopPage = () => {
  const { 
    coins, 
    gems, 
    inventory, 
    buyItem, 
    consumeItem, 
    activeDoubleXpCount
  } = useGamification();

  const [activeTab, setActiveTab] = useState('shop'); // 'shop' or 'inventory'
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [purchaseMsg, setPurchaseMsg] = useState(null);
  const [isSanctuaryOpen, setIsSanctuaryOpen] = useState(false);

  const categories = [
    { id: 'all', label: '全部商品' },
    { id: 'cards', label: '⚡ 功能卡片' },
    { id: 'food', label: '🍖 神獸美食' },
    { id: 'cosmetic', label: '👑 守護裝扮' }
  ];

  const filteredItems = SHOP_ITEMS.filter(item => {
    if (categoryFilter === 'all') return true;
    return item.category === categoryFilter;
  });

  const handleBuy = (itemId) => {
    const { success, reason } = buyItem(itemId);
    if (success) {
      const item = SHOP_ITEMS.find(i => i.id === itemId);
      setPurchaseMsg({ success: true, text: `🎉 成功購買 ${item.name}！已放入背包！` });
      confetti({ particleCount: 40, spread: 60, origin: { y: 0.6 } });
    } else {
      setPurchaseMsg({ success: false, text: `⚠️ ${reason}` });
      playSound('wrong');
    }
    setTimeout(() => setPurchaseMsg(null), 3000);
  };

  const handleUse = (itemId) => {
    const item = SHOP_ITEMS.find(i => i.id === itemId);
    if (item?.category === 'food') {
      setIsSanctuaryOpen(true);
      return;
    }

    const success = consumeItem(itemId);
    if (success) {
      setPurchaseMsg({ success: true, text: `✨ 成功使用 ${item.name}！` });
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.5 } });
    }
    setTimeout(() => setPurchaseMsg(null), 3000);
  };


  const ownedItems = Object.entries(inventory).filter(([_, count]) => count > 0);

  return (
    <div className="flex flex-col gap-6 py-4 max-w-3xl mx-auto pb-16">
      {/* Top Navigation */}
      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors">
          <ArrowLeft size={16} /> 返回課程首頁
        </Link>

        {/* Live Wallet Bar */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-extrabold text-sm"
            style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}
          >
            <span className="text-amber-500">🪙</span>
            <span style={{ color: 'var(--text-primary)' }}>{coins}</span>
          </div>

          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-extrabold text-sm"
            style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-light)' }}
          >
            <span className="text-pink-500">💎</span>
            <span style={{ color: 'var(--text-primary)' }}>{gems}</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="text-center">
        <span className="badge badge-warning mb-2" style={{ padding: '6px 14px', borderRadius: 'var(--radius-full)', fontWeight: 700 }}>
          🛍️ 星光道具商城與背包 (Starlight Shop & Inventory)
        </span>
        <h1 className="h1 mb-2" style={{ fontSize: 'calc(1.8rem * var(--font-scale))' }}>
          星光道具商城
        </h1>
        <p className="text-secondary text-sm" style={{ lineHeight: 1.6 }}>
          使用闖關答題賺取的星光金幣與智慧水晶，兌換強力輔助卡與神獸美食！
        </p>
      </div>

      {/* Active Buffs Notification Banner */}
      {activeDoubleXpCount > 0 && (
        <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500 text-blue-600 font-bold text-xs flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-2">
            <Zap size={16} />
            <span>⚡ 雙倍經驗加成生效中：剩餘 {activeDoubleXpCount} 次測驗/魔王戰享受 200% XP！</span>
          </div>
        </div>
      )}

      {/* Purchase Feedback Toast */}
      {purchaseMsg && (
        <div
          className={`p-3 rounded-xl text-xs font-bold animate-fade-in flex items-center gap-2 ${
            purchaseMsg.success
              ? 'bg-emerald-500/10 border border-emerald-500 text-emerald-600'
              : 'bg-red-500/10 border border-red-500 text-red-600'
          }`}
        >
          {purchaseMsg.success ? <Check size={16} /> : <AlertCircle size={16} />}
          <span>{purchaseMsg.text}</span>
        </div>
      )}

      {/* Top Tab Switcher: Shop vs Backpack */}
      <div className="flex justify-center gap-3 border-b pb-3 border-light">
        <button
          onClick={() => setActiveTab('shop')}
          className={`btn-pill flex items-center gap-2 ${activeTab === 'shop' ? 'active' : ''}`}
          style={{ padding: '8px 20px', fontSize: '0.95rem' }}
        >
          <ShoppingBag size={18} />
          <span>星光道具店</span>
        </button>

        <button
          onClick={() => setActiveTab('inventory')}
          className={`btn-pill flex items-center gap-2 ${activeTab === 'inventory' ? 'active' : ''}`}
          style={{ padding: '8px 20px', fontSize: '0.95rem' }}
        >
          <Backpack size={18} />
          <span>我的護照背包 ({ownedItems.reduce((acc, curr) => acc + curr[1], 0)})</span>
        </button>
      </div>

      {/* Tab 1: Shop Catalog */}
      {activeTab === 'shop' && (
        <div className="flex flex-col gap-5 animate-fade-in">
          {/* Category Filter Pills */}
          <div className="flex justify-center gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategoryFilter(cat.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all border ${
                  categoryFilter === cat.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white dark:bg-slate-800 text-secondary border-gray-200 dark:border-slate-700 hover:border-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Shop Item Grid */}
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {filteredItems.map(item => {
              const ownedCount = inventory[item.id] || 0;
              const isAffordable = item.currency === 'coins' ? coins >= item.price : gems >= item.price;

              return (
                <div
                  key={item.id}
                  className="card flex flex-col justify-between p-5"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1.5px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 style={{ margin: 0, fontWeight: 800, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                        {item.name}
                      </h4>
                      {ownedCount > 0 && (
                        <span className="badge text-[10px] font-bold" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
                          已擁有: {ownedCount}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-secondary mb-4" style={{ lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-light flex items-center justify-between">
                    <div className="flex items-center gap-1 font-extrabold text-sm">
                      <span>{item.currency === 'coins' ? '🪙' : '💎'}</span>
                      <span style={{ color: item.currency === 'coins' ? 'var(--accent-warning-text)' : '#ec4899' }}>
                        {item.price} {item.currency === 'coins' ? '金幣' : '水晶'}
                      </span>
                    </div>

                    <button
                      onClick={() => handleBuy(item.id)}
                      disabled={!isAffordable}
                      className="btn-primary text-xs py-1.5 px-4 font-bold"
                      style={{
                        borderRadius: 'var(--radius-full)',
                        opacity: isAffordable ? 1 : 0.45,
                        backgroundColor: isAffordable ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                        color: isAffordable ? '#ffffff' : 'var(--text-tertiary)'
                      }}
                    >
                      {isAffordable ? '立即兌換' : '餘額不足'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: My Backpack Inventory */}
      {activeTab === 'inventory' && (
        <div className="flex flex-col gap-4 animate-fade-in">
          {ownedItems.length === 0 ? (
            <div className="card text-center py-12" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <div style={{ fontSize: '3rem' }}>🎒</div>
              <h3 className="h3 my-2">背包目前空空如也</h3>
              <p className="text-xs text-secondary mb-4">
                快前往道具店兌換雙倍卡、連勝護盾或神獸美食吧！
              </p>
              <button className="btn-primary text-xs" onClick={() => setActiveTab('shop')}>
                前往星光道具店 →
              </button>
            </div>
          ) : (
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              {ownedItems.map(([itemId, count]) => {
                const item = SHOP_ITEMS.find(i => i.id === itemId);
                if (!item) return null;

                return (
                  <div
                    key={itemId}
                    className="card p-4 flex items-center justify-between"
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--border-light)'
                    }}
                  >
                    <div>
                      <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>
                        {item.name}
                      </div>
                      <div className="text-xs text-secondary mt-0.5">
                        持有數量：<strong>{count}</strong>
                      </div>
                    </div>

                    <button
                      onClick={() => handleUse(itemId)}
                      className="btn-primary text-xs py-1.5 px-3.5 font-bold"
                      style={{ borderRadius: 'var(--radius-full)' }}
                    >
                      {item.category === 'food' ? '前往餵食' : '立即使用'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Sanctuary Modal for Feeding */}
      <PetSanctuaryModal
        isOpen={isSanctuaryOpen}
        onClose={() => setIsSanctuaryOpen(false)}
      />
    </div>
  );
};

export default ShopPage;
