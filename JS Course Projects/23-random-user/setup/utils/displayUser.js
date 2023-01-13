import get from './getElement.js'

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");
const iconBtns = [...document.querySelectorAll('.icon')];


const displayUser = (person) => { // this is the person object from getElement.js
    img.src = person.image;
    value.textContent = person.name;
    title.textContent = `My name is`;
    iconBtns.forEach((btn) => btn.classList.remove('active'));
    iconBtns[0].classList.add('active');
    iconBtns.forEach((btn)=> {
        const label = btn.dataset.label;
        btn.addEventListener("click", (e) => {
            title.textContent = `My ${label} is`; //label has the same name as the properties of person object
            value.textContent = `person ${label}`;
            iconBtns.forEach((btn) => btn.classList.remove('active'));
            btn.classList.add('active');
        })
    })
}

export default displayUser;