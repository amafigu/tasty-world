import { render, fireEvent } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import "@testing-library/jest-dom"
import Navbar from '@/components/Navbar/Navbar.vue'
import Home from '@/views/Home/Home.vue'
import Meat from '@/views/recipes/Meat/Meat.vue'
import Fish from '@/views/recipes/Fish/Fish.vue'
import Vegetarian from '@/views/recipes/Vegetarian/Vegetarian.vue'
import About from '@/views/About/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/meat-recipies', component: Meat },
  { path: '/fish-recipies', component: Fish },
  { path: '/vegetarian-recipies', component: Vegetarian },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe('Navbar', () => {
  it('renders all links correctly', async () => {
    const { getByText, getByAltText } = render(Navbar, {
      global: {
        plugins: [router],
      },
    })

    expect(getByAltText('logo')).toBeInTheDocument()
    expect(getByText('Meat')).toBeInTheDocument()
    expect(getByText('Fish')).toBeInTheDocument()
    expect(getByText('Vegetarian')).toBeInTheDocument()
    expect(getByText('About')).toBeInTheDocument()
  })

  it('navigates to Meat recipes page', async () => {
    const { getByText, findByText } = render(Navbar, {
      global: {
        plugins: [router],
      },
    })

    await fireEvent.click(getByText('Meat'))
    expect(await findByText('Meat')).toBeInTheDocument()
  })

  it('navigates to Fish recipes page', async () => {
    const { getByText, findByText } = render(Navbar, {
      global: {
        plugins: [router],
      },
    })

    await fireEvent.click(getByText('Fish'))
    expect(await findByText('Fish')).toBeInTheDocument()
  })

  it('navigates to Vegetarian recipes page', async () => {
    const { getByText, findByText } = render(Navbar, {
      global: {
        plugins: [router],
      },
    })

    await fireEvent.click(getByText('Vegetarian'))
    expect(await findByText('Vegetarian')).toBeInTheDocument()
  })

})
