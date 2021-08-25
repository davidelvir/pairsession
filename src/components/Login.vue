<template>
<div>
  <form action="submit">
    <label for="user">Usuario</label>
    <input id="user" type="text" v-model="user" data-username>
    <label for="password">Contraseña</label>
    <input id="password" type="password" v-model="password" data-password>
    <button @click="login">Login</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Login",
  data(){
    return {
      user: '',
      password: '',
      resData: false
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()
      if (this.user && this.password) {
        const res = await axios.get('https://6125bc8c2d4e0d0017b6c43b.mockapi.io/users')
        this.resData = res.data
      }
    }
  }
}
</script>

<style scoped>

</style>