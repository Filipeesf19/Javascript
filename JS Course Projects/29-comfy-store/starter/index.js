// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

// fetch and display products when home page loads
const init = async () => {
    // save the array in the products variable
    const products = await fetchProducts()
    // add products to the store if the fetch is successeful
    if(products){
        setupStore(products);
        // only the featured products show in the home page (need to create a new filtered array)
        const featured = store.filter((product) => product.featured === true)
        display(featured,getElement(".featured-center"))
    }
}

window.addEventListener("DOMContentLoaded", init);