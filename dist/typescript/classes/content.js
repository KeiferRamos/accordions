export class displayContent {
    constructor(content) {
        this.content = content;
        this.selected = "";
    }
    format(div) {
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
    toggleContent(e) {
        const id = e.target.id;
        this.selected = this.selected == id ? "" : id;
        const Btn = document.querySelectorAll(".toggle-btn");
        Btn.forEach((btn) => (btn.textContent = this.selected == btn.id ? "−" : "+"));
        const content = document.querySelectorAll(".content");
        content.forEach((el) => {
            if (el.id == this.selected) {
                el.classList.add("show-content");
            }
            else {
                el.classList.remove("show-content");
            }
        });
    }
}
