const btn = document.querySelector(".btn");
const articlesContainer = document.querySelector('.articles');

btn.addEventListener('click', () => {
    document.documentElement.classList.toggle("dark-theme");
})

const articlesData = articles.map((article) => {
    const {title, date, length, snippet} = article;
    const formattedDate = moment().format("MMMM Do, YYYY");

    return `<article class="post">
    <h2>${title}</h2>
    <div class="post-info">
      <span>${formattedDate}</span>
      <span>${length}</span>
      <p>${snippet}</p>
    </div>
  </article>`
}).join('');

articlesContainer.innerHTML = articlesData;