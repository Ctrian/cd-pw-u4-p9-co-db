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
import { obtenerTokenFacade } from "../clients/oauth.js";

export default {
  data() {
    return {
      id: null,
      nombre: "",
      apellido: "",
      respuesta: null,
      token: null
    };
  },
  methods: {
    async actualizarParcial() {
      const body = {};

      // Solo enviamos lo que tenga valor
      if (this.nombre) body.nombre = this.nombre;
      if (this.apellido) body.apellido = this.apellido;

      const res = await actualizarParcialFacade(this.id, body, this.token);

      // Construir respuesta mostrando los datos actualizados
      const respuestaDetallada = {
        mensaje: "Actualización parcial exitosa",
        id: this.id,
        camposActualizados: body,
        respuestaServidor: res
      };

      this.respuesta = JSON.stringify(respuestaDetallada, null, 2);
    }
  },
  async mounted() {
    this.token = await obtenerTokenFacade();
    console.log("Token obtenido:", this.token);
  }
};
</script>

<style></style>