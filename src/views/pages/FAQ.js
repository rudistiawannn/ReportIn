import { faqTemplate } from "../templates/template-creator";
const Faq = {
  async render() {
    return `
      <section>
      <h2 class="trending">Pertanyaan yg sering diajukan</h2>
        <div class="news_container"></div>
        </div>
      </div>
      </section>  
      `;
  },

  async afterRender() {
    const container = document.querySelector(".news_container");
    container.innerHTML += faqTemplate();

    const expandButtons = document.querySelectorAll(".expand-button");

    expandButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const answer = this.closest(".faq-item").querySelector(".faq-answer");
        
        if (answer) {
          answer.style.display = answer.style.display === "none" || getComputedStyle(answer).display === "none" ? "block" : "none";
          this.classList.toggle("expanded");
          this.textContent = this.classList.contains("expanded") ? "-" : "+";
        }
      });
    });
  },
};

export default Faq;
