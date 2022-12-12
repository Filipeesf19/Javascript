const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    const clickedBtn = e.target

    // If the clicked element is a button
    if (id) {
        // remove active from other buttons and add to the clicked one
        btns.forEach((button) => {
            button.classList.remove("active")
            clickedBtn.classList.add("active")
        })
        // hide all the articles and show clicked one
        articles.forEach((article) => {
            article.classList.remove('active')
        })
    //add active to the article with a class matching the clicked id
    const element = document.getElementById(id)
    element.classList.add("active")
    }
})