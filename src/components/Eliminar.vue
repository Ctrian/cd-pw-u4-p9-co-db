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
    async borrar() {
      try {
        const res = await borrarFacade(this.id, this.token);
        this.respuesta = res ? JSON.stringify(res, null, 2) : "Borrado con éxito";
      } catch (err) {
        this.respuesta = "Error: " + (err.response?.data || err.message);
      }
    }
  },
  async mounted() {
    this.token = await obtenerTokenFacade();
    console.log("Token obtenido:", this.token);
  },
};
</script>

<style></style>