// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';

import { landingPage, register } from "../templates/template-creator";
const Home = {
  async render() {
    return `
    <section>
    <div class="container">
        <div class="contentwrapper">
            <div class="onobarding_container"></div>
        </div>
    </div>
</section>
<section>
    <div class="container blue">
        <div class="contentwrapper">
        <div class="register_container" id="registerContainer"></div>
        
        </div>
    </div>
</section>
      `;
  },

  async afterRender() {
    const container = document.querySelector(".onobarding_container");
    container.innerHTML += landingPage();
    const swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        
      }
    });

    const registerContainer = document.querySelector(".register_container");
    registerContainer.innerHTML += register();
  },
};

export default Home;
