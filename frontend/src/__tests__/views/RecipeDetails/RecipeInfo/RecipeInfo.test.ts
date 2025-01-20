import { renderUsingRouter, router } from '@/__tests__/helpers/routing'
import RecipeInfo from '@/views/RecipeDetails/RecipeInfo/RecipeInfo.vue'
import { describe, expect, it } from 'vitest'

describe('RecipeInfo', () => {
  it('renders cooking time, persons to serve, difficultyLevel and icons ', async () => {
    router.push('/recipes/meat/Barbecue with Meat & Veggies')
    const { findAllByText, findByTestId } = renderUsingRouter(RecipeInfo, {
      props: {
        time: 30,
        difficultyLevel: 2,
        serves: 4,
      },
    })
    const userIcon = await findByTestId('recipe-info-user-icon')
    const clockIcon = await findByTestId('recipe-info-clock-icon')

    const middleDifficultyIcon = await findByTestId(
      'recipe-info-medium-difficulty-icon',
    )

    expect(userIcon).toBeInTheDocument()
    expect(userIcon).toHaveAttribute('icon', 'fa-solid fa-user')
    expect(clockIcon).toBeInTheDocument()
    expect(clockIcon).toHaveAttribute('icon', 'fa-solid fa-clock')
    expect(middleDifficultyIcon).toBeInTheDocument()
    expect(middleDifficultyIcon).toHaveAttribute(
      'icon',
      'fa-solid fa-temperature-half',
    )
    expect(await findAllByText('serves 4'))
    expect(await findAllByText('30 mins'))
    expect(await findAllByText('Not that easy'))
  })
})
