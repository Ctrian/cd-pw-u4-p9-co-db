<template>
  <nav></nav>
  <header></header>
  <section>
    <button v-on:click="obtenerTodos()">Consultar Todos</button>
    <button>Consultar Por Id</button>
    <button>Guardar</button>
    <button>Actualizar</button>
    <button>Actualizar Parcial</button>
    <button>Borrar</button>
  </section>
  <footer></footer>
</template>

<script>
import {
  obtenerEstudiantesFacade,
  obtenerEstudiantePorIdFacade,
  guardarFacade,
  actualizarFacade,
  actualizarParcialFacade,
  borrarFacade
} from "../clients/matricula.js";

export default {
  data() {
    return {
      nombre: "",
      apellido: "",
    };
  },
  methods: {
    async obtenerTodos() {
      const res = await obtenerEstudiantesFacade();
      console.log(res);
    },
    async obtenerPorId() {
      const res = await obtenerEstudiantePorIdFacade();
      console.log(res);
    },
    async guardar() {
      const res = await guardarFacade();
      console.log(res);
    },
    async actualizar() {
      const res = await actualizarFacade();
      console.log(res);
    },
    async actualizarParcial() {
      const res = await actualizarParcialFacade();
      console.log(res);
    },
    async borrar() {
      const res = await borrarFacade();
      console.log(res);
    },
  },
};
</script>

<style>
</style>