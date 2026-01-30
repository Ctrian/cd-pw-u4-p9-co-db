<template>
  <section>
    <h3>Actualizar Parcial (PATCH)</h3>

    <input v-model="id" type="number" placeholder="ID" />

    <input v-model="nombre" placeholder="Nombre (opcional)" />
    <input v-model="apellido" placeholder="Apellido (opcional)" />

    <button @click="actualizarParcial">
      Actualizar Parcial
    </button>

    <pre v-if="respuesta">{{ respuesta }}</pre>
  </section>
</template>

<script>
import { actualizarParcialFacade } from "../clients/matricula.js";

export default {
  data() {
    return {
      id: null,
      nombre: "",
      apellido: "",
      respuesta: null
    };
  },
  methods: {
    async actualizarParcial() {
      const body = {};

      // Solo enviamos lo que tenga valor
      if (this.nombre) body.nombre = this.nombre;
      if (this.apellido) body.apellido = this.apellido;

      const res = await actualizarParcialFacade(this.id, body);
      this.respuesta = JSON.stringify(res, null, 2);
    }
  }
};
</script>

<style>
</style>