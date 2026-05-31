const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  async getData(category) {
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  
  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async searchProducts(searchTerm) {
    // Search across all categories
    const categories = ['tents', 'backpacks', 'sleeping-bags', 'hammocks'];
    const allProducts = [];
    
    for (const category of categories) {
      const products = await this.getData(category);
      allProducts.push(...products);
    }
    
    // Filter products by search term
    const searchLower = searchTerm.toLowerCase();
    return allProducts.filter(product => 
      product.Name.toLowerCase().includes(searchLower) ||
      product.Brand.Name.toLowerCase().includes(searchLower) ||
      product.NameWithoutBrand.toLowerCase().includes(searchLower)
    );
  }
}
