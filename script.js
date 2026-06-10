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

const menuData = [
    {
        category: 'Dürüm',
        items: [
            { name: 'فلافل Dürüm', price: 60, label: 'فلافل Dürüm', thumb: 'ف' },
            { name: 'إسكالوب Dürüm', price: 90, label: 'إسكالوب Dürüm', thumb: 'إ', special: true }
        ]
    },
    {
        category: 'Drinks',
        items: [
            { name: 'ماء بارد', price: 10, label: 'ماء بارد', thumb: 'م' },
            { name: 'شاي مثلج', price: 25, label: 'شاي مثلج', thumb: 'ش' }
        ]
    },
    {
        category: 'Extras',
        items: [
            { name: 'بطاطا مقلية', price: 30, label: 'بطاطا مقلية', thumb: 'ب' },
            { name: 'صلصة حارة', price: 8, label: 'صلصة حارة', thumb: 'ص' }
        ]
    }
];

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
    container.innerHTML = '';
    const category = menuData.find(cat => cat.category === activeCategory);
    if (!category) return;

    category.items.forEach(item => {
        const card = document.createElement('article');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="menu-thumb">${item.thumb}</div>
            <div class="menu-copy">
                <span class="menu-name">${item.label}</span>
                <span class="menu-price">${item.price} ليرة</span>
            </div>
            <div class="menu-action">
                <button class="menu-add-btn" onclick="handleAddItem('${item.name}', ${item.price}, ${item.special ? 'true' : 'false'})">+</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function handleAddItem(name, price, special) {
    if (special) {
        pendingSpecialItem = { name, price };
        activeModifierSelection = { cheese: false, lettuce: false };
        openModifierModal();
        return;
    }
    addToCart(name, price, { cheese: true, lettuce: true });
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
        id: Date.now() + Math.random(),
        name,
        price: Number(price),
        quantity: 1,
        modifiers: { cheese: Boolean(modifiers.cheese), lettuce: Boolean(modifiers.lettuce) }
    };
    cart.push(item);
    renderCart();
    toggleBottomSheet(true);
}

function renderCart() {
    const container = document.getElementById('cart-items-sheet');
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = '<div class="order-board empty">السلة فارغة. أضف عناصر من القائمة.</div>';
    }

    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item-sheet';
        itemEl.innerHTML = `
            <div class="cart-item-top">
                <div class="cart-item-meta">
                    <span class="cart-item-title">${item.name}</span>
                    <span class="cart-item-modifier">${getBilingualModifierText(item.modifiers)}</span>
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
    });

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

function toggleBottomSheet(show) {
    const sheet = document.getElementById('cart-sheet');
    const openState = show === undefined ? !sheet.classList.contains('open') : show;
    sheet.classList.toggle('open', openState);
    sheet.setAttribute('aria-hidden', !openState);
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
            toggleBottomSheet(false);
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
    card.className = `order-card animate-move`;
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

        let receiptHTML = `
            <div class="receipt-print">
                <div class="receipt-header">
                    <div class="receipt-logo">ف</div>
                    <div>
                        <div class="brand-name">فلافل الدمشقي</div>
                        <div class="brand-name-en">Falafel Al-Damashqi</div>
                    </div>
                </div>
                <div class="receipt-meta">
                    <div><span>التاريخ:</span><strong>${orderDate}</strong></div>
                    <div><span>الوقت:</span><strong>${orderTime}</strong></div>
                    <div><span>رقم الطلب:</span><strong>${orderId}</strong></div>
                    <div><span>طاولة:</span><strong>${order.tableNumber}</strong></div>
                </div>
                <div class="receipt-grid">
                    <div class="grid-header qty">QTY</div>
                    <div class="grid-header item">ITEM</div>
                    <div class="grid-header price">PRICE</div>
                    <div class="grid-header total">TOTAL</div>
                    ${items.map(item => {
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
                    }).join('')}
                </div>
                <div class="receipt-divider"></div>
                <div class="receipt-summary">
                    <div class="label">Subtotal</div>
                    <div class="value">${totalAmount} TL</div>
                    <div class="label grand-label">المجموع الكلي / Toplam Tutar</div>
                    <div class="value grand-total">${totalAmount} TL</div>
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
