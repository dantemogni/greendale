import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/carreras',
    name: 'Careers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Careers.vue')
  },
  {
  path: '/nosotros',
  name: 'About',
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
  path: '/campus',
  name: 'Campus',
  component: () => import(/* webpackChunkName: "about" */ '../views/Campus.vue')
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
