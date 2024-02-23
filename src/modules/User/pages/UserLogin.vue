<template>
  <div class="login-container">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo">
    </div>
    <form @submit.prevent="login" class="login-form">
      <h1>Login</h1>
      <div>
        <label for="email">E-mail:</label>
        <input v-model="email" type="email" id="email" required class="input-field">
      </div>
      <div>
        <label for="password">Senha:</label>
        <input v-model="password" type="password" id="password" required class="input-field">
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <button type="button" @click="redirectToSignup" class="btn btn-secondary">Criar conta</button>
    </form>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        isLoginMode: true,
      };
    },
    methods: {
      login() {
        const user = JSON.parse(localStorage.getItem(this.email));
        if (user && user.password === this.password) {
          alert('Login bem-sucedido!');
        } else {
          alert('Falha no login. Usuário ou senha incorretos.');
        }
      },
      redirectToSignup() {
      this.$router.push('/register');
      },
    },
  };
  </script>
  
  <style scoped>
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #eceff1;
  }

  .logo-container {
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
  }

  .logo {
    height: 50px; 
    width: auto; 
    border-radius: 5px;
  }
  form {
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    width: 90%;
    max-width: 400px;
  }

  h1 {
    color: #333;
    margin-bottom: 24px;
    text-align: center;
  }

  input[type="email"], input[type="password"] {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }

  button[type="submit"] {
    background-color: #007bff;
  }

  button[type="submit"]:hover {
    background-color: #0056b3;
  }

  button[type="button"] {
    background-color: #6c757d;
  }

  button[type="button"]:hover {
    background-color: #545b62;
  }

  @media (max-width: 400px) {
    form {
      width: 85%;
      margin: auto;
    }
  }
</style>