let count = 0;

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach( (button) => {
    button.addEventListener('click', (e) => {
        const styles = e.target.classList;
        if (styles.contains("decrease")) {
            count--;
        }
        else if (styles.contains("reset")) {
            count=0;
        }
        else if (styles.contains("increase")) {
            count++;
        }

        if (count>0) {
            value.style.color="green"
        }
        else if (count<0) {
            value.style.color="red"
        }
        else value.style.color ="#222"
            value.textContent = count;
    })
})