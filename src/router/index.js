import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ListarTodos',
    name: 'ListarTodos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ConsultarTodosView.vue')
  },
  {
    path: '/buscarXid',
    name: 'buscarXid',
    component: () => import(/* webpackChunkName: "about" */ '../views/BuscarXidView.vue')
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActualizarView.vue')
  },
  {
    path: '/actualizarParcial',
    name: 'actualizarParcial',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActualizarParcial.vue')
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: () => import(/* webpackChunkName: "about" */ '../views/GuardarView.vue')
  },
  {
    path: '/eliminar',
    name: 'eliminar',
    component: () => import(/* webpackChunkName: "about" */ '../views/EliminarView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
