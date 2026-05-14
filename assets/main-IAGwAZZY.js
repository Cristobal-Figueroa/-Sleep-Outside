import{r}from"./utils-CGsYQjqr.js";import{P as i}from"./ProductData-Bsuc5Im-.js";function c(t){return`<li class="product-card">
    <a href="/product_pages/index.html?product=${t.Id}">
      <img
        src="${t.Image}"
        alt="${t.Name}"
      />
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      <p class="product-card__price">$${t.FinalPrice}</p>
    </a>
  </li>`}class n{constructor(a,e,s){this.category=a,this.dataSource=e,this.listElement=s}async init(){const a=await this.dataSource.getData();this.renderList(a)}renderList(a){r(c,this.listElement,a)}}const o=new i("tents"),d=document.querySelector(".product-list"),l=new n("tents",o,d);l.init();
