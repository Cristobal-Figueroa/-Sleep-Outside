import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { getParam } from "./utils.mjs";

const dataSource = new ProductData();
const listElement = document.querySelector(".product-list");
const loadingMessage = document.getElementById("loadingMessage");
const noResults = document.getElementById("noResults");
const searchTermElement = document.getElementById("searchTerm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

async function performSearch(searchTerm) {
  if (!searchTerm || searchTerm.trim() === "") {
    return;
  }

  // Show loading
  loadingMessage.style.display = "block";
  noResults.style.display = "none";
  listElement.innerHTML = "";
  searchTermElement.textContent = searchTerm;

  try {
    const results = await dataSource.searchProducts(searchTerm);
    
    // Hide loading
    loadingMessage.style.display = "none";

    if (results.length === 0) {
      noResults.style.display = "block";
    } else {
      const productList = new ProductList(null, dataSource, listElement);
      productList.renderList(results);
    }
  } catch (error) {
    console.error("Search error:", error);
    loadingMessage.textContent = "Error searching products. Please try again.";
  }
}

// Get search term from URL
const searchTerm = getParam("q");
if (searchTerm) {
  searchInput.value = searchTerm;
  performSearch(searchTerm);
} else {
  loadingMessage.style.display = "none";
  noResults.style.display = "block";
  noResults.querySelector("p").textContent = "Please enter a search term.";
}

// Handle new search
searchBtn.addEventListener("click", () => {
  const newSearchTerm = searchInput.value.trim();
  if (newSearchTerm) {
    window.location.href = `index.html?q=${encodeURIComponent(newSearchTerm)}`;
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const newSearchTerm = searchInput.value.trim();
    if (newSearchTerm) {
      window.location.href = `index.html?q=${encodeURIComponent(newSearchTerm)}`;
    }
  }
});
