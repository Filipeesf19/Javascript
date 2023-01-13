import showDrinks from "./src/showDrinks.js";
import "./src/searchForm.js"

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";

window.addEventListener("DOMContentLoaded", () => {
    showDrinks(url)
})