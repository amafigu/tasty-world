import { GET_RECIPE_CATEGORIES } from '@/graphql/queries'
import { describe, expect, it } from 'vitest'
import { mockApolloClient } from '../helpers/apolloClient'
import { recipeCategoriesMock } from '../mocks/data/recipeCategoriesMock' // <— import your mock array

describe('GET_RECIPE_CATEGORIES query', () => {
  it('returns recipeCategories succesfully', async () => {
    const client = mockApolloClient()

    const { data } = await client.query({
      query: GET_RECIPE_CATEGORIES,
    })

    expect(data).toEqual({
      recipeCategories: recipeCategoriesMock,
    })
  })
})
