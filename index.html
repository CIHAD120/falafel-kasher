<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <title>Falafel Al-Damashqi POS | نظام نقاط البيع - فلافل الدمشقي</title>
  <!-- Google Fonts for High-Legibility Arabic (Cairo) & Turkish/Latin (Inter) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- ربط ملف التصميم الخارجي -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- ==========================================================================
       TOP APPLICATION BAR (Role Navigation, Cart Counter & Cashier Audio Login)
       ========================================================================== -->
  <header class="app-header">
    <div class="header-inner">
      <div class="brand-block">
        <div class="brand-crest" aria-hidden="true">ف</div>
        <div class="brand-titles">
          <h1>
            <span>فلافل الدمشقي</span>
            <span class="gold-text ltr-text">FALAFEL ALDMŞKE</span>
          </h1>
          <span class="brand-subtitle">الطلبات: 05541422220 • الإدارة: 05395226388 • المنيو الكامل (65 صنفاً)</span>
        </div>
      </div>

      <!-- SPA View / Role Switcher -->
      <nav class="role-switcher" aria-label="تبديل الواجهة">
        <button type="button" id="tab-waiter-mode" class="role-tab active" onclick="switchRoleMode('waiter')">
          <span>📱 النادل / Garson</span>
        </button>
        <button type="button" id="tab-cashier-mode" class="role-tab" onclick="switchRoleMode('cashier')">
          <span>🖥️ الكاشير / Kasa</span>
          <span id="header-new-orders-badge" class="cart-count-badge">0</span>
        </button>
      </nav>

      <!-- Quick Actions: Waiter Full-Screen Cart Toggle, Price Editor, Guide & Audio Bell Unlock -->
      <div class="header-actions">
        <button type="button" id="btn-header-cart" class="btn-cart-toggle" onclick="toggleWaiterSubView('cart')">
          <span>🛒 السلة / Sepet</span>
          <span id="header-cart-count" class="cart-count-badge">0</span>
          <span id="header-cart-total" class="ltr-text" style="color: var(--accent-gold);">0 ₺</span>
        </button>

        <button type="button" class="btn-audio-unlock" onclick="openPriceEditorModal()">
          <span>⚙️ الأسعار / Fiyatlar</span>
        </button>

        <button type="button" class="btn-audio-unlock" onclick="openGuideModal()">
          <span>📖 دليل التشغيل والربط</span>
        </button>

        <button type="button" id="btn-cashier-login-audio" class="btn-audio-unlock" onclick="unlockCashierAudio(true)">
          <span id="audio-status-icon">🔇</span>
          <span id="audio-status-text">دخول الكاشير وتفعيل الجرس / Ses Aç</span>
        </button>
      </div>
    </div>
  </header>

  <!-- ==========================================================================
       MAIN SPA CONTENT AREA
       ========================================================================== -->
  <main class="app-container">

    <!-- ========================================================================
         MODULE 2A: WAITER MENU VIEW (High-Speed Mobile Layout, Text-Only Cards)
         ======================================================================== -->
    <section id="view-waiter-menu" class="spa-view active-view" aria-label="قائمة الطعام للنادل">
      <div class="waiter-top-controls">
        <div class="waiter-bar-row">
          <div class="quick-table-bar">
            <label for="waiter-menu-table-select" class="quick-table-label">🪑 الطاولة / Masa:</label>
            <select id="waiter-menu-table-select" class="table-select-input" onchange="handleTableChange(this.value)">
              <option value="">-- اختر الطاولة / Masa Seçin (إلزامي) --</option>
              <option value="Masa 1 / طاولة 1">Masa 1 / طاولة 1</option>
              <option value="Masa 2 / طاولة 2">Masa 2 / طاولة 2</option>
              <option value="Masa 3 / طاولة 3">Masa 3 / طاولة 3</option>
              <option value="Masa 4 / طاولة 4">Masa 4 / طاولة 4</option>
              <option value="Masa 5 / طاولة 5">Masa 5 / طاولة 5</option>
              <option value="Masa 6 / طاولة 6">Masa 6 / طاولة 6</option>
              <option value="Masa 7 / طاولة 7">Masa 7 / طاولة 7</option>
              <option value="Masa 8 / طاولة 8">Masa 8 / طاولة 8</option>
              <option value="Masa 9 / طاولة 9">Masa 9 / طاولة 9</option>
              <option value="Masa 10 / طاولة 10">Masa 10 / طاولة 10</option>
              <option value="Masa 11 / طاولة 11">Masa 11 / طاولة 11</option>
              <option value="Masa 12 / طاولة 12">Masa 12 / طاولة 12</option>
              <option value="Paket / سفري">Paket Servis / طلب سفري</option>
            </select>
          </div>

          <div class="search-input-wrap">
            <input
              type="search"
              id="menu-search-input"
              class="search-input"
              placeholder="🔍 ابحث في 65 صنفاً (فلافل، فول، فتة، كريسبي، زنجر، فاهيتا، كوكتيل...)"
              oninput="handleSearchInput(this.value)"
            />
          </div>

          <button type="button" class="btn-gold" onclick="toggleWaiterSubView('cart')">
            <span>مراجعة السلة وإرسال الطلب</span>
            <span class="ltr-text">→</span>
          </button>
        </div>

        <!-- Dynamic Category Filter Bar -->
        <div id="category-pills-container" class="category-pills" role="tablist"></div>
      </div>

      <!-- Dynamic Menu Sections Container -->
      <div id="menu-sections-container"></div>
    </section>

    <!-- ========================================================================
         MODULE 2B: WAITER DEDICATED FULL-SCREEN CART VIEW (display: none / block)
         ======================================================================== -->
    <section id="view-waiter-cart" class="spa-view" aria-label="سلة الطلبات الكاملة">
      <div class="cart-fullscreen-wrapper">
        <div class="cart-view-header">
          <div class="cart-view-title">
            <span>🧾 سلة الطلب الحالية / Aktif Sipariş Sepeti</span>
          </div>
          <button type="button" class="btn-back-menu" onclick="toggleWaiterSubView('menu')">
            <span>↩ العودة للقائمة / Menüye Dön</span>
          </button>
        </div>

        <!-- Strictly Required Table Selector before Order Submission -->
        <div id="cart-table-box" class="cart-table-requirement-box">
          <div>
            <div style="font-weight: 800; color: var(--accent-gold); font-size: 0.95rem;">
              🪑 تحديد الطاولة (إلزامي قبل الإرسال / Zorunlu)
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">
              لا يمكن إرسال الطلب للكاشير بدون تحديد رقم الطاولة أو سفري
            </div>
          </div>
          <select id="waiter-cart-table-select" class="table-select-input" onchange="handleTableChange(this.value)">
            <option value="">-- اختر الطاولة / Masa Seçin --</option>
            <option value="Masa 1 / طاولة 1">Masa 1 / طاولة 1</option>
            <option value="Masa 2 / طاولة 2">Masa 2 / طاولة 2</option>
            <option value="Masa 3 / طاولة 3">Masa 3 / طاولة 3</option>
            <option value="Masa 4 / طاولة 4">Masa 4 / طاولة 4</option>
            <option value="Masa 5 / طاولة 5">Masa 5 / طاولة 5</option>
            <option value="Masa 6 / طاولة 6">Masa 6 / طاولة 6</option>
            <option value="Masa 7 / طاولة 7">Masa 7 / طاولة 7</option>
            <option value="Masa 8 / طاولة 8">Masa 8 / طاولة 8</option>
            <option value="Masa 9 / طاولة 9">Masa 9 / طاولة 9</option>
            <option value="Masa 10 / طاولة 10">Masa 10 / طاولة 10</option>
            <option value="Masa 11 / طاولة 11">Masa 11 / طاولة 11</option>
            <option value="Masa 12 / طاولة 12">Masa 12 / طاولة 12</option>
            <option value="Paket / سفري">Paket Servis / طلب سفري</option>
          </select>
        </div>

        <!-- Clean Cart Items List (ONLY Item Name, Qty +/-, Price, Trash Icon) -->
        <div id="cart-items-container" class="cart-items-list"></div>

        <!-- Strict Mathematical Summary & Submit Controls -->
        <div class="cart-summary-footer">
          <div class="cart-total-row">
            <span>الإجمالي الكلي / Toplam Tutar:</span>
            <span id="cart-grand-total" class="cart-total-amount">0 ₺</span>
          </div>
          <div class="cart-footer-actions">
            <button type="button" class="btn-submit-order" onclick="submitWaiterOrder()">
              <span>✅ إرسال الطلب للكاشير / Siparişi Gönder</span>
            </button>
            <button type="button" class="btn-clear-cart" onclick="clearCartWithFeedback()">
              <span>🗑️ إفراغ السلة / Temizle</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================================
         MODULE 3: CASHIER DASHBOARD (Kanban Board + Audio Alert + Z-Report)
         ======================================================================== -->
    <section id="view-cashier-dashboard" class="spa-view" aria-label="لوحة تحكم الكاشير">
      <div class="cashier-toolbar">
        <div class="cashier-stats-strip">
          <div class="stat-pill">
            <span class="stat-pill-label">طلبات جديدة / Yeni</span>
            <span id="stat-new-count" class="stat-pill-value">0</span>
          </div>
          <div class="stat-pill">
            <span class="stat-pill-label">قيد التحضير / Hazırlanan</span>
            <span id="stat-prep-count" class="stat-pill-value">0</span>
          </div>
          <div class="stat-pill">
            <span class="stat-pill-label">الطلبات المكتملة / Tamamlanan</span>
            <span id="stat-completed-count" class="stat-pill-value">0</span>
          </div>
          <div class="stat-pill">
            <span class="stat-pill-label">مبيعات المكتملة / Ciro</span>
            <span id="stat-completed-revenue" class="stat-pill-value">0 ₺</span>
          </div>
        </div>

        <div class="cashier-action-buttons">
          <button type="button" class="btn-secondary" onclick="simulateIncomingOrder()">
            <span>🔔 محاكاة طلب وارد / Yeni Sipariş Simüle Et</span>
          </button>
          <button type="button" class="btn-gold" onclick="openZReportModal()">
            <span>📊 تقرير نهاية اليوم (Z-Report) / Gün Sonu</span>
          </button>
        </div>
      </div>

      <!-- 3-Column Kanban Board -->
      <div class="kanban-board">
        <!-- Column 1: New Orders -->
        <div class="kanban-column kanban-col-new">
          <div class="kanban-col-header">
            <div class="kanban-col-title" style="color: var(--danger);">
              <span>🔴 طلبات جديدة / New Orders</span>
            </div>
            <span id="col-count-new" class="kanban-col-count">0</span>
          </div>
          <div id="kanban-list-new" class="kanban-cards-list"></div>
        </div>

        <!-- Column 2: Preparing -->
        <div class="kanban-column kanban-col-preparing">
          <div class="kanban-col-header">
            <div class="kanban-col-title" style="color: var(--accent-gold);">
              <span>🟡 قيد التحضير / Preparing</span>
            </div>
            <span id="col-count-preparing" class="kanban-col-count">0</span>
          </div>
          <div id="kanban-list-preparing" class="kanban-cards-list"></div>
        </div>

        <!-- Column 3: Completed -->
        <div class="kanban-column kanban-col-completed">
          <div class="kanban-col-header">
            <div class="kanban-col-title" style="color: var(--success);">
              <span>🟢 مكتملة / Completed</span>
            </div>
            <span id="col-count-completed" class="kanban-col-count">0</span>
          </div>
          <div id="kanban-list-completed" class="kanban-cards-list"></div>
        </div>
      </div>
    </section>

  </main>

  <!-- ==========================================================================
       MODAL 1: THERMAL RECEIPT & Z-REPORT PREVIEW MODAL (80mm Verification)
       ========================================================================== -->
  <div id="receipt-modal-backdrop" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="receipt-modal-title">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 id="receipt-modal-title">🖨️ معاينة الطباعة الحرارية (80mm) / Termal Fiş</h3>
        <button type="button" class="btn-secondary" style="padding: 0.25rem 0.6rem;" onclick="closeReceiptModal()">✕</button>
      </div>
      <div class="modal-body">
        <div id="modal-thermal-preview" class="thermal-paper-preview"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-secondary" onclick="closeReceiptModal()">إغلاق / Kapat</button>
        <button type="button" class="btn-gold" onclick="triggerBrowserPrint()">🖨️ طباعة الآن (80mm) / Yazdır</button>
      </div>
    </div>
  </div>

  <!-- ==========================================================================
       MODAL 2: PRICE EDITOR MODAL (تعديل أسعار الكوكتيلات والأصناف بضغطة زر)
       ========================================================================== -->
  <div id="price-editor-backdrop" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="price-editor-title">
    <div class="modal-dialog wide-modal">
      <div class="modal-header">
        <h3 id="price-editor-title">⚙️ تعديل أسعار المنيو (الكوكتيلات والأصناف) / Fiyat Düzenle</h3>
        <button type="button" class="btn-secondary" style="padding: 0.25rem 0.6rem;" onclick="closePriceEditorModal()">✕</button>
      </div>
      <div class="modal-body">
        <div style="font-size: 0.85rem; color: var(--text-muted); background: var(--bg-input); padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-gold);">
          💡 <strong>ملاحظة:</strong> خانات الأسعار في قسم <strong>الكوكتيلات</strong> وصنفي (<strong>فتة بزيت فقسة</strong> و<strong>متبل باذنجان</strong>) كانت فارغة في صورة المنيو المرفقة، لذا وضعنا لها أسعاراً افتراضية مؤقتة ويمكنك تعديل أي سعر هنا وحفظه فوراً.
        </div>
        <div id="price-editor-list" style="display: flex; flex-direction: column; gap: 0.5rem;"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-secondary" onclick="resetDefaultMenuPrices()">↺ استعادة الأسعار الأصلية</button>
        <button type="button" class="btn-gold" onclick="saveUpdatedMenuPrices()">💾 حفظ الأسعار الجديدة / Kaydet</button>
      </div>
    </div>
  </div>

  <!-- ==========================================================================
       MODAL 3: OPERATIONS & MULTI-DEVICE SYNC GUIDE MODAL (دليل التشغيل والربط)
       ========================================================================== -->
  <div id="guide-modal-backdrop" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="guide-modal-title">
    <div class="modal-dialog wide-modal">
      <div class="modal-header">
        <h3 id="guide-modal-title">📖 كيف يعمل النادل والكاشير وكيف يخرج الفيش الحراري؟</h3>
        <button type="button" class="btn-secondary" style="padding: 0.25rem 0.6rem;" onclick="closeGuideModal()">✕</button>
      </div>
      <div class="modal-body">
        <div class="guide-step-card">
          <h4>1️⃣ خطوات عمل النادل (من الجوال أو التابلت - تبويب 📱 النادل / Garson)</h4>
          <p>
            • يفتح النادل الموقع على هاتفه ويختار رقم الطاولة من الأعلى (مثلاً <strong>Masa 4 / طاولة 4</strong> أو <strong>سفري</strong>).<br>
            • يضغط على زر <strong>(+)</strong> بجانب الأصناف المطلوبة (سندويش فلافل، شاميات، وجبات غربية، سلطات، كوكتيلات).<br>
            • يضغط على زر <strong>🛒 السلة / مراجعة السلة</strong> لفتح شاشة السلة الكاملة، ثم يضغط <strong>✅ إرسال الطلب للكاشير</strong>.
          </p>
        </div>

        <div class="guide-step-card">
          <h4>2️⃣ كيف يصل الطلب لشاشة الكاشير؟ (تبويب 🖥️ الكاشير / Kasa)</h4>
          <p>
            • <strong>أول خطوة للكاشير صباحاً:</strong> يضغط الكاشير على زر <strong>🔔 تفعيل جرس الكاشير / Ses Aç</strong> في أعلى اليسار لتفعيل الصوت.<br>
            • <strong>على نفس الجهاز (نافذتين):</strong> إذا فتحت الموقع في نافذة للنادل ونافذة للكاشير، ينتقل الطلب <strong>تلقائياً في نفس اللحظة</strong> عبر تقنية <code>BroadcastChannel</code> ويرن الجرس فوراً.<br>
            • <strong>بين جوال النادل وكمبيوتر الكاشير في المطعم:</strong> يمكنك أدناه وضع رابط قاعدة بيانات مجانية (Firebase Realtime DB URL) ليتزامن جوال النادل مع شاشة الكاشير لاسلكياً عبر الإنترنت في أجزاء من الثانية.
          </p>
        </div>

        <div class="guide-step-card">
          <h4>3️⃣ كيف يطبع الكاشير الفيش الحراري (80mm) بنفسه؟</h4>
          <p>
            • يظهر الطلب الجديد في العمود الأول <strong>🔴 طلبات جديدة</strong> مع وميض ذهبي وصوت الجرس.<br>
            • يضغط الكاشير على زر <strong>🖨️ فاتورة / Fiş</strong> الموجود داخل بطاقة الطلب.<br>
            • تفتح معاينة الفاتورة بمقاس <strong>80mm</strong> (تصميم نظام الأمين مع أرقام المطعم)، فيضغط الكاشير <strong>🖨️ طباعة الفيش الآن (80mm)</strong> ليخرج الفيش مباشرة من الطابعة الحرارية الموصلة بالكمبيوتر، وفي نهاية اليوم يضغط <strong>📊 تقرير نهاية اليوم (Z-Report)</strong> لطباعة الجرد اليومي.
          </p>
        </div>

        <div class="guide-step-card">
          <h4>🌐 الربط السحابي المباشر بين جوالات النادل وكمبيوتر الكاشير (اختياري)</h4>
          <p style="margin-bottom: 0.5rem;">
            إذا أردت ربط جوالات النادل بكمبيوتر الكاشير عبر الإنترنت، ضع رابط Firebase Realtime Database هنا (أو اتركه فارغاً للعمل المحلي المباشر):
          </p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <input
              type="url"
              id="cloud-sync-url-input"
              class="search-input ltr-text"
              placeholder="https://your-restaurant-pos-default-rtdb.firebaseio.com"
              style="flex: 1;"
            />
            <button type="button" class="btn-gold" onclick="saveCloudSyncUrl()">حفظ رابط المزامنة</button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn-gold" onclick="closeGuideModal()">فهمت، ابدأ العمل ✓</button>
      </div>
    </div>
  </div>

  <!-- ==========================================================================
       MODULE 4: DEDICATED PRINT SECTION (<div id="print-section">)
       Strictly formatted for 80mm thermal printers via @media print
       ========================================================================== -->
  <div id="print-section" aria-hidden="true"></div>

  <!-- ==========================================================================
       CUSTOM SLEEK TOAST NOTIFICATION CONTAINER (Zero native alert() calls)
       ========================================================================== -->
  <div id="toast-container" class="toast-container" aria-live="polite"></div>

  <!-- ربط ملف الجافاسكريبت الخارجي -->
  <script src="app.js"></script>
</body>
</html>
