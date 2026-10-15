/**
 * ============================================================================
 * MODULE 1: THE COMPLETE MENU DATA (Extracted 100% from Uploaded Menu Photos)
 * CRITICAL RULE: Zero defaultModifiers or extras (no cheese/lettuce logic).
 * ============================================================================
 */
const defaultMenuData = [
  // 1. سندويش فلافل (Falafel Dürüm) — 5 Items from Photo 1
  { category: 'سندويش فلافل', nameAr: 'فلافل لف', nameTr: 'Falafel Durum', price: 110 },
  { category: 'سندويش فلافل', nameAr: 'فلافل دبل', nameTr: 'Falafel extra Durum', price: 125 },
  { category: 'سندويش فلافل', nameAr: 'فلافل مع فول', nameTr: 'Falafel ve Bakla Durum', price: 125 },
  { category: 'سندويش فلافل', nameAr: 'فلافل مع بطاطا', nameTr: 'Falafel ve Patates Durum', price: 125 },
  { category: 'سندويش فلافل', nameAr: 'فلافل عربي مع بطاطا', nameTr: 'Falafel ve Patates Durum (Arap)', price: 185 },

  // 2. شاميات (Şamiyat) — 18 Items from Photo 1
  { category: 'شاميات', nameAr: 'فول بطحينة', nameTr: 'Tahinli yoğurtlu koru bakla', price: 155 },
  { category: 'شاميات', nameAr: 'فول مدمس بزيت', nameTr: 'Zeytin yoğurtlu koru bakla', price: 155 },
  { category: 'شاميات', nameAr: 'فول بطحينة مهروس', nameTr: 'Tahinli koru bakla ezmesi', price: 155 },
  { category: 'شاميات', nameAr: 'فول بزيت مهروس', nameTr: 'Zeytin yağlı koru bakla ezmesi', price: 155 },
  { category: 'شاميات', nameAr: 'حمص حب طحينة', nameTr: 'Tahinli nohut', price: 155 },
  { category: 'شاميات', nameAr: 'حمص حب بزيت', nameTr: 'Zeytin yağlı nohut', price: 155 },
  { category: 'شاميات', nameAr: 'حمص بطحينة (مسبحة)', nameTr: 'Humus', price: 150 },
  { category: 'شاميات', nameAr: 'فتة بزيت بلدي', nameTr: 'Sıvıyağlı fatte', price: 170 },
  { category: 'شاميات', nameAr: 'فتة بسمنة', nameTr: 'Tereyağlı fatte', price: 170 },
  { category: 'شاميات', nameAr: 'فتة بزيت فقسة', nameTr: 'Zeytinyağlı fatte (فقسة)', price: 170 },
  { category: 'شاميات', nameAr: 'فته بالكاجو', nameTr: 'Kajulu fatte', price: 260 },
  { category: 'شاميات', nameAr: 'فتة باللحمة', nameTr: 'Kıymalı fatte', price: 285 },
  { category: 'شاميات', nameAr: 'مسبحة بيروتية', nameTr: 'Humus (tahinli nohut ezmesi)', price: 155 },
  { category: 'شاميات', nameAr: 'مسبحة باللحمة', nameTr: 'Kıymalı homus', price: 265 },
  { category: 'شاميات', nameAr: 'مسبحة بالكاجو', nameTr: 'Kajulu nuhut', price: 250 },
  { category: 'شاميات', nameAr: 'متبل باذنجان', nameTr: 'Tahinli yoğurtlu patlıcan', price: 150 },
  { category: 'شاميات', nameAr: 'فلافل 6 قرص', nameTr: '6 adet Falafel', price: 120 },
  { category: 'شاميات', nameAr: 'فلافل 10 قرص', nameTr: '10 adet Falafel', price: 150 },

  // 3. وجبات غربية - وجبة (Batı Yemekleri - Porsiyon) — 9 Items from Photo 2 (Column: وجبة)
  { category: 'غربي - وجبة', nameAr: 'كريسبي وجبة', nameTr: 'Acılı çıtır tavuk Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'سكالوب وجبة', nameTr: 'Galata ünlü çıtır tavuk Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'زنجر وجبة', nameTr: 'Çıtır tavuk göğsü kızarması Porsiyon', price: 260 },
  { category: 'غربي - وجبة', nameAr: 'فاهيتا وجبة', nameTr: 'Fajita (biberli tavuk sote) Porsiyon', price: 260 },
  { category: 'غربي - وجبة', nameAr: 'فرانشيسكو وجبة', nameTr: 'Mantar kaşarlı sote Porsiyon', price: 260 },
  { category: 'غربي - وجبة', nameAr: 'مكسيكي وجبة', nameTr: 'Biberli tavuk sote acılı Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'شيش وجبة', nameTr: 'Tavuk şişi Porsiyon', price: 250 },
  { category: 'غربي - وجبة', nameAr: 'بطاطا وجبة', nameTr: 'Patates Porsiyon', price: 150 },
  { category: 'غربي - وجبة', nameAr: 'بطاطا مع قشقوان وجبة', nameTr: 'Kaşarlı Patates Porsiyon', price: 200 },

  // 4. وجبات غربية - سندويش (Batı Yemekleri - السندويش / Dürüm) — 9 Items from Photo 2 (Column: سندويش)
  { category: 'غربي - سندويش', nameAr: 'كريسبي سندويش', nameTr: 'Acılı çıtır tavuk Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'سكالوب سندويش', nameTr: 'Galata ünlü çıtır tavuk Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'زنجر سندويش', nameTr: 'Çıtır tavuk göğsü kızarması Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'فاهيتا سندويش', nameTr: 'Fajita (biberli tavuk sote) Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'فرانشيسكو سندويش', nameTr: 'Mantar kaşarlı sote Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'مكسيكي سندويش', nameTr: 'Biberli tavuk sote acılı Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'شيش سندويش', nameTr: 'Tavuk şişi Dürüm', price: 150 },
  { category: 'غربي - سندويش', nameAr: 'بطاطا سندويش', nameTr: 'Patates Dürüm', price: 125 },
  { category: 'غربي - سندويش', nameAr: 'بطاطا مع قشقوان سندويش', nameTr: 'Kaşarlı Patates Dürüm', price: 170 },

  // 5. وجبات غربية - عربي (Batı Yemekleri - عربي) — 9 Items from Photo 2 (Column: عربي)
  { category: 'غربي - عربي', nameAr: 'كريسبي عربي', nameTr: 'Acılı çıtır tavuk (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'سكالوب عربي', nameTr: 'Galata ünlü çıtır tavuk (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'زنجر عربي', nameTr: 'Çıtır tavuk göğsü kızarması (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'فاهيتا عربي', nameTr: 'Fajita (biberli tavuk sote) (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'فرانشيسكو عربي', nameTr: 'Mantar kaşarlı sote (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'مكسيكي عربي', nameTr: 'Biberli tavuk sote acılı (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'شيش عربي', nameTr: 'Tavuk şişi (Arap)', price: 225 },
  { category: 'غربي - عربي', nameAr: 'بطاطا عربي', nameTr: 'Patates (Arap)', price: 185 },
  { category: 'غربي - عربي', nameAr: 'بطاطا مع قشقوان عربي', nameTr: 'Kaşarlı Patates (Arap)', price: 235 },

  // 6. سلطات (Salatalar) — 7 Items from Photo 1
  { category: 'سلطات', nameAr: 'سلطة شرقية', nameTr: 'Mevsim salatası', price: 140 },
  { category: 'سلطات', nameAr: 'فتوش', nameTr: 'Fettuş', price: 140 },
  { category: 'سلطات', nameAr: 'تبولة', nameTr: 'Tabboule', price: 140 },
  { category: 'سلطات', nameAr: 'سلطة روسية', nameTr: 'Rus salatası', price: 90 },
  { category: 'سلطات', nameAr: 'زينة خضرة', nameTr: 'Yeşillik / Garnitür', price: 30 },
  { category: 'سلطات', nameAr: 'سرفيس', nameTr: 'Servis', price: 30 },
  { category: 'سلطات', nameAr: 'مايونيز', nameTr: 'Mayonez', price: 25 },

  // 7. كوكتيلات (Kokteyller) — 5 Items from Photo 2
  { category: 'كوكتيلات', nameAr: 'موز و حليب', nameTr: 'Muzlu süt', price: 100 },
  { category: 'كوكتيلات', nameAr: 'موز و حليب و فريز', nameTr: 'Muzlu çilekli süt', price: 120 },
  { category: 'كوكتيلات', nameAr: 'موز و حليب و عسل', nameTr: 'Muzlu ballı süt', price: 120 },
  { category: 'كوكتيلات', nameAr: 'كوكتيل فواكه', nameTr: 'Meyveli kaymaklı milkshake', price: 140 },
  { category: 'كوكتيلات', nameAr: 'موز و حليب و شوكولاه', nameTr: 'Muzlu çikolatalı süt', price: 120 },

  // 8. مشروبات (İçecekler) — 3 Items
  { category: 'مشروبات', nameAr: 'كولا', nameTr: 'Kola', price: 50 },
  { category: 'مشروبات', nameAr: 'عيران', nameTr: 'Ayran', price: 25 },
  { category: 'مشروبات', nameAr: 'شاي', nameTr: 'Çay', price: 20 }
];

const STORAGE_KEY_MENU = 'falafel_damashqi_pos_menu_v2';
const STORAGE_KEY_ORDERS = 'falafel_damashqi_pos_orders_v2';
const STORAGE_KEY_CLOUD_URL = 'falafel_damashqi_pos_cloud_url_v1';

let menuData = JSON.parse(JSON.stringify(defaultMenuData));

/**
 * Real-Time Cross-Tab BroadcastChannel so Waiter Tab & Cashier Tab sync instantly
 */
let posChannel = null;
try {
  if (typeof BroadcastChannel !== 'undefined') {
    posChannel = new BroadcastChannel('falafel_damashqi_pos_sync_channel');
    posChannel.onmessage = (event) => {
      if (event.data && event.data.type === 'NEW_ORDER') {
        handleRemoteIncomingOrder(event.data.order);
      } else if (event.data && event.data.type === 'ORDERS_UPDATED') {
        loadOrdersFromStorage();
        updateHeaderBadges();
        renderCashierKanban();
      } else if (event.data && event.data.type === 'MENU_UPDATED') {
        loadMenuFromStorage();
        renderCategoryPills();
        renderMenuView();
      }
    };
  }
} catch (e) {
  // BroadcastChannel not supported in restricted context
}

/**
 * ============================================================================
 * MODULE 3 AUDIO ALERT INITIALIZATION
 * Exact Audio Alert declaration + First-Click Autoplay Unlocker
 * ============================================================================
 */
const alertSound = new Audio('https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg');
alertSound.preload = 'auto';

let isAudioUnlocked = false;
let webAudioCtx = null;

function unlockCashierAudio(showNotification) {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass && !webAudioCtx) {
      webAudioCtx = new AudioContextClass();
    }
    if (webAudioCtx && webAudioCtx.state === 'suspended') {
      webAudioCtx.resume();
    }

    alertSound.muted = true;
    const playPromise = alertSound.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          alertSound.pause();
          alertSound.currentTime = 0;
          alertSound.muted = false;
          markAudioUnlockedUI(showNotification);
        })
        .catch(() => {
          alertSound.muted = false;
          markAudioUnlockedUI(showNotification);
        });
    } else {
      alertSound.muted = false;
      markAudioUnlockedUI(showNotification);
    }
  } catch (err) {
    markAudioUnlockedUI(showNotification);
  }
}

function markAudioUnlockedUI(showNotification) {
  const wasUnlocked = isAudioUnlocked;
  isAudioUnlocked = true;
  const btn = document.getElementById('btn-cashier-login-audio');
  const icon = document.getElementById('audio-status-icon');
  const text = document.getElementById('audio-status-text');
  if (btn && icon && text) {
    btn.classList.add('unlocked');
    icon.textContent = '🔔';
    text.textContent = 'الجرس مفعّل / Ses Aktif';
  }
  if (showNotification && !wasUnlocked) {
    showToast('تم تفعيل جرس تنبيهات الكاشير بنجاح 🔔', 'success');
    playSynthesizedBellFallback();
  } else if (showNotification && wasUnlocked) {
    playOrderAlertPing();
    showToast('تم اختبار جرس تنبيه الطلبات الجديدة 🔔', 'success');
  }
}

function playSynthesizedBellFallback() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    if (!webAudioCtx) webAudioCtx = new AudioContextClass();
    if (webAudioCtx.state === 'suspended') webAudioCtx.resume();

    const now = webAudioCtx.currentTime;
    const freqs = [1318.5, 1760.0, 2637.0];
    freqs.forEach((freq, idx) => {
      const osc = webAudioCtx.createOscillator();
      const gain = webAudioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.22, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.75);
      osc.connect(gain);
      gain.connect(webAudioCtx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.76);
    });
  } catch (e) {
    // Ignore audio synthesis errors
  }
}

function playOrderAlertPing() {
  try {
    alertSound.currentTime = 0;
    const playPromise = alertSound.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        playSynthesizedBellFallback();
      });
    }
  } catch (err) {
    playSynthesizedBellFallback();
  }
}

/**
 * ============================================================================
 * APPLICATION STATE
 * ============================================================================
 */
const state = {
  roleMode: 'waiter',       // 'waiter' | 'cashier'
  waiterSubView: 'menu',    // 'menu' | 'cart'
  selectedCategory: 'ALL',
  searchQuery: '',
  selectedTable: '',
  cart: [],                 // Array of { itemIndex, nameAr, nameTr, price, qty }
  orders: [],               // Array of { id, table, createdAt, status, items, total, isNewlyInjected }
  orderSeq: 104,
  cloudSyncUrl: ''
};

function getInitialSeedOrders() {
  return [
    {
      id: 'ORD-101',
      table: 'Masa 2 / طاولة 2',
      createdAt: '12:15',
      status: 'completed',
      items: [
        { nameAr: 'فلافل لف', nameTr: 'Falafel Durum', price: 110, qty: 2 },
        { nameAr: 'حمص بطحينة (مسبحة)', nameTr: 'Humus', price: 150, qty: 1 },
        { nameAr: 'عيران', nameTr: 'Ayran', price: 25, qty: 2 }
      ],
      total: 420,
      isNewlyInjected: false
    },
    {
      id: 'ORD-102',
      table: 'Masa 5 / طاولة 5',
      createdAt: '12:28',
      status: 'completed',
      items: [
        { nameAr: 'كريسبي وجبة', nameTr: 'Acılı çıtır tavuk Porsiyon', price: 250, qty: 1 },
        { nameAr: 'فاهيتا سندويش', nameTr: 'Fajita (biberli tavuk sote) Dürüm', price: 150, qty: 1 },
        { nameAr: 'كولا', nameTr: 'Kola', price: 50, qty: 2 }
      ],
      total: 500,
      isNewlyInjected: false
    },
    {
      id: 'ORD-103',
      table: 'Masa 7 / طاولة 7',
      createdAt: '12:42',
      status: 'preparing',
      items: [
        { nameAr: 'فتة بسمنة', nameTr: 'Tereyağlı fatte', price: 170, qty: 1 },
        { nameAr: 'فلافل 10 قرص', nameTr: '10 adet Falafel', price: 150, qty: 1 },
        { nameAr: 'شاي', nameTr: 'Çay', price: 20, qty: 2 }
      ],
      total: 360,
      isNewlyInjected: false
    },
    {
      id: 'ORD-104',
      table: 'Masa 4 / طاولة 4',
      createdAt: '12:49',
      status: 'new',
      items: [
        { nameAr: 'فلافل عربي مع بطاطا', nameTr: 'Falafel ve Patates Durum (Arap)', price: 185, qty: 1 },
        { nameAr: 'فتوش', nameTr: 'Fettuş', price: 140, qty: 1 },
        { nameAr: 'موز و حليب و فريز', nameTr: 'Muzlu çilekli süt', price: 120, qty: 1 }
      ],
      total: 445,
      isNewlyInjected: true
    }
  ];
}

function loadMenuFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MENU);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length === defaultMenuData.length) {
        menuData = parsed;
        return;
      }
    }
  } catch (e) {
    // Fallback to defaultMenuData
  }
  menuData = JSON.parse(JSON.stringify(defaultMenuData));
}

function saveMenuToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(menuData));
  } catch (e) {
    // Ignore storage errors
  }
}

function loadOrdersFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_ORDERS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        state.orders = parsed;
        const maxNum = parsed.reduce((acc, o) => {
          const num = parseInt(String(o.id).replace(/\D/g, ''), 10);
          return !isNaN(num) && num > acc ? num : acc;
        }, 104);
        state.orderSeq = maxNum;
        return;
      }
    }
  } catch (e) {
    // Fallback to seed orders
  }
  state.orders = getInitialSeedOrders();
}

function saveOrdersToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY_ORDERS, JSON.stringify(state.orders));
  } catch (e) {
    // Safe fallback
  }
}

/**
 * ============================================================================
 * CUSTOM TOAST NOTIFICATION SYSTEM (Replaces all native alert() calls)
 * ============================================================================
 */
function showToast(message, type = 'gold') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item ${type === 'success' ? 'toast-success' : type === 'danger' ? 'toast-danger' : ''}`;

  const msgSpan = document.createElement('span');
  msgSpan.textContent = message;

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.style.background = 'transparent';
  closeBtn.style.color = 'var(--text-muted)';
  closeBtn.style.fontWeight = '800';
  closeBtn.style.fontSize = '0.9rem';
  closeBtn.textContent = '✕';
  closeBtn.onclick = () => toast.remove();

  toast.appendChild(msgSpan);
  toast.appendChild(closeBtn);
  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      setTimeout(() => toast.remove(), 180);
    }
  }, 3200);
}

/**
 * ============================================================================
 * SPA ROUTING LOGIC (Waiter Menu View <-> Waiter Full-Screen Cart <-> Cashier)
 * ============================================================================
 */
function switchRoleMode(mode) {
  state.roleMode = mode;
  const tabWaiter = document.getElementById('tab-waiter-mode');
  const tabCashier = document.getElementById('tab-cashier-mode');
  const btnHeaderCart = document.getElementById('btn-header-cart');

  if (mode === 'waiter') {
    tabWaiter.classList.add('active');
    tabCashier.classList.remove('active');
    btnHeaderCart.style.display = 'flex';
    toggleWaiterSubView(state.waiterSubView);
  } else {
    tabCashier.classList.add('active');
    tabWaiter.classList.remove('active');
    btnHeaderCart.style.display = 'none';
    setActiveSpaView('view-cashier-dashboard');
    renderCashierKanban();
  }
}

function toggleWaiterSubView(subView) {
  state.roleMode = 'waiter';
  state.waiterSubView = subView;

  document.getElementById('tab-waiter-mode').classList.add('active');
  document.getElementById('tab-cashier-mode').classList.remove('active');
  document.getElementById('btn-header-cart').style.display = 'flex';

  if (subView === 'cart') {
    setActiveSpaView('view-waiter-cart');
    renderCartView();
  } else {
    setActiveSpaView('view-waiter-menu');
    renderMenuView();
  }
}

function setActiveSpaView(targetId) {
  const views = ['view-waiter-menu', 'view-waiter-cart', 'view-cashier-dashboard'];
  views.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === targetId) {
      el.classList.add('active-view');
      el.style.display = 'block';
    } else {
      el.classList.remove('active-view');
      el.style.display = 'none';
    }
  });
}

/**
 * ============================================================================
 * MODULE 2: WAITER MENU & CLEAN CART LOGIC
 * ============================================================================
 */
function getUniqueCategories() {
  const seen = new Set();
  const cats = [];
  menuData.forEach((item) => {
    if (!seen.has(item.category)) {
      seen.add(item.category);
      cats.push(item.category);
    }
  });
  return cats;
}

function renderCategoryPills() {
  const container = document.getElementById('category-pills-container');
  if (!container) return;

  const categories = ['ALL', ...getUniqueCategories()];
  container.innerHTML = '';

  categories.forEach((cat) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `category-pill ${state.selectedCategory === cat ? 'active' : ''}`;
    btn.textContent = cat === 'ALL' ? `الكل (${menuData.length})` : cat;
    btn.onclick = () => {
      state.selectedCategory = cat;
      renderCategoryPills();
      renderMenuView();
    };
    container.appendChild(btn);
  });
}

function handleSearchInput(val) {
  state.searchQuery = (val || '').trim().toLowerCase();
  renderMenuView();
}

function handleTableChange(tableVal) {
  state.selectedTable = tableVal;
  const menuSelect = document.getElementById('waiter-menu-table-select');
  const cartSelect = document.getElementById('waiter-cart-table-select');
  const cartTableBox = document.getElementById('cart-table-box');

  if (menuSelect && menuSelect.value !== tableVal) menuSelect.value = tableVal;
  if (cartSelect && cartSelect.value !== tableVal) cartSelect.value = tableVal;
  if (cartTableBox && tableVal) cartTableBox.classList.remove('error-highlight');

  if (tableVal) {
    showToast(`تم اختيار: ${tableVal}`, 'success');
  }
}

function renderMenuView() {
  const container = document.getElementById('menu-sections-container');
  if (!container) return;
  container.innerHTML = '';

  const categoriesToRender = state.selectedCategory === 'ALL'
    ? getUniqueCategories()
    : [state.selectedCategory];

  let totalMatched = 0;

  categoriesToRender.forEach((categoryName) => {
    const itemsInCat = menuData
      .map((item, idx) => ({ ...item, itemIndex: idx }))
      .filter((item) => {
        if (item.category !== categoryName) return false;
        if (!state.searchQuery) return true;
        return (
          item.nameAr.toLowerCase().includes(state.searchQuery) ||
          item.nameTr.toLowerCase().includes(state.searchQuery) ||
          item.category.toLowerCase().includes(state.searchQuery)
        );
      });

    if (itemsInCat.length === 0) return;
    totalMatched += itemsInCat.length;

    const section = document.createElement('div');
    section.className = 'category-section';

    const header = document.createElement('div');
    header.className = 'category-header';
    header.innerHTML = `
      <div class="category-title">
        <span>◆</span>
        <span>${escapeHtml(categoryName)}</span>
      </div>
      <span class="category-count">${itemsInCat.length} أصناف</span>
    `;

    const grid = document.createElement('div');
    grid.className = 'menu-grid';

    itemsInCat.forEach((item) => {
      const cartEntry = state.cart.find((c) => c.itemIndex === item.itemIndex);
      const qtyInCart = cartEntry ? Number(cartEntry.qty) : 0;

      const card = document.createElement('div');
      card.className = `menu-card ${qtyInCart > 0 ? 'in-cart' : ''}`;

      card.innerHTML = `
        <div class="menu-card-names">
          <div class="menu-name-ar">${escapeHtml(item.nameAr)}</div>
          <div class="menu-name-tr">${escapeHtml(item.nameTr)}</div>
        </div>
        <div class="menu-card-right">
          <span class="menu-price-tag">${Number(item.price)} ₺</span>
          <button
            type="button"
            class="btn-add-item"
            aria-label="إضافة ${escapeHtml(item.nameAr)}"
            onclick="addItemToCart(${item.itemIndex})"
          >
            +
            ${qtyInCart > 0 ? `<span class="item-qty-indicator">${qtyInCart}</span>` : ''}
          </button>
        </div>
      `;
      grid.appendChild(card);
    });

    section.appendChild(header);
    section.appendChild(grid);
    container.appendChild(section);
  });

  if (totalMatched === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <p>لا توجد أصناف مطابقة لبحثك / Eşleşen ürün bulunamadı</p>
      </div>
    `;
  }

  updateHeaderBadges();
}

function addItemToCart(itemIndex) {
  const sourceItem = menuData[itemIndex];
  if (!sourceItem) return;

  const existing = state.cart.find((c) => c.itemIndex === itemIndex);
  if (existing) {
    existing.qty = Number(existing.qty) + 1;
    existing.price = Number(sourceItem.price);
  } else {
    state.cart.push({
      itemIndex,
      nameAr: sourceItem.nameAr,
      nameTr: sourceItem.nameTr,
      price: Number(sourceItem.price),
      qty: 1
    });
  }

  updateHeaderBadges();
  renderMenuView();
  showToast(`+1 ${sourceItem.nameAr} (${Number(sourceItem.price)} ₺)`, 'gold');
}

function updateCartItemQty(itemIndex, delta) {
  const idx = state.cart.findIndex((c) => c.itemIndex === itemIndex);
  if (idx === -1) return;

  const newQty = Number(state.cart[idx].qty) + Number(delta);
  if (newQty <= 0) {
    state.cart.splice(idx, 1);
  } else {
    state.cart[idx].qty = newQty;
  }

  updateHeaderBadges();
  renderCartView();
  renderMenuView();
}

function removeCartItem(itemIndex) {
  const idx = state.cart.findIndex((c) => c.itemIndex === itemIndex);
  if (idx === -1) return;
  const removed = state.cart[idx];
  state.cart.splice(idx, 1);
  updateHeaderBadges();
  renderCartView();
  renderMenuView();
  showToast(`تم حذف ${removed.nameAr} من السلة`, 'danger');
}

function clearCartWithFeedback() {
  if (state.cart.length === 0) {
    showToast('السلة فارغة بالفعل / Sepet zaten boş', 'danger');
    return;
  }
  state.cart = [];
  updateHeaderBadges();
  renderCartView();
  renderMenuView();
  showToast('تم إفراغ السلة بالكامل / Sepet temizlendi', 'danger');
}

function calculateCartTotal() {
  return state.cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );
}

function calculateCartCount() {
  return state.cart.reduce((sum, item) => sum + Number(item.qty), 0);
}

function updateHeaderBadges() {
  const countEl = document.getElementById('header-cart-count');
  const totalEl = document.getElementById('header-cart-total');
  const newOrdersBadge = document.getElementById('header-new-orders-badge');

  if (countEl) countEl.textContent = String(calculateCartCount());
  if (totalEl) totalEl.textContent = `${calculateCartTotal()} ₺`;

  const newCount = state.orders.filter((o) => o.status === 'new').length;
  if (newOrdersBadge) newOrdersBadge.textContent = String(newCount);
}

function renderCartView() {
  const container = document.getElementById('cart-items-container');
  const grandTotalEl = document.getElementById('cart-grand-total');
  const cartSelect = document.getElementById('waiter-cart-table-select');

  if (cartSelect) cartSelect.value = state.selectedTable;
  if (!container || !grandTotalEl) return;

  container.innerHTML = '';

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <div style="font-size: 2rem; margin-bottom: 0.4rem;">🛒</div>
        <div style="font-weight: 700; font-size: 1rem;">السلة فارغة حالياً / Sepetiniz Boş</div>
        <div style="font-size: 0.85rem; margin-top: 0.25rem;">أضف الأصناف من قائمة الطعام لإرسال الطلب للكاشير</div>
      </div>
    `;
    grandTotalEl.textContent = '0 ₺';
    return;
  }

  state.cart.forEach((item) => {
    const lineTotal = Number(item.price) * Number(item.qty);
    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-title-ar">${escapeHtml(item.nameAr)}</div>
        <div class="cart-item-title-tr">${escapeHtml(item.nameTr)}</div>
      </div>
      <div class="cart-item-controls">
        <div class="qty-stepper">
          <button type="button" class="btn-qty" aria-label="إنقاص الكمية" onclick="updateCartItemQty(${item.itemIndex}, -1)">−</button>
          <span class="qty-value">${Number(item.qty)}</span>
          <button type="button" class="btn-qty" aria-label="زيادة الكمية" onclick="updateCartItemQty(${item.itemIndex}, 1)">+</button>
        </div>
        <div class="cart-item-price">${lineTotal} ₺</div>
        <button type="button" class="btn-trash" aria-label="حذف الصنف" onclick="removeCartItem(${item.itemIndex})">
          🗑️
        </button>
      </div>
    `;
    container.appendChild(row);
  });

  grandTotalEl.textContent = `${calculateCartTotal()} ₺`;
}

function submitWaiterOrder() {
  if (state.cart.length === 0) {
    showToast('لا يمكن إرسال طلب فارغ! أضف أصنافاً للسلة أولاً.', 'danger');
    return;
  }

  if (!state.selectedTable) {
    const cartTableBox = document.getElementById('cart-table-box');
    if (cartTableBox) {
      cartTableBox.classList.remove('error-highlight');
      void cartTableBox.offsetWidth;
      cartTableBox.classList.add('error-highlight');
    }
    showToast('⚠️ يرجى اختيار رقم الطاولة قبل إرسال الطلب! / Lütfen masa seçin!', 'danger');
    return;
  }

  state.orderSeq += 1;
  const now = new Date();
  const timeStr = now.toTimeString().slice(0, 5);
  const strictTotal = calculateCartTotal();

  const newOrder = {
    id: `ORD-${state.orderSeq}`,
    table: state.selectedTable,
    createdAt: timeStr,
    status: 'new',
    items: state.cart.map((c) => ({
      nameAr: c.nameAr,
      nameTr: c.nameTr,
      price: Number(c.price),
      qty: Number(c.qty)
    })),
    total: Number(strictTotal),
    isNewlyInjected: true
  };

  state.cart = [];
  state.selectedTable = '';
  const menuSelect = document.getElementById('waiter-menu-table-select');
  const cartSelect = document.getElementById('waiter-cart-table-select');
  if (menuSelect) menuSelect.value = '';
  if (cartSelect) cartSelect.value = '';

  injectNewOrderIntoSystem(newOrder, true);
  toggleWaiterSubView('menu');
}

/**
 * ============================================================================
 * MODULE 3: CASHIER KANBAN DASHBOARD & LIVE ORDER INJECTION (Local + Cloud)
 * ============================================================================
 */
function injectNewOrderIntoSystem(orderObj, broadcastToPeers = true) {
  state.orders.unshift(orderObj);
  saveOrdersToStorage();
  updateHeaderBadges();
  renderCashierKanban();
  playOrderAlertPing();
  showToast(`🔔 تم إرسال الطلب (${orderObj.id}) - ${orderObj.table} بقيمة ${Number(orderObj.total)} ₺ للكاشير!`, 'success');

  if (broadcastToPeers && posChannel) {
    try {
      posChannel.postMessage({ type: 'NEW_ORDER', order: orderObj });
    } catch (e) {}
  }
}

function handleRemoteIncomingOrder(orderObj) {
  if (!orderObj || state.orders.some((o) => o.id === orderObj.id)) return;
  orderObj.isNewlyInjected = true;
  state.orders.unshift(orderObj);
  saveOrdersToStorage();
  updateHeaderBadges();
  renderCashierKanban();
  playOrderAlertPing();
  showToast(`🔔 وصل طلب جديد من النادل (${orderObj.id}) - ${orderObj.table}!`, 'success');
}

function simulateIncomingOrder() {
  unlockCashierAudio(false);
  state.orderSeq += 1;
  const sampleTables = [
    'Masa 3 / طاولة 3',
    'Masa 6 / طاولة 6',
    'Masa 8 / طاولة 8',
    'Masa 11 / طاولة 11',
    'Paket / سفري'
  ];
  const randomTable = sampleTables[state.orderSeq % sampleTables.length];

  const itemA = menuData[state.orderSeq % menuData.length];
  const itemB = menuData[(state.orderSeq + 19) % menuData.length];
  const items = [
    { nameAr: itemA.nameAr, nameTr: itemA.nameTr, price: Number(itemA.price), qty: 2 },
    { nameAr: itemB.nameAr, nameTr: itemB.nameTr, price: Number(itemB.price), qty: 1 }
  ];
  const total = items.reduce((acc, it) => acc + Number(it.price) * Number(it.qty), 0);
  const now = new Date();

  const simulatedOrder = {
    id: `ORD-${state.orderSeq}`,
    table: randomTable,
    createdAt: now.toTimeString().slice(0, 5),
    status: 'new',
    items,
    total: Number(total),
    isNewlyInjected: true
  };

  injectNewOrderIntoSystem(simulatedOrder, true);
}

function updateOrderStatus(orderId, nextStatus) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) return;

  order.status = nextStatus;
  order.isNewlyInjected = false;
  saveOrdersToStorage();
  updateHeaderBadges();
  renderCashierKanban();

  if (posChannel) {
    try { posChannel.postMessage({ type: 'ORDERS_UPDATED' }); } catch (e) {}
  }

  const statusLabels = {
    preparing: 'قيد التحضير / Hazırlanıyor 🟡',
    completed: 'مكتمل / Tamamlandı 🟢'
  };
  showToast(`تم تحديث حالة الطلب ${order.id} إلى: ${statusLabels[nextStatus] || nextStatus}`, 'success');
}

function cancelOrder(orderId) {
  const idx = state.orders.findIndex((o) => o.id === orderId);
  if (idx === -1) return;
  const removed = state.orders[idx];
  state.orders.splice(idx, 1);
  saveOrdersToStorage();
  updateHeaderBadges();
  renderCashierKanban();
  if (posChannel) {
    try { posChannel.postMessage({ type: 'ORDERS_UPDATED' }); } catch (e) {}
  }
  showToast(`تم إلغاء وحذف الطلب ${removed.id}`, 'danger');
}

function renderCashierKanban() {
  const colNew = document.getElementById('kanban-list-new');
  const colPrep = document.getElementById('kanban-list-preparing');
  const colComp = document.getElementById('kanban-list-completed');

  if (!colNew || !colPrep || !colComp) return;

  colNew.innerHTML = '';
  colPrep.innerHTML = '';
  colComp.innerHTML = '';

  const newOrders = state.orders.filter((o) => o.status === 'new');
  const prepOrders = state.orders.filter((o) => o.status === 'preparing');
  const compOrders = state.orders.filter((o) => o.status === 'completed');

  document.getElementById('col-count-new').textContent = String(newOrders.length);
  document.getElementById('col-count-preparing').textContent = String(prepOrders.length);
  document.getElementById('col-count-completed').textContent = String(compOrders.length);

  document.getElementById('stat-new-count').textContent = String(newOrders.length);
  document.getElementById('stat-prep-count').textContent = String(prepOrders.length);
  document.getElementById('stat-completed-count').textContent = String(compOrders.length);

  const completedRevenue = compOrders.reduce((sum, o) => sum + Number(o.total), 0);
  document.getElementById('stat-completed-revenue').textContent = `${completedRevenue} ₺`;

  renderKanbanColumnList(colNew, newOrders, 'لا توجد طلبات جديدة حالياً');
  renderKanbanColumnList(colPrep, prepOrders, 'لا توجد طلبات قيد التحضير');
  renderKanbanColumnList(colComp, compOrders, 'لا توجد طلبات مكتملة بعد');
}

function renderKanbanColumnList(container, ordersList, emptyText) {
  if (ordersList.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state" style="padding: 2rem 0.5rem; font-size: 0.85rem;">
        ${escapeHtml(emptyText)}
      </div>
    `;
    return;
  }

  ordersList.forEach((order) => {
    const card = document.createElement('div');
    card.className = `order-card ${order.isNewlyInjected && order.status === 'new' ? 'pulse-new' : ''}`;

    const itemsHtml = order.items
      .map((it) => {
        const lineTotal = Number(it.price) * Number(it.qty);
        return `
          <div class="order-item-line">
            <div>
              <span class="order-item-qty">${Number(it.qty)}x</span>
              <span>${escapeHtml(it.nameAr)}</span>
              <span style="color: var(--text-muted); font-size: 0.75rem;">(${escapeHtml(it.nameTr)})</span>
            </div>
            <span class="order-item-line-price">${lineTotal} ₺</span>
          </div>
        `;
      })
      .join('');

    let actionButtonsHtml = '';
    if (order.status === 'new') {
      actionButtonsHtml = `
        <button type="button" class="btn-card-action btn-prepare" onclick="updateOrderStatus('${order.id}', 'preparing')">
          ▶ تحضير / Hazırla
        </button>
        <button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">
          🖨️ إخراج الفيش / Fiş
        </button>
        <button type="button" class="btn-card-action btn-cancel-order" title="إلغاء الطلب" onclick="cancelOrder('${order.id}')">
          ✕
        </button>
      `;
    } else if (order.status === 'preparing') {
      actionButtonsHtml = `
        <button type="button" class="btn-card-action btn-complete" onclick="updateOrderStatus('${order.id}', 'completed')">
          ✔ تسليم / Tamamla
        </button>
        <button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">
          🖨️ إخراج الفيش / Fiş
        </button>
      `;
    } else {
      actionButtonsHtml = `
        <button type="button" class="btn-card-action btn-print" onclick="printReceiptById('${order.id}')">
          🖨️ طباعة الفيش الحراري (80mm) / Fiş Yazdır
        </button>
      `;
    }

    const strictOrderTotal = order.items.reduce(
      (acc, it) => acc + Number(it.price) * Number(it.qty),
      0
    );

    card.innerHTML = `
      <div class="order-card-top">
        <span class="order-id-badge">#${escapeHtml(order.id)}</span>
        <span class="order-table-badge">${escapeHtml(order.table)}</span>
        <span class="order-time">🕒 ${escapeHtml(order.createdAt)}</span>
      </div>
      <div class="order-items-mini-list">
        ${itemsHtml}
      </div>
      <div class="order-card-footer">
        <div class="order-card-total">
          <span>المجموع / Toplam:</span>
          <span class="order-card-total-val">${strictOrderTotal} ₺</span>
        </div>
        <div class="order-card-actions">
          ${actionButtonsHtml}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * ============================================================================
 * MODULE 4: AL-AMEEN STYLE THERMAL PRINTING & END-OF-DAY Z-REPORT
 * ============================================================================
 */
function printReceiptById(orderId) {
  const order = state.orders.find((o) => o.id === orderId);
  if (!order) {
    showToast('لم يتم العثور على الطلب للطباعة', 'danger');
    return;
  }
  printReceipt(order);
}

function printReceipt(order) {
  if (!order || !Array.isArray(order.items)) return;

  const printSection = document.getElementById('print-section');
  const modalPreview = document.getElementById('modal-thermal-preview');
  const modalTitle = document.getElementById('receipt-modal-title');

  let calculatedGrandTotal = 0;

  const rowsHtml = order.items
    .map((item) => {
      const qty = Number(item.qty);
      const unitPrice = Number(item.price);
      const lineTotal = qty * unitPrice;
      calculatedGrandTotal += lineTotal;

      return `
        <tr>
          <td class="num-col" style="text-align: center; font-weight: 700;">${qty}</td>
          <td>
            <div style="font-weight: 700;">${escapeHtml(item.nameAr)}</div>
            <div style="font-size: 10px; color: #333;">${escapeHtml(item.nameTr)}</div>
          </td>
          <td class="num-col">${unitPrice.toFixed(2)}</td>
          <td class="num-col" style="font-weight: 700;">${lineTotal.toFixed(2)}</td>
        </tr>
      `;
    })
    .join('');

  const dateStr = new Date().toISOString().slice(0, 10);

  const receiptHtml = `
    <div class="receipt-wrapper">
      <div class="receipt-header">
        <div class="receipt-brand-ar">مطعم فلافل الدمشقي</div>
        <div class="receipt-brand-tr">FALAFEL ALDMŞKE RESTORAN</div>
        <div style="font-size: 10px; margin-top: 2px;" class="ltr-text">Tel: 0554 142 22 20 | 0539 522 63 88</div>
      </div>

      <div class="receipt-meta">
        <div class="receipt-meta-row">
          <span>رقم الفاتورة / Fiş No:</span>
          <strong class="ltr-text">#${escapeHtml(order.id)}</strong>
        </div>
        <div class="receipt-meta-row">
          <span>الطاولة / Masa:</span>
          <strong>${escapeHtml(order.table)}</strong>
        </div>
        <div class="receipt-meta-row">
          <span>التاريخ والوقت / Tarih:</span>
          <span class="ltr-text">${dateStr} ${escapeHtml(order.createdAt)}</span>
        </div>
      </div>

      <table class="receipt-table">
        <thead>
          <tr>
            <th class="num-col" style="text-align: center;">Qty<br>الكمية</th>
            <th>Item<br>الصنف</th>
            <th class="num-col">Price<br>السعر</th>
            <th class="num-col">Total<br>المجموع</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>

      <div class="receipt-total-block">
        <span>الإجمالي النهائي / TOPLAM:</span>
        <span class="ltr-text">${Number(calculatedGrandTotal).toFixed(2)} TL</span>
      </div>

      <div class="receipt-footer">
        <div>شكراً لزيارتكم - صحتين وعافية</div>
        <div class="ltr-text">Afiyet Olsun • Yine Bekleriz</div>
      </div>
    </div>
  `;

  if (printSection) {
    printSection.innerHTML = receiptHtml;
  }

  if (modalPreview && modalTitle) {
    modalTitle.textContent = `🖨️ فيش الطلب #${order.id} (80mm Thermal)`;
    modalPreview.innerHTML = receiptHtml;
    document.getElementById('receipt-modal-backdrop').classList.add('open');
  }

  showToast(`تم تجهيز فيش الطلب #${order.id} للطباعة الحرارية 80mm`, 'success');
}

function calculateZReportMetrics() {
  const completedOrders = state.orders.filter((o) => o.status === 'completed');
  const totalOrders = completedOrders.length;
  let totalRevenue = 0;
  const itemSalesMap = new Map();

  completedOrders.forEach((order) => {
    order.items.forEach((item) => {
      const qty = Number(item.qty);
      const price = Number(item.price);
      const lineTotal = qty * price;
      totalRevenue += lineTotal;

      const key = `${item.nameAr} | ${item.nameTr}`;
      const prev = itemSalesMap.get(key) || {
        nameAr: item.nameAr,
        nameTr: item.nameTr,
        qty: 0,
        revenue: 0,
        unitPrice: price
      };
      prev.qty += qty;
      prev.revenue += lineTotal;
      itemSalesMap.set(key, prev);
    });
  });

  let topItem = { nameAr: 'لا يوجد', nameTr: 'Yok', qty: 0, revenue: 0 };
  const breakdownList = Array.from(itemSalesMap.values()).sort((a, b) => b.qty - a.qty);
  if (breakdownList.length > 0) {
    topItem = breakdownList[0];
  }

  return {
    totalOrders: Number(totalOrders),
    totalRevenue: Number(totalRevenue),
    topItem,
    breakdownList
  };
}

function openZReportModal() {
  const metrics = calculateZReportMetrics();
  const printSection = document.getElementById('print-section');
  const modalPreview = document.getElementById('modal-thermal-preview');
  const modalTitle = document.getElementById('receipt-modal-title');

  const now = new Date();
  const dateTimeStr = `${now.toISOString().slice(0, 10)} ${now.toTimeString().slice(0, 5)}`;

  const breakdownRowsHtml = metrics.breakdownList.length > 0
    ? metrics.breakdownList
        .map(
          (item) => `
          <tr>
            <td class="num-col" style="text-align: center; font-weight: 700;">${Number(item.qty)}</td>
            <td>
              <div style="font-weight: 700;">${escapeHtml(item.nameAr)}</div>
              <div style="font-size: 10px; color: #333;">${escapeHtml(item.nameTr)}</div>
            </td>
            <td class="num-col">${Number(item.unitPrice).toFixed(2)}</td>
            <td class="num-col" style="font-weight: 700;">${Number(item.revenue).toFixed(2)}</td>
          </tr>
        `
        )
        .join('')
    : `
      <tr>
        <td colspan="4" style="text-align: center; padding: 8px;">لا توجد طلبات مكتملة بعد</td>
      </tr>
    `;

  const zReportHtml = `
    <div class="receipt-wrapper">
      <div class="receipt-header">
        <div class="receipt-brand-ar">تقرير الإغلاق اليومي (Z-REPORT)</div>
        <div class="receipt-brand-tr">FALAFEL ALDMŞKE • GÜN SONU</div>
        <div style="font-size: 10px; margin-top: 2px;" class="ltr-text">${dateTimeStr}</div>
      </div>

      <div class="receipt-meta">
        <div class="receipt-meta-row">
          <span>إجمالي الطلبات المكتملة / Toplam Sipariş:</span>
          <strong class="ltr-text">${metrics.totalOrders}</strong>
        </div>
        <div class="receipt-meta-row">
          <span>إجمالي الإيرادات / Toplam Ciro:</span>
          <strong class="ltr-text">${metrics.totalRevenue.toFixed(2)} TL</strong>
        </div>
        <div class="receipt-meta-row" style="margin-top: 4px; padding-top: 4px; border-top: 1px dotted #000;">
          <span>الصنف الأكثر مبيعاً / En Çok Satan:</span>
          <strong>${escapeHtml(metrics.topItem.nameAr)} (${metrics.topItem.qty})</strong>
        </div>
      </div>

      <table class="receipt-table">
        <thead>
          <tr>
            <th class="num-col" style="text-align: center;">Qty<br>الكمية</th>
            <th>Item<br>الصنف</th>
            <th class="num-col">Price<br>السعر</th>
            <th class="num-col">Total<br>المجموع</th>
          </tr>
        </thead>
        <tbody>
          ${breakdownRowsHtml}
        </tbody>
      </table>

      <div class="receipt-total-block">
        <span>صافي المبيعات / NET CİRO:</span>
        <span class="ltr-text">${metrics.totalRevenue.toFixed(2)} TL</span>
      </div>

      <div class="receipt-footer">
        <div>تقرير نهاية اليوم المعتمد - نظام الأمين</div>
        <div class="ltr-text">Z-Report Verified • Falafel Al-Damashqi POS</div>
      </div>
    </div>
  `;

  if (printSection) {
    printSection.innerHTML = zReportHtml;
  }

  if (modalPreview && modalTitle) {
    modalTitle.textContent = '📊 تقرير نهاية اليوم (Z-Report 80mm)';
    modalPreview.innerHTML = zReportHtml;
    document.getElementById('receipt-modal-backdrop').classList.add('open');
  }

  showToast(`تم توليد تقرير Z-Report: ${metrics.totalOrders} طلبات مكتملة (${metrics.totalRevenue} ₺)`, 'gold');
}

function closeReceiptModal() {
  const backdrop = document.getElementById('receipt-modal-backdrop');
  if (backdrop) backdrop.classList.remove('open');
}

function triggerBrowserPrint() {
  window.print();
}

/**
 * ============================================================================
 * PRICE EDITOR & OPERATIONS GUIDE MODALS
 * ============================================================================
 */
function openPriceEditorModal() {
  const listEl = document.getElementById('price-editor-list');
  if (!listEl) return;
  listEl.innerHTML = '';

  menuData.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'price-editor-row';
    row.innerHTML = `
      <div>
        <span style="color: var(--accent-gold); font-size: 0.75rem; font-weight: 700;">[${escapeHtml(item.category)}]</span>
        <strong style="margin-right: 0.35rem;">${escapeHtml(item.nameAr)}</strong>
        <span style="color: var(--text-muted); font-size: 0.78rem; margin-right: 0.35rem;">(${escapeHtml(item.nameTr)})</span>
      </div>
      <div style="display: flex; align-items: center; gap: 0.35rem;">
        <input
          type="number"
          min="0"
          step="5"
          class="price-editor-input"
          id="price-input-${idx}"
          value="${Number(item.price)}"
        />
        <span class="ltr-text" style="font-weight: 800; color: var(--accent-gold);">₺</span>
      </div>
    `;
    listEl.appendChild(row);
  });

  document.getElementById('price-editor-backdrop').classList.add('open');
}

function closePriceEditorModal() {
  document.getElementById('price-editor-backdrop').classList.remove('open');
}

function saveUpdatedMenuPrices() {
  menuData.forEach((item, idx) => {
    const input = document.getElementById(`price-input-${idx}`);
    if (input) {
      const val = Number(input.value);
      if (!isNaN(val) && val >= 0) {
        item.price = val;
      }
    }
  });

  saveMenuToStorage();
  renderMenuView();
  renderCartView();
  closePriceEditorModal();

  if (posChannel) {
    try { posChannel.postMessage({ type: 'MENU_UPDATED' }); } catch (e) {}
  }
  showToast('تم حفظ وتحديث أسعار المنيو بنجاح ✓', 'success');
}

function resetDefaultMenuPrices() {
  menuData = JSON.parse(JSON.stringify(defaultMenuData));
  saveMenuToStorage();
  openPriceEditorModal();
  renderMenuView();
  showToast('تمت استعادة الأسعار الافتراضية للمنيو', 'gold');
}

function openGuideModal() {
  const input = document.getElementById('cloud-sync-url-input');
  if (input) input.value = state.cloudSyncUrl || '';
  document.getElementById('guide-modal-backdrop').classList.add('open');
}

function closeGuideModal() {
  document.getElementById('guide-modal-backdrop').classList.remove('open');
}

function saveCloudSyncUrl() {
  const input = document.getElementById('cloud-sync-url-input');
  const val = input ? input.value.trim().replace(/\/+$/, '') : '';
  state.cloudSyncUrl = val;
  try {
    localStorage.setItem(STORAGE_KEY_CLOUD_URL, val);
  } catch (e) {}
  showToast(val ? 'تم تفعيل رابط المزامنة السحابية بين الأجهزة ✓' : 'تم إيقاف المزامنة السحابية (العمل المحلي مفعّل)', 'success');
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * ============================================================================
 * INITIALIZATION & CROSS-TAB STORAGE SYNC
 * ============================================================================
 */
function initPosApp() {
  loadMenuFromStorage();
  loadOrdersFromStorage();
  try {
    state.cloudSyncUrl = localStorage.getItem(STORAGE_KEY_CLOUD_URL) || '';
  } catch (e) {}

  renderCategoryPills();
  renderMenuView();
  renderCartView();
  renderCashierKanban();
  updateHeaderBadges();

  // Listen for localStorage changes from another tab on the same browser
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY_ORDERS) {
      const prevCount = state.orders.length;
      loadOrdersFromStorage();
      updateHeaderBadges();
      renderCashierKanban();
      if (state.orders.length > prevCount) {
        playOrderAlertPing();
      }
    } else if (e.key === STORAGE_KEY_MENU) {
      loadMenuFromStorage();
      renderCategoryPills();
      renderMenuView();
    }
  });

  const firstGestureHandler = () => {
    if (!isAudioUnlocked) {
      unlockCashierAudio(false);
    }
    document.removeEventListener('click', firstGestureHandler);
  };
  document.addEventListener('click', firstGestureHandler, { passive: true });
}

window.addEventListener('DOMContentLoaded', initPosApp);
