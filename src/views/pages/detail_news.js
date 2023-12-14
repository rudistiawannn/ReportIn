// core version + navigation, pagination modules:

import { detailNewsTemplate } from "../templates/template-creator";

const detailNews = {
  async render() {
    return `
<section>
    <div class="container blue">
        <div class="contentwrapper">
        <div class="detail_news"></div>
        </div>
    </div>
</section>
      `;
  },

  async afterRender() {

    const registerContainer = document.querySelector(".detail_news");
    registerContainer.innerHTML += detailNewsTemplate();
  },
};

export default detailNews;
