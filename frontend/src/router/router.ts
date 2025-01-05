import { ABOUT, HOME, RECIPES } from '@/constants/routes'
import type { RouteRecordRaw } from 'vue-router'
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
  {
    path: `${RECIPES}/:category/:recipe`,
    name: 'recipe details',
    component: () => import('../views/RecipeDetails/RecipeDetails.vue'),
  },
]

export default routes
