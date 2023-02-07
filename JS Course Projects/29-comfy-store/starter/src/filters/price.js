import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
    const priceInput = getElement(".price-filter");
    const priceValue = getElement(".price-value");

    // initial values of price filter
    let maxPrice = store.map((product) => product.price); //assign the product price list to the variable maxPrice
    maxPrice = Math.max(...maxPrice); //get the maximum price of the array and assign to the same array maxPrice
    maxPrice = Math.ceil(maxPrice / 100); // convert it to the right format
    priceInput.value = maxPrice; //initial value of filter = max price
    priceInput.max = maxPrice; //maximum valeu allowed in the filter equal to the maximum value of product
    priceInput.min = 0; //minimum price allowed is 0
    priceValue.textContent = `Value : $${maxPrice}` //Display the filter values

    // Update price filter and products each time input value changes
    priceInput.addEventListener("input", () => {
        const value = parseInt(priceInput.value) //assign the current price input to value
        priceValue.textContent = `Value : $${value}` //Display filter values
        let newStore = store.filter((product) => product.price / 100 <= value); //create a new array of products from the stored array, with just the products below the price
        display(newStore, getElement(".products-container"),true); //display the new filtered array
        //if there are no items below the filtered price, display error message
        if (newStore.length < 1) {
            const products = getElement(".products-container");
            products.innerHTML = `<h3 class="filter-error">
            sorry, no products match your search
            <h3>`
        }
    })
};

export default setupPrice;