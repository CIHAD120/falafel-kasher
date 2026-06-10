// --- Firebase configuration ---
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

const alertSound = new Audio('https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg');
alertSound.preload = 'auto';
alertSound.volume = 1.0;
alertSound.loop = false;

// --- COMPLETE menuData (bilingual, categorized, exact prices) ---
const menuData = [
  { category: 'فلافل Dürüm', nameAr: 'فلافل لف', nameTr: 'Falafel Dürüm', price: 100 },
  { category: 'فلافل Dürüm', nameAr: 'فلافل دبل', nameTr: 'Falafel extra Dürüm', price: 115 },
  { category: 'فلافل Dürüm', nameAr: 'فلافل مع فول', nameTr: 'Falafel ve Bakla Dürüm', price: 115 },
  { category: 'فلافل Dürüm', nameAr: 'فلافل مع بطاطا', nameTr: 'Falafel ve Patates Dürüm', price: 115 },
  { category: 'فلافل Dürüm', nameAr: 'فلافل عربي مع بطاطا', nameTr: 'Falafel Patates Durum', price: 125 },

  { category: 'شاميات', nameAr: 'فول بطحينة', nameTr: 'Tahinli yoğurtlu koru bakla', price: 145 },
  { category: 'شاميات', nameAr: 'فول مدمس بزيت', nameTr: 'Zeytin yağlı koru bakla', price: 145 },
  { category: 'شاميات', nameAr: 'فول بطحينة مهروس', nameTr: 'Tahinli koru bakla ezmesi', price: 145 },
  { category: 'شاميات', nameAr: 'فول بزيت مهروس', nameTr: 'Zeytin yağlı koru bakla ezmesi', price: 145 },
  { category: 'شاميات', nameAr: 'حمص حب بطحينة', nameTr: 'Tahinli nohut', price: 145 },
  { category: 'شاميات', nameAr: 'حمص حب بزيت', nameTr: 'Zeytin yağlı nohut', price: 145 },
  { category: 'شاميات', nameAr: 'حمص بطحينة (مسبحة)', nameTr: 'Humus', price: 140 },
  { category: 'شاميات', nameAr: 'فتة بزيت بلدي', nameTr: 'Sıvıyağlı fatte', price: 160 },
  { category: 'شاميات', nameAr: 'فتة بسمنة', nameTr: 'Tereyağlı fatte', price: 160 },
  { category: 'شاميات', nameAr: 'فتة بالكاجو', nameTr: 'Kajulu fatte', price: 245 },
  { category: 'شاميات', nameAr: 'فتة بفقسة', nameTr: 'Kıyma fatte', price: 245 },
  { category: 'شاميات', nameAr: 'فتة باللحمة', nameTr: 'Kıymalı fatte', price: 270 },
  { category: 'شاميات', nameAr: 'مسبحة باللحمة', nameTr: 'Kıymalı humus', price: 245 },
  { category: 'شاميات', nameAr: 'مسبحة بالكاجو', nameTr: 'Kajulu nohut', price: 250 },
  { category: 'شاميات', nameAr: 'متبل باذنجان', nameTr: 'Tahinli yoğurtlu patlıcan', price: 145 },
  { category: 'شاميات', nameAr: 'فلافل 6 قرص', nameTr: '6 adet Falafel', price: 110 },
  { category: 'شاميات', nameAr: 'فلافل 10 قرص', nameTr: '10 adet Falafel', price: 160, notes: 'STRICT_10_PIECES' },

  { category: 'غربي - Dürüm', nameAr: 'كريسبي Dürüm', nameTr: 'Acılı çıtır tavuk Dürüm', price: 140 },
  { category: 'غربي - وجبة', nameAr: 'كريسبي وجبة', nameTr: 'Acılı çıtır tavuk Porsiyon', price: 235 },
  { category: 'غربي - Dürüm', nameAr: 'سكالوب Dürüm', nameTr: 'Galata ünlü çıtır tavuk Dürüm', price: 140 },
  { category: 'غربي - وجبة', nameAr: 'سكالوب وجبة', nameTr: 'Galata ünlü çıtır tavuk Porsiyon', price: 235 },
  { category: 'غربي - Dürüm', nameAr: 'زنجر Dürüm', nameTr: 'Çıtır tavuk göğsü kızarması Dürüm', price: 140 },
  { category: 'غربي - وجبة', nameAr: 'زنجر وجبة', nameTr: 'Çıtır tavuk göğsü kızarması Porsiyon', price: 240 },
  { category: 'غربي - Dürüm', nameAr: 'فاهيتا Dürüm', nameTr: 'Fajita Dürüm', price: 140 },
  { category: 'غربي - وجبة', nameAr: 'فاهيتا وجبة', nameTr: 'Fajita Porsiyon', price: 240 },
  { category: 'غربي - Dürüm', nameAr: 'فرانسيسكو Dürüm', nameTr: 'Mantar kaşarlı sote Dürüm', price: 140 },
  { category: 'غربي - وجبة', nameAr: 'فرانسيسكو وجبة', nameTr: 'Mantar kaşarlı سote Porsiyon', price: 235 },
  { category: 'غربي - Dürüm', nameAr: 'مكسيكي Dürüm', nameTr: 'Biberli tavuk sote acılı Dürüm', price: 140 },
  { category: 'غربي - وجبة', nameAr: 'مكسيكي وجبة', nameTr: 'Biberli tavuk sote acılı Porsiyon', price: 235 },
  { category: 'غربي - Dürüm', nameAr: 'شيش Dürüm', nameTr: 'Tavuk şiş Dürüm', price: 115 },
  { category: 'غربي - وجبة', nameAr: 'شيش وجبة', nameTr: 'Tavuk şiş Porsiyon', price: 160 },
  { category: 'غربي - Dürüm', nameAr: 'بطاطا Dürüm', nameTr: 'Patates Dürüm', price: 150 },
  { category: 'غربي - وجبة', nameAr: 'بطاطا وجبة', nameTr: 'Patates Porsiyon', price: 180 },
  { category: 'غربي - Dürüm', nameAr: 'بطاطا مع قشقوان Dürüm', nameTr: 'Kaşarlı Patates Dürüm', price: 175 },
  { category: 'غربي - وجبة', nameAr: 'بطاطا مع قشقوان وجبة', nameTr: 'Kaşarlı Patates Porsiyon', price: 220 },

  { category: 'سلطات', nameAr: 'سلطة شرقية', nameTr: 'Mevsim salatası', price: 130 },
  { category: 'سلطات', nameAr: 'فتوش', nameTr: 'Fettuş', price: 130 },
  { category: 'سلطات', nameAr: 'تبولة', nameTr: 'Tabboule', price: 140 },
  { category: 'سلطات', nameAr: 'سلطة روسية', nameTr: 'Rus salatası', price: 130 },
  { category: 'سلطات', nameAr: 'زينة خضرة', nameTr: 'Yeşillik', price: 30 },
  { category: 'سلطات', nameAr: 'سرفيس', nameTr: 'Servis', price: 30 },
  { category: 'سلطات', nameAr: 'مايونيز', nameTr: 'Mayonez', price: 25 },

  // --- قسم المشروبات ---
  { category: 'مشروبات', nameAr: 'كولا', nameTr: 'Kola', price: 50 },
  { category: 'مشروبات', nameAr: 'فانتا', nameTr: 'Fanta', price: 50 },
  { category: 'مشروبات', nameAr: 'عيران', nameTr: 'Ayran', price: 25 },
  { category: 'مشروبات', nameAr: 'افشار', nameTr: 'Avşar', price: 35 },
  { category: 'مشروبات', nameAr: 'شاملجا', nameTr: 'Çamlıca', price: 40 },
  { category: 'مشروبات', nameAr: 'كازوز', nameTr: 'Gazoz', price: 40 },
  { category: 'مشروبات', nameAr: 'ماء', nameTr: 'Su', price: 15 },
  { category: 'مشروبات', nameAr: 'شاي', nameTr: 'Çay', price: 20 },
];

// helper: return bilingual label
function bilingualLabel(item) {
    return `${item.nameAr} / ${item.nameTr}`;
}

// helper: convert defaultModifiers array to modifiers object
function modifiersFromDefaults(defaults) {
    const mod = { cheese: true, lettuce: true };
    if (!Array.isArray(defaults)) return mod;
    defaults.forEach(d => {
        if (typeof d !== 'string') return;
        const lowered = d.trim();
        if (/بدون\s*جبن/.test(lowered)) mod.cheese = false;
        if (/بدون\s*خس/.test(lowered)) mod.lettuce = false;
        if (/no\s*cheese/i.test(lowered)) mod.cheese = false;
        if (/no\s*lettuce/i.test(lowered)) mod.lettuce = false;
    });
    return mod;
}

const bilingualMap = {
    items: {
        'فلافل Dürüm': 'فلافل Dürüm / Falafel Dürüm',
        'إسكالوب Dürüm': 'إسكالوب Dürüm / Escalope Dürüm',
        'ماء بارد': 'ماء بارد / Soğuk Su',
        'شاي مثلج': 'شاي مثلج / Buzlu Çay',
        'بطاطا مقلية': 'بطاطا مقلية / Patates Kızartması',
        'صلصة حارة': 'صلصة حارة / Acı Sos'
    },
    modifiers: {
        cheese: 'جبنة / Peynir',
        lettuce: 'خس / Marul',
        exclusion: 'بدون جبنة، بدون خس / Peynirsiz, Marulsuz'
    }
};

let activeCategory = 'Dürüm';
let cart = [];
let activeModifierSelection = { cheese: false, lettuce: false };
let pendingSpecialItem = null;
let renderedOrders = {};
let lastAddedItemId = null;

function openWaiterMode() {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('cashier-screen').classList.remove('active');
    document.getElementById('waiter-screen').classList.add('active');
    renderMenu();
}

function openCashierMode() {
    document.getElementById('login-screen').classList.remove('active');
    document.getElementById('waiter-screen').classList.remove('active');
    document.getElementById('cashier-screen').classList.add('active');
    try {
        alertSound.play().then(() => {
            alertSound.pause();
            alertSound.currentTime = 0;
        }).catch(e => console.log('Audio unlock failed:', e));
    } catch (e) {
        console.log('Audio unlock exception:', e);
    }
    renderCashierSummary();
    listenForNewOrders();
}

function switchCategory(category) {
    activeCategory = category;
    document.querySelectorAll('.category-tabs .tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
    renderMenu();
}

function renderMenu() {
    const container = document.getElementById('menu-grid');
    if (!container) return;
    container.innerHTML = '';

    // Group items by category preserving order
    const grouped = {};
    menuData.forEach(item => {
        if (!grouped[item.category]) grouped[item.category] = [];
        grouped[item.category].push(item);
    });

    Object.keys(grouped).forEach(categoryName => {
        const categoryGroup = document.createElement('section');
        categoryGroup.className = 'menu-category-group';

        const header = document.createElement('div');
        header.className = 'menu-category-header';
        header.innerHTML = `<h3>${categoryName}</h3>`;
        categoryGroup.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'menu-category-grid';

        grouped[categoryName].forEach(item => {
            const listItem = document.createElement('article');
            listItem.className = 'menu-item';
            const label = bilingualLabel(item);
            listItem.innerHTML = `
                <div class="menu-item-content">
                    <div class="menu-item-text">
                        <span class="menu-item-name">${item.nameAr}</span>
                        <span class="menu-item-subtitle">${item.nameTr}</span>
                    </div>
                    <span class="menu-item-price">${Number(item.price).toFixed(0)} ليرة</span>
                </div>
                <button class="menu-add-btn">+</button>
            `;

            const addBtn = listItem.querySelector('.menu-add-btn');
            addBtn.addEventListener('click', () => handleAddItem(item));

            grid.appendChild(listItem);
        });

        categoryGroup.appendChild(grid);
        container.appendChild(categoryGroup);
    });
}

function createMenuThumbHTML(item) {
    const imageSrc = item.imagePath ? String(item.imagePath).trim() : '';
    const fallbackChar = (item.nameAr && item.nameAr.charAt(0)) || 'ف';
    const pieceBadge = /فلافل/i.test(item.nameAr || '') ? `<span class="falafel-count">10 قطع</span>` : '';
    if (imageSrc) {
        return `<img src="${imageSrc}" alt="${bilingualLabel(item)}" width="720" height="540" loading="lazy" />${pieceBadge}`;
    }
    return `<div class="menu-thumb-fallback">${fallbackChar}</div>${pieceBadge}`;
}

function addNewMenuItem(name, price, imagePath = '', defaultExclusions = null) {
    if (typeof name !== 'string' || !name.trim()) {
        throw new Error('اسم المنتج مطلوب لإضافته إلى القائمة');
    }
    const trimmedName = String(name).trim();
    const normalizedName = trimmedName.replace(/sandwich/gi, 'Dürüm');
    const ensuredDurum = normalizedName.includes('Dürüm') ? normalizedName : `${normalizedName} Dürüm`;
    const finalName = ensuredDurum;

    const category = resolveMenuCategory(finalName);
    const exclusions = defaultExclusions ?? (finalName.includes('Escalope Dürüm')
        ? { cheese: false, lettuce: false }
        : { cheese: true, lettuce: true });

    const item = {
        name: finalName,
        label: finalName,
        price: Number(price),
        imagePath: String(imagePath).trim(),
        thumb: finalName.charAt(0),
        special: finalName.includes('Escalope Dürüm'),
        defaultExclusions: exclusions,
        modifiers: { ...exclusions }
    };

    if (/falafel/i.test(finalName) || /فلافل/.test(finalName)) {
        item.falafelPieces = 10;
    }

    let categoryData = menuData.find(cat => cat.category === category);
    if (!categoryData) {
        categoryData = { category, items: [] };
        menuData.push(categoryData);
    }
    categoryData.items.push(item);
    if (activeCategory === category) {
        renderMenu();
    }
    return item;
}

function resolveMenuCategory(name) {
    const lower = name.toLowerCase();
    if (/drink|ماء|شاي|juice|عصير|كوكاكولا|بيبسي/.test(lower)) return 'Drinks';
    if (/potato|fries|بطاطا|صلصة|إضافات|sauce/.test(lower)) return 'Extras';
    return 'Dürüm';
}

function handleAddItem(item) {
    const displayName = bilingualLabel(item);
    const price = Number(item.price);
    // If item defines defaultModifiers, apply them automatically (e.g., اسكالوب)
    if (Array.isArray(item.defaultModifiers) && item.defaultModifiers.length > 0) {
        const mods = modifiersFromDefaults(item.defaultModifiers);
        addToCart(displayName, price, mods);
        return;
    }
    // default behavior
    addToCart(displayName, price, { cheese: true, lettuce: true });
}

function openModifierModal() {
    document.getElementById('modifier-modal').classList.remove('hidden');
    document.getElementById('modifier-modal').setAttribute('aria-hidden', 'false');
    updateModifierButtons();
}

function closeModifierModal() {
    document.getElementById('modifier-modal').classList.add('hidden');
    document.getElementById('modifier-modal').setAttribute('aria-hidden', 'true');
    pendingSpecialItem = null;
}

function toggleModifierChip(key) {
    activeModifierSelection[key] = !activeModifierSelection[key];
    updateModifierButtons();
}

function updateModifierButtons() {
    ['cheese', 'lettuce'].forEach(key => {
        const button = document.getElementById(`modifier-${key}`);
        if (!button) return;
        button.classList.toggle('active', activeModifierSelection[key]);
    });
}

function confirmModifierSelection() {
    if (!pendingSpecialItem) return;
    addToCart(pendingSpecialItem.name, pendingSpecialItem.price, {
        cheese: activeModifierSelection.cheese,
        lettuce: activeModifierSelection.lettuce
    });
    closeModifierModal();
}

function addToCart(name, price, modifiers = { cheese: true, lettuce: true }) {
    const item = {
        id: `cart-${Date.now()}-${Math.round(Math.random() * 10000)}`,
        name,
        price: Number(price),
        quantity: 1,
        modifiers: { cheese: Boolean(modifiers.cheese), lettuce: Boolean(modifiers.lettuce) }
    };
    lastAddedItemId = item.id;
    cart.push(item);
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cart-items-sheet');
    container.innerHTML = '';
    const justAddedId = lastAddedItemId;

    if (cart.length === 0) {
        container.innerHTML = '<div class="order-board empty">السلة فارغة. أضف عناصر من القائمة.</div>';
    }

    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item-sheet';
        if (item.id === justAddedId) {
            itemEl.classList.add('newly-added');
        }
        itemEl.innerHTML = `
            <div class="cart-item-top">
                <div class="cart-item-meta">
                    <span class="cart-item-title">${item.name}</span>
                </div>
                <button class="ghost-btn" onclick="removeCartItem('${item.id}')">🗑️</button>
            </div>
            <div class="cart-item-bottom">
                <div class="qty-controls">
                    <button onclick="updateCartQuantity('${item.id}', -1)">-</button>
                    <span class="qty-counter">${item.quantity}</span>
                    <button onclick="updateCartQuantity('${item.id}', 1)">+</button>
                </div>
                <span class="badge">${item.price * item.quantity} ليرة</span>
            </div>
        `;
        container.appendChild(itemEl);
        if (item.id === justAddedId) {
            window.requestAnimationFrame(() => {
                itemEl.classList.remove('newly-added');
            });
        }
    });

    lastAddedItemId = null;
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('sheet-total').textContent = `${calculateTotal()} ليرة`;
}

function updateCartQuantity(itemId, delta) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    item.quantity = Math.max(1, item.quantity + delta);
    renderCart();
}

function removeCartItem(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    renderCart();
}

function calculateTotal() {
    return cart.reduce((total, item) => {
        const price = Number(item.price);
        const quantity = Number(item.quantity);
        return total + (Number.isFinite(price) ? price : 0) * (Number.isFinite(quantity) ? quantity : 0);
    }, 0);
}

function openCartView() {
    const menuView = document.getElementById('menu-view');
    const cartView = document.getElementById('cart-view');
    if (menuView) menuView.classList.remove('active');
    if (cartView) cartView.classList.add('active');
    renderCart();
}

function openMenuView() {
    const menuView = document.getElementById('menu-view');
    const cartView = document.getElementById('cart-view');
    if (cartView) cartView.classList.remove('active');
    if (menuView) menuView.classList.add('active');
}

function isEscalopeDurum(name) {
    return name === 'إسكالوب Dürüm' || name === 'Escalope Dürüm';
}

function getBilingualItemName(name) {
    return bilingualMap.items[name] || `${name} / ${name}`;
}

function getBilingualModifierText(modifiers) {
    if (!modifiers) return '';
    if (!modifiers.cheese && !modifiers.lettuce) return bilingualMap.modifiers.exclusion;
    const parts = [];
    if (modifiers.cheese) parts.push(bilingualMap.modifiers.cheese);
    if (modifiers.lettuce) parts.push(bilingualMap.modifiers.lettuce);
    return parts.join('، ');
}

function validateOrder() {
    if (cart.length === 0) return { valid: false, message: 'السلة فارغة! الرجاء إضافة عناصر.' };
    const tableNumberValue = document.getElementById('table-number')?.value;
    if (!tableNumberValue) return { valid: false, message: 'اختر رقم الطاولة أولاً.' };
    const tableNumber = Number(tableNumberValue);
    if (!Number.isInteger(tableNumber) || tableNumber < 1) return { valid: false, message: 'رقم الطاولة غير صالح.' };
    return { valid: true, tableNumber };
}

function sendOrderToCashier() {
    const validation = validateOrder();
    if (!validation.valid) {
        alert(validation.message);
        return;
    }

    const orderDate = new Date();
    const orderPayload = {
        orderId: '',
        tableNumber: validation.tableNumber,
        date: orderDate.toLocaleDateString('ar-EG'),
        time: orderDate.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
        items: cart.map(item => ({
            name: item.name,
            price: Number(item.price),
            quantity: Number(item.quantity),
            modifiers: { ...item.modifiers }
        })),
        total: Number(calculateTotal()),
        status: 'جديد'
    };

    try {
        const newOrderRef = db.ref('orders').push();
        orderPayload.orderId = newOrderRef.key || '';
        newOrderRef.set(orderPayload).then(() => {
            alert('تم إرسال الطلب إلى المطبخ بنجاح!');
            clearCart();
            openMenuView();
        }).catch(error => {
            console.error('خطأ في إرسال الطلب إلى Firebase:', error);
            alert('فشل الإرسال. حاول مرة أخرى.');
        });
    } catch (error) {
        console.error('خطأ غير متوقع أثناء الإرسال:', error);
        alert('حدث خطأ غير متوقع.');
    }
}

function listenForNewOrders() {
    try {
        const ordersRef = db.ref('orders');
        ordersRef.off();

        initializeOrderBoard();

        ordersRef.once('value').then(snapshot => {
            if (!snapshot.exists()) {
                renderCashierSummary();
                return;
            }
            snapshot.forEach(child => {
                const order = child.val();
                if (order) {
                    renderOrderCard(order, false);
                }
            });
            updateCashierStats();
        }).catch(error => {
            console.error('خطأ في تحميل الطلبات:', error);
            renderCashierSummary();
        });

        ordersRef.on('child_added', snapshot => {
            const order = snapshot.val();
            if (!order) return;
            const id = order.orderId || snapshot.key;
            if (renderedOrders[id]) return;
            renderOrderCard(order, true);
            try {
                alertSound.currentTime = 0;
                alertSound.play();
            } catch (error) {
                console.error('Audio blocked by browser:', error);
            }
            updateCashierStats();
        });

        ordersRef.on('child_changed', snapshot => {
            const order = snapshot.val();
            if (!order) return;
            updateOrderCard(order);
            updateCashierStats();
        });

        ordersRef.on('child_removed', snapshot => {
            removeOrderCard(snapshot.key || '');
            updateCashierStats();
        });
    } catch (error) {
        console.error('خطأ في الاستماع للطلبات:', error);
    }
}

function initializeOrderBoard() {
    ['new', 'preparing', 'completed'].forEach(statusKey => {
        const list = document.getElementById(`${statusKey}-orders-list`);
        if (list) {
            list.innerHTML = '<div class="kanban-empty">لا توجد طلبات في هذا القسم بعد.</div>';
        }
    });
    updateColumnCounts();
}

function renderOrderCard(order, isNew = false) {
    const orderId = order.orderId || order.id || 'N/A';
    const status = order.status || 'جديد';
    const listId = getStatusColumnId(status);
    const container = document.getElementById(listId);
    if (!container) return;

    renderedOrders[orderId] = order;
    const existing = document.querySelector(`.order-card[data-order-id="${orderId}"]`);
    if (existing) {
        existing.remove();
    }

    const canMoveToPrep = status === 'جديد';
    const canComplete = status !== 'جاهز';

    const card = document.createElement('article');
    card.className = `order-card animate-move${isNew ? ' pulse' : ''}`;
    card.dataset.orderId = orderId;
    card.dataset.total = Number(order.total) || 0;
    card.dataset.status = status;
    card.innerHTML = `
        <div class="order-top">
            <div>
                <span class="eyebrow">طلب رقم ${orderId}</span>
                <h3>طاولة ${order.tableNumber}</h3>
            </div>
            <span class="order-badge">${status}</span>
        </div>
        <div class="order-items">
            ${Array.isArray(order.items) ? order.items.map(item => `
                <div class="order-item">
                    <span>${Number(item.quantity)}x</span>
                    <div class="order-item-info">
                        <strong>${getBilingualItemName(item.name)}</strong>
                        <span class="order-modifier">${getBilingualModifierText(item.modifiers)}</span>
                    </div>
                    <span>${Number(item.price) * Number(item.quantity)} TL</span>
                </div>
            `).join('') : ''}
        </div>
        <div class="order-footer">
            <strong>${Number(order.total) || 0} TL</strong>
            <div class="order-actions">
                ${canMoveToPrep ? `<button class="btn-primary" onclick="moveOrderToPreparing('${orderId}')">انقل للتحضير</button>` : `<button class="secondary-btn" disabled>في التحضير</button>`}
                ${canComplete ? `<button class="btn-danger" onclick="completeOrderAndPrint('${orderId}')">أكمل واطبع</button>` : `<button class="btn-primary" onclick="printReceiptByOrderId('${orderId}')">طباعة مرة أخرى</button>`}
            </div>
        </div>
    `;

    if (container.querySelector('.kanban-empty')) {
        container.innerHTML = '';
    }
    container.prepend(card);
    if (isNew) {
        window.setTimeout(() => card.classList.remove('pulse'), 1800);
    }
    updateColumnCounts();
}

function getStatusColumnId(status) {
    if (status === 'قيد التحضير') return 'preparing-orders-list';
    if (status === 'جاهز') return 'completed-orders-list';
    return 'new-orders-list';
}

function updateOrderCard(order) {
    const orderId = order.orderId || order.id || '';
    const existing = document.querySelector(`.order-card[data-order-id="${orderId}"]`);
    if (existing) {
        existing.remove();
    }
    renderOrderCard(order, false);
}

function removeOrderCard(orderId) {
    const existing = document.querySelector(`.order-card[data-order-id="${orderId}"]`);
    if (existing) {
        existing.remove();
    }
    updateColumnCounts();
    renderCashierSummary();
}

function moveOrderToPreparing(orderId) {
    return updateOrderStatus(orderId, 'قيد التحضير');
}

function completeOrderAndPrint(orderId) {
    updateOrderStatus(orderId, 'جاهز').then(order => {
        if (order) {
            printReceipt(order);
        }
    }).catch(error => {
        console.error('فشل إنهاء الطلب:', error);
    });
}

function updateOrderStatus(orderId, newStatus) {
    const orderRef = db.ref(`orders/${orderId}`);
    return orderRef.once('value').then(snapshot => {
        const existingOrder = snapshot.val();
        if (!existingOrder) {
            throw new Error('الطلب غير موجود في قاعدة البيانات');
        }
        const updatedOrder = { ...existingOrder, status: newStatus };
        return orderRef.update({ status: newStatus }).then(() => {
            renderedOrders[orderId] = updatedOrder;
            return updatedOrder;
        });
    });
}

function closeRegisterReport() {
    const today = new Date().toLocaleDateString('ar-EG');
    const ordersRef = db.ref('orders').orderByChild('date').equalTo(today);

    ordersRef.once('value').then(snapshot => {
        const completedOrders = [];
        snapshot.forEach(child => {
            const order = child.val();
            if (order && order.status === 'جاهز') {
                completedOrders.push(order);
            }
        });

        if (completedOrders.length === 0) {
            alert('لا توجد طلبات مكتملة اليوم لطباعة تقرير Z.');
            return;
        }

        const reportData = computeZReport(completedOrders);
        printZReport(reportData);
    }).catch(error => {
        console.error('فشل تحميل الطلبات لتقرير Z:', error);
        alert('حدث خطأ أثناء تحضير تقرير الإغلاق. حاول مرة أخرى.');
    });
}

function computeZReport(orders) {
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => {
        const safeTotal = Number(order.total);
        return sum + (Number.isFinite(safeTotal) ? safeTotal : 0);
    }, 0);

    const itemCounts = {};
    orders.forEach(order => {
        if (!Array.isArray(order.items)) return;
        order.items.forEach(item => {
            const name = item.name || 'غير معروف';
            const quantity = Number(item.quantity);
            if (!Number.isFinite(quantity) || quantity <= 0) return;
            itemCounts[name] = (itemCounts[name] || 0) + quantity;
        });
    });

    let mostPopularItem = 'لا يوجد';
    let maxCount = 0;
    Object.entries(itemCounts).forEach(([name, count]) => {
        if (count > maxCount) {
            maxCount = count;
            mostPopularItem = name;
        }
    });

    return {
        totalOrders,
        totalRevenue,
        mostPopularItem,
        itemCounts,
        date: new Date().toLocaleDateString('ar-EG'),
        generatedAt: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })
    };
}

function updateColumnCounts() {
    ['new', 'preparing', 'completed'].forEach(statusKey => {
        const list = document.getElementById(`${statusKey}-orders-list`);
        const countElement = document.getElementById(`${statusKey}-orders-count`);
        if (!list || !countElement) return;
        const cards = Array.from(list.children).filter(child => child.matches('.order-card'));
        countElement.textContent = cards.length;
        if (cards.length === 0 && !list.querySelector('.kanban-empty')) {
            list.innerHTML = '<div class="kanban-empty">لا توجد طلبات في هذا القسم بعد.</div>';
        }
    });
}

function renderCashierSummary() {
    const board = document.getElementById('order-board');
    if (!board) return;
    const cards = board.querySelectorAll('.order-card');
    if (cards.length === 0) {
        initializeOrderBoard();
        document.getElementById('live-orders-count').textContent = '0';
        document.getElementById('day-total').textContent = '0 ليرة';
    }
}

function printZReport(report) {
    try {
        const printSection = document.getElementById('print-section');
        if (!printSection) throw new Error('عنصر الطباعة غير موجود');

        const itemsSummary = Object.entries(report.itemCounts)
            .map(([name, qty]) => `
                <div class="z-report-item-row">
                    <span class="z-report-item-name">${getBilingualItemName(name)}</span>
                    <span class="z-report-item-qty">${qty} pcs</span>
                </div>
            `).join('');

        const receiptHTML = `
            <div class="z-report-print">
                <div class="receipt-header">
                    <div class="receipt-logo">ف</div>
                    <div>
                        <div class="brand-name">فلافل الدمشقي - Z-Report</div>
                        <div class="brand-name-en">Falafel Al-Damashqi</div>
                    </div>
                </div>
                <div class="receipt-meta">
                    <div><span>التاريخ:</span><strong>${report.date}</strong></div>
                    <div><span>الوقت:</span><strong>${report.generatedAt}</strong></div>
                </div>
                <div class="receipt-summary">
                    <div class="label">عدد الطلبات</div>
                    <div class="value">${report.totalOrders}</div>
                    <div class="label">الإيرادات</div>
                    <div class="value">${report.totalRevenue} TL</div>
                    <div class="label">الأكثر طلباً</div>
                    <div class="value">${getBilingualItemName(report.mostPopularItem)}</div>
                </div>
                <div class="receipt-divider"></div>
                <div class="z-report-items">
                    ${itemsSummary}
                </div>
                <div class="receipt-footer">تقرير يومي رسمي - End of Day Z-Report</div>
            </div>
        `;

        printSection.innerHTML = receiptHTML;
        window.print();
    } catch (error) {
        console.error('خطأ في إنشاء تقرير Z للطباعة:', error);
        alert('فشل إعداد تقرير Z للطباعة.');
    }
}

function updateCashierStats() {
    const board = document.getElementById('order-board');
    const cards = board ? board.querySelectorAll('.order-card') : [];
    const count = cards.length;
    let total = 0;
    cards.forEach(card => {
        const value = Number(card.dataset.total);
        if (Number.isFinite(value)) total += value;
    });
    document.getElementById('live-orders-count').textContent = count;
    document.getElementById('day-total').textContent = `${total} ليرة`;
    updateColumnCounts();
}

function printReceiptByOrderId(orderId) {
    const order = renderedOrders[orderId];
    if (!order) {
        alert('طلب الطباعة غير موجود. حاول مرة أخرى.');
        return;
    }
    printReceipt(order);
}

function printReceipt(order) {
    try {
        const printSection = document.getElementById('print-section');
        if (!printSection) throw new Error('عنصر الطباعة غير موجود');

        const totalAmount = Number(order.total);
        if (!Number.isFinite(totalAmount)) throw new Error('المجموع الكلي غير صالح للطباعة');

        const items = Array.isArray(order.items) ? order.items : [];
        const orderId = order.orderId || order.id || 'N/A';
        const orderDate = order.date || new Date().toLocaleDateString('ar-EG');
        const orderTime = order.time || new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

        const itemsHTML = items.map(item => {
            const quantity = Number(item.quantity);
            const price = Number(item.price);
            const lineTotal = Number.isFinite(quantity) && Number.isFinite(price) ? quantity * price : 0;
            const modifierText = getBilingualModifierText(item.modifiers);
            return `
                <div class="grid-cell qty">${quantity}</div>
                <div class="grid-cell item">${getBilingualItemName(item.name)}</div>
                <div class="grid-cell price">${price} TL</div>
                <div class="grid-cell total">${lineTotal} TL</div>
                ${modifierText ? `
                    <div class="grid-cell qty"></div>
                    <div class="grid-cell item item-subrow">${modifierText}</div>
                    <div class="grid-cell price"></div>
                    <div class="grid-cell total"></div>
                ` : ''}
            `;
        }).join('');

        const receiptHTML = `
            <div class="receipt-print">
                <div class="receipt-header">
                    <div class="receipt-logo">ف</div>
                    <div>
                        <div class="brand-name">فلافل الدمشقي</div>
                        <div class="brand-name-en">Falafel Al-Damashqi</div>
                    </div>
                </div>
                <div class="receipt-meta">
                    <div><span>التاريخ:</span> <strong>${orderDate}</strong></div>
                    <div><span>الوقت:</span> <strong>${orderTime}</strong></div>
                    <div><span>رقم الطلب:</span> <strong>${orderId}</strong></div>
                    <div><span>الطاولة:</span> <strong>${order.tableNumber}</strong></div>
                </div>
                <div class="receipt-grid">
                    <div class="grid-header qty">QTY</div>
                    <div class="grid-header item">ITEM</div>
                    <div class="grid-header price">PRICE</div>
                    <div class="grid-header total">TOTAL</div>
                    ${itemsHTML}
                </div>
                <div class="receipt-divider"></div>
                <div class="receipt-summary">
                    <div class="label">المجموع الفرعي / Ara Toplam</div>
                    <div class="value">${totalAmount} TL</div>
                    <div class="label">المجموع الكلي / Toplam Tutar</div>
                    <div class="value">${totalAmount} TL</div>
                </div>
                <div class="receipt-footer">شكراً لزيارتكم - Afiyet Olsun</div>
            </div>
        `;

        printSection.innerHTML = receiptHTML;
        window.print();
    } catch (error) {
        console.error('خطأ في إنشاء الفاتورة للطباعة:', error);
    }
}

function clearCart() {
    cart = [];
    document.getElementById('cart-count').textContent = '0';
    renderCart();
}

function renderCashierSummary() {
    const board = document.getElementById('order-board');
    if (!board.innerHTML.trim()) {
        board.classList.add('empty');
        board.textContent = 'لا توجد طلبات واردة حتى الآن.';
    }
}

renderMenu();
renderCart();
