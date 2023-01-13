import get from "./getElement.js"
const container = get(".slide-container");

const changeSlider = (type) => {
    const active = get(".active");
    const previous = get(".previous");
    let doublePrevious = previous.previousElementSibling;
    if (!doublePrevious) {
        doublePrevious = container.lastElementChild;
    }

    let next = active.nextElementSibling;
    if (!next) {
        next = container.firstElementChild;
    }

    active.classList.remove(["active"]);
    next.classList.remove(["inactive"]);
    previous.classList.remove(["previous"])

    if (type === "next") {
        next.classList.add("active");
        active.classList.add("previous")
        previous.classList.add("inactive")
    }
    else if (type === "prev") {
        doublePrevious.classList.add("previous")
        doublePrevious.classList.remove("inactive")
        active.classList.add("inactive")
        previous.classList.add("active");
        next.classList.add("inactive");

    }
}

export default changeSlider;