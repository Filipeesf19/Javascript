import sublinks from './data.js'

const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar-links');
const linksBtns = [...document.querySelectorAll(".link-btn")]
const submenu = document.querySelector(".submenu");
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

//hide/show sidebar

toggleBtn.addEventListener("click", () => {
    sidebarWrapper.classList.add("show")
});

closeBtn.addEventListener("click", () => {
    sidebarWrapper.classList.remove("show")
});

// set sidebar
sidebar.innerHTML = sublinks.map((item)=>{
    const {links,page} = item;
    return `<article>
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
    ${links.map((link) => {
        return `<a href="${link.url}">
        <i class="${link.icon}"></i>${link.label}
        </a>`
    }).join("")}
    </div>
    </article>`
}).join("");

// Hover over links at the top
linksBtns.forEach((btn) => {
    btn.addEventListener("mouseover", (e) => {
        const text = e.currentTarget.textContent;
        const tempBtn = e.currentTarget.getBoundingClientRect();
        const bottom = tempBtn.bottom - 3;
        const center = (tempBtn.left + tempBtn.right) / 2;

        const tempPage = sublinks.find(({page}) => page === text)
        if (tempPage) {
            const {page, links} = tempPage
            submenu.classList.add("show");
            submenu.style.left = `${center}px`
            submenu.style.top = `${bottom}px`

            //OPTIONAL
            let columns = 'col-2';
            if (links.length === 3) {
                columns = 'col-3';
            }
            if (links.length > 3) {
                columns = 'col-4';
            }
            submenu.innerHTML = `
            <section>
                <h4>${page}</h4>
                <div class="submenu-center ${columns}">
                ${links.map((link)=>{
                    return `<a href="${link.url}">
                    <i class="${link.icon}"></i>${link.label}
                    </a>`
                }).join("")}
                </div>
            </section>
            `
        }
    })
})

hero.addEventListener("mouseover", (e) => {
    submenu.classList.remove("show")
})

hero.addEventListener("mouseover", (e) => {
    if(!e.target.classList.contains('link-btn')) {
    submenu.classList.remove("show")
    }
})