/**
 * AURA Accessories (أورا للإكسسوارات)
 * Master Client-Side E-Commerce Application Engine
 * Supports Multi-Page Architecture: index.html, shop.html, checkout.html
 */

(function () {
  'use strict';

  // Read URL query parameters (e.g. ?cat=necklaces)
  let initialCategory = 'all';
  try {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('cat');
    if (cat) {
      initialCategory = cat;
    }
  } catch (e) {}

  // Application State
  const state = {
    lang: localStorage.getItem('aura_lang') || 'ar',
    cart: JSON.parse(localStorage.getItem('aura_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('aura_wishlist') || '[]'),
    activeCategory: initialCategory,
    activeMaterial: 'all',
    maxPrice: 3500,
    activeSort: 'featured',
    appliedPromo: localStorage.getItem('aura_applied_promo') || null,
    selectedGovernorate: 'cairo',
    quickViewProduct: null,
    quickViewSelectedSize: null,
    quickViewSelectedColor: null,
    quickViewQty: 1
  };

  // Helper: Format Currency (EGP / ج.م)
  function formatMoney(amount) {
    const formattedNum = Number(amount).toLocaleString(state.lang === 'ar' ? 'ar-EG' : 'en-US');
    return state.lang === 'ar' ? `${formattedNum} ج.م` : `${formattedNum} EGP`;
  }

  // Helper: Get Translation String
  function t(key) {
    const dict = (typeof AURA_I18N !== 'undefined' && AURA_I18N[state.lang]) ? AURA_I18N[state.lang] : {};
    return dict[key] || key;
  }

  // Toast Notification System
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="color: var(--color-gold); font-size: 1.1rem;">✨</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-out');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // Save Cart to LocalStorage
  function saveCart() {
    localStorage.setItem('aura_cart', JSON.stringify(state.cart));
    updateCounters();
    renderCartDrawer();
    renderFullCheckoutPage();
  }

  // Save Wishlist to LocalStorage
  function saveWishlist() {
    localStorage.setItem('aura_wishlist', JSON.stringify(state.wishlist));
    updateCounters();
    renderCatalog();
  }

  // Update Header Badges
  function updateCounters() {
    const cartCountEl = document.getElementById('cart-counter');
    const wishlistCountEl = document.getElementById('wishlist-counter');
    const mobileCartCountEl = document.getElementById('mobile-cart-counter');

    const totalCartItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalWishlistItems = state.wishlist.length;

    if (cartCountEl) cartCountEl.textContent = totalCartItems;
    if (mobileCartCountEl) mobileCartCountEl.textContent = totalCartItems;
    if (wishlistCountEl) wishlistCountEl.textContent = totalWishlistItems;
  }

  // Language Switcher & Directionality
  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('aura_lang', lang);
    if (typeof AURA_DATA !== 'undefined') {
      AURA_DATA.currentLang = lang;
    }

    const html = document.documentElement;
    const body = document.body;

    if (lang === 'ar') {
      html.setAttribute('lang', 'ar');
      html.setAttribute('dir', 'rtl');
      body.setAttribute('dir', 'rtl');
    } else {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
      body.setAttribute('dir', 'ltr');
    }

    const langBtnText = document.getElementById('lang-btn-text');
    if (langBtnText) {
      langBtnText.textContent = lang === 'ar' ? 'English' : 'عربي';
    }

    if (typeof AURA_I18N !== 'undefined' && AURA_I18N[lang]) {
      document.title = AURA_I18N[lang].siteTitle || document.title;

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (key && AURA_I18N[lang][key]) {
          el.textContent = AURA_I18N[lang][key];
        }
      });

      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (key && AURA_I18N[lang][key]) {
          el.setAttribute('placeholder', AURA_I18N[lang][key]);
        }
      });
    }

    renderCategories();
    renderCatalog();
    renderCartDrawer();
    renderReviews();
    populateGovernoratesDropdown();
    renderFullCheckoutPage();
  }

  // Render Featured Categories Grid
  function renderCategories() {
    const grid = document.getElementById('categories-grid');
    if (!grid) return;

    const cats = [
      { id: 'necklaces', name: t('catNecklaces'), count: 18, img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80' },
      { id: 'rings', name: t('catRings'), count: 14, img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80' },
      { id: 'bracelets', name: t('catBracelets'), count: 12, img: 'https://images.unsplash.com/photo-1611591475852-51540306385a?auto=format&fit=crop&w=600&q=80' },
      { id: 'watches', name: t('catWatches'), count: 9, img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80' },
      { id: 'sunglasses', name: t('catSunglasses'), count: 11, img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80' }
    ];

    grid.innerHTML = cats.map(c => `
      <div class="category-card" data-cat-id="${c.id}">
        <img class="category-img" src="${c.img}" alt="${c.name}" loading="lazy" />
        <div class="category-overlay"></div>
        <div class="category-details">
          <h3 class="category-name">${c.name}</h3>
          <span class="category-count">
            <span>✨</span> ${c.count} ${state.lang === 'ar' ? 'قطعة فاخرة' : 'Pieces'}
          </span>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const catId = card.getAttribute('data-cat-id');
        if (!window.location.pathname.includes('shop.html')) {
          window.location.href = `shop.html?cat=${catId}`;
        } else {
          filterByCategory(catId);
          document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Filter Catalog by Category
  function filterByCategory(catId) {
    state.activeCategory = catId;
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-filter') === catId);
    });
    renderCatalog();
  }

  window.AURA_FILTER_CAT = function (catId) {
    if (!window.location.pathname.includes('shop.html') && !document.getElementById('products-grid')) {
      window.location.href = `shop.html?cat=${catId}`;
    } else {
      filterByCategory(catId);
      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  window.AURA_OPEN_QUICKVIEW = openQuickView;
  window.AURA_ADD_TO_CART = addToCart;
  window.AURA_OPEN_CHECKOUT = openCheckout;

  // Render Product Catalog
  function renderCatalog() {
    const grid = document.getElementById('products-grid');
    if (!grid || typeof AURA_DATA === 'undefined') return;

    let filtered = AURA_DATA.products.filter(item => {
      if (state.activeCategory !== 'all' && item.category !== state.activeCategory) {
        return false;
      }
      if (state.activeMaterial !== 'all' && item.material !== state.activeMaterial) {
        return false;
      }
      if (item.price > state.maxPrice) {
        return false;
      }
      return true;
    });

    const isHomePage = document.body.getAttribute('data-page') === 'home';
    if (isHomePage && state.activeCategory === 'all') {
      filtered = filtered.slice(0, 8);
    }

    if (state.activeSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.activeSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.activeSort === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">💎</div>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">${t('noResults')}</h3>
          <p style="color: var(--color-charcoal-muted); margin-bottom: 1.5rem;">${state.lang === 'ar' ? 'جربي تغيير خيارات التصفية أو توسيع نطاق السعر' : 'Try adjusting your filters or price slider'}</p>
          <button id="reset-filters-btn" class="btn-primary" style="padding: 0.65rem 1.5rem; font-size: 0.85rem;">${state.lang === 'ar' ? 'إعادة تعيين الفلاتر' : 'Reset Filters'}</button>
        </div>
      `;
      const resetBtn = document.getElementById('reset-filters-btn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          state.activeCategory = 'all';
          state.activeMaterial = 'all';
          state.maxPrice = 3500;
          const priceSlider = document.getElementById('price-slider');
          if (priceSlider) priceSlider.value = 3500;
          const materialSelect = document.getElementById('material-select');
          if (materialSelect) materialSelect.value = 'all';
          filterByCategory('all');
        });
      }
      return;
    }

    grid.innerHTML = filtered.map(prod => {
      const isWishlisted = state.wishlist.includes(prod.id);
      const name = prod.name[state.lang] || prod.name.ar;
      const badge = prod.badge ? (prod.badge[state.lang] || prod.badge.ar) : '';
      const primaryImg = prod.images[0];
      const hoverImg = prod.images[1] || prod.images[0];
      const materialLabel = prod.material === 'gold_plated' ? t('filterGoldPlated') : (prod.material === 'silver_925' ? t('filterSilver925') : t('filterStainlessSteel'));

      return `
        <div class="product-card" data-product-id="${prod.id}">
          <div class="product-image-container">
            <img class="product-primary-img" src="${primaryImg}" alt="${name}" loading="lazy" />
            <img class="product-hover-img" src="${hoverImg}" alt="${name}" loading="lazy" />
            
            ${badge ? `<span class="product-badge-tag">${badge}</span>` : ''}
            ${prod.discount ? `<span class="product-discount-tag">-${prod.discount}%</span>` : ''}
            
            <button class="wishlist-heart-btn ${isWishlisted ? 'active' : ''}" data-wishlist-id="${prod.id}" title="أضف للمفضلة">
              <span>${isWishlisted ? '❤️' : '🤍'}</span>
            </button>

            <button class="quick-view-overlay-btn" data-quickview-id="${prod.id}">
              👁️ ${t('quickView')}
            </button>
          </div>

          <div class="product-body">
            <div class="product-material-pill">${materialLabel}</div>
            <h4 class="product-name" title="${name}">${name}</h4>
            
            <div class="product-rating">
              <span class="stars">★★★★★</span>
              <span>(${prod.rating})</span>
              <span>• ${prod.reviewsCount} ${t('reviews')}</span>
            </div>

            <div class="product-footer">
              <div class="product-price-block">
                <span class="price-current">${formatMoney(prod.price)}</span>
                ${prod.originalPrice ? `<span class="price-original">${formatMoney(prod.originalPrice)}</span>` : ''}
              </div>

              <button class="btn-add-cart-card" data-addcart-id="${prod.id}">
                <span>🛍️</span>
                <span>${t('addToCart')}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.wishlist-heart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleWishlist(btn.getAttribute('data-wishlist-id'));
      });
    });

    grid.querySelectorAll('.quick-view-overlay-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openQuickView(btn.getAttribute('data-quickview-id'));
      });
    });

    grid.querySelectorAll('.product-image-container').forEach(box => {
      box.addEventListener('click', () => {
        const card = box.closest('.product-card');
        openQuickView(card.getAttribute('data-product-id'));
      });
    });

    grid.querySelectorAll('.btn-add-cart-card').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-addcart-id');
        const product = AURA_DATA.products.find(p => p.id === id);
        if (product) {
          addToCart(product.id, product.sizes[0], product.colors[0], 1);
        }
      });
    });
  }

  // Toggle Wishlist
  function toggleWishlist(productId) {
    const idx = state.wishlist.indexOf(productId);
    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      showToast(t('toastRemovedWishlist'));
    } else {
      state.wishlist.push(productId);
      showToast(t('toastAddedToWishlist'));
    }
    saveWishlist();
  }

  // Add Item to Cart
  function addToCart(productId, size, color, quantity = 1) {
    if (typeof AURA_DATA === 'undefined') return;
    const product = AURA_DATA.products.find(p => p.id === productId);
    if (!product) return;

    const cartKey = `${productId}_${size || 'def'}_${color || 'def'}`;
    const existingIndex = state.cart.findIndex(i => i.cartKey === cartKey);

    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        cartKey,
        productId,
        name: product.name,
        price: product.price,
        image: product.images[0],
        size: size || product.sizes[0],
        color: color || product.colors[0],
        quantity: quantity
      });
    }

    saveCart();
    showToast(t('toastAddedToCart'));
    openCartDrawer();
  }

  // Update Cart Quantity
  function updateCartQty(cartKey, delta) {
    const itemIndex = state.cart.findIndex(i => i.cartKey === cartKey);
    if (itemIndex === -1) return;

    state.cart[itemIndex].quantity += delta;
    if (state.cart[itemIndex].quantity <= 0) {
      state.cart.splice(itemIndex, 1);
    }
    saveCart();
  }

  // Remove from Cart
  function removeFromCart(cartKey) {
    state.cart = state.cart.filter(i => i.cartKey !== cartKey);
    saveCart();
  }

  // Render Slide-Out Cart Drawer
  function renderCartDrawer() {
    const itemsList = document.getElementById('cart-items-body');
    const subtotalEl = document.getElementById('cart-subtotal');
    const discountEl = document.getElementById('cart-discount');
    const discountRow = document.getElementById('cart-discount-row');
    const shippingEl = document.getElementById('cart-shipping');
    const totalEl = document.getElementById('cart-total');
    const freeShippingMsg = document.getElementById('free-shipping-msg');
    const freeShippingProgress = document.getElementById('free-shipping-progress');
    const checkoutBtn = document.getElementById('btn-checkout-drawer');

    if (!itemsList) return;

    if (state.cart.length === 0) {
      itemsList.innerHTML = `
        <div class="empty-cart-state">
          <div class="empty-cart-icon">🛍️</div>
          <h4 class="empty-cart-title">${t('cartEmpty')}</h4>
          <p class="empty-cart-desc">${t('cartEmptyDesc')}</p>
          <a href="shop.html" class="btn-primary" style="padding: 0.75rem 1.75rem; font-size: 0.9rem; text-decoration: none;">
            ${t('cartStartShopping')}
          </a>
        </div>
      `;

      if (subtotalEl) subtotalEl.textContent = formatMoney(0);
      if (discountRow) discountRow.style.display = 'none';
      if (shippingEl) shippingEl.textContent = formatMoney(0);
      if (totalEl) totalEl.textContent = formatMoney(0);
      if (freeShippingProgress) freeShippingProgress.style.width = '0%';
      if (freeShippingMsg) freeShippingMsg.textContent = t('freeShippingGoal').replace('{amount}', '1,000');
      if (checkoutBtn) checkoutBtn.style.opacity = '0.5';
      return;
    }

    if (checkoutBtn) checkoutBtn.style.opacity = '1';

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const threshold = 1000;
    const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));
    if (freeShippingProgress) freeShippingProgress.style.width = `${progressPercent}%`;

    if (subtotal >= threshold) {
      if (freeShippingMsg) freeShippingMsg.innerHTML = `<span style="color: var(--color-success); font-weight: 700;">${t('freeShippingUnlocked')}</span>`;
    } else {
      const remaining = threshold - subtotal;
      if (freeShippingMsg) freeShippingMsg.textContent = t('freeShippingGoal').replace('{amount}', remaining.toLocaleString(state.lang === 'ar' ? 'ar-EG' : 'en-US'));
    }

    itemsList.innerHTML = state.cart.map(item => {
      const name = item.name[state.lang] || item.name.ar;
      return `
        <div class="cart-item-card" data-cart-key="${item.cartKey}">
          <img class="cart-item-img" src="${item.image}" alt="${name}" />
          <div class="cart-item-details">
            <h5 class="cart-item-title">${name}</h5>
            <div class="cart-item-meta">${item.size ? `${t('quickViewSelectSize')} ${item.size}` : ''}</div>
            <div class="cart-item-price">${formatMoney(item.price)}</div>
            
            <div class="cart-item-actions">
              <div class="qty-counter">
                <button class="qty-btn" data-action="dec" data-key="${item.cartKey}">-</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" data-action="inc" data-key="${item.cartKey}">+</button>
              </div>
              <button class="remove-item-btn" data-action="remove" data-key="${item.cartKey}">
                ${state.lang === 'ar' ? 'حذف' : 'Remove'}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    itemsList.querySelectorAll('[data-action="dec"]').forEach(btn => {
      btn.addEventListener('click', () => updateCartQty(btn.getAttribute('data-key'), -1));
    });
    itemsList.querySelectorAll('[data-action="inc"]').forEach(btn => {
      btn.addEventListener('click', () => updateCartQty(btn.getAttribute('data-key'), 1));
    });
    itemsList.querySelectorAll('[data-action="remove"]').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-key')));
    });

    let discountAmount = 0;
    if (state.appliedPromo && typeof AURA_DATA !== 'undefined' && AURA_DATA.promoCodes[state.appliedPromo]) {
      const promo = AURA_DATA.promoCodes[state.appliedPromo];
      if (promo.type === 'percent') {
        discountAmount = Math.round(subtotal * (promo.value / 100));
      }
    }

    let shippingCost = 65;
    if (subtotal >= threshold || (state.appliedPromo && AURA_DATA.promoCodes[state.appliedPromo]?.type === 'free_shipping')) {
      shippingCost = 0;
    }

    const finalTotal = Math.max(0, subtotal - discountAmount + shippingCost);

    if (subtotalEl) subtotalEl.textContent = formatMoney(subtotal);
    if (discountRow) {
      if (discountAmount > 0) {
        discountRow.style.display = 'flex';
        if (discountEl) discountEl.textContent = `-${formatMoney(discountAmount)}`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    if (shippingEl) {
      shippingEl.textContent = shippingCost === 0 ? t('free') : formatMoney(shippingCost);
      shippingEl.style.color = shippingCost === 0 ? 'var(--color-success)' : '';
      shippingEl.style.fontWeight = shippingCost === 0 ? '700' : '';
    }

    if (totalEl) totalEl.textContent = formatMoney(finalTotal);
  }

  // Open / Close Cart Drawer
  function openCartDrawer() {
    renderCartDrawer();
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (drawer) drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
  }

  function closeCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    const backdrop = document.getElementById('drawer-backdrop');
    if (drawer) drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
  }

  // Open Quick View Modal
  function openQuickView(productId) {
    if (typeof AURA_DATA === 'undefined') return;
    const product = AURA_DATA.products.find(p => p.id === productId);
    if (!product) return;

    state.quickViewProduct = product;
    state.quickViewSelectedSize = product.sizes[0];
    state.quickViewSelectedColor = product.colors[0];
    state.quickViewQty = 1;

    const modal = document.getElementById('quickview-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    if (!modal) return;

    const mainImg = document.getElementById('qv-main-image');
    if (mainImg) mainImg.src = product.images[0];

    const thumbsContainer = document.getElementById('qv-thumbs');
    if (thumbsContainer) {
      thumbsContainer.innerHTML = product.images.map((img, idx) => `
        <img class="qv-thumb ${idx === 0 ? 'active' : ''}" src="${img}" alt="Thumbnail" data-img-src="${img}" />
      `).join('');

      thumbsContainer.querySelectorAll('.qv-thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
          thumbsContainer.querySelectorAll('.qv-thumb').forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          if (mainImg) mainImg.src = thumb.getAttribute('data-img-src');
        });
      });
    }

    const skuEl = document.getElementById('qv-sku');
    const titleEl = document.getElementById('qv-title');
    const priceEl = document.getElementById('qv-price');
    const origPriceEl = document.getElementById('qv-orig-price');

    if (skuEl) skuEl.textContent = `SKU: ${product.sku}`;
    if (titleEl) titleEl.textContent = product.name[state.lang] || product.name.ar;
    if (priceEl) priceEl.textContent = formatMoney(product.price);
    if (origPriceEl) {
      if (product.originalPrice) {
        origPriceEl.style.display = 'inline';
        origPriceEl.textContent = formatMoney(product.originalPrice);
      } else {
        origPriceEl.style.display = 'none';
      }
    }

    const sizesContainer = document.getElementById('qv-sizes');
    if (sizesContainer) {
      sizesContainer.innerHTML = product.sizes.map((s, idx) => `
        <button class="chip-btn ${idx === 0 ? 'active' : ''}" data-size="${s}">${s}</button>
      `).join('');

      sizesContainer.querySelectorAll('.chip-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          sizesContainer.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.quickViewSelectedSize = btn.getAttribute('data-size');
        });
      });
    }

    const colorsContainer = document.getElementById('qv-colors');
    if (colorsContainer) {
      const colorLabels = {
        gold: { ar: 'ذهب أصفر 18K', en: '18K Yellow Gold' },
        rose_gold: { ar: 'ذهب وردي فاخر', en: 'Rose Gold' },
        silver: { ar: 'فضة إسترليني بلاتين', en: 'Platinum Silver' },
        black_gold: { ar: 'أسود مع ذهب', en: 'Black & Gold' },
        gold_smoke: { ar: 'عدسات دخانية متدرجة', en: 'Gradient Smoke' },
        gold_amber: { ar: 'عدسات كهرمانية دافئة', en: 'Amber Gold' }
      };

      colorsContainer.innerHTML = product.colors.map((c, idx) => {
        const label = colorLabels[c] ? (colorLabels[c][state.lang] || colorLabels[c].ar) : c;
        return `<button class="chip-btn ${idx === 0 ? 'active' : ''}" data-color="${c}">${label}</button>`;
      }).join('');

      colorsContainer.querySelectorAll('.chip-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          colorsContainer.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          state.quickViewSelectedColor = btn.getAttribute('data-color');
        });
      });
    }

    const qtyValueEl = document.getElementById('qv-qty-value');
    if (qtyValueEl) qtyValueEl.textContent = '1';

    const tabSpecs = document.getElementById('qv-pane-specs');
    const tabCare = document.getElementById('qv-pane-care');
    const tabShipping = document.getElementById('qv-pane-shipping');

    if (tabSpecs) {
      tabSpecs.innerHTML = `
        <p>${product.description[state.lang] || product.description.ar}</p>
        <ul style="margin-top: 0.75rem; padding-inline-start: 1.25rem;">
          <li><strong>${state.lang === 'ar' ? 'الخامة والعيار:' : 'Material:'}</strong> ${product.material === 'gold_plated' ? t('goldPlatedDesc') : (product.material === 'silver_925' ? t('silverDesc') : t('steelDesc'))}</li>
          <li><strong>${state.lang === 'ar' ? 'مقاومة الماء:' : 'Water Resistance:'}</strong> ${product.material === 'stainless_steel' ? (state.lang === 'ar' ? 'مقاومة تامة 100% للماء والعطور' : '100% Waterproof & Perfume-Proof') : (state.lang === 'ar' ? 'مقاومة لرذاذ الماء والاستخدام اليومي' : 'Splash & Rain Resistant')}</li>
          <li><strong>${state.lang === 'ar' ? 'التغليف المرفق:' : 'Included:'}</strong> ${state.lang === 'ar' ? 'كيس مخملي + علبة هدايا ملكية + منديل تلميع حريري' : 'Signature velvet pouch + luxury box + polish cloth'}</li>
        </ul>
      `;
    }

    if (tabCare) {
      tabCare.textContent = product.careInstructions[state.lang] || product.careInstructions.ar;
    }

    if (tabShipping) {
      tabShipping.innerHTML = `
        <p>🚚 <strong>${state.lang === 'ar' ? 'الشحن لجميع محافظات مصر:' : 'Delivery in Egypt:'}</strong> ${state.lang === 'ar' ? 'يتم الشحن والتوصيل خلال 24 إلى 48 ساعة لمحافظات القاهرة والجيزة والإسكندرية، وخلال 2-4 أيام لباقي المحافظات.' : '24-48 hours in Cairo, Giza & Alexandria. 2-4 business days for other governorates.'}</p>
        <p style="margin-top: 0.5rem;">🛡️ <strong>${t('guaranteeText')}</strong></p>
      `;
    }

    modal.classList.add('active');
    if (modalBackdrop) modalBackdrop.classList.add('active');
  }

  function closeQuickView() {
    const modal = document.getElementById('quickview-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    if (modal) modal.classList.remove('active');
    if (modalBackdrop) modalBackdrop.classList.remove('active');
  }

  // Populate Egyptian Governorates
  function populateGovernoratesDropdown() {
    const selects = [document.getElementById('checkout-governorate'), document.getElementById('page-checkout-governorate')];
    if (typeof AURA_DATA === 'undefined') return;

    selects.forEach(select => {
      if (!select) return;
      select.innerHTML = `<option value="">${t('governorateSelect')}</option>` +
        AURA_DATA.governorates.map(gov => {
          const name = gov.name[state.lang] || gov.name.ar;
          const time = gov.time[state.lang] || gov.time.ar;
          return `<option value="${gov.id}" data-fee="${gov.fee}">${name} (${gov.fee} ج.م - ${time})</option>`;
        }).join('');

      select.value = state.selectedGovernorate;
    });
  }

  // Open Checkout (redirect to checkout.html)
  function openCheckout() {
    if (state.cart.length === 0) {
      showToast(t('cartEmpty'));
      return;
    }

    if (!window.location.pathname.includes('checkout.html')) {
      window.location.href = 'checkout.html';
      return;
    }

    closeCartDrawer();
    populateGovernoratesDropdown();
    renderFullCheckoutPage();
  }

  // Dedicated Render for Full Checkout Page (checkout.html)
  function renderFullCheckoutPage() {
    const fullPage = document.getElementById('full-checkout-page');
    if (!fullPage || typeof AURA_DATA === 'undefined') return;

    const tableBody = document.getElementById('checkout-table-body');
    const emptyState = document.getElementById('checkout-empty-state');
    const contentGrid = document.getElementById('checkout-content-grid');

    const subtotalEl = document.getElementById('page-checkout-subtotal');
    const shippingEl = document.getElementById('page-checkout-shipping');
    const discountEl = document.getElementById('page-checkout-discount');
    const discountRow = document.getElementById('page-checkout-discount-row');
    const totalEl = document.getElementById('page-checkout-total');

    if (state.cart.length === 0) {
      if (emptyState) emptyState.style.display = 'block';
      if (contentGrid) contentGrid.style.display = 'none';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';
    if (contentGrid) contentGrid.style.display = 'grid';

    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (tableBody) {
      tableBody.innerHTML = state.cart.map(item => {
        const name = item.name[state.lang] || item.name.ar;
        return `
          <tr style="border-bottom: 1px solid var(--color-sand-border);">
            <td style="padding: 1rem 0; display: flex; align-items: center; gap: 0.85rem;">
              <img src="${item.image}" alt="${name}" style="width: 55px; height: 65px; object-fit: cover; border-radius: var(--radius-xs);" />
              <div>
                <strong style="font-size: 0.95rem; color: var(--color-charcoal); display: block;">${name}</strong>
                <span style="font-size: 0.775rem; color: var(--color-charcoal-light);">${item.size ? item.size : ''}</span>
              </div>
            </td>
            <td style="padding: 1rem 0.5rem; text-align: center;">
              <div class="qty-counter">
                <button class="qty-btn" data-action="dec" data-key="${item.cartKey}">-</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" data-action="inc" data-key="${item.cartKey}">+</button>
              </div>
            </td>
            <td style="padding: 1rem 0; font-weight: 700; text-align: end; color: var(--color-gold-hover);">
              ${formatMoney(item.price * item.quantity)}
            </td>
            <td style="padding: 1rem 0.5rem; text-align: end;">
              <button class="remove-item-btn" data-action="remove" data-key="${item.cartKey}">✕</button>
            </td>
          </tr>
        `;
      }).join('');

      tableBody.querySelectorAll('[data-action="dec"]').forEach(btn => {
        btn.addEventListener('click', () => updateCartQty(btn.getAttribute('data-key'), -1));
      });
      tableBody.querySelectorAll('[data-action="inc"]').forEach(btn => {
        btn.addEventListener('click', () => updateCartQty(btn.getAttribute('data-key'), 1));
      });
      tableBody.querySelectorAll('[data-action="remove"]').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-key')));
      });
    }

    const govObj = AURA_DATA.governorates.find(g => g.id === state.selectedGovernorate);
    let shippingFee = govObj ? govObj.fee : 45;

    if (subtotal >= 1000 || (state.appliedPromo && AURA_DATA.promoCodes[state.appliedPromo]?.type === 'free_shipping')) {
      shippingFee = 0;
    }

    let discountAmount = 0;
    if (state.appliedPromo && AURA_DATA.promoCodes[state.appliedPromo]?.type === 'percent') {
      discountAmount = Math.round(subtotal * (AURA_DATA.promoCodes[state.appliedPromo].value / 100));
    }

    const total = Math.max(0, subtotal - discountAmount + shippingFee);

    if (subtotalEl) subtotalEl.textContent = formatMoney(subtotal);
    if (shippingEl) {
      shippingEl.textContent = shippingFee === 0 ? t('free') : formatMoney(shippingFee);
      shippingEl.style.color = shippingFee === 0 ? 'var(--color-success)' : '';
    }

    if (discountRow) {
      if (discountAmount > 0) {
        discountRow.style.display = 'flex';
        if (discountEl) discountEl.textContent = `-${formatMoney(discountAmount)}`;
      } else {
        discountRow.style.display = 'none';
      }
    }

    if (totalEl) totalEl.textContent = formatMoney(total);
  }

  // Render Client Reviews
  function renderReviews() {
    const container = document.getElementById('reviews-grid');
    if (!container || typeof AURA_DATA === 'undefined') return;

    container.innerHTML = AURA_DATA.reviews.map(rev => `
      <div class="review-card">
        <div>
          <div class="stars">★★★★★</div>
          <p class="review-quote">"${rev.comment[state.lang] || rev.comment.ar}"</p>
        </div>
        <div class="reviewer-meta">
          <div>
            <div class="reviewer-name">${rev.author[state.lang] || rev.author.ar}</div>
            <div class="reviewer-city">📍 ${rev.city[state.lang] || rev.city.ar}</div>
          </div>
          <span style="font-size: 0.75rem; color: var(--color-charcoal-light);">${rev.date[state.lang] || rev.date.ar}</span>
        </div>
      </div>
    `).join('');
  }

  // Live Purchase Notifications (Social Proof for Egypt)
  function startLivePurchaseSimulator() {
    const toast = document.getElementById('social-proof-toast');
    if (!toast || typeof AURA_DATA === 'undefined') return;

    let index = 0;
    function showNext() {
      const item = AURA_DATA.livePurchases[index % AURA_DATA.livePurchases.length];
      const buyerName = item.name[state.lang] || item.name.ar;
      const buyerCity = item.city[state.lang] || item.city.ar;
      const itemName = item.item[state.lang] || item.item.ar;

      const spText = document.getElementById('sp-text');
      if (spText) {
        spText.innerHTML = `
          <strong>${buyerName}</strong> ${state.lang === 'ar' ? 'من' : 'from'} <strong>${buyerCity}</strong><br/>
          ${state.lang === 'ar' ? 'اشترت للتو:' : 'just purchased:'} <span style="color: var(--color-gold-hover); font-weight:600;">${itemName}</span>
        `;
      }

      toast.classList.add('active');
      setTimeout(() => {
        toast.classList.remove('active');
      }, 4500);

      index++;
    }

    setTimeout(showNext, 4000);
    setInterval(showNext, 18000);
  }

  // Live Search Filter & Dropdown
  function setupSearch() {
    const searchInputs = [document.getElementById('header-search-input'), document.getElementById('mobile-search-input')];
    const resultsDropdown = document.getElementById('search-results-dropdown');

    searchInputs.forEach(input => {
      if (!input) return;

      input.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (!query || typeof AURA_DATA === 'undefined') {
          if (resultsDropdown) resultsDropdown.classList.remove('active');
          return;
        }

        const matches = AURA_DATA.products.filter(p => {
          const arName = (p.name.ar || '').toLowerCase();
          const enName = (p.name.en || '').toLowerCase();
          const arDesc = (p.description.ar || '').toLowerCase();
          return arName.includes(query) || enName.includes(query) || arDesc.includes(query);
        });

        if (!resultsDropdown) return;

        if (matches.length > 0) {
          resultsDropdown.innerHTML = matches.slice(0, 6).map(prod => `
            <div class="search-result-item" data-search-id="${prod.id}">
              <img class="search-result-thumb" src="${prod.images[0]}" alt="${prod.name[state.lang] || prod.name.ar}" />
              <div class="search-result-info">
                <div class="search-result-name">${prod.name[state.lang] || prod.name.ar}</div>
                <div class="search-result-price">${formatMoney(prod.price)}</div>
              </div>
            </div>
          `).join('');

          resultsDropdown.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
              const id = item.getAttribute('data-search-id');
              resultsDropdown.classList.remove('active');
              input.value = '';
              openQuickView(id);
            });
          });

          resultsDropdown.classList.add('active');
        } else {
          resultsDropdown.innerHTML = `<div style="padding: 1rem; text-align: center; font-size: 0.85rem; color: var(--color-charcoal-muted);">${t('noResults')}</div>`;
          resultsDropdown.classList.add('active');
        }
      });
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-search') && resultsDropdown) {
        resultsDropdown.classList.remove('active');
      }
    });
  }

  // Order Submission Logic
  function handlePlaceOrder(e) {
    e.preventDefault();

    const fullName = (document.getElementById('checkout-name') || document.getElementById('page-checkout-name'))?.value.trim();
    const phone = (document.getElementById('checkout-phone') || document.getElementById('page-checkout-phone'))?.value.trim();
    const address = (document.getElementById('checkout-address') || document.getElementById('page-checkout-address'))?.value.trim();
    const governorate = (document.getElementById('checkout-governorate') || document.getElementById('page-checkout-governorate'))?.value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || 'cod';
    const isGift = (document.getElementById('checkout-gift-box') || document.getElementById('page-checkout-gift-box'))?.checked;
    const giftMessage = (document.getElementById('checkout-gift-msg') || document.getElementById('page-checkout-gift-msg'))?.value.trim();

    const phoneRegex = /^01[0125][0-9]{8}$/;
    if (!fullName) {
      alert(state.lang === 'ar' ? 'برجاء إدخال الاسم بالكامل' : 'Please enter your full name');
      return;
    }
    if (!phone || !phoneRegex.test(phone.replace(/\s+/g, ''))) {
      alert(state.lang === 'ar' ? 'برجاء إدخال رقم هاتف محمول مصري صحيح (مثال: 01012345678)' : 'Please enter a valid Egyptian mobile number (e.g. 01012345678)');
      return;
    }
    if (!governorate) {
      alert(state.lang === 'ar' ? 'برجاء اختيار المحافظة' : 'Please select your governorate');
      return;
    }
    if (!address) {
      alert(state.lang === 'ar' ? 'برجاء كتابة العنوان بالتفصيل' : 'Please enter your detailed shipping address');
      return;
    }

    const orderId = 'AUR-EG-' + Math.floor(10000 + Math.random() * 90000);
    const govObj = AURA_DATA.governorates.find(g => g.id === governorate);
    const deliveryEstimate = govObj ? (govObj.time[state.lang] || govObj.time.ar) : (state.lang === 'ar' ? '24-48 ساعة' : '24-48 Hours');

    const targetContainer = document.getElementById('full-checkout-page') || document.getElementById('checkout-card');
    if (targetContainer) {
      targetContainer.innerHTML = `
        <div class="order-success-view" style="max-width: 650px; margin: 3rem auto; background: var(--color-canvas); border: 1px solid var(--color-sand-border); border-radius: var(--radius-lg); padding: 3rem 2rem;">
          <div class="success-icon-box">👑</div>
          <h2 class="heading-serif" style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--color-charcoal);">${t('orderSuccessTitle')}</h2>
          <p style="color: var(--color-charcoal-muted); max-width: 500px; margin: 0 auto;">${t('orderSuccessSubtitle')}</p>
          
          <div class="success-order-num">${t('orderIdLabel')} <strong style="color: var(--color-gold-hover);">${orderId}</strong></div>

          <div style="background: var(--color-surface-white); border: 1px solid var(--color-sand-border); border-radius: var(--radius-md); padding: 1.25rem; max-width: 520px; margin: 0 auto 1.5rem; text-align: start;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.9rem;">
              <span>👤 <strong>${fullName}</strong></span>
              <span>📱 ${phone}</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--color-charcoal-muted); margin-bottom: 0.5rem;">
              📍 ${govObj ? (govObj.name[state.lang] || govObj.name.ar) : ''} - ${address}
            </div>
            <div style="font-size: 0.85rem; color: var(--color-charcoal-muted); margin-bottom: 0.5rem;">
              💳 <strong>${state.lang === 'ar' ? 'طريقة الدفع:' : 'Payment:'}</strong> ${paymentMethod === 'cod' ? t('paymentCod') : (paymentMethod === 'instapay' ? t('paymentInstapay') : t('paymentCard'))}
            </div>
            <div style="font-size: 0.85rem; color: var(--color-success); font-weight: 600;">
              🚚 ${t('deliveryEstimated')} ${deliveryEstimate}
            </div>
            ${isGift ? `<div style="font-size: 0.8rem; color: var(--color-gold-hover); margin-top: 0.5rem; border-top: 1px dashed var(--color-sand-border); padding-top: 0.5rem;">🎁 يشمل تغليف هدايا ملكي مجاني${giftMessage ? `: "${giftMessage}"` : ''}</div>` : ''}
          </div>

          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <a href="https://wa.me/201002345678?text=${encodeURIComponent(`مرحباً أورا، أود متابعة طلبي رقم: ${orderId}`)}" target="_blank" class="btn-primary" style="background: #25D366; color: #FFF; box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);">
              <span>💬 ${t('whatsappTracking')}</span>
            </a>
            <a href="shop.html" class="btn-primary" style="background: var(--color-charcoal); color: var(--color-canvas); text-decoration: none;">
              ${t('continueShopping')}
            </a>
          </div>
        </div>
      `;

      state.cart = [];
      state.appliedPromo = null;
      localStorage.removeItem('aura_applied_promo');
      saveCart();
    }
  }

  // Global App Initialization
  function init() {
    setLanguage(state.lang);
    updateCounters();

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-filter');
        filterByCategory(cat);
      });
    });

    const matSelect = document.getElementById('material-select');
    if (matSelect) {
      matSelect.addEventListener('change', (e) => {
        state.activeMaterial = e.target.value;
        renderCatalog();
      });
    }

    const priceSlider = document.getElementById('price-slider');
    const priceDisplay = document.getElementById('price-slider-val');
    if (priceSlider && priceDisplay) {
      priceSlider.addEventListener('input', (e) => {
        state.maxPrice = Number(e.target.value);
        priceDisplay.textContent = formatMoney(state.maxPrice);
        renderCatalog();
      });
    }

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.activeSort = e.target.value;
        renderCatalog();
      });
    }

    const promoBtns = [document.getElementById('apply-promo-btn'), document.getElementById('page-apply-promo-btn')];
    const promoInputs = [document.getElementById('promo-input'), document.getElementById('page-promo-input')];

    promoBtns.forEach((promoBtn, idx) => {
      const promoInput = promoInputs[idx];
      if (promoBtn && promoInput) {
        promoBtn.addEventListener('click', () => {
          const code = promoInput.value.trim().toUpperCase();
          if (typeof AURA_DATA !== 'undefined' && AURA_DATA.promoCodes[code]) {
            state.appliedPromo = code;
            localStorage.setItem('aura_applied_promo', code);
            showToast(t('toastPromoApplied'));
            renderCartDrawer();
            renderFullCheckoutPage();
          } else {
            showToast(t('toastPromoInvalid'));
          }
        });
      }
    });

    document.querySelectorAll('.qv-tab-link').forEach(link => {
      link.addEventListener('click', () => {
        const tabTarget = link.getAttribute('data-tab');
        document.querySelectorAll('.qv-tab-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.qv-tab-pane').forEach(p => p.classList.remove('active'));

        link.classList.add('active');
        const pane = document.getElementById(`qv-pane-${tabTarget}`);
        if (pane) pane.classList.add('active');
      });
    });

    const qvDec = document.getElementById('qv-qty-dec');
    const qvInc = document.getElementById('qv-qty-inc');
    const qvVal = document.getElementById('qv-qty-value');
    if (qvDec && qvInc && qvVal) {
      qvDec.addEventListener('click', () => {
        if (state.quickViewQty > 1) {
          state.quickViewQty--;
          qvVal.textContent = state.quickViewQty;
        }
      });
      qvInc.addEventListener('click', () => {
        state.quickViewQty++;
        qvVal.textContent = state.quickViewQty;
      });
    }

    const qvAddBtn = document.getElementById('qv-add-cart-btn');
    if (qvAddBtn) {
      qvAddBtn.addEventListener('click', () => {
        if (state.quickViewProduct) {
          addToCart(state.quickViewProduct.id, state.quickViewSelectedSize, state.quickViewSelectedColor, state.quickViewQty);
          closeQuickView();
        }
      });
    }

    const qvCloseBtn = document.getElementById('qv-close-btn');
    if (qvCloseBtn) qvCloseBtn.addEventListener('click', closeQuickView);

    const cartBtn = document.getElementById('cart-trigger-btn');
    const mobileCartBtn = document.getElementById('mobile-cart-trigger');
    const cartCloseBtn = document.getElementById('cart-close-btn');
    const checkoutDrawerBtn = document.getElementById('btn-checkout-drawer');

    if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
    if (mobileCartBtn) mobileCartBtn.addEventListener('click', openCartDrawer);
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (checkoutDrawerBtn) checkoutDrawerBtn.addEventListener('click', openCheckout);

    const checkoutGovSelects = [document.getElementById('checkout-governorate'), document.getElementById('page-checkout-governorate')];
    checkoutGovSelects.forEach(select => {
      if (select) {
        select.addEventListener('change', (e) => {
          state.selectedGovernorate = e.target.value;
          renderFullCheckoutPage();
        });
      }
    });

    const checkoutForms = [document.getElementById('checkout-form'), document.getElementById('page-checkout-form')];
    checkoutForms.forEach(form => {
      if (form) form.addEventListener('submit', handlePlaceOrder);
    });

    document.querySelectorAll('.payment-method-card').forEach(card => {
      card.addEventListener('click', () => {
        document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        const radio = card.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      });
    });

    const langBtn = document.getElementById('lang-switch-btn');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        const nextLang = state.lang === 'ar' ? 'en' : 'ar';
        setLanguage(nextLang);
      });
    }

    const wishlistBtn = document.getElementById('wishlist-trigger-btn');
    if (wishlistBtn) {
      wishlistBtn.addEventListener('click', () => {
        if (state.wishlist.length === 0) {
          showToast(t('wishlistEmpty'));
          return;
        }
        showToast(state.lang === 'ar' ? `لديكِ ${state.wishlist.length} قطع في أمنياتكِ ❤️` : `You have ${state.wishlist.length} wishlist pieces ❤️`);
        if (!window.location.pathname.includes('shop.html')) {
          window.location.href = 'shop.html';
        } else {
          document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    const mobileNavClose = document.getElementById('mobile-nav-close');
    const drawerBackdrop = document.getElementById('drawer-backdrop');

    if (mobileMenuBtn && mobileNavDrawer) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileNavDrawer.classList.add('active');
        if (drawerBackdrop) drawerBackdrop.classList.add('active');
      });
    }

    if (mobileNavClose && mobileNavDrawer) {
      mobileNavClose.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        if (drawerBackdrop) drawerBackdrop.classList.remove('active');
      });
    }

    const modalBackdrop = document.getElementById('modal-backdrop');
    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', () => {
        closeCartDrawer();
        if (mobileNavDrawer) mobileNavDrawer.classList.remove('active');
        drawerBackdrop.classList.remove('active');
      });
    }
    if (modalBackdrop) {
      modalBackdrop.addEventListener('click', closeQuickView);
    }

    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header-wrapper');
      if (header) {
        if (window.scrollY > 30) {
          header.classList.add('header-scrolled');
        } else {
          header.classList.remove('header-scrolled');
        }
      }
    });

    setupSearch();
    startLivePurchaseSimulator();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
