<template>
  <h1>Hola desde el componente Login</h1>
  <nav></nav>
  <section>
    <div class="login">
      <label for="">Usuario</label>
      <input v-model="usuario" type="text" placeholder="Usuario" />
      <label for="">Contrasenia</label>
      <input v-model="password" type="password" placeholder="Contrasenia" />
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
    };
  },
  methods: {
    login() {
      /* Obtener el token */
      const TOKEN =
        "eeyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImNhcmxvcyIsInVwbiI6ImNhcmxvc0BlbWFpbC5jb20iLCJncm91cHMiOlsiYWRtaW4iLCJ1c2VyIl0sInVzZXJJZCI6MSwiaWF0IjoxNzcwMzM3NDMxLCJleHAiOjE3NzAzNDEwMzEsImp0aSI6IjA1MjI3MzA4LTM4ZjMtNDY3ZS1iZjJlLWNjNWI2ZjU4ZmNmNSJ9.AJB8JXPJn32gg3sn5OOMZvHJp9DXyz66ifmnc_ByWf8IsIUVO96I7IXWdZsWEMmzmFuw9Ae-kgnsgwuvnvX1mUN5UNl7Civ4YgiS5ZcyTTupO9dNPviFcvNMLrMeUuw6f4G0rs2De4IPBWRvfoyVO0DS28Rbe6ML-HdLU7HTYrG1k21MIy8jKDrLhiYnVWjv4BqxijDkhoq8xEyJGwzwQF7zuLnjNQmLo-gDDuGrwLPVJ84hites7Olz22O6Blreefu2JvyqlV4KusFgZz2u-9MypCHuI8FutVuSRzX2BEBFbXDKjNb6bxu8UpOo9gFq45oxNikVCR06TfhF3-o-Dg";
      if (TOKEN != 'Usuario no encontrado') {
        localStorage.setItem("token", TOKEN);
        // bander para no preguntar nuevamente si esta o no autenticado
        localStorage.setItem("EstaAutenticado", true);
        this.$router.push({ name: "buscarXid" });
      } else {
        console.log("Error de autenticación");
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