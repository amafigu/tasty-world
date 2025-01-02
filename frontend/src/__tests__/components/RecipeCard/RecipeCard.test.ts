import { recipeMock } from '@/__tests__/mocks/data/recipeMock'
import RecipeCard from '@/components/RecipeCard/RecipeCard.vue'
import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'

describe('RecipeCard ', () => {
  it('renders recipe data properly', () => {
    const { getByText, container } = render(RecipeCard, {
      props: {
        recipe: recipeMock,
      },
    })
    const img = container.querySelector('img') as HTMLImageElement

    expect(getByText('Barbecue with meat & veggies')).toBeInTheDocument()
    expect(getByText('For a sommer day with friends.')).toBeInTheDocument()
    expect(img.src).toContain('/images/meat.png')
  })
})
