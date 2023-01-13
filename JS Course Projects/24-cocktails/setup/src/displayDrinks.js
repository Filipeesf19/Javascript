import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

const section = get('.section-center');
const title = get('.title');

const displayDrinks = ({drinks}) => { //get the drinks property out of the data object
    if(!drinks){
        //hide loading
        hideLoading();
        title.textContent = "sorry, no drinks matched your search";
        section.innerHTML = null;
        return;
    }
    const newDrinks = drinks.map((drink) => {
        const {idDrink:id} = drink;
        const {strDrink:name} = drink;
        const {strDrinkThumb:image} = drink;
        return `<a href="drink.html">   
                    <article class="cocktail" data-id="${id}">
                        <img src="${image}" alt="${name}" />
                        <h3>${name}</h3>
                    </article>
                </a>`;
    }).join('');
    hideLoading();
    title.textContent = "";
    section.innerHTML = newDrinks;
    return section;
}

export default displayDrinks;