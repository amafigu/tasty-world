import Menu from '@/components/Navbar/Menu/Menu.vue'
import Recipes from '@/views/Recipes/Recipes.vue'
import { fireEvent } from '@testing-library/vue'
import { beforeEach, describe, expect, it } from 'vitest'
import { renderUsingRouter, router } from '../../helpers/routing'

describe('Menu', () => {
  let matchers: ReturnType<typeof renderUsingRouter>
  let recipesMatchers: ReturnType<typeof renderUsingRouter>

  beforeEach(async () => {
    matchers = renderUsingRouter(Menu)
    recipesMatchers = renderUsingRouter(Recipes)
  })

  it('renders all links correctly', async () => {
    const { findByText } = matchers

    expect(await findByText('MEAT')).toBeInTheDocument()
    expect(await findByText('ABOUT')).toBeInTheDocument()
  })

  it('navigates to Meat recipes page', async () => {
    const { findByText } = matchers
    const { getByText } = recipesMatchers

    router.push('/recipes/meat')
    await fireEvent.click(await findByText('MEAT'))

    expect(getByText('meat recipes')).toBeInTheDocument()
  })

  it('emits "@close" event when close button is clicked', async () => {
    const { getByLabelText, emitted } = matchers

    const closeButton = getByLabelText('Close Menu')
    await fireEvent.click(closeButton)

    expect(emitted()).toHaveProperty('close')
    expect(emitted().close.length).toBe(1)
  })
})
