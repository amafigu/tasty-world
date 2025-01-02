import Recipes from '@/views/Recipes/Recipes.vue'
import { beforeEach, describe, expect, it } from 'vitest'
import { renderUsingRouter, router } from '../../helpers/routing'

describe('Recipes view ', () => {
  let matchers: ReturnType<typeof renderUsingRouter>
  beforeEach(async () => {
    matchers = renderUsingRouter(Recipes)
  })
  it('renders meat recipes when dynamic route category = meat', async () => {
    router.push('/recipes/meat')

    const { findByText } = matchers

    expect(await findByText('meat recipes')).toBeInTheDocument()
    expect(await findByText('Barbecue with meat & veggies')).toBeInTheDocument()
  })
})
