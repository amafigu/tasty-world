import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About/About.vue')
  },
  {
    path: '/meat-recipies',
    name: 'meat',
    component: () => import('../views/recipes/Meat/Meat.vue')
  },
  {
    path: '/fish-recipies',
    name: 'fish',
    component: () => import('../views/recipes/Fish/Fish.vue')
  },
  {
    path: '/vegetarian-recipies',
    name: 'vegetarian',
    component: () => import('../views/recipes/Vegetarian/Vegetarian.vue')
  }
]

export default routes
