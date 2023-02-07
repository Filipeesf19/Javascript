// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';

// set items
const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

//create an array that gets the values from the "cart" variable in the storage (in the beginning will just be an empty array)
let cart = getStorageItem("cart") 

// add the item with a certain id to the cart
export const addToCart = (id) => {
  let item = cart.find((cartItem) => cartItem.id === id); //create a boolean variable that is TRUE if it can find the id in the cart array, and FALSE if not
  //if it's a new item (not been hadded to the cart yet)
  if (!item) {
    let product = findProduct(id); //find product from the store array with the corresponding id
    product = {...product,amount:1} //add a new property "amount" for the product object and assign the value of 1
    cart = [...cart,product] //add the new product to the cart array
    addToCartDOM(product);   // add item to the DOM
  }
  else {
    // update amount of the added item
    const amount = increaseAmount(id); //increase amount in storage and update DOM and assign it to "amount" variable
    const items = [...cartItemsDOM.querySelectorAll(".cart-item-amount")]; //select the existing items in the cart and convert it from Node List into Array with spread operator ...
    const newAmount = items.find((value) => value.dataset.id === id); //find the value of the cart item with the corresponding id and assign it to new amount
    newAmount.textContent = amount; //update the amount in the DOM
  }

  // When we add and item to the cart, we want also to:
  displayCartItemCount();  // update the quantity in the cart icon
  displayCartTotal();  // update the cart total money amount
  setStorageItem("cart",cart);  // synchronize the cart variable in local storage
  openCart() // open Cart tab
};

// update the quantity in the cart icon
function displayCartItemCount(){
  const amount = cart.reduce((total, cartItem)=>{ 
    return total += cartItem.amount;  //sum the values in all the cart "amount" property (initla value is 0)
  },0)
cartItemCountDOM.textContent = amount; //update the DOM
}

// update the cart total money amount
function displayCartTotal(){
  let total = cart.reduce((total,cartItem)=>{ //sum the values in all the cart "price" and "amount" properties (initla value is 0)
    return total += cartItem.price * cartItem.amount;
  },0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)}` //update the DOM
}

// remove item from local storage
function removeItem(id){
  cart = cart.filter((cartItem) => cartItem.id !== id) //adds every cart item from the cart array but the one with the matching ID
}

//Increase the amount in the cart array for a certain ID (update local storage)
function increaseAmount(id) { 
  let newAmount;
  cart = cart.map((cartItem)=>{ //iterate over the cart storage
    if(cartItem.id === id){ //if the id in the cart storage matches the id that called in the argument
      newAmount = cartItem.amount + 1; //create a new variable, which is +1 than the current "amount" in the cart storage
      cartItem = {...cartItem, amount : newAmount}; //update the current amount in the local storage with the new amount
    }
    return cartItem;
  })
  return newAmount;
}

//Decrease the amount in the cart array for a certain ID
function decreaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem)=>{ //iterate over the cart storage
    if(cartItem.id === id){ //if the id in the cart storage matches the id that called in the argument
      newAmount = cartItem.amount - 1; //create a new variable, which is -1 than the current "amount" in the cart storage
      cartItem = {...cartItem, amount : newAmount}; //update the current amount in the local storage with the new amount
    }
    return cartItem;
  })
  return newAmount;
}

//increasing amount, decreasing amount and removing item (setup when page loads)
function setupCartFunctionality() {
  //called everytime there is a click in the cart items containers
  cartItemsDOM.addEventListener("click", (e)=>{
    const element = e.target;
    const parent = element.parentElement;
    const id = element.dataset.id;
    const parentID = parent.dataset.id;
    // if the click is in the remove button, remove the parent (the item)
    if (element.classList.contains("cart-item-remove-btn")){
      removeItem(id); //update storage
      parent.parentElement.remove() //update DOM
    }
    // if the click is in the increase button, increase the grandparent (the item)
    if (parent.classList.contains("cart-item-increase-btn")){
      const newAmount = increaseAmount(parentID) //update storage
      parent.nextElementSibling.textContent = newAmount; //update DOM
    }
    // if the click is in the decrease button, decrease the grandparent (the item)
    if (parent.classList.contains("cart-item-decrease-btn")){
      const newAmount = decreaseAmount(parentID) //update storage
      //if the amount is 0 then remove the item from cart
      if (newAmount === 0){
        removeItem(parentID) //update data from storage
        parent.parentElement.parentElement.remove(); //update DOM
      }
      //if the maount is not 0, then update the DOM with new amount
      else {
        parent.previousElementSibling.textContent = newAmount;
      }
    }
    displayCartItemCount(); // update the cart total money amount
    displayCartTotal(); // update the cart total money amount
    setStorageItem("cart",cart) //sinchronize with local storage
  })
}

//add every item in the storage to the cart tab when (for when the page loads)
function displayCartItemsDOM() {
  cart.forEach((cartItem) => {
    addToCartDOM(cartItem) //
  })
}

const init = () => {
  displayCartItemCount(); //display amount of cart items
  displayCartTotal();  // display total amount in $
  displayCartItemsDOM()  //add all cart items to the DOM
  setupCartFunctionality();  //setup cart functionality
}

init();
