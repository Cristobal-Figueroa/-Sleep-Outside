import { setLocalStorage, getLocalStorage, updateCartCount } from "./utils.mjs";

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
    updateCartCount();
    this.showAddToCartModal();
  }

  showAddToCartModal() {
    // Create modal HTML
    const modalHTML = `
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
    `;

    // Add modal to page
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = document.getElementById('cartModal');
    setTimeout(() => modal.classList.add('active'), 10);

    // Add event listeners
    document.getElementById('continueShopping').addEventListener('click', () => {
      modal.remove();
    });

    document.getElementById('viewCart').addEventListener('click', () => {
      window.location.href = '../cart/index.html';
    });

    // Close on overlay click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });

    // Auto close after 3 seconds
    setTimeout(() => {
      if (modal && modal.parentElement) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
      }
    }, 3000);
  }

  renderProductDetails() {
    document.getElementById("productBrand").textContent =
      this.product.Brand.Name;
    document.getElementById("productName").textContent =
      this.product.NameWithoutBrand;
    document.getElementById("productImage").src = this.product.Images.PrimaryLarge;
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
