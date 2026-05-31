import{g as r,s as d,u as l}from"./utils-BIapS5SB.js";/* empty css                   */function m(){const e=r("so-cart")||[];if(e.length===0){document.querySelector(".product-list").innerHTML=`
      <p style="text-align: center; padding: 2rem; color: #666;">
        Your cart is empty. <a href="../index.html" style="color: #17b169;">Start shopping!</a>
      </p>
    `;return}const t=e.map((a,o)=>u(a,o));document.querySelector(".product-list").innerHTML=t.join(""),document.querySelectorAll(".remove-item").forEach(a=>{a.addEventListener("click",p)}),f()}function u(e,t){var n,s,i;const a=((n=e.Images)==null?void 0:n.PrimaryMedium)||e.Image||"",o=((i=(s=e.Colors)==null?void 0:s[0])==null?void 0:i.ColorName)||"N/A";return`<li class="cart-card divider" data-index="${t}">
  <a href="#" class="cart-card__image">
    <img
      src="${a}"
      alt="${e.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${e.Name}</h2>
  </a>
  <p class="cart-card__color">${o}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${e.FinalPrice}</p>
  <button class="remove-item" data-index="${t}" title="Remove item">×</button>
</li>`}function p(e){const t=parseInt(e.currentTarget.dataset.index),a=r("so-cart")||[];a.splice(t,1),d("so-cart",a),l(),m(),g("Item removed from cart")}function f(){const t=(r("so-cart")||[]).reduce((o,c)=>o+c.FinalPrice,0),a=document.querySelector(".cart-total");a&&(a.textContent=`Total: $${t.toFixed(2)}`)}function g(e){const t=document.createElement("div");t.className="cart-notification",t.textContent=e,document.body.appendChild(t),setTimeout(()=>t.classList.add("show"),10),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},2e3)}m();document.addEventListener("DOMContentLoaded",()=>{l()});
