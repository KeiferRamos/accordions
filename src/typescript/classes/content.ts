import { content } from "../interface/content";

export class displayContent {
  private selected: string | undefined = "";

  constructor(private content: content[]) {}

  format(div: HTMLElement) {
    const contentMap = this.content.map(({ subtitle, details, id }) => {
      return `
        <article class="p-sm m-sm">
          <div class="toggle-container">  
            <h3>${subtitle}</h3>
            <button class="toggle-btn" id="${id}">+</button>
          </div>
          <div id="${id}" class="content">
            <p>${details}</p>
          </div>
        </article>`;
    });

    div.innerHTML = contentMap.join("");
  }

  toggleContent(e: Event) {
    const id = (e.target as HTMLElement).id;

    this.selected = this.selected == id ? "" : id;

    const Btn = document.querySelectorAll(
      ".toggle-btn"
    ) as NodeListOf<HTMLElement>;

    Btn.forEach(
      (btn) => (btn.textContent = this.selected == btn.id ? "−" : "+")
    );

    const content = document.querySelectorAll(
      ".content"
    ) as NodeListOf<HTMLElement>;

    content.forEach((el) => {
      if (el.id == this.selected) {
        el.classList.add("show-content");
      } else {
        el.classList.remove("show-content");
      }
    });
  }
}
