// core version + navigation, pagination modules:
import {login} from '../templates/template-creator'
import Swal from 'sweetalert2';
import ReportResource from '../../scripts/data/report-source';

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
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const emailInput = document.querySelector('#email').value;
      const passwordInput = document.querySelector('#password').value;

      const loginInput = {
        email: emailInput,
        password: passwordInput,
      }
      console.log(JSON.stringify(loginInput));
      try {
        const response = await ReportResource.login(loginInput);
    
        if (response.status) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Berhasil Login!',
            confirmButtonText: 'OK'
          });

          localStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
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
     }

    })

  },
};

export default Login;
