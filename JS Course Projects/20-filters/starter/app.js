const productsContainer = document.querySelector(".products-container");
const form = document.querySelector(".input-form");
const input = document.querySelector(".search-input");
const companies = document.querySelector(".companies");

let filteredProducts = products;

// Function to Display the products on the screen
const displayProducts = () => {
// in case the search criteria doesn't match any of the products (empty array)
    if(filteredProducts.length < 1) {
        productsContainer.innerHTML = `<h6>Sorry, but you filter criteria doesn't match any of our products</h6>`;
        return;
    }
// if it matches
    productsContainer.innerHTML = filteredProducts.map((product) => {
        const {id, title, image, price} = product;

        return `<article class="product" data-id="${id}">
        <img
          src="${image}"
          alt="product image"
          class="product-img img"
        />
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`
    }).join('');
}

// display products when the page is loaded
displayProducts();

// Call an event after something is typed on the search input
form.addEventListener('keyup', () => {
    const inputValue = input.value;
    filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(inputValue);
    });
    displayProducts();
});

// Display buttons (while getting the list from the products array and getting the unique values)
const displayButtons = () => {
    const buttons = ['all',...new Set(products.map((product) =>
        product.company))];
    companies.innerHTML = buttons.map((company) => {
        return `<button class="company-btn" data-id=${company}>${company}</button>`
    }).join('');
}

// Display the buttons when the page is loaded
displayButtons();

// Call an event when a button is clicked
companies.addEventListener('click', (e) => {
    const el = e.target;
    console.log(el)
    // If the area clicked inside the companies container is equal to a button (i.e. ocntains the class company-btn)
    if (el.classList.contains('company-btn')) {
        // If the button is 'all', return the original array
        if (el.dataset.id === 'all') {
            filteredProducts = [...products];
        }
        // Else, return the array with only the products that data-id
        else {
            filteredProducts = products.filter((product) => {
                return product.company === el.dataset.id;
            });
          }
        input.value = '';
        displayProducts();
    }

})

