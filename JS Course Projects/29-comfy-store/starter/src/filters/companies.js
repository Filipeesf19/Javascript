import { getElement } from '../utils.js';
import display from '../displayProducts.js';


const setupCompanies = (store) => {
    let companies = ['all', ...new Set(store.map((product) => product.company))] //get the unique companies from the stored array
    //Display filter buttons
    const companiesDOM = getElement(".companies");
    companiesDOM.innerHTML = companies.map((company)=>{
        return `<button class="company-btn">${company}</button>
        `
    }).join("");
    //whenever one of the company filter container is clicked...
    companiesDOM.addEventListener("click", (e) => {
        const element = e.target;
        if(element.classList.contains("company-btn")){ //...If it's a button...
            let newStore = [];
            if(element.textContent === "all") {
                newStore = [...store]; //if the button is "all", push the old array into the new array
            }
            else {
                //Else, filter the stored array so it only the ones which property "company" matches the text content of the button clicked
                newStore = store.filter((product) => product.company === element.textContent)  
            }
            display(newStore,getElement(".products-container"),true) //display that new array
        }
    })
};

export default setupCompanies;