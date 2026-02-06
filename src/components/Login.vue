<template>
  <h1>Hola desde el componente Login</h1>
  <nav></nav>
  <section>
    <div class="login">
      <label for="">Usuario</label>
      <input v-model="usuario" type="text" placeholder="Usuario" />
      <label for="">Contrasenia</label>
      <input v-model="password" type="password" placeholder="Contrasenia" />
      <label for="">Email</label>
      <input v-model="email" type="email" placeholder="Email" />
      <button v-on:click="login()">Entrar</button>
    </div>
  </section>
  <footer></footer>
</template>

<script>
import { obtenerTokenFacade } from "../clients/oauth.js"

export default {
  data() {
    return {
      usuario: "",
      password: "",
      email: "",
      token: "",
    };
  },
  methods: {
    async login() {
      try {
        /* Obtener el token dinámicamente */
        const TOKEN = await obtenerTokenFacade(
          this.usuario,
          this.password,
          this.email
        );

        if (TOKEN && TOKEN !== 'Usuario no encontrado') {
          localStorage.setItem("token", TOKEN);
          // bandera para no preguntar nuevamente si esta o no autenticado
          localStorage.setItem("EstaAutenticado", true);
          this.$router.push({ name: "buscarXid" });
        } else {
          console.log("Error de autenticación");
        }
      } catch (error) {
        console.error("Error al obtener el token:", error);
        alert("Error de autenticación. Verifica tus credenciales.");
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 300px;
  margin: 100px;
  padding: 20px;
  border: 1px solid rgb(143, 118, 118);
  border-radius: 20px;
  text-align: center;
  background: rgb(184, 175, 175);
}

input {
  width: 90%;
  margin-bottom: 10px;
  padding: 8px;
}

button {
  width: 50%;
  padding: 8px;
  cursor: pointer;
  border: 1px solid rgb(143, 118, 118);
  border-radius: 20px;
}
</style>