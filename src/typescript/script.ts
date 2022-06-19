import { displayContent } from "./classes/content.js";
import { loremContent } from "./data/content.js";

const articles = document.querySelector(".articles") as HTMLDivElement;

window.addEventListener("DOMContentLoaded", () => {
  const contentDisplay = new displayContent(loremContent);
  contentDisplay.format(articles);

  const toggleBtn = document.querySelectorAll(
    ".toggle-btn"
  ) as NodeListOf<HTMLElement>;

  toggleBtn.forEach((btn) => {
    btn.addEventListener("click", (e: Event) => {
      contentDisplay.toggleContent(e);
    });
  });
});
