const productDOM = document.querySelector(".product");
const colorsDOM = document.querySelector(".colors");

const url = 'https://course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
    try {
        productDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        console.log(id);
        const resp = await fetch(`${url}?id=${id}`);
        const data = await resp.json();
        return data;
    }
    catch(error) {
        productDOM.innerHTML = `<p class="product-loading">There was a problem loading the product...</p>`
    }
};

const displayProduct = (product) => {
    console.log(product)
    const {company,colors, description, name:title, price} = product.fields;
    const {url:img} = product.fields.image[0];

    colorList = colors.map((color) => {
        return `<span class="product-color" style="background: ${color}"></span>`
    }).join('')

    document.title = title.toUpperCase()
    productDOM.innerHTML = `
    <div class="product-wrapper">
    <img src="${img}" class="img" alt="" />
    <div class="product-info">
      <h3>${name}</h3>
      <h5>${company}</h5>
      <span>${price/100}</span>
      <div class="colors">
        ${colorList}
      </div>
      <p>${description}</p>
      <button class="btn">add to cart</button>
    </div>
    `
}

const start = async () => {
    const data = await fetchProduct();
    displayProduct(data);
}

start() 