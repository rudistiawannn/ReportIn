const landingPage = () => `
    <div class="title">
        <h2>Lindungi Generasi Kita dari Bahaya Judi Online!</h2>
        <p>Maraknya situs judi online adalah masalah yang serius. Laporkan situs-situs tersebut dan kita akan mengambil tindakan tegas. Yuk laporkan sekarang!</p>
       <a href="#register"><button class="lapor">Lapor Sekarang</button></a>
    </div>

    <!-- Swiper -->
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
<form id="register" class="form">
    <span class="signup">Sign Up</span>
    <input type="email" placeholder="Email address" class="form--input">
    <input type="password" placeholder="Password" class="form--input">
    <input type="password" placeholder="Confirm password" class="form--input">
    
    <div class="form--marketing">
        <input id="okayToEmail" type="checkbox">
        <label for="okayToEmail" class="checkbox">
          I want to join the newsletter
        </label>
    </div>
    <button class="form--submit">
        Sign up
    </button>
</form>
`

export {landingPage, register};