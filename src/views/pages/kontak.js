const Kontak = {
    async render() {
      return `
      <div class="jumbtrone-tentangkami">
      <div class="logo-wrap-tentangkami">
          <div class="logo-tentangkami"></div>
          <p>Sampah Terang</p>
      </div>
      <p>Sampah Terang mengajak masyarakat untuk mengubah sampah menjadi sumber cahaya atau inspirasi yang terang dan positif. Tujuan utama dari website ini adalah untuk mengedukasi masyarakat tentang pentingnya daur ulang sampah, serta memberikan panduan yang jelas dan mudah diakses tentang cara melakukannya dengan benar.</p>
  </div>
  <div class="team-wrap-tentangkami">
      <h2>Tim Kami</h2>
      <hr>
      <div class="team-group">
          <div class="team-item">
              <div class="team-header"></div>
              <div class="team-image team1"></div>
              <div class="team-body">
                  <p>Arief Rahman Hakim</p>
                  <div class="sosmed">
                      <a href="https://www.facebook.com/aripakim" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                      <a href="https://www.instagram.com/arip.rhakim/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/arief-rahman-hakim-114b42150?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOcA3Dbz7RUWH99yvMW%2F4bg%3D%3D" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                  </div>   
              </div>
          </div>
          <div class="team-item">
              <div class="team-header"></div>
              <div class="team-image team2"></div>
              <div class="team-body">
                  <p>Muhammad Lanang Agung A.</p>
                  <div class="sosmed">
                      <a href="https://www.facebook.com/lanang.anggoro.3" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                      <a href="https://www.instagram.com/lananganggoro/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                      <a href="https://www.linkedin.com/in/lanang-anggoro-1a877b26a/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                  </div>   
              </div>
          </div>
          <div class="team-item">
              <div class="team-header"></div>
              <div class="team-image team3"></div>
              <div class="team-body">
                  <p>I.A. Putu Inggita Anindya</p>
                  <div class="sosmed">
                      <a href="" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                      <a href="https://www.instagram.com/iainggit.a/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                      <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                  </div>   
              </div>
          </div>
          <div class="team-item">
              <div class="team-header"></div>
              <div class="team-image team4"></div>
              <div class="team-body">
                  <p>Rama Indrawan</p>
                  <div class="sosmed">
                      <a href="" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                      <a href="https://www.instagram.com/rama_indrawan812/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                      <a href="" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                  </div>   
              </div>
          </div>
      </div>
  </div>
      `;
    },
   
    async afterRender() {
        console.log("tes");
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
export default Kontak;