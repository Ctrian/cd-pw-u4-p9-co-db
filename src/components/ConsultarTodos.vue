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

export default {
  data() {
    return {
      nombre: "",
      apellido: "",
      respuesta: null,
    };
  },
  methods: {
    async obtenerTodos() {
      const res = await obtenerEstudiantesFacade();
      console.log(res);
      this.respuesta = JSON.stringify(res, null, 2);
    },
  },
};
</script>

<style>
</style>