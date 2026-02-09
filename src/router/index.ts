import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Sobre from '../views/SobreView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sobre', name: 'Sobre', component: Sobre }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router