const url = "https://course-api.com/javascript-store-products"

const productCenter = document.querySelector(".products-center");
const productContainer = document.querySelector(".products-container");

const fetchProducts = async () => {
    productCenter.innerHTML = `<div class="loading"></div>`
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }
    catch (error) {
        productCenter.innerHTML = `<p class="error">there was ana error</p>` 
    }
}

const displayProducts = (list) => {
    const productList = list.map((product) => {
    const {id} = product;
    const {name:title, price} = product.fields;
    const {url:img} = product.fields.image[0];
    const formattedPrice = price/100;
    return `<a href="product.html?id=${id}" class="single-product">
                <img src="${img}" alt="${title}" class="single-product-img img" />
                <footer>
                    <h5 class="name">${title}</h5>
                    <span class="price">$${formattedPrice}</span>
                </footer>
            </a>`
    }).join('')
    productCenter.innerHTML = `<div class="products-container">
                                ${productList}
                                </div>`
}

const start = async () => {
    const data = await fetchProducts();
    displayProducts(data);
}

start();