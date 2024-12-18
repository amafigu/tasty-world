import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home.vue'
import Meat from '@/views/recipes/Meat/Meat.vue'
import Fish from '@/views/recipes/Fish/Fish.vue'
import Vegetarian from '@/views/recipes/Vegetarian/Vegetarian.vue'
import About from '@/views/About/About.vue'
import type { Component } from 'vue'
import {
  type RenderResult,
  type RenderOptions,
  render,
} from '@testing-library/vue'
import {
  ABOUT,
  FISH_RECIPES,
  HOME,
  MEAT_RECIPES,
  VEGETARIAN_RECIPES,
} from '@/constants/routes'

export const routes = [
  { path: HOME, component: Home },
  { path: MEAT_RECIPES, component: Meat },
  { path: FISH_RECIPES, component: Fish },
  { path: VEGETARIAN_RECIPES, component: Vegetarian },
  { path: ABOUT, component: About },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

// TODO: do not use unknown
export function renderUsingRouter<T = unknown>(
  component: Component,
  options?: RenderOptions<T>
): RenderResult {
  return render(component, {
    ...options,
    global: {
      plugins: [router],
    },
  })
}
