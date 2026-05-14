import{r as i}from"./utils-CGsYQjqr.js";import{P as c}from"./ProductData-Bsuc5Im-.js";const a="/-Sleep-Outside/";function n(t){return`<li class="product-card">
    <a href="${a}product_pages/index.html?product=${t.Id}">
      <img
        src="${a}${t.Image.replace("../","")}"
        alt="${t.Name}"
      />
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      <p class="product-card__price">$${t.FinalPrice}</p>
    </a>
  </li>`}class l{constructor(e,s,r){this.category=e,this.dataSource=s,this.listElement=r}async init(){const e=await this.dataSource.getData();this.renderList(e)}renderList(e){i(n,this.listElement,e)}}const o=new c("tents"),d=document.querySelector(".product-list"),m=new l("tents",o,d);m.init();
