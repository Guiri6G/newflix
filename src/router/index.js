import Vue from 'vue'
import VueRouter from 'vue-router'
import Research from '../views/Research.vue';
import Home from '../views/Home.vue';
import MovieDetails from '../views/MovieDetails';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails
  },
  {
    path: '/research',
    name: 'Research',
    component: Research
  }
]

const router = new VueRouter({
  routes
})

export default router
