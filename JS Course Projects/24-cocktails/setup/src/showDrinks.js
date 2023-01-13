// Fetching and displaying drinks

import displayDrinks from "./displayDrinks.js";
import fetchDrinks from "./fetchDrinks.js";
import setDrink from "./setDrink.js";

const showDrinks = async (url) => {
    // fetch drinks
    const data = await fetchDrinks(url);
    // display drinks
    const section = displayDrinks(data);
    if (section){
        setDrink(section)
    }
}

export default showDrinks;