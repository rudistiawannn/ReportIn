import { newsList } from "../templates/template-creator";

const News = {
    async render() {
      return `
      <div class="container">
          <div class="contentwrapper">
          <div class="newsheader">
        <h2>News and Updates</h2>
        <div class="searchbar">
    <div class="searchbar-wrapper">
        <div class="searchbar-left">
            <div class="search-icon-wrapper">
                <span class="search-icon searchbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                    </svg>
                </span>
            </div>
        </div>

        <div class="searchbar-center">
            <div class="searchbar-input-spacer"></div>

            <input type="text" class="searchbar-input" maxlength="2048" name="q" autocapitalize="off" autocomplete="off" title="Search" role="combobox" placeholder="Search News">
        </div>
    </div>
</div>
      </div>
      <section>
        <h2 class="trending">Trending</h2>
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