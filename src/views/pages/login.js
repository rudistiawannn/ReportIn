// core version + navigation, pagination modules:
import {login} from '../templates/template-creator'

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
        const response = await ReportResource.Login(loginInput);
    
        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Berhasil Login!',
            confirmButtonText: 'OK'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Oppps Gagal Login',
            confirmButtonText: 'OK'
          });
        }
     } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Oppps Login Gagal!',
          confirmButtonText: 'OK'
        });
     }

    })

  },
};

export default Login;
