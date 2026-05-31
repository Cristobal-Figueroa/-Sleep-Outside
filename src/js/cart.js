import { getLocalStorage, setLocalStorage, updateCartCount } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") || [];
  
  if (cartItems.length === 0) {
    document.querySelector(".product-list").innerHTML = `
      <p style="text-align: center; padding: 2rem; color: #666;">
        Your cart is empty. <a href="../index.html" style="color: #17b169;">Start shopping!</a>
      </p>
    `;
    return;
  }
  
  const htmlItems = cartItems.map((item, index) => cartItemTemplate(item, index));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
  
  // Add event listeners for remove buttons
  document.querySelectorAll('.remove-item').forEach(button => {
    button.addEventListener('click', removeFromCart);
  });
  
  updateCartTotal();
}

function cartItemTemplate(item, index) {
  // Handle both old and new data structures
  const imageUrl = item.Images?.PrimaryMedium || item.Image || '';
  const colorName = item.Colors?.[0]?.ColorName || 'N/A';
  
  const newItem = `<li class="cart-card divider" data-index="${index}">
  <a href="#" class="cart-card__image">
    <img
      src="${imageUrl}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${colorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <button class="remove-item" data-index="${index}" title="Remove item">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6"/>
    </svg>
  </button>
</li>`;

  return newItem;
}

function removeFromCart(event) {
  const index = parseInt(event.currentTarget.dataset.index);
  const cart = getLocalStorage("so-cart") || [];
  
  // Remove item at index
  cart.splice(index, 1);
  
  // Save updated cart
  setLocalStorage("so-cart", cart);
  
  // Update cart count badge
  updateCartCount();
  
  // Re-render cart
  renderCartContents();
  
  // Show notification
  showNotification('Item removed from cart');
}

function updateCartTotal() {
  const cartItems = getLocalStorage("so-cart") || [];
  const total = cartItems.reduce((sum, item) => sum + item.FinalPrice, 0);
  
  const totalElement = document.querySelector('.cart-total');
  if (totalElement) {
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.classList.add('show'), 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

renderCartContents();
