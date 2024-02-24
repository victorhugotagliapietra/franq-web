<template>
  <div class="register-container">
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </div>
    <form @submit.prevent="register" class="register-form">
      <h1>Criar conta</h1>
      <div>
        <label for="email">E-mail:</label>
        <input v-model="email" type="email" id="email" required class="input-field" />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input v-model="password" type="password" id="password" required class="input-field" />
      </div>
      <button type="submit" class="btn btn-primary">Criar conta</button>
      <button type="button" @click="redirectToLogin" class="btn btn-secondary">
        Já tenho conta
      </button>
    </form>
  </div>
</template>

<script>
import AuthService from '../services/AuthService'
export default {
  data() {
    return {
      email: '',
      password: '',
      isLoginMode: true
    }
  },
  methods: {
    async register() {
      const user = {
        email: this.email,
        password: this.password
      }
      try {
        const token = await AuthService.register(user)
        alert('Usuário criado com sucesso!')
        this.redirectToLogin()
      } catch (error) {
        console.error('Erro no registro:', error)
      }
    },
    redirectToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
:root {
  --primary-color: #657be9;
  --secondary-color: #131b24;
  --background-color: #f0f2f5;
  --input-background-color: #ffffff;
  --button-hover-color-primary: #505fc9;
  --button-hover-color-secondary: #2a3038;
}

body,
html {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--background-color);
}

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--background-color);
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
  background: var(--input-background-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
}

h1 {
  color: var(--text-color);
  margin-bottom: 24px;
  text-align: center;
}

input[type='email'],
input[type='password'] {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--input-background-color);
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

button[type='submit'] {
  background-color: var(--primary-color);
}

button[type='submit']:hover {
  opacity: 0.9;
}

button[type='button'] {
  background-color: var(--secondary-color);
}

button[type='button']:hover {
  opacity: 0.9;
}

@media (max-width: 400px) {
  form {
    width: 85%;
    margin: auto;
  }
}
</style>
