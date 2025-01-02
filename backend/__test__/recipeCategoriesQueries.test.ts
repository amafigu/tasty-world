// GraphQL operations against schema and resolvers directly with server.executeOperation
// Without an actual HTTP request - Integration Test

import { recipeCategoriesModelMock } from '../mocks/models/modelsMock'
import { recipeCategoriesMock } from '../mocks/data/recipeCategoriesMock'
// avoid  ReferenceError: Cannot access 'modelsMock_1' before initialization

jest.mock('../src/models', () => recipeCategoriesModelMock)

import { GET_RECIPE_CATEGORIES } from '../mocks/queries/clientQueries'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from '../src/schema'
import { resolvers } from '../src/resolvers'

describe('Server integrates recipe categories schema and resolvers also ', () => {
  let server: ApolloServer

  beforeAll(async () => {
    server = new ApolloServer({ typeDefs, resolvers })
    await server.start()
  })
  afterAll(async () => {
    await server.stop()
  })

  it('fetches recipe categories successfully ', async () => {
    const response = await server.executeOperation({
      query: GET_RECIPE_CATEGORIES,
    })
    const expected = recipeCategoriesMock

    expect(response.data?.recipeCategories).toEqual(expected)
  })
})
