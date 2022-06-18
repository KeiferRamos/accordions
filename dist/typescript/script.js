import { displayContent } from "./classes/content.js";
import { loremContent } from "./data/content.js";
const articles = document.querySelector(".articles");
let selected;
window.addEventListener("DOMContentLoaded", () => {
    const contentDisplay = new displayContent(loremContent);
    contentDisplay.format(articles);
    const toggleBtn = document.querySelectorAll(".toggle-btn");
    toggleBtn.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            toggleContent(e);
        });
    });
});
function toggleContent(e) {
    const id = e.target.id;
    selected = selected == id ? "" : id;
    const Btn = document.querySelectorAll(".toggle-btn");
    Btn.forEach((btn) => (btn.textContent = selected == btn.id ? "−" : "+"));
    const content = document.querySelectorAll(".content");
    content.forEach((el) => {
        if (el.id == selected) {
            el.classList.add("show-content");
        }
        else {
            el.classList.remove("show-content");
        }
    });
}
