import { setLocalStorage, getLocalStorage } from "./utils.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();
    document
      .getElementById("addToCart")
      .addEventListener("click", this.addToCart.bind(this));
  }

  addToCart() {
    const cart = getLocalStorage("so-cart") || [];
    cart.push(this.product);
    setLocalStorage("so-cart", cart);
  }

  renderProductDetails() {
    document.getElementById("productBrand").textContent =
      this.product.Brand.Name;
    document.getElementById("productName").textContent =
      this.product.NameWithoutBrand;
    document.getElementById("productImage").src = this.product.Image;
    document.getElementById("productImage").alt = this.product.Name;
    document.getElementById("productFinalPrice").textContent =
      "$" + this.product.FinalPrice;
    document.getElementById("productColorName").textContent =
      this.product.Colors[0].ColorName;
    document.getElementById("productDescriptionHtmlSimple").innerHTML =
      this.product.DescriptionHtmlSimple;
    document.getElementById("addToCart").dataset.id = this.product.Id;
  }
}
