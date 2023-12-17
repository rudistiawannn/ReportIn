// core version + navigation, pagination modules:
import {login} from '../templates/template-creator'
import swal from 'sweetalert2';
import ReportResource from "../../scripts/data/report-source";

const Login = {
  async render() {
    return `
<section>
    <div class="container blue">
        <div class="contentwrapper">
        <div class="register_container login_container" id="registerContainer"></div>
        
        </div>
    </div>
</section>
      `;
  },

  async afterRender() {

    const registerContainer = document.querySelector(".register_container");
    registerContainer.innerHTML += login();

    const loginForm = document.querySelector(".form");
    loginForm.addEventListener('submit', async () => {
      const emailInput = document.querySelector('#email');
      const passwordInput = document.querySelector('#password');

      const loginInput = {
        email: emailInput,
        password: passwordInput,
      }

      try {
        const response = await ReportResource.login(loginInput);
    
        if (response.status === 200) {
          swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Berhasil Login!',
            confirmButtonText: 'OK'
          });
        } else {
          swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Oppps Gagal Login',
            confirmButtonText: 'OK'
          });
        }
     } catch (error) {
        swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Oppps Login Gagal!',
          confirmButtonText: 'OK'
        });
        console.log(error)
     }

    })

  },
};

export default Login;
