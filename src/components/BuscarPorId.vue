<template>
  <section>
    <h3>Consultar Estudiante por ID</h3>

    <input v-model="id" type="number" placeholder="ID" />

    <button @click="obtenerPorId">
      Consultar Por Id
    </button>

    <label>Respuesta:</label>
    <pre v-if="respuesta">{{ respuesta }}</pre>
  </section>
</template>

<script>
import { obtenerEstudiantePorIdFacade } from "../clients/matricula.js";
import { obtenerTokenFacade } from "../clients/oauth.js";

export default {
  data() {
    return {
      id: null,
      respuesta: null,
      token: null
    };
  },
  methods: {
    async obtenerPorId() {
      const res = await obtenerEstudiantePorIdFacade(this.id, this.token);
      this.respuesta = JSON.stringify(res, null, 2);
    }
  },
  async mounted() {
    this.token = await obtenerTokenFacade();
    console.log("Token obtenido:", this.token);
  },
};
</script>

<style>
</style>