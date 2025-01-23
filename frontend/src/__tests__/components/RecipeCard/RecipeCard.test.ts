import { renderUsingRouter } from '@/__tests__/helpers/routing'
import { recipeMock } from '@/__tests__/mocks/data/recipeMock'
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue'
import { describe, expect, it } from 'vitest'

describe('RecipeCard ', () => {
  it('renders recipe data properly', () => {
    const { getByText, container } = renderUsingRouter(RecipeCard, {
      props: {
        recipe: recipeMock,
      },
    })
    const img = container.querySelector('img') as HTMLImageElement

    expect(getByText('Barbecue with Meat & Veggies')).toBeInTheDocument()
<<<<<<< HEAD
=======
    expect(getByText('For a summer day with friends.')).toBeInTheDocument()
>>>>>>> aafbd1964eceda1d2167ccaafd6bb19b4339e134
    expect(img.src).toContain('/images/meat.png')
  })
})
