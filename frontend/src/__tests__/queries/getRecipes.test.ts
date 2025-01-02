import { GET_RECIPES } from '@/graphql/queries'
import { describe, expect, it } from 'vitest'
import { mockApolloClient } from '../helpers/apolloClient'
import { recipesMock } from '../mocks/data/recipesMock' // <— import your mock array

describe('GET_RECIPES query', () => {
  it('returns recipes succesfully', async () => {
    const client = mockApolloClient()

    const { data } = await client.query({
      query: GET_RECIPES,
    })

    expect(data).toEqual({
      recipes: recipesMock,
    })
  })
})
