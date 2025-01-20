import { renderUsingRouter, router } from '@/__tests__/helpers/routing'
import RecipeDetails from '@/views/RecipeDetails/RecipeDetails.vue'
import Recipes from '@/views/Recipes/Recipes.vue'
import { fireEvent, waitFor } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

describe('RecipeDetails', () => {
  it('renders image, instructions, ingredients and category links', async () => {
    router.push('/recipes/meat/Barbecue with Meat & Veggies')
    const { findByText, findByTestId } = renderUsingRouter(RecipeDetails)
    const { getByText } = renderUsingRouter(Recipes)
    const img = await findByTestId('recipe-details-image')
    const link = await findByTestId('recipe-details-category-link')

    expect(img).not.toBeNull()
    expect(img).toHaveAttribute('src', '/images/meat.png')
    expect(await findByText('Make fire.'))
    expect(await findByText('Prepare the meat and the salad.'))
    expect(await findByText('400g Beef'))

    await fireEvent.click(link)
    await waitFor(() => {
      expect(getByText('meat recipes')).toBeInTheDocument()
    })
  })
})
