import { getElement } from '../utils.js';

const cartOverlay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");
const toggleCartBtn = getElement(".toggle-cart");

// when clicking cart button, show cart tab
toggleCartBtn.addEventListener("click", () => {
    cartOverlay.classList.add("show");
})

// when clicking cart close button "X", hide cart tab
closeCartBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("show");
})

// when openCart() function is open, it creates an overlay to fade the page behind
export const openCart = () => {
    cartOverlay.classList.add("show");
};
