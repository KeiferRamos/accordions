import { displayContent } from "./classes/content.js";
import { loremContent } from "./data/content.js";

const articles = document.querySelector(".articles") as HTMLDivElement;
let selected: string | undefined;

window.addEventListener("DOMContentLoaded", () => {
  const contentDisplay = new displayContent(loremContent);
  contentDisplay.format(articles);

  const toggleBtn = document.querySelectorAll(
    ".toggle-btn"
  ) as NodeListOf<HTMLElement>;

  toggleBtn.forEach((btn) => {
    btn.addEventListener("click", (e: Event) => {
      toggleContent(e);
    });
  });
});

function toggleContent(e: Event) {
  const id = (e.target as HTMLElement).id;

  selected = selected == id ? "" : id;

  const Btn = document.querySelectorAll(
    ".toggle-btn"
  ) as NodeListOf<HTMLElement>;

  Btn.forEach((btn) => (btn.textContent = selected == btn.id ? "−" : "+"));

  const content = document.querySelectorAll(
    ".content"
  ) as NodeListOf<HTMLElement>;

  content.forEach((el) => {
    if (el.id == selected) {
      el.classList.add("show-content");
    } else {
      el.classList.remove("show-content");
    }
  });
}
