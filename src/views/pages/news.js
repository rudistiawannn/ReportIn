import { newsList } from "../templates/template-creator";

const News = {
    async render() {
      return `
      <section>
      <div class="container">
          <div class="contentwrapper">
          <div class="news_container"></div>
          </div>
        </div>
        </section>      
      `;
    },
   
    async afterRender() {
        const container = document.querySelector('.news_container');
        container.innerHTML += newsList();
    },
  };
   
export default News;