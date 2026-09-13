
const PRODUCTS = [
  {
    "id": "alpine-ilx-f509",
    "brand": "Alpine",
    "name": "Alpine iLX-F509",
    "price": 699,
    "screen": "9-inch",
    "desc": "Refurbished Alpine Halo9 digital multimedia receiver with a 9-inch HD floating display, wireless Apple CarPlay and Android Auto, Bluetooth hands-free and SiriusXM-ready connectivity.",
    "features": [
      "9-inch HD display",
      "Wireless Apple CarPlay & Android Auto",
      "Bluetooth hands-free",
      "SiriusXM-ready with compatible tuner",
      "HDMI input/output",
      "Two camera inputs"
    ],
    "image": "https://www.onlinecarstereo.com/CarAudio/assets/ProductImages/iLX-F509_3.jpg"
  },
  {
    "id": "alpine-ilx-f511",
    "brand": "Alpine",
    "name": "Alpine iLX-F511",
    "price": 799,
    "screen": "11-inch",
    "desc": "Refurbished Alpine Halo11 multimedia receiver with an adjustable 11-inch HD floating display, wireless smartphone integration, Bluetooth and advanced audio tuning.",
    "features": [
      "11-inch HD floating display",
      "Wireless Apple CarPlay & Android Auto",
      "Bluetooth hands-free",
      "Hi-Res audio playback",
      "HDMI input/output",
      "Two camera inputs"
    ],
    "image": "https://www.onlinecarstereo.com/CarAudio/assets/ProductImages/iLX-F511_3.jpg"
  },
  {
    "id": "alpine-ilx-507",
    "brand": "Alpine",
    "name": "Alpine iLX-507",
    "price": 499,
    "screen": "7-inch",
    "desc": "Refurbished Alpine iLX-507 7-inch digital multimedia receiver with HD display, Hi-Res audio, wired and wireless Apple CarPlay, Android Auto and flexible camera connectivity.",
    "features": [
      "7-inch 720p HD display",
      "Wired & wireless Apple CarPlay",
      "Wired & wireless Android Auto",
      "Hi-Res audio playback",
      "Bluetooth audio",
      "Standard double-DIN fitment"
    ],
    "image": "https://www.onlinecarstereo.com/CarAudio/assets/ProductImages/iLX-507_3.jpg"
  },
  {
    "id": "alpine-ilx-w650",
    "brand": "Alpine",
    "name": "Alpine iLX-W650",
    "price": 349,
    "screen": "7-inch",
    "desc": "Refurbished Alpine iLX-W650 shallow-chassis multimedia receiver designed for easy installation, with Apple CarPlay, Android Auto, Bluetooth and rear camera support.",
    "features": [
      "7-inch capacitive touchscreen",
      "Apple CarPlay",
      "Android Auto",
      "Built-in Bluetooth",
      "Shallow 2-DIN chassis",
      "Rear/front camera support"
    ],
    "image": "https://www.onlinecarstereo.com/CarAudio/assets/ProductImages/iLX-W650_3.jpg"
  },
  {
    "id": "sony-xav-ax6000",
    "brand": "Sony",
    "name": "Sony XAV-AX6000",
    "price": 449,
    "screen": "6.95-inch",
    "desc": "Refurbished Sony XAV-AX6000 digital multimedia receiver with a bezel-less touchscreen, wireless Apple CarPlay and Android Auto, HDMI, LDAC and advanced sound customization.",
    "features": [
      "6.95-inch capacitive touchscreen",
      "Wireless Apple CarPlay & Android Auto",
      "HDMI input",
      "LDAC Bluetooth audio",
      "14-band EQ",
      "Rear-view camera ready"
    ],
    "image": "https://www.onlinecarstereo.com/CarAudio/assets/ProductImages/XAV-AX6000_3.jpg"
  },
  {
    "id": "sony-xav-ax5500",
    "brand": "Sony",
    "name": "Sony XAV-AX5500",
    "price": 299,
    "screen": "6.95-inch",
    "desc": "Refurbished Sony XAV-AX5500 media receiver with a bezel-less 6.95-inch touchscreen, smartphone connectivity, Bluetooth and rear-camera support.",
    "features": [
      "6.95-inch touchscreen",
      "Apple CarPlay & Android Auto",
      "Bluetooth audio and hands-free",
      "10-band EQ",
      "Two rear USB ports",
      "Rear-view camera input"
    ],
    "image": "https://www.onlinecarstereo.com/CarAudio/assets/ProductImages/XAV-AX5500_3.jpg"
  },
  {
    "id": "sony-xav-ax3200",
    "brand": "Sony",
    "name": "Sony XAV-AX3200",
    "price": 279,
    "screen": "6.95-inch",
    "desc": "Refurbished Sony XAV-AX3200 digital media receiver with a 6.95-inch touchscreen, WebLink Cast, Apple CarPlay, Android Auto and rear-view camera support.",
    "features": [
      "6.95-inch touchscreen",
      "Apple CarPlay & Android Auto",
      "WebLink Cast",
      "Bluetooth",
      "Rear-view camera input",
      "55W x4 maximum power"
    ],
    "image": "https://www.onlinecarstereo.com/CarAudio/assets/ProductImages/XAV-AX3200_3.jpg"
  },
  {
    "id": "sony-xav-ax4000",
    "brand": "Sony",
    "name": "Sony XAV-AX4000",
    "price": 399,
    "screen": "6.95-inch",
    "desc": "Refurbished Sony XAV-AX4000 digital multimedia receiver with wireless smartphone connectivity, USB-C, LDAC, time alignment and 14-band EQ.",
    "features": [
      "6.95-inch anti-glare touchscreen",
      "Wireless Apple CarPlay & Android Auto",
      "USB Type-C",
      "LDAC Bluetooth audio",
      "14-band EQ",
      "Rear-view camera ready"
    ],
    "image": "https://www.onlinecarstereo.com/CarAudio/assets/ProductImages/XAV-AX4000_3.jpg"
  },
  {
    "id": "pioneer-dmh-wt7600nex",
    "brand": "Pioneer",
    "name": "Pioneer DMH-WT7600NEX",
    "price": 649,
    "screen": "9-inch class",
    "desc": "Refurbished Pioneer floating-style multimedia receiver with a large adjustable display, smartphone integration, Bluetooth and flexible installation features.",
    "features": [
      "Large floating touchscreen",
      "Apple CarPlay & Android Auto",
      "Bluetooth",
      "HDMI connectivity",
      "Multiple camera inputs",
      "Flexible mounting"
    ],
    "image": "https://m.media-amazon.com/images/I/41hqvUJZkEL.jpg"
  },
  {
    "id": "pioneer-dmh-wt8600nex",
    "brand": "Pioneer",
    "name": "Pioneer DMH-WT8600NEX",
    "price": 799,
    "screen": "10.1-inch",
    "desc": "Refurbished Pioneer 10.1-inch floating multimedia receiver built for a large-format dash upgrade with smartphone integration, Bluetooth and advanced audio control.",
    "features": [
      "10.1-inch floating display",
      "Apple CarPlay & Android Auto",
      "Bluetooth audio",
      "HDMI connectivity",
      "Camera input support",
      "Advanced audio controls"
    ],
    "image": "https://www.onlinecarstereo.com/caraudio/assets/productimages/Pioneer_DMH-WT8600NEX-1.jpg"
  },
  {
    "id": "pioneer-dmh-2660nex",
    "brand": "Pioneer",
    "name": "Pioneer DMH-2660NEX",
    "price": 349,
    "screen": "6.8-inch class",
    "desc": "Refurbished Pioneer DMH-2660NEX digital multimedia receiver with touchscreen control, smartphone integration, Bluetooth and rear camera support.",
    "features": [
      "Touchscreen multimedia receiver",
      "Apple CarPlay & Android Auto",
      "Bluetooth",
      "Rear camera input",
      "USB media playback",
      "Steering-wheel control compatible with adapter"
    ],
    "image": "https://m.media-amazon.com/images/I/410IBuOXqiL._SL500_.jpg"
  },
  {
    "id": "kenwood-dmx907s",
    "brand": "Kenwood",
    "name": "Kenwood eXcelon DMX907S",
    "price": 499,
    "screen": "6.95-inch",
    "desc": "Refurbished Kenwood eXcelon DMX907S digital multimedia receiver with smartphone integration, Bluetooth, advanced audio processing and camera support.",
    "features": [
      "6.95-inch touchscreen",
      "Apple CarPlay & Android Auto",
      "Bluetooth",
      "Advanced DSP audio controls",
      "Multiple camera support",
      "Steering-wheel control support with interface"
    ],
    "image": "https://cdn11.bigcommerce.com/s-oqfwjl/images/stencil/500x659/products/37077/255396/kenwoodbdl211203-02__5__37779.1639590906.jpg?c=2"
  }
];
const CART_KEY='sr-cart-v1', USER_KEY='sr-user-v1', ORDERS_KEY='sr-orders-v1';
const money=n=>'$'+Number(n).toFixed(2);
const getCart=()=>JSON.parse(localStorage.getItem(CART_KEY)||'[]');
const saveCart=c=>{localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartBadges();};
const getUser=()=>JSON.parse(localStorage.getItem(USER_KEY)||'null');
const productById=id=>PRODUCTS.find(p=>p.id===id);
function updateCartBadges(){const count=getCart().reduce((s,i)=>s+i.qty,0);document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=count);}
function addToCart(id,qty=1){const p=productById(id);if(!p)return;const c=getCart();const item=c.find(x=>x.id===id);if(item)item.qty+=qty;else c.push({id,qty});saveCart(c);showToast(p.name+' added to cart.');}
function buyNow(id){addToCart(id);location.href='cart.html?checkout=1';}
function changeQty(id,delta){const c=getCart();const item=c.find(x=>x.id===id);if(!item)return;item.qty+=delta;if(item.qty<1)c.splice(c.indexOf(item),1);saveCart(c);renderCart();}
function removeFromCart(id){saveCart(getCart().filter(x=>x.id!==id));renderCart();}
function cartTotals(){return getCart().reduce((s,i)=>{const p=productById(i.id);return s+(p?p.price*i.qty:0)},0);}
function showToast(msg){let t=document.querySelector('.site-toast');if(!t){t=document.createElement('div');t.className='site-toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),1800)}
function productCard(p){return `<article class="product-card"><img loading="lazy" referrerpolicy="no-referrer" class="product-image" src="${p.image}" onerror="this.onerror=null;this.src='https://www.onlinecarstereo.com/CarAudio/assets/ProductImages/iLX-F509_3.jpg'" alt="${p.name} refurbished radio"><div class="product-body"><span class="product-brand">${p.brand}</span><h3>${p.name}</h3><p class="product-desc">${p.desc}</p><div class="product-price">${money(p.price)}</div><div class="condition">Refurbished • Cash on Delivery</div><div class="product-actions"><a class="button small outline" href="product.html?id=${p.id}">View Details</a><button class="button small dark" onclick="addToCart('${p.id}')">Add to Cart</button></div><button class="button small light" style="margin-top:8px;border:1px solid #dce1eb" onclick="buyNow('${p.id}')">Buy Now</button></div></article>`}
function renderShop(){const grid=document.querySelector('#product-grid');if(!grid)return;const q=(document.querySelector('#shop-search')?.value||'').toLowerCase().trim();const filtered=PRODUCTS.filter(p=>(p.name+' '+p.brand+' '+p.desc).toLowerCase().includes(q));grid.innerHTML=filtered.map(productCard).join('');const count=document.querySelector('#shop-count');if(count)count.textContent=filtered.length+' products';}
function renderProduct(){const root=document.querySelector('#product-detail');if(!root)return;const id=new URLSearchParams(location.search).get('id');const p=productById(id)||PRODUCTS[0];document.title=p.name+' — Refurbished Radio | Satellite Radio Guide';root.innerHTML=`<div><img referrerpolicy="no-referrer" class="product-detail-image" src="${p.image}" onerror="this.onerror=null;this.src='https://www.onlinecarstereo.com/CarAudio/assets/ProductImages/iLX-F509_3.jpg'" alt="${p.name} refurbished radio"></div><div><span class="kicker">REFURBISHED RADIO</span><h1>${p.name}</h1><p class="meta">${p.brand} • ${p.screen}</p><div class="price">${money(p.price)}</div><div class="cod-note"><strong>Cash on Delivery available.</strong><br>No online payment is required. Place your order with your delivery address and confirm the order.</div><p class="muted">${p.desc}</p><h3>Key features</h3><ul class="feature-list">${p.features.map(f=>'<li>'+f+'</li>').join('')}</ul><div class="product-actions" style="max-width:430px;margin-top:24px"><button class="button dark" onclick="addToCart('${p.id}')">Add to Cart</button><button class="button light" onclick="buyNow('${p.id}')">Buy Now</button></div><div class="notice">Compatibility can vary by vehicle, trim and installation setup. Please verify fitment before ordering. Refurbished units may show minor cosmetic differences.</div></div>`;}
function renderCart(){const root=document.querySelector('#cart-content');if(!root)return;const c=getCart();if(!c.length){root.innerHTML='<div class="empty-state"><h2>Your cart is empty.</h2><p>Add a refurbished radio from the shop to continue.</p><a class="button dark" href="shop.html">Browse Shop</a></div>';return}const rows=c.map(i=>{const p=productById(i.id);return `<div class="cart-row"><img loading="lazy" referrerpolicy="no-referrer" class="cart-thumb" src="${p.image}" onerror="this.onerror=null;this.src='https://www.onlinecarstereo.com/CarAudio/assets/ProductImages/iLX-F509_3.jpg'" alt="${p.name}"><div><h3>${p.name}</h3><p>${money(p.price)} each • COD</p></div><div class="qty"><button onclick="changeQty('${p.id}',-1)">−</button><strong>${i.qty}</strong><button onclick="changeQty('${p.id}',1)">+</button></div><div><strong>${money(p.price*i.qty)}</strong><br><button class="remove-link" onclick="removeFromCart('${p.id}')">Remove</button></div></div>`}).join('');const total=cartTotals();root.innerHTML=`<div class="cart-layout"><div class="cart-list">${rows}</div><aside class="summary-card"><h3>Order Summary</h3><div class="summary-line"><span>Items</span><span>${c.reduce((s,i)=>s+i.qty,0)}</span></div><div class="summary-line"><span>Subtotal</span><span>${money(total)}</span></div><div class="summary-line"><span>Payment</span><span>Cash on Delivery</span></div><div class="summary-total"><span>Total</span><span>${money(total)}</span></div><a class="button dark" style="display:block;text-align:center" href="checkout.html">Continue to Checkout</a><a class="button light" style="display:block;text-align:center;margin-top:8px" href="shop.html">Continue Shopping</a></aside></div>`;}
async function hashText(text){const data=new TextEncoder().encode(text);const hash=await crypto.subtle.digest('SHA-256',data);return [...new Uint8Array(hash)].map(b=>b.toString(16).padStart(2,'0')).join('');}
function setupAccount(){const panel=document.querySelector('#account-panel');if(!panel)return;const user=getUser();panel.innerHTML=user?`<div class="account-status"><strong>Signed in as ${user.name}</strong><br>${user.email}</div><button class="button dark" onclick="localStorage.removeItem(USER_KEY);location.reload()">Sign Out</button>`:`<div class="account-tabs"><button class="tab-btn active" data-tab="signin">Sign In</button><button class="tab-btn" data-tab="signup">Create Account</button></div><div id="signin-box"><form id="signin-form"><div class="form-field"><label>Email</label><input id="signin-email" type="email" required></div><div class="form-field" style="margin-top:12px"><label>Password</label><input id="signin-password" type="password" required></div><button class="button dark" style="margin-top:16px" type="submit">Sign In</button><p class="notice">This account is stored locally in this browser. It is not a server account.</p></form></div><div id="signup-box" style="display:none"><form id="signup-form"><div class="form-field"><label>Name</label><input id="signup-name" required></div><div class="form-field" style="margin-top:12px"><label>Email</label><input id="signup-email" type="email" required></div><div class="form-field" style="margin-top:12px"><label>Password</label><input id="signup-password" type="password" minlength="6" required></div><button class="button dark" style="margin-top:16px" type="submit">Create Account</button></form></div>`;panel.querySelectorAll('.tab-btn').forEach(btn=>btn.onclick=()=>{panel.querySelectorAll('.tab-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const sign=btn.dataset.tab==='signin';panel.querySelector('#signin-box').style.display=sign?'block':'none';panel.querySelector('#signup-box').style.display=sign?'none':'block'});const sf=panel.querySelector('#signin-form');if(sf)sf.onsubmit=async e=>{e.preventDefault();const saved=JSON.parse(localStorage.getItem('sr-local-account')||'null');const pass=await hashText(panel.querySelector('#signin-password').value);if(!saved||saved.email.toLowerCase()!==panel.querySelector('#signin-email').value.toLowerCase()||saved.password!==pass){showToast('Incorrect email or password.');return}localStorage.setItem(USER_KEY,JSON.stringify({name:saved.name,email:saved.email}));location.reload()};const cf=panel.querySelector('#signup-form');if(cf)cf.onsubmit=async e=>{e.preventDefault();const email=panel.querySelector('#signup-email').value.trim();const existing=JSON.parse(localStorage.getItem('sr-local-account')||'null');if(existing&&existing.email.toLowerCase()===email.toLowerCase()){showToast('An account with this email already exists.');return}const password=await hashText(panel.querySelector('#signup-password').value);localStorage.setItem('sr-local-account',JSON.stringify({name:panel.querySelector('#signup-name').value.trim(),email,password}));localStorage.setItem(USER_KEY,JSON.stringify({name:panel.querySelector('#signup-name').value.trim(),email}));location.reload()};}
function renderCheckout(){const root=document.querySelector('#checkout-root');if(!root)return;const c=getCart();if(!c.length){root.innerHTML='<div class="empty-state"><h2>No items to order.</h2><a class="button dark" href="shop.html">Browse Shop</a></div>';return}const total=cartTotals();const user=getUser();root.innerHTML=`<div class="checkout-layout"><div class="checkout-card"><span class="kicker">DELIVERY DETAILS</span><h2>Place your COD order</h2><p class="muted">Enter the delivery details below. No online payment is required.</p><form id="checkout-form"><div class="form-grid"><div class="form-field"><label>Full name *</label><input name="name" required value="${user?.name||''}"></div><div class="form-field"><label>Mobile number *</label><input name="mobile" required></div><div class="form-field full"><label>Email</label><input name="email" type="email" value="${user?.email||''}"></div><div class="form-field full"><label>Address *</label><textarea name="address" required></textarea></div><div class="form-field"><label>City *</label><input name="city" required></div><div class="form-field"><label>State *</label><input name="state" required></div><div class="form-field"><label>ZIP / Postal code *</label><input name="zip" required></div><div class="form-field"><label>Country *</label><input name="country" value="United States" required></div></div><div class="cod-note" style="margin-top:18px"><strong>Payment method: Cash on Delivery</strong><br>Pay when the order is delivered. An order confirmation will be generated after submission.</div><button class="button dark" type="submit">Confirm COD Order</button></form></div><aside class="summary-card"><h3>Your Order</h3>${c.map(i=>{const p=productById(i.id);return `<div class="summary-line"><span>${p.name} × ${i.qty}</span><span>${money(p.price*i.qty)}</span></div>`}).join('')}<div class="summary-total"><span>Total</span><span>${money(total)}</span></div></aside></div>`;document.querySelector('#checkout-form').onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target);const order={id:'SR-'+Date.now().toString(36).toUpperCase(),date:new Date().toISOString(),customer:Object.fromEntries(fd.entries()),items:c,total};const orders=JSON.parse(localStorage.getItem(ORDERS_KEY)||'[]');orders.push(order);localStorage.setItem(ORDERS_KEY,JSON.stringify(orders));localStorage.removeItem(CART_KEY);location.href='order-confirmation.html?id='+encodeURIComponent(order.id)}}
function renderConfirmation(){const root=document.querySelector('#confirmation-root');if(!root)return;const id=new URLSearchParams(location.search).get('id');const orders=JSON.parse(localStorage.getItem(ORDERS_KEY)||'[]');const o=orders.find(x=>x.id===id)||orders[orders.length-1];if(!o){root.innerHTML='<div class="empty-state"><h2>Order not found</h2><a class="button dark" href="shop.html">Return to Shop</a></div>';return}root.innerHTML=`<div class="order-success"><div class="kicker">ORDER CONFIRMED</div><h1>Thank you, ${o.customer.name}.</h1><p>Your Cash on Delivery order has been recorded on this browser.</p><div class="order-id">${o.id}</div><div class="order-summary"><strong>Delivery</strong><p>${o.customer.address}<br>${o.customer.city}, ${o.customer.state} ${o.customer.zip}<br>${o.customer.country}<br>Mobile: ${o.customer.mobile}</p><strong>Items</strong>${o.items.map(i=>{const p=productById(i.id);return `<div class="summary-line"><span>${p.name} × ${i.qty}</span><span>${money(p.price*i.qty)}</span></div>`}).join('')}<div class="summary-total"><span>COD Total</span><span>${money(o.total)}</span></div></div><p class="notice">This is a static GitHub Pages order system, so the order is stored locally in this browser. A server/backend can be connected later if you want orders to be received centrally.</p><a class="button dark" href="shop.html">Continue Shopping</a></div>`;}
function renderHomeProducts(){const root=document.querySelector('#home-products');if(!root)return;root.innerHTML=PRODUCTS.slice(0,6).map(productCard).join('')}
function updateHeaderLinks(){document.querySelectorAll('[data-cart-count]').forEach(()=>{});updateCartBadges();}

document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.nav')?.classList.toggle('open'));
document.addEventListener('DOMContentLoaded',()=>{updateHeaderLinks();renderShop();renderProduct();renderCart();setupAccount();renderCheckout();renderConfirmation();renderHomeProducts();const s=document.querySelector('#shop-search');s?.addEventListener('input',renderShop)});
