import { recipeMock } from '../mocks/data/recipeMock'
import { recipesModelMock } from '../mocks/models/modelsMock'
jest.mock('../src/models', () => recipesModelMock)

import { ApolloServer } from 'apollo-server-express'
import { GET_RECIPE } from '../mocks/queries/clientQueries'
import { resolvers } from '../src/resolvers'
import { typeDefs } from '../src/schema'

describe('recipe queries do ', () => {
  let server: ApolloServer

  beforeAll(async () => {
    server = new ApolloServer({ typeDefs, resolvers })
    await server.start()
  })

  afterAll(async () => {
    await server.stop()
  })

  it('get recipe by name', async () => {
    const response = await server.executeOperation({
      query: GET_RECIPE,
      variables: { name: 'Barbecue with meat & veggies' },
    })
    const expected = recipeMock

    expect(response.errors).toBeUndefined()
    expect(response.data?.recipe).toEqual(expected)
  })
})
