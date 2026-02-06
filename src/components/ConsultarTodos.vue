<template>
  <nav></nav>
  <header></header>
  <section>
    <button v-on:click="obtenerTodos()">Consultar Todos</button>

    <label>Respuesta:</label>
    <pre v-if="respuesta">{{ respuesta }}
    </pre>
  </section>
  <footer></footer>
</template>

<script>
import { obtenerEstudiantesFacade } from "../clients/matricula.js";

export default {
  data() {
    return {
      respuesta: null,
      token: null,
    };
  },

  methods: {
    async obtenerTodos() {
      if (!this.token) {
        console.error("Token no disponible");
        alert("No hay token de autenticación. Por favor, inicia sesión.");
        this.$router.push({ name: "login" });
        return;
      }

      const res = await obtenerEstudiantesFacade(this.token);
      this.respuesta = JSON.stringify(res, null, 2);
    },
  },
  mounted() {
    // Obtener el token desde localStorage
    this.token = localStorage.getItem("token");

    if (!this.token) {
      console.error("No hay token en localStorage");
      alert("No estás autenticado. Redirigiendo al login...");
      this.$router.push({ name: "login" });
    } else {
      console.log("Token recuperado desde localStorage");
    }
  },
};
</script>

<style></style>