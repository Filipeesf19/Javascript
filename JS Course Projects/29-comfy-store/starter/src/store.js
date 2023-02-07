import { getStorageItem, setStorageItem } from './utils.js';

// initialize a "store" variable in the local storage
let store = getStorageItem("store");

// store the products in the local storage by mapping through it and creating a new array "store"
const setupStore = (products) => {
    store = products.map((product) => {
        const {id,fields:{featured, name, price, company,colors, image:img}} = product;
        const image = img[0].thumbnails.large.url;
        return {id, featured, name, price, company, colors,image};
    });
    setStorageItem("store", store)
};

const findProduct = (id) =>  {
    let product = store.find((product) => product.id===id)
    return product;
};

export { store, setupStore, findProduct };
