<template>
  <nav></nav>
  <header></header>
  <section>
    <button v-on:click="obtenerTodos()">Consultar Todos</button>

    <label>Respuesta:</label>
    <pre v-if="respuesta"
      >{{ respuesta }}
    </pre>
  </section>
  <footer></footer>
</template>

<script>
import { obtenerEstudiantesFacade } from "../clients/matricula.js";
import { obtenerTokenFacade } from "../clients/oauth.js";

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
        return;
      }

      const res = await obtenerEstudiantesFacade(this.token);
      this.respuesta = JSON.stringify(res, null, 2);
    },
  },
  async mounted() {
    this.token = await obtenerTokenFacade();
    console.log("Token obtenido:", this.token);
  },
};
</script>

<style>
</style>