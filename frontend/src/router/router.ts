import type { RouteRecordRaw } from 'vue-router'
import {
  HOME,
  ABOUT,
  MEAT_RECIPES,
  FISH_RECIPES,
  VEGETARIAN_RECIPES,
} from '@/constants/routes'
const routes: RouteRecordRaw[] = [
  {
    path: HOME,
    name: 'home',
    component: () => import('../views/Home/Home.vue'),
  },
  {
    path: ABOUT,
    name: 'about',
    component: () => import('../views/About/About.vue'),
  },
  {
    path: MEAT_RECIPES,
    name: 'meat',
    component: () => import('../views/recipes/Meat/Meat.vue'),
  },
  {
    path: FISH_RECIPES,
    name: 'fish',
    component: () => import('../views/recipes/Fish/Fish.vue'),
  },
  {
    path: VEGETARIAN_RECIPES,
    name: 'vegetarian',
    component: () => import('../views/recipes/Vegetarian/Vegetarian.vue'),
  },
]

export default routes
