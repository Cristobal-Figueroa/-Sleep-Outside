import{g as a,s as n,u as d,a as r}from"./utils-BIapS5SB.js";/* empty css                   */import{P as c}from"./ProductData-x4V9q2sA.js";class i{constructor(e,t){this.productId=e,this.product={},this.dataSource=t}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){const e=a("so-cart")||[];e.push(this.product),n("so-cart",e),d(),this.showAddToCartModal()}showAddToCartModal(){const e=`
      <div class="modal-overlay" id="cartModal">
        <div class="modal">
          <div class="modal-icon">✓</div>
          <h2 class="modal-title">Added to Cart!</h2>
          <p class="modal-message">${this.product.NameWithoutBrand} has been added to your cart.</p>
          <div class="modal-buttons">
            <button class="modal-btn modal-btn-secondary" id="continueShopping">Continue Shopping</button>
            <button class="modal-btn modal-btn-primary" id="viewCart">View Cart</button>
          </div>
        </div>
      </div>
    `;document.body.insertAdjacentHTML("beforeend",e);const t=document.getElementById("cartModal");setTimeout(()=>t.classList.add("active"),10),document.getElementById("continueShopping").addEventListener("click",()=>{t.remove()}),document.getElementById("viewCart").addEventListener("click",()=>{window.location.href="../cart/index.html"}),t.addEventListener("click",o=>{o.target===t&&t.remove()}),setTimeout(()=>{t&&t.parentElement&&(t.classList.remove("active"),setTimeout(()=>t.remove(),300))},3e3)}renderProductDetails(){document.getElementById("productBrand").textContent=this.product.Brand.Name,document.getElementById("productName").textContent=this.product.NameWithoutBrand,document.getElementById("productImage").src=this.product.Images.PrimaryLarge,document.getElementById("productImage").alt=this.product.Name,document.getElementById("productFinalPrice").textContent="$"+this.product.FinalPrice,document.getElementById("productColorName").textContent=this.product.Colors[0].ColorName,document.getElementById("productDescriptionHtmlSimple").innerHTML=this.product.DescriptionHtmlSimple,document.getElementById("addToCart").dataset.id=this.product.Id}}const s=r("product"),m=new c,u=new i(s,m);u.init();document.addEventListener("DOMContentLoaded",()=>{d()});
