import get from "./src/getElement.js"
import displayPeople from "./src/displayPeople.js";
import changeSlider from "./src/changeSlider.js";

const prevBtn = get(".prev-btn");
const nextBtn = get(".next-btn")

displayPeople();

nextBtn.addEventListener("click", () => {
    changeSlider("next");
})

prevBtn.addEventListener("click", () => {
    changeSlider("prev");
})