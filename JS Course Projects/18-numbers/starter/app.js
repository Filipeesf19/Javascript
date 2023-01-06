const numbers = [...document.querySelectorAll(".number")];

numbers.forEach((number) => {
    upCount(number)
});

function upCount(el) {
    const target = parseInt(el.dataset.value);
    const increment = Math.ceil(target/1000);
    let initialValue = 0;

    const increaseCount = setInterval(() => {
        initialValue += increment;

        if (initialValue > target) {
            el.textContent = `${target}+`;
            clearInterval(increaseCount);
            return;
        }
        el.textContent = `${initialValue}+`;
    }, 1);
}