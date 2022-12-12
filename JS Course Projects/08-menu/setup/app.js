const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Load Menu items when window is loaded
// Also, dynamically add the filter buttons when the window is loaded
// item is the object we are iterating in the "menu" array
// values is the value of the category property of the specific item we are iterating
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu)
  displayMenuButtons()
});



// Function to map through list of items.
// If this function is called, it adds every item to the HTML
function displayMenuItems (menuItem) {
  let displayMenu = menuItem.map((item) => {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.title} />
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML=displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce((values,item) => {
    if(!values.includes(item.category)) {
      values.push(item.category);
    }
  return values
  },['all'])
  const categoryBtns = categories.map((category) => {
    return ` <button class="filter-btn" type="button" data-id="${category}">${category}</button>`
  }).join("")
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Filter Items
//1. Assign event listener to all buttons
//2. Create a new array only with the categories of the clicked button and store ir in the var "filteredMenu"
//3. If the category is "all", can displayMenuItems to display all the items in the "menu" array
//4. If the category is any other, display only the ones stored inside "filteredMenu" array
filterBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.id;
    const filteredMenu = menu.filter((menuItem) => {
      if (menuItem.category === category) {
        return menuItem
      }
    });
      if (category === 'all') {
        displayMenuItems(menu)
      }
      else {
        displayMenuItems(filteredMenu)
      }
    })
  })
}