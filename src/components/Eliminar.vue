<template>
  <section>
    <h3>Borrar Estudiante</h3>

    <input v-model="id" type="number" placeholder="ID a borrar" />

    <button @click="borrar">Borrar</button>

    <pre v-if="respuesta">{{ respuesta }}</pre>
  </section>
</template>

<script>
import { borrarFacade } from "../clients/matricula.js";

export default {
  data() {
    return {
      id: null,
      respuesta: null
    };
  },
  methods: {
    async borrar() {
      try {
        const res = await borrarFacade(this.id);
        this.respuesta = res ? JSON.stringify(res, null, 2) : "Borrado con éxito";
      } catch (err) {
        this.respuesta = "Error: " + (err.response?.data || err.message);
      }
    }
  }
};
</script>

<style>
</style>