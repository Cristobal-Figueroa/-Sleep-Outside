import{g as o}from"./utils-BIapS5SB.js";function n(){const r=(o("so-cart")||[]).map(c=>l(c));document.querySelector(".product-list").innerHTML=r.join("")}function l(a){var t,e,s;const r=((t=a.Images)==null?void 0:t.PrimaryMedium)||a.Image||"",c=((s=(e=a.Colors)==null?void 0:e[0])==null?void 0:s.ColorName)||"N/A";return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${r}"
      alt="${a.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${a.Name}</h2>
  </a>
  <p class="cart-card__color">${c}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${a.FinalPrice}</p>
</li>`}n();
