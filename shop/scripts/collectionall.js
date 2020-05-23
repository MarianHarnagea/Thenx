const productsDOM = document.querySelector(".product-container");

class Products {
  async getProducts() {
    try {
      let result = await fetch("/shop/assets/products.json");
      let data = await result.json();
      let products = data.products;
      products = products.map((product) => {
        const id = product.id;
        const img = product.img.url;
        const name = product.name;
        const price = product.price;

        return { id, img, name, price };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
            <div class="grid-container">
            <a class="product-button" href="#" data-id="${product.id}">
                <div class="img-container">
                    <img src="${product.img}" alt="">
                </div>
                <div class="text-container">
                    <h2>${product.name}</h2>
                    <p>$ ${product.price}</p>
                </div>
            </a>
        </div>
            `;
    });
    productsDOM.innerHTML = result;
  }
}

// Load Content
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  products.getProducts().then((products) => {
    ui.displayProducts(products);
  });
});
