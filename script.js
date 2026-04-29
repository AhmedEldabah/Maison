/* ============================================================
   MAISON NORÉ — A·W 26
   ============================================================ */

/* ---------- DATA ---------- */
const products = [
  { id: 1, name: 'Mont Blanc', sub: 'Overcoat', cat: 'outerwear', catLabel: 'Outerwear', ref: '04·N', price: 1240, oldPrice: null, tag: null, fabric: '680gsm wool & cashmere melton', isNew: false, sortOrder: 1, colors: ['#3a2e25', '#0e0d0b', '#5a4332', '#a8825c'], grad: 'linear-gradient(135deg, #3a2e25, #1a1611 80%)', img: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&h=750&fit=crop' },
  { id: 2, name: 'Coromandel', sub: 'Knit', cat: 'knitwear', catLabel: 'Knitwear', ref: '11·N', price: 480, oldPrice: null, tag: 'new', fabric: '12gg lambswool & nylon, brushed', isNew: true, sortOrder: 2, colors: ['#c9a961', '#0e0d0b', '#a89e8c'], grad: 'linear-gradient(225deg, #5a4332, #2a201a)', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=750&fit=crop' },
  { id: 3, name: 'Atelier', sub: 'Wool Trouser', cat: 'trousers', catLabel: 'Trouser', ref: '07·N', price: 380, oldPrice: null, tag: null, fabric: '320gsm worsted, single-pleat', isNew: false, sortOrder: 3, colors: ['#0e0d0b', '#3a2e25', '#a89e8c'], grad: 'linear-gradient(45deg, #1f1812, #3a2e25)', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=750&fit=crop' },
  { id: 4, name: 'Salt & Smoke', sub: 'Blazer', cat: 'tailoring', catLabel: 'Tailoring', ref: '02·N', price: 920, oldPrice: 1100, tag: 'sale', fabric: '280gsm linen-wool hopsack', isNew: false, sortOrder: 4, colors: ['#3a2e25', '#0e0d0b'], grad: 'linear-gradient(315deg, #4a3528, #2a201a)', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=750&fit=crop' },
  { id: 5, name: 'Hisae', sub: 'Cashmere Roll', cat: 'knitwear', catLabel: 'Knitwear', ref: '12·N', price: 540, oldPrice: null, tag: 'new', fabric: 'Pure grade-A cashmere, naturally dyed', isNew: true, sortOrder: 5, colors: ['#c9a961', '#a89e8c', '#0e0d0b', '#5a4332'], grad: 'linear-gradient(135deg, #6a4d3a, #3a2e25)', img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=750&fit=crop' },
  { id: 6, name: 'Brittany', sub: 'Field Jacket', cat: 'outerwear', catLabel: 'Outerwear', ref: '05·N', price: 780, oldPrice: null, tag: null, fabric: '420gsm dry-waxed cotton canvas', isNew: false, sortOrder: 6, colors: ['#5a4332', '#3a2e25'], grad: 'linear-gradient(225deg, #4a3528, #1f1812)', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=750&fit=crop' },
  { id: 7, name: 'Selvedge', sub: 'Denim 04', cat: 'trousers', catLabel: 'Trouser', ref: '08·N', price: 320, oldPrice: null, tag: 'last', fabric: '14oz raw selvedge, Okayama', isNew: false, sortOrder: 7, colors: ['#1a2a3a', '#0e0d0b'], grad: 'linear-gradient(45deg, #1a2a3a, #0e1620)', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=750&fit=crop' },
  { id: 8, name: 'Granite', sub: 'Wool Coat', cat: 'outerwear', catLabel: 'Outerwear', ref: '03·N', price: 1480, oldPrice: null, tag: null, fabric: '720gsm undyed wool melton', isNew: false, sortOrder: 8, colors: ['#a89e8c', '#3a2e25'], grad: 'linear-gradient(315deg, #2a201a, #5a4a3a)', img: 'https://images.unsplash.com/photo-1608063615781-e2ef8c73d114?w=600&h=750&fit=crop' },
  { id: 9, name: 'Linen', sub: 'Pleat Trouser', cat: 'trousers', catLabel: 'Trouser', ref: '09·N', price: 290, oldPrice: 360, tag: 'sale', fabric: '240gsm Belgian linen', isNew: false, sortOrder: 9, colors: ['#c9b89e', '#a89e8c'], grad: 'linear-gradient(135deg, #8a7560, #5a4a3a)', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=750&fit=crop' },
  { id: 10, name: 'Studio', sub: 'Crewneck', cat: 'knitwear', catLabel: 'Knitwear', ref: '10·N', price: 360, oldPrice: null, tag: null, fabric: '7gg merino, fully fashioned', isNew: false, sortOrder: 10, colors: ['#0e0d0b', '#3a2e25', '#a89e8c'], grad: 'linear-gradient(225deg, #2a201a, #1a1611)', img: 'https://images.unsplash.com/photo-1614975059251-992f11792571?w=600&h=750&fit=crop' },
  { id: 11, name: 'Three-Piece', sub: 'Suit Mk II', cat: 'tailoring', catLabel: 'Tailoring', ref: '01·N', price: 1680, oldPrice: null, tag: 'new', fabric: '280gsm super 110s, Loro Piana', isNew: true, sortOrder: 11, colors: ['#0e0d0b', '#3a2e25'], grad: 'linear-gradient(45deg, #1f1812, #2a201a)', img: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&h=750&fit=crop' },
  { id: 12, name: 'Camel Hair', sub: 'Topcoat', cat: 'outerwear', catLabel: 'Outerwear', ref: '06·N', price: 1620, oldPrice: null, tag: null, fabric: '600gsm pure camel hair', isNew: false, sortOrder: 12, colors: ['#a8825c', '#5a4332'], grad: 'linear-gradient(315deg, #6a4d3a, #a8825c)', img: 'https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=600&h=750&fit=crop' },
];

const cart = [];
const favs = new Set();
let activeFilter = 'all';
let activeSort = 'featured';
let currency = { code: 'EUR', symbol: '€', rate: 1 };
const rates = { EUR: 1, GBP: 0.85, USD: 1.08 };
let activeProductId = null;
let activeSize = null;
const sizes = ['XS', 'S', 'M', 'L', 'XL'];

/* ============================================================
   3D REACTIVE CLOTH — three.js
   ============================================================ */
let clothMesh, clothGroup, scene, camera, renderer;
let scrollProgress = 0;
let targetScrollProgress = 0;
let mouseXNorm = 0, mouseYNorm = 0;
let originalPositions = null;

function initShirt() {
  const canvas = document.getElementById('shirtCanvas');
  const wrap = canvas.parentElement;

  scene = new THREE.Scene();

  const aspect = wrap.clientWidth / wrap.clientHeight;
  camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 100);
  camera.position.set(0, 0, 8);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(wrap.clientWidth, wrap.clientHeight);

  // ============ CLOTH GEOMETRY ============
  const geometry = new THREE.PlaneGeometry(4, 5, 64, 80);
  originalPositions = new Float32Array(geometry.attributes.position.array);

  const material = new THREE.MeshStandardMaterial({
    color: 0xe8dcc4,
    roughness: 0.88,
    metalness: 0.0,
    side: THREE.DoubleSide,
    wireframe: false,
  });

  clothMesh = new THREE.Mesh(geometry, material);

  // Stitch outline
  const edges = new THREE.EdgesGeometry(geometry, 15);
  const lineMat = new THREE.LineBasicMaterial({ color: 0xc45a32, transparent: true, opacity: 0.12 });
  const wireframe = new THREE.LineSegments(edges, lineMat);
  clothMesh.add(wireframe);

  clothGroup = new THREE.Group();
  clothGroup.add(clothMesh);
  clothGroup.scale.setScalar(0.9);
  scene.add(clothGroup);

  // ============ LIGHTING ============
  scene.add(new THREE.AmbientLight(0xfff5e0, 0.4));

  const key = new THREE.DirectionalLight(0xffb088, 1.3);
  key.position.set(5, 4, 6);
  scene.add(key);

  const rim = new THREE.DirectionalLight(0xc45a32, 0.8);
  rim.position.set(-6, 2, -4);
  scene.add(rim);

  const fill = new THREE.DirectionalLight(0xa89e8c, 0.4);
  fill.position.set(-3, -3, 5);
  scene.add(fill);

  const top = new THREE.DirectionalLight(0xfff0d8, 0.5);
  top.position.set(0, 8, 2);
  scene.add(top);

  clothGroup.rotation.set(0.1, -0.3, 0.05);

  animateShirt();
}

function animateShirt() {
  requestAnimationFrame(animateShirt);
  if (!clothGroup || !clothMesh) return;

  scrollProgress += (targetScrollProgress - scrollProgress) * 0.06;
  const t = performance.now() * 0.001;
  const pos = clothMesh.geometry.attributes.position;

  // Vertex displacement — reactive cloth
  for (let i = 0; i < pos.count; i++) {
    const ox = originalPositions[i * 3];
    const oy = originalPositions[i * 3 + 1];

    // Multiple wave layers for organic cloth feel
    const wave1 = Math.sin(oy * 1.2 + t * 1.5 + scrollProgress * 8) * 0.15;
    const wave2 = Math.cos(ox * 1.8 + t * 0.8 + scrollProgress * 5) * 0.1;
    const wave3 = Math.sin((ox + oy) * 0.9 + t * 2.0) * 0.06;

    // Mouse influence — ripple from cursor position
    const mouseWave = Math.sin(ox * 2.0 + mouseXNorm * 3.0 + t) * 0.08 * Math.abs(mouseXNorm);
    const mouseWaveY = Math.cos(oy * 1.5 + mouseYNorm * 2.0 + t * 0.7) * 0.06 * Math.abs(mouseYNorm);

    // Scroll intensity — more dramatic waves as you scroll
    const scrollIntensity = 1.0 + scrollProgress * 2.5;

    const z = (wave1 + wave2 + wave3 + mouseWave + mouseWaveY) * scrollIntensity;
    pos.setZ(i, z);
  }
  pos.needsUpdate = true;
  clothMesh.geometry.computeVertexNormals();

  // Rotation driven by scroll + mouse
  const baseY = -0.3 + scrollProgress * Math.PI * 2.0;
  const baseX = 0.1 + scrollProgress * 0.5;

  clothGroup.rotation.y = baseY + mouseXNorm * 0.2 + Math.sin(t * 0.3) * 0.04;
  clothGroup.rotation.x = baseX + mouseYNorm * 0.12 + Math.cos(t * 0.5) * 0.02;
  clothGroup.rotation.z = 0.05 + Math.sin(t * 0.25) * 0.03 + scrollProgress * 0.2;

  // Float
  clothGroup.position.y = Math.sin(t * 0.6) * 0.1 - scrollProgress * 0.4;

  // Scale
  const sc = 0.9 - scrollProgress * 0.1;
  clothGroup.scale.setScalar(Math.max(sc, 0.5));

  renderer.render(scene, camera);
}

function onShirtResize() {
  if (!camera || !renderer) return;
  const wrap = document.getElementById('shirtCanvas').parentElement;
  camera.aspect = wrap.clientWidth / wrap.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(wrap.clientWidth, wrap.clientHeight);
}

/* ============================================================
   LOADER
   ============================================================ */
let loaderPctValue = 0;
function tickLoader() {
  loaderPctValue += Math.random() * 8 + 2;
  if (loaderPctValue > 100) loaderPctValue = 100;
  document.getElementById('loaderPct').textContent = String(Math.floor(loaderPctValue)).padStart(2, '0') + '%';
  if (loaderPctValue < 100) setTimeout(tickLoader, 90);
}
tickLoader();

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hidden'), 1700);
});

/* ============================================================
   CURSOR
   ============================================================ */
const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');
const cursorLabel = document.getElementById('cursorLabel');
let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
let ringX = mouseX, ringY = mouseY;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
  cursorLabel.style.transform = `translate(${mouseX}px, ${mouseY + 30}px) translate(-50%, -50%)`;

  // Mouse parallax for shirt
  mouseXNorm = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseYNorm = -(e.clientY / window.innerHeight - 0.5) * 2;
});

(function ring() {
  ringX += (mouseX - ringX) * 0.16;
  ringY += (mouseY - ringY) * 0.16;
  cursorRing.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
  requestAnimationFrame(ring);
})();

function bindCursor(scope = document) {
  scope.querySelectorAll('a, button, .product, .edit-card, .journal-card, .stockist, .atelier-item, .accordion-trigger, .color-swatch, input').forEach(el => {
    if (el.dataset.cursorBound) return;
    el.dataset.cursorBound = '1';
    const label = el.dataset.label;
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('expand');
      cursorRing.classList.add(label ? 'text' : 'expand');
      if (label) {
        cursorLabel.textContent = label;
        cursorLabel.classList.add('show');
      }
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('expand');
      cursorRing.classList.remove('expand', 'text');
      cursorLabel.classList.remove('show');
    });
  });
}

/* ============================================================
   NAV / TICKER
   ============================================================ */
const nav = document.getElementById('nav');
const ticker = document.getElementById('ticker');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
  if (y > 200) ticker.classList.add('hide');
  else ticker.classList.remove('hide');

  // scroll progress
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const pct = max > 0 ? y / max : 0;
  document.getElementById('progressBar').style.transform = `scaleX(${pct})`;

  // 3D shirt scroll target
  targetScrollProgress = pct;

  lastScroll = y;
});

/* ============================================================
   MOBILE MENU
   ============================================================ */
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.add('open');
});
document.getElementById('mobileClose').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.remove('open');
});
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.remove('open');
}));

/* ============================================================
   CURRENCY
   ============================================================ */
function fmt(amount) {
  const converted = Math.round(amount * currency.rate);
  return currency.symbol + converted.toLocaleString();
}
document.getElementById('currency').addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  document.querySelectorAll('#currency button').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  const code = e.target.dataset.cur;
  currency = {
    code,
    symbol: code === 'GBP' ? '£' : code === 'USD' ? '$' : '€',
    rate: rates[code]
  };
  renderProducts();
  updateCart();
  if (activeProductId) updateModalPricing();
});

/* ============================================================
   PRODUCTS
   ============================================================ */
function getFiltered() {
  let arr = activeFilter === 'all' ? [...products] : products.filter(p => p.cat === activeFilter);
  switch (activeSort) {
    case 'new': arr.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    case 'price-low': arr.sort((a, b) => a.price - b.price); break;
    case 'price-high': arr.sort((a, b) => b.price - a.price); break;
    default: arr.sort((a, b) => a.sortOrder - b.sortOrder);
  }
  return arr;
}

function renderProducts() {
  const grid = document.getElementById('grid');
  grid.innerHTML = '';
  const list = getFiltered();
  document.getElementById('count').textContent = String(list.length).padStart(2, '0');

  list.forEach((p, i) => {
    const tagHtml = p.tag === 'new' ? '<span class="product-tag new">New</span>' :
                    p.tag === 'sale' ? '<span class="product-tag sale">−15%</span>' :
                    p.tag === 'last' ? '<span class="product-tag last">Final pieces</span>' : '';
    const swatchesHtml = p.colors.slice(0, 3).map(c => `<span class="color-swatch" style="background:${c};"></span>`).join('') +
                        (p.colors.length > 3 ? `<span class="color-count">+${p.colors.length - 3}</span>` : '');
    const oldPriceHtml = p.oldPrice ? `<span class="product-price-old">${fmt(p.oldPrice)}</span>` : '';
    const isFav = favs.has(p.id);

    const el = document.createElement('div');
    el.className = 'product reveal';
    el.dataset.id = p.id;
    el.dataset.label = 'Quick view';
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    el.innerHTML = `
      <div class="product-image">
        <div class="product-tags">${tagHtml}</div>
        <button class="product-fav ${isFav ? 'active' : ''}" data-fav="${p.id}" aria-label="Save">
          <svg viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.5">
            <path d="M12 21s-7-4.5-9.5-9c-2.5-4.5 1-9 5-9 2 0 3.5 1.5 4.5 3 1-1.5 2.5-3 4.5-3 4 0 7.5 4.5 5 9C19 16.5 12 21 12 21z"/>
          </svg>
        </button>
        <div class="product-image-bg" style="background:${p.grad};"><img src="${p.img}" alt="${p.name} ${p.sub}" style="width:100%;height:100%;object-fit:cover;display:block;"></div>
        <button class="product-quick" data-add="${p.id}">+ Add to bag</button>
      </div>
      <div class="product-meta">
        <div>
          <div class="product-cat"><span>${p.catLabel}</span><span class="ref">— ref. ${p.ref}</span></div>
          <div class="product-name">${p.name} <em>${p.sub}</em></div>
          <div class="product-fabric">${p.fabric}</div>
          <div class="product-colors">${swatchesHtml}</div>
        </div>
        <div class="product-price">${oldPriceHtml}${fmt(p.price)}</div>
      </div>
    `;
    grid.appendChild(el);
  });

  // bind events
  grid.querySelectorAll('.product').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('[data-add]') || e.target.closest('[data-fav]')) return;
      openModal(parseInt(el.dataset.id));
    });
  });
  grid.querySelectorAll('[data-add]').forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(parseInt(b.dataset.add));
    });
  });
  grid.querySelectorAll('[data-fav]').forEach(b => {
    b.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFav(parseInt(b.dataset.fav));
    });
  });
  bindCursor(grid);
  grid.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ============================================================
   FILTERS / SORT
   ============================================================ */
document.querySelectorAll('.filter-pill').forEach(p => {
  p.addEventListener('click', () => {
    document.querySelectorAll('.filter-pill').forEach(o => o.classList.remove('active'));
    p.classList.add('active');
    activeFilter = p.dataset.filter;
    renderProducts();
  });
});
document.getElementById('sort').addEventListener('change', (e) => {
  activeSort = e.target.value;
  renderProducts();
});

/* ============================================================
   FAVOURITES
   ============================================================ */
function toggleFav(id) {
  if (favs.has(id)) {
    favs.delete(id);
    showToast('Removed from saved');
  } else {
    favs.add(id);
    showToast('Saved');
  }
  renderProducts();
}

/* ============================================================
   CART
   ============================================================ */
function addToCart(id, size = 'M') {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const key = `${id}-${size}`;
  const existing = cart.find(c => c.key === key);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1, size, key });
  updateCart();
  showToast(`${product.name} added`);
  const cc = document.getElementById('cartCount');
  cc.classList.add('bump');
  setTimeout(() => cc.classList.remove('bump'), 350);
}

function removeFromCart(key) {
  const i = cart.findIndex(c => c.key === key);
  if (i >= 0) cart.splice(i, 1);
  updateCart();
}

function updateQty(key, delta) {
  const item = cart.find(c => c.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(key);
  else updateCart();
}

function updateCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const cc = document.getElementById('cartCount');
  cc.textContent = count;
  document.getElementById('drawerCount').textContent = `${count} piece${count === 1 ? '' : 's'} · Free returns`;

  const body = document.getElementById('drawerBody');
  const footer = document.getElementById('drawerFooter');

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="drawer-empty">
        <div class="drawer-empty-icon">∅</div>
        <h4>Your bag is <em>empty.</em></h4>
        <p>Pieces from the season will appear here when you add them.</p>
        <button class="drawer-empty-cta" id="drawerCloseShop">Browse the season</button>
      </div>
    `;
    footer.style.display = 'none';
    document.getElementById('drawerCloseShop').addEventListener('click', closeDrawer);
    bindCursor(body);
    return;
  }

  footer.style.display = 'block';
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img" style="background:${item.grad};"><img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;display:block;"></div>
      <div>
        <div class="cart-item-name">${item.name} ${item.sub}</div>
        <div class="cart-item-meta">${item.catLabel} · ${item.ref} · Size ${item.size}</div>
        <div class="cart-qty">
          <button data-qty="${item.key}" data-d="-1">−</button>
          <span>${item.qty}</span>
          <button data-qty="${item.key}" data-d="1">+</button>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="cart-item-price">${fmt(item.price * item.qty)}</div>
        <button class="cart-item-remove" data-rm="${item.key}">Remove</button>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const vat = subtotal * 0.20;
  document.getElementById('subtotal').textContent = fmt(subtotal);
  document.getElementById('vat').textContent = fmt(vat);
  document.getElementById('total').textContent = fmt(subtotal);

  body.querySelectorAll('[data-qty]').forEach(b => {
    b.addEventListener('click', () => updateQty(b.dataset.qty, parseInt(b.dataset.d)));
  });
  body.querySelectorAll('[data-rm]').forEach(b => {
    b.addEventListener('click', () => removeFromCart(b.dataset.rm));
  });
  bindCursor(body);
}

document.getElementById('cartOpen').addEventListener('click', () => {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawerBg').classList.add('open');
});
document.getElementById('drawerClose').addEventListener('click', closeDrawer);
document.getElementById('drawerBg').addEventListener('click', closeDrawer);
function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawerBg').classList.remove('open');
}

/* ============================================================
   QUICK VIEW MODAL
   ============================================================ */
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  activeProductId = id;
  activeSize = 'M';

  const modalImgEl = document.getElementById('modalImg');
  modalImgEl.style.background = p.grad;
  modalImgEl.innerHTML = `<img src="${p.img}" alt="${p.name} ${p.sub}" style="width:100%;height:100%;object-fit:cover;display:block;">`;
  document.getElementById('modalCat').textContent = `${p.catLabel} · ref. ${p.ref}`;
  document.getElementById('modalName').innerHTML = `${p.name} <em>${p.sub}</em>`;
  document.getElementById('modalFabric').textContent = p.fabric;

  const sizeGrid = document.getElementById('sizeGrid');
  sizeGrid.innerHTML = sizes.map(s => {
    const disabled = (s === 'XS' && p.id === 8) || (s === 'XL' && p.id === 4);
    const selected = s === activeSize && !disabled;
    return `<button class="size-btn ${selected ? 'selected' : ''}" data-size="${s}" ${disabled ? 'disabled' : ''}>${s}</button>`;
  }).join('');
  sizeGrid.querySelectorAll('.size-btn').forEach(b => {
    b.addEventListener('click', () => {
      if (b.disabled) return;
      sizeGrid.querySelectorAll('.size-btn').forEach(o => o.classList.remove('selected'));
      b.classList.add('selected');
      activeSize = b.dataset.size;
    });
  });

  // fav button
  const favBtn = document.getElementById('modalFav');
  if (favs.has(id)) {
    favBtn.style.borderColor = 'var(--rust)';
    favBtn.style.color = 'var(--rust)';
    favBtn.querySelector('svg').setAttribute('fill', 'currentColor');
  } else {
    favBtn.style.borderColor = '';
    favBtn.style.color = '';
    favBtn.querySelector('svg').setAttribute('fill', 'none');
  }

  updateModalPricing();
  bindCursor(document.getElementById('modal'));

  document.getElementById('modalBg').classList.add('open');
  document.getElementById('modal').classList.add('open');
}

function updateModalPricing() {
  const p = products.find(x => x.id === activeProductId);
  if (!p) return;
  document.getElementById('modalPrice').textContent = fmt(p.price);
  document.getElementById('modalAdd').textContent = `Add to bag — ${fmt(p.price)}`;
}

function closeModal() {
  document.getElementById('modalBg').classList.remove('open');
  document.getElementById('modal').classList.remove('open');
  activeProductId = null;
}

document.getElementById('modalBg').addEventListener('click', closeModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalAdd').addEventListener('click', () => {
  if (!activeProductId) return;
  addToCart(activeProductId, activeSize);
  closeModal();
});
document.getElementById('modalFav').addEventListener('click', () => {
  if (!activeProductId) return;
  toggleFav(activeProductId);
  openModal(activeProductId); // refresh fav state
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
    closeDrawer();
  }
});

/* ============================================================
   ACCORDION
   ============================================================ */
document.querySelectorAll('.accordion-trigger').forEach(t => {
  t.addEventListener('click', () => {
    const item = t.parentElement;
    const content = item.querySelector('.accordion-content');
    const isOpen = item.classList.contains('open');
    // close all
    document.querySelectorAll('.accordion-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-content').style.maxHeight = '0';
    });
    if (!isOpen) {
      item.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
// open first by default
const firstAcc = document.querySelector('.accordion-item');
if (firstAcc) {
  firstAcc.classList.add('open');
  firstAcc.querySelector('.accordion-content').style.maxHeight = firstAcc.querySelector('.accordion-content').scrollHeight + 'px';
}

/* ============================================================
   TOAST
   ============================================================ */
let toastTimer;
function showToast(msg) {
  document.getElementById('toastText').textContent = msg;
  const t = document.getElementById('toast');
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ============================================================
   REVEAL OBSERVER
   ============================================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ============================================================
   NEWSLETTER
   ============================================================ */
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  showToast('Thank you — confirmation sent');
  e.target.reset();
});

/* ============================================================
   INIT
   ============================================================ */
renderProducts();
bindCursor();
window.addEventListener('resize', onShirtResize);

// init three.js after a tiny delay so dimensions settle
setTimeout(() => {
  if (typeof THREE !== 'undefined') initShirt();
}, 100);

// After accordion size changes (eg fonts loaded), recalc heights for the open one
window.addEventListener('load', () => {
  setTimeout(() => {
    const open = document.querySelector('.accordion-item.open');
    if (open) {
      const c = open.querySelector('.accordion-content');
      c.style.maxHeight = c.scrollHeight + 'px';
    }
  }, 300);
});