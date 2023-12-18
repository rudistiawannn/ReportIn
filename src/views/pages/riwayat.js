import { riwayatTemplate } from "../templates/template-creator";
const Riwayat = {
    async render() {
      return `
      <header class="navbar">
        <div class="navbar_nav">
            <a href="/" class="brand_logo"><img src='bf7fd14952d4ceb9d298.png' alt="Logo"></a>
            <nav class="navbar_link">
                <a href="#/dashboard">Aduan</a>
                <a href="#/faq">FAQ</a>
                <a href="#/kontak">Kontak</a>
                <a href="#/riwayat">Riwayat Laporan</a>
                <a href="#/news">News</a>
            </nav>
            <a class="login" href="#/login">Logout</a>
        </div>
    </header>
    <main id="mainContent">
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
    </main>
    <footer>
        <h3>CopyRight 2023</h3>
    </footer>
      `;
    },
   
    async afterRender() {
      const registerContainer = document.querySelector(".content_riwayat");
      registerContainer.innerHTML += riwayatTemplate();
    },
  };
   
export default Riwayat;