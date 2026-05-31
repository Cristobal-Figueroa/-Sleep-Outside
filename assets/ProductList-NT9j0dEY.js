import{r}from"./utils-BIapS5SB.js";const i="/-Sleep-Outside/";function c(t){return`<li class="product-card">
    <a href="${i}product_pages/index.html?product=${t.Id}">
      <img
        src="${t.Images.PrimaryMedium}"
        alt="${t.Name}"
      />
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      <p class="product-card__price">$${t.FinalPrice}</p>
    </a>
  </li>`}class n{constructor(a,e,s){this.category=a,this.dataSource=e,this.listElement=s}async init(){const a=await this.dataSource.getData(this.category);this.renderList(a)}renderList(a){r(c,this.listElement,a)}}export{n as P};
