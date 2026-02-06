<template>
  <section>
    <h3>Actualizar Estudiante</h3>

    <input v-model="id" type="number" placeholder="ID" />

    <input v-model="nombre" placeholder="Nombre" />
    <input v-model="apellido" placeholder="Apellido" />

    <input v-model="fechaNacimiento" type="datetime-local" />

    <input v-model="genero" placeholder="Género" />
    <input v-model="provincia" placeholder="Provincia" />

    <button @click="actualizar">Actualizar</button>

    <label>Respuesta:</label>
    <pre v-if="respuesta">{{ respuesta }}</pre>
  </section>
</template>



<script>
import { actualizarFacade } from "../clients/matricula.js";

export default {
  data() {
    return {
      id: null,
      nombre: "",
      apellido: "",
      fechaNacimiento: "",
      genero: "",
      provincia: "",
      respuesta: null,
      token: null
    };
  },
  methods: {
    async actualizar() {
      const body = {
        id: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
        genero: this.genero,
        provincia: this.provincia,
        links: [] // normalmente el backend los ignora o los recalcula
      };

      const res = await actualizarFacade(this.id, body, this.token);
      this.respuesta = JSON.stringify(res, null, 2);
    }
  },
  mounted() {
    this.token = localStorage.getItem("token");
    if (!this.token) {
      alert("No estás autenticado. Redirigiendo al login...");
      this.$router.push({ name: "login" });
    }
  },
};
</script>

<style></style>