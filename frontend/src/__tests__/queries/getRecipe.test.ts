import { GET_RECIPE } from '@/graphql/queries'
import { describe, expect, it } from 'vitest'
import { mockApolloClient } from '../helpers/apolloClient'
import { recipeMock } from '../mocks/data/recipeMock'

describe('Get Recipe query does ', () => {
  it('get recipe by name ', async () => {
    const client = mockApolloClient()

    const { data } = await client.query({
      query: GET_RECIPE,
      variables: { name: 'Barbecue with Meat & Veggies' },
    })

    expect(data).toEqual({
      recipe: recipeMock,
    })
  })
})
