import { getElement } from './utils.js';

const sidebarOverlay = getElement(".sidebar-overlay");
const toggleNav = getElement(".toggle-nav");
const closeBtn = getElement(".sidebar-close");

// Open the sidebar when clicking the toggle (3 bars icon)
toggleNav.addEventListener("click", () => {
    sidebarOverlay.classList.add("show");
})

// Close the side bar when clicking the close button (X icon)
closeBtn.addEventListener("click", () => {
    sidebarOverlay.classList.remove("show");
})