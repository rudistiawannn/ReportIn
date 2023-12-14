const landingPage = () => `
    <div class="title">
        <h2>Lindungi Generasi Kita dari Bahaya Judi Online!</h2>
        <p>Maraknya situs judi online adalah masalah yang serius. Laporkan situs-situs tersebut dan kita akan mengambil tindakan tegas. Yuk laporkan sekarang!</p>
       <a href="#registerContainer"><button class="lapor">Lapor Sekarang</button></a>
    </div>
    <div class="swiper mySwiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class="news_container">
                <div class="card">
                    <div class="card-image"><img
                            src="https://pict.sindonews.net/dyn/960/salsabila/video/2023/09/04/6/84031/26-publik-figur-dilaporkan-soal-promosi-judi-online-yha.jpg"
                            alt=""></div>
                    <div class="heading">Ibu di Tasikmalaya Gantung Diri Diduga karena Anaknya Kecanduan Judi Online
                        <div class="author"> By <span class="name">Ronaldo</span> 4 days ago</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-slide">
            <div class="news_container">
                <div class="card">
                    <div class="card-image"><img
                            src="https://pict.sindonews.net/dyn/960/salsabila/video/2023/09/04/6/84031/26-publik-figur-dilaporkan-soal-promosi-judi-online-yha.jpg"
                            alt=""></div>
                    <div class="heading"> A heading that must span over two lines
                        <div class="author"> By <span class="name">Mesii</span> 4 days ago</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
    
</div>
      `
const register = () => `
<h2>Daftar Sekarang</h2>
<hr>
<form class="form">
    <div class="header">Sign In</div>
    <div class="inputs">
        <input placeholder="Nama" class="input" type="text">
        <input placeholder="Email" class="input" type="text">
        <input placeholder="Password" class="input" type="password">
    <div class="checkbox-container">
        <label class="checkbox">
        <input type="checkbox" id="checkbox">
        </label>
        <label for="checkbox" class="checkbox-text">Remember me</label>
    </div>
    <button class="sigin-btn">Submit</button>
    <a class="forget" href="#">Forget password ?</a>
    <p class="signup-link">Sudah punya akun? <a href="#/login">Login</a></p>
    </div>
</form>
`
const login = () => `
<form class="form">
    <div class="header">Sign In</div>
    <div class="inputs">
        <input placeholder="Email" class="input" type="text">
        <input placeholder="Password" class="input" type="password">
    <div class="checkbox-container">
        <label class="checkbox">
        <input type="checkbox" id="checkbox">
        </label>
        <label for="checkbox" class="checkbox-text">Remember me</label>
    </div>
    <button class="sigin-btn">Submit</button>
    <a class="forget" href="#">Forget password ?</a>
    <p class="signup-link">Belum punya akun? <a href="/">Daftar</a></p>
    </div>
</form>
`

const newsList = () => `
<div class="card_news">
                        <div class="card_img">
                            <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" alt="">
                        </div>
                        <div class="card_content">
                            <h4 class="title_news">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                            <p class="desc_news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias omnis nemo amet, vero magni excepturi ut dicta repellat maxime consequatur dolor corporis, rem, animi ducimus! Error commodi harum eligendi!
                            Ratione maiores quisquam eos itaque nulla omnis saepe explicabo voluptatibus, eveniet accusantium distinctio autem, ut sequi a dolore vel eum dolorem odit mollitia pariatur at corrupti similique harum nobis? Inventore!</p>
                        </div>
                        <div class="selengkapnya">
                            <a href="#">Selengkapnya</a>
                        </div>
                    </div>
                    <div class="card_news">
                        <div class="card_img">
                            <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" alt="">
                        </div>
                        <div class="card_content">
                            <p class="title_news">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p class="desc_news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae alias omnis nemo amet, vero magni excepturi ut dicta repellat maxime consequatur dolor corporis, rem, animi ducimus! Error commodi harum eligendi!
                            Ratione maiores quisquam eos itaque nulla omnis saepe explicabo voluptatibus, eveniet accusantium distinctio autem, ut sequi a dolore vel eum dolorem odit mollitia pariatur at corrupti similique harum nobis? Inventore!</p>
                        </div>
                        <div class="selengkapnya">
                            <a href="#">Selengkapnya</a>
                        </div>
                    </div>

`

const detailNewsTemplate = () => `
<div class="card_detail">
<div class="image_detail"></div>
 <div class="content_detail">
   <a href="#">
     <span class="title_detail">
       Lorem ipsum dolor sit amet consectetur adipisicing elit.
     </span>
   </a>

   <p class="desc_detail">
     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
     dolores, possimus pariatur animi temporibus nesciunt praesentium 
   </p>
 </div>
</div>

`

const riwayatTemplate = () =>`
<div class="card_riwayat">
<div class="riwayat_tgl">
<p class="tgl">17 februari 2023</p>
</div>
<div class="riwayat_detail">
<p class="riwayat_title">Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
</div>
<div class="riwayat_img">
    <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" alt="">
</div>
</div>

<div class="card_riwayat">
<div class="riwayat_tgl">
<p class="tgl">17 februari 2023</p>
</div>
<div class="riwayat_detail">
<p class="riwayat_title">Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
</div>
<div class="riwayat_img">
    <img src="https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" alt="">
</div>
</div>
`

const faqTemplate = () =>`
<div class="faq-item">
<div class="faq-question">
<button class="expand-button">+</button>
  <h3>Apa itu website pelapor judi online?</h3>
</div>
<div class="faq-answer">
  <p>Answer to question 1 goes here...</p>
</div>
</div>

<div class="faq-item">
<div class="faq-question">
<button class="expand-button">+</button>
  <h3>Apa yang terjadi setelah saya melapor?</h3>
</div>
<div class="faq-answer">
  <p>Answer to question 2 goes here...</p>
</div>
</div>
`

export {landingPage, register, login, newsList, detailNewsTemplate, riwayatTemplate, faqTemplate};