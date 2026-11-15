(function(){
  const products=window.PRODUCTS;
  const grid=document.getElementById('productGrid');
  let activeFilter='all';
  let sortMode='featured';
  const money=n=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n);
  const effective=p=>p;
  const orderUrl=p=>{const x=effective(p),price=x.salePrice!==null&&x.salePrice!==''?`${money(x.salePrice)} (reduced from ${money(x.price)})`:money(x.price);const msg=`Hi Karishmaa! I would love to order ${p.name}${price?` (${price})`:''}. Please share the available colors, customization options and delivery details.`;return `https://wa.me/919999166305?text=${encodeURIComponent(msg)}`};
  function render(){let shown=products.filter(p=>activeFilter==='all'||p.category===activeFilter);if(sortMode==='price-low')shown.sort((a,b)=>Number(effective(a).salePrice||effective(a).price)-Number(effective(b).salePrice||effective(b).price));if(sortMode==='price-high')shown.sort((a,b)=>Number(effective(b).salePrice||effective(b).price)-Number(effective(a).salePrice||effective(a).price));if(sortMode==='name')shown.sort((a,b)=>a.name.localeCompare(b.name));grid.innerHTML=shown.map(p=>{const x=effective(p),hasSale=x.salePrice!==null&&x.salePrice!==''&&Number(x.salePrice)<Number(x.price);return `<article class="product-card"><div class="product-photo"><img loading="lazy" src="${p.image}" alt="${p.alt}"><span class="product-tag">${p.categoryLabel}</span><span class="product-label">✳</span></div><div class="product-info"><div class="product-meta"><h3>${p.name}</h3><div class="price">${hasSale?`<span class="old-price">${money(x.price)}</span>${money(x.salePrice)}`:money(x.price)}</div></div><p>${p.description}</p><a class="order-link" target="_blank" rel="noreferrer" href="${orderUrl(p)}">Order on WhatsApp <span>↗</span></a></div></article>`}).join('');document.getElementById('productCount').textContent=`Showing ${shown.length} handmade ${shown.length===1?'piece':'pieces'}`;document.querySelectorAll('.filter,.side-filter').forEach(b=>{b.classList.toggle('active',b.dataset.filter===activeFilter);const count=b.querySelector('span');if(count)count.textContent=String(products.filter(p=>b.dataset.filter==='all'||p.category===b.dataset.filter).length).padStart(2,'0')})}
  document.querySelectorAll('.filter,.side-filter').forEach(b=>b.addEventListener('click',()=>{activeFilter=b.dataset.filter;render()}));
  document.getElementById('sortProducts').addEventListener('change',e=>{sortMode=e.target.value;render()});
  render();
})();
