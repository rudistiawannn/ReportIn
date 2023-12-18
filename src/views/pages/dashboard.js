import Swal from "sweetalert2";
import ReportResource from "../../scripts/data/report-source";
const Dashboard = {
    async render() {
      const token = localStorage.getItem('accessToken');
    if (!token) {
      window.location.hash = '#/login';
    }
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
  <div class="white">
  </div>
  <div class="aduan_container">
  <form enctype="multipart/form-data">
      <h2>Buat Laporan Anda Disini</h2>
      <label>Tautan Aduan:</label>
      <input class="tautan" type="text" placeholder="Contoh: http://tautan-situs.com/"> <br>
      <label>Alasan:</label>
      <input class="desk" type="text" placeholder="Deskripsikan alasan detail anda disini">
      <label>File Pendukung:</label>
      <div class="nop">
          <input class="file" type="file" placeholder="Choose Files">
      </div>
      <p class="tipe">Tipe file yang dapat diupload png, jpg, jpeg, dan pdf maksimal 5 file dengan maksimum total size 8 mb</p>

      <div>
          <button class="reset">Reset!</button>
          <button class="report">Lapor!</button>
      </div>
  </form>
  </div>
    </main>
    <footer>
    <h3>CopyRight 2023</h3>
</footer>
      
      `;
    },
   
    async afterRender() {
      const reportForm = document.querySelector('form');

      reportForm.addEventListener('submit', async (e) => {
        e.preventDefault();
  
        // Retrieve form data
        const tautan = document.querySelector('.tautan').value;
        const alasan = document.querySelector('.desk').value;
        const fileInput = document.querySelector('.file');
        const file = fileInput.files[0];
        
        const inputRequest = {
          subject: tautan,
          description: alasan,
          file: file,
        }

        // const formData = new FormData();
        // formData.append("subject", tautan);
        // formData.append("description", alasan);
        // formData.append("file", file);

        // console.log(formData);

        const id = localStorage.getItem('idUser');
      
        try {
          const response = await ReportResource.addReport(inputRequest, id);
      
          if (response.message === "Rerport is created!!") {
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Berhasil tambah laporan',
              confirmButtonText: 'OK'
            });
  
            // localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
            // localStorage.setItem('idUser', JSON.stringify(response.data.id));
            window.location.href = '#/dashboard'
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: `${response}`,
              confirmButtonText: 'OK'
            });
            console.log(response);
          }
       } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `'Oppps undifined!'`,
            confirmButtonText: 'OK'
          });
          console.log(error)
       }
        
      });
      
    },
  };
   
export default Dashboard;