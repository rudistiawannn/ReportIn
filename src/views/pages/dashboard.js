const Dashboard = {
    async render() {
      return `
      <div class="red">
      <h2>Layanan Aduan Situs Judi Online</h2>
      <p>Laporkan Situs Judi Online yang Anda Temukan</p>
      <hr>
  </div>
  <div class="white">
  </div>
  <div class="aduan_container">
  <form>
      <h2>Buat Laporan Anda Disini</h2>
      <a href="#/guide">Perhatikan Cara Menyampaikan Aduan yang Baik dan Benar</a>
      <label>Tautan Aduan:</label>
      <input class="tautan" type="text" placeholder="Contoh: http://tautan-situs.com/">
      <label>Alasan:</label>
      <input class="desk" type="text" placeholder="bla bla bla">
      <p>Deskripsikan alasan detail anda disini</p>
      <label>File Pendukung:</label>
      <div class="nop">
          <input type="file" placeholder="Choose Files">
      </div>
      <p class="tipe">Tipe file yang dapat diupload png, jpg, jpeg, dan pdf maksimal 5 file dengan maksimum total size 8 mb</p>

      <div>
          <button class="reset">Reset!</button>
          <button class="report">Lapor!</button>
      </div>
  </form>
  </div>
      `;
    },
   
    async afterRender() {
        console.log("tes");
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
export default Dashboard;