import type { RouteRecordRaw } from 'vue-router'
import { HOME, ABOUT, RECIPES } from '@/constants/routes'
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
    path: `${RECIPES}/:category`,
    name: 'recipes',
    component: () => import('../views/Recipes/Recipes.vue'),
  },
]

export default routes
