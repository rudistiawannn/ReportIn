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
    <p class="signup-link">Don't have an account? <a href="#">Sign up</a></p>
    </div>
</form>
`

export {landingPage, register};