// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

// filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import { setupStore, store } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';

// import fetch products
import fetchProducts from '../fetchProducts.js';

const loading = getElement(".page-loading");

const init = async() => {
    // if there is no storage (because it is only called in the home page) fetch the products again and store them in the local storage
    if (store.length < 1) {
        const products = await fetchProducts();
        setupStore(products);
    }
    display(store, getElement(".products-container")) //display the products
    setupSearch(store); //add the search filter and its functionality
    setupCompanies(store); //add the companies filter and its functionality
    setupPrice(store); //add the price filter and its functionality
    loading.style.display = "none"; //Once everything is loaded, remove "Loading..."
}

window.addEventListener("DOMContentLoaded", init);