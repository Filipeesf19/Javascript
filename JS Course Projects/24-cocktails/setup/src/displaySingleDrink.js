import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const displayDrink = (drink) => {
    hideLoading();
    console.log(drink);
    const newDrink = drink.drinks[0];
    const {strDrinkThumb:image, strDrink:name, strInstructions:desc} = newDrink;
    const list = [
        newDrink.strIngredient1        ,
        newDrink.strIngredient2,
        newDrink.strIngredient3,
        newDrink.strIngredient4,
        newDrink.strIngredient5
    ]
    console.log(list)
    const img = get('.drink-img');
    const drinkName = get('.drink-name');
    const description = get('.drink-desc');
    const ingredients = get('.drink-ingredients');
    img.src = image;
    document.title = name;
    drinkName.textContent = name;
    description.textContent = desc;
    ingredients.innerHTML = list.map((item)=>{
        if (!item) return;
        return `<li><i class="far fa-check-square"></i>${item}</li>`
    }).join("")
}

export default displayDrink;