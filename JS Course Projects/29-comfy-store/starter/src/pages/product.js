// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
let productID;

// show product when page loads
window.addEventListener("DOMContentLoaded", async ()=>{
    const urlID = window.location.search; // Accesses the specific page url id (e.g. "?id=rec43w3ipXvP28vog")
    try {
        // fetch the product page by joining the singleProductURL with urlID
        const response = await fetch(`${singleProductUrl}${urlID}`);
        // if the response is successeful (we were able to fetch the data)
        if(response.status >= 200 && response.status <=299) {
            // assign the response to the "product" variable
            const product = await response.json();
            //grab id
            const {id,fields} = product;
            productID = id;
            //grab all the other properties
            const {name, company, price, colors, description} = fields;
            const image = fields.image[0].thumbnails.large.url;
            // create the HTML (could be through mapping as well)
            document.title = `${name.toUpperCase()} || Confy`
            pageTitleDOM.textContent = `Home / ${name}`;
            imgDOM.src = image;
            titleDOM.textContent = name;
            companyDOM.textContent = `by ${company}`;
            priceDOM.textContent = formatPrice(price);
            descDOM.textContent = description;
            colors.forEach((color)=>{
                const span = document.createElement("span")
                span.classList.add("product-color");
                span.style.backgroundColor = `${color}`;
                colorsDOM.appendChild(span);
            })
        }
        // if response is not successeful display error message
        else {
            console.log(response.status, response.statusText)
            centerDOM.innerHTML = `
            <div>
            <h3 class="error"> sorry, something went wrong</h3>
            <a href="index.html" class="btn">back home</a>
            </div>
            `
        }
    } catch (error) {
        console.log(error)
    }
    loading.style.display = "none"; // once page is loaded remove "Loading..."
})

// Open the cart tab and add the item to the cart (corresponding to the product ID, which was fetched from the single product page API)
cartBtn.addEventListener("click", () => {
    addToCart(productID);
})