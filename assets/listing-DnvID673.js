import"./style-HlQJNEhF.js";import{P as c}from"./ProductData-CvCuYrjt.js";import{r as i,a as o}from"./utils-w_hqdCcP.js";const n="/-Sleep-Outside/";function l(t){return`<li class="product-card">
    <a href="${n}product_pages/index.html?product=${t.Id}">
      <img
        src="${t.Images.PrimaryMedium}"
        alt="${t.Name}"
      />
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      <p class="product-card__price">$${t.FinalPrice}</p>
    </a>
  </li>`}class d{constructor(e,r,s){this.category=e,this.dataSource=r,this.listElement=s}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e)}renderList(e){i(l,this.listElement,e)}}const a=o("category"),m=new c,u=document.querySelector(".product-list"),h=new d(a,m,u);h.init();document.querySelector(".category-title").textContent=a.charAt(0).toUpperCase()+a.slice(1);
