import { getElement } from '../utils.js';
import display from '../displayProducts.js';

// Display the Search filter and add functionality
const setupSearch = (store) => {
    const form = getElement(".input-form");
    const nameInput = getElement(".search-input");
    // When typing something in the input field...
    form.addEventListener("keyup", function(){
        const value = nameInput.value;
        // ...if anything is written in the Search input field...
        if (value) {
            //...go to the local store and access the variable "store"...
            const newStore = store.filter((product) => { //... create a new array with only the products that pass the criteria...
                let {name} = product; //...access the "name" property...
                name = name.toLowerCase(); //...change it to lower case (because that is how the names are written in the API)...
                if (name.startsWith(value)) { //...if the name starts with the current value in the Search input...
                    return product; //...return that product
                }
            });
            // display the new array
            display(newStore,getElement(".products-container"),true);
            // if no item match the criteria, display error message
            if (newStore.length < 1) {
                const products = getElement(".products-container");
                products.innerHTML = `<h3 class="filter-error">
                sorry, no products match your search
                <h3>`
            }
        }
        // if nothing is in the Search input field, display all the items in the "store"
        else {
            display(store, getElement(".products-container"),true)
        }
    })
};

export default setupSearch;