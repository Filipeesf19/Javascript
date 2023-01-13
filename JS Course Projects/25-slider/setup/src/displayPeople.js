import people from "../data.js";
import get from "./getElement.js"

const displayPeople = () => {
    const container = get(".slide-container")
    container.innerHTML = people.map((person,index)=>{
        const {img,name,job,text} = person;
    
        let position = 'inactive';
    
        if(index === 0) {
            position = 'active';
        }
        if(index === people.length - 1) {
            position = 'previous';
        }

        return `<article class="slide ${position}">
                    <img
                        src="${img}"
                        alt="peter doe"
                        class="img"
                    />
                    <h4>${name}</h4>
                    <p class="title">${job}</p>
                    <p class="text">${text}</p>
                    <div class="quote-icon">
                        <div class="fas fa-quote-right"></div>
                    </div>
                </article>`
    }).join("");
}

export default displayPeople;