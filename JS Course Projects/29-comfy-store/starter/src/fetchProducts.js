import { allProductsUrl } from './utils.js';

// Fetch icons from API
const fetchProducts = async () => {
    const response = await fetch(allProductsUrl).catch((err) => {
        console.log(err)})
        // we still want it to return the errors if fetch is not successeful
        if (response) {
            return response.json();
        }
        return response;
    }

export default fetchProducts;
