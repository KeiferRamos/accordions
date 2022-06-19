import { displayContent } from "./classes/content.js";
import { loremContent } from "./data/content.js";
const articles = document.querySelector(".articles");
window.addEventListener("DOMContentLoaded", () => {
    const contentDisplay = new displayContent(loremContent);
    contentDisplay.format(articles);
    const toggleBtn = document.querySelectorAll(".toggle-btn");
    toggleBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            contentDisplay.toggleContent(e);
        });
    });
});
