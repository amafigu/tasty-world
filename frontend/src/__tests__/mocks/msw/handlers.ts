import { HttpResponse, graphql } from 'msw'
import { recipeCategoriesMock } from '../data/recipeCategoriesMock'
import { recipesMock } from '../data/recipesMock'

export const handlers = [
  graphql.query('GetRecipeCategories', () => {
    return HttpResponse.json({
      data: {
        recipeCategories: recipeCategoriesMock,
      },
    })
  }),
  graphql.query('GetRecipes', () => {
    return HttpResponse.json({
      data: {
        recipes: recipesMock,
      },
    })
  }),
]
