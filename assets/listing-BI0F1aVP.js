import{r as c,a as i}from"./utils-BBKCwKF1.js";/* empty css              */import{P as o}from"./ProductData-CvCuYrjt.js";const n="/-Sleep-Outside/";function l(t){return`<li class="product-card">
    <a href="${n}product_pages/index.html?product=${t.Id}">
      <img
        src="${t.Images.PrimaryMedium}"
        alt="${t.Name}"
      />
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      <p class="product-card__price">$${t.FinalPrice}</p>
    </a>
  </li>`}class d{constructor(e,r,s){this.category=e,this.dataSource=r,this.listElement=s}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e)}renderList(e){c(l,this.listElement,e)}}const a=i("category"),m=new o,u=document.querySelector(".product-list"),h=new d(a,m,u);h.init();document.querySelector(".category-title").textContent=a.charAt(0).toUpperCase()+a.slice(1);
