<template>
  <section>
    <h3>Guardar Estudiante</h3>

    <input v-model="nombre" placeholder="Nombre" />
    <input v-model="apellido" placeholder="Apellido" />
    <input v-model="fechaNacimiento" type="datetime-local" />
    <input v-model="genero" placeholder="Género" />
    <input v-model="provincia" placeholder="Provincia" />

    <button @click="guardar">Guardar</button>

    <pre v-if="respuesta">{{ respuesta }}</pre>
  </section>
</template>


<script>
import { guardarFacade } from "../clients/matricula.js";

export default {
  data() {
    return {
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
    async guardar() {
      const body = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento + ":00",
        genero: this.genero,
        provincia: this.provincia
      };

      const res = await guardarFacade(body, this.token);
      this.respuesta = JSON.stringify(res, null, 2);
    }
  },
  mounted() {
    this.token = localStorage.getItem("token");
    if (!this.token) {
      alert("No estás autenticado. Redirigiendo al login...");
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style></style>