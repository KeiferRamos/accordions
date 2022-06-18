import { content } from "../interface/content";

export class displayContent {
  constructor(private content: content[]) {}

  format(div: HTMLElement) {
    const contentMap = this.content.map(({ subtitle, details, id }) => {
      return `
        <article>
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
}
