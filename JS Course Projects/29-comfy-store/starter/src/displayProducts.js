import { formatPrice } from './utils.js';
import { addToCart } from './cart/setupCart.js';

const display = (products, element, filters) => {
    // display products
    element.innerHTML = products.map((product) => {
        const {id, name, image, price} = product;
        return `<article class="product">
        <div class="product-container">
        <img src="${image}" alt="${name}" class="product-img img" />
        <div class="product-icons">
          <a href="product.html?id=${id}" class="product-icon">
            <i class="fas fa-search"></i>
          </a>
          <button class="product-cart-btn product-icon" data-id="${id}">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p class="product-name">${name}</p>
        <h4 class="product-price">${formatPrice(price)}</h4>
      </footer>
    </article>`
    }).join("");

    // if the filters exist we want the function to stop here, otherwise it will keep adding event linsteners each time the user filters the products
  if (filters) return;

    element.addEventListener("click", function(e){
      const parent = e.target.parentElement;
      if (parent.classList.contains("product-cart-btn")) {
        console.log("hello")
        addToCart(parent.dataset.id)
      }
    })
};

export default display;
