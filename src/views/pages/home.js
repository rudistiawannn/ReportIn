// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';

import { landingPage, register } from "../templates/template-creator";
const Home = {
  async render() {
    return `
      <div class="onobarding_container"></div>
      <div class="register_container">
      <h3>Daftar</h3>
      </div>
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
