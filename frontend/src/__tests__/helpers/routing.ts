import { ABOUT, HOME, RECIPES } from '@/constants/routes'
import About from '@/views/About/About.vue'
import Home from '@/views/Home/Home.vue'
import Recipes from '@/views/Recipes/Recipes.vue'
import {
  type RenderOptions,
  type RenderResult,
  render,
} from '@testing-library/vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import type { Component } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import { mockApolloClient } from './apolloClient'

// import all routes here as in @/router/router.ts
export const routes = [
  { path: HOME, component: Home },
  { path: `${RECIPES}/:category`, component: Recipes },
  { path: ABOUT, component: About },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

// TODO: do not use unknown
export function renderUsingRouter<T = unknown>(
  component: Component,
  options?: RenderOptions<T>
): RenderResult {
  const apolloClient = mockApolloClient()
  return render(component, {
    ...options,
    global: {
      plugins: [router],
      provide: {
        [DefaultApolloClient]: apolloClient,
      },
    },
  })
}
