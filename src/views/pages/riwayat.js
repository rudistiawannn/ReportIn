import { riwayatTemplate } from "../templates/template-creator";
const Riwayat = {
    async render() {
      return `
      <div class="red">
      <h2>Layanan Aduan Situs Judi Online</h2>
      <p>Laporkan Situs Judi Online yang Anda Temukan</p>
      <hr>
  </div>
  <div class="riwayat_container">
  <div class="riwayat_heading"><h3>Riwayat Laporan</h3><hr></div>
      <div class="content_riwayat">
      
      </div>
  </div>
      `;
    },
   
    async afterRender() {
      const registerContainer = document.querySelector(".content_riwayat");
      registerContainer.innerHTML += riwayatTemplate();
    },
  };
   
export default Riwayat;