// GraphQL operations against schema and resolvers directly with server.executeOperation
// Without an actual HTTP request - Integration Test

import { recipeModelMock } from '../mocks/models/modelsMock'
import { recipesMock } from '../mocks/data/recipesMock'
// avoid  ReferenceError: Cannot access 'modelsMock_1' before initialization
jest.mock('../src/models', () => recipeModelMock)

import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from '../src/schema'
import { resolvers } from '../src/resolvers'
import { GET_RECIPES } from '../mocks/queries/clientQueries'

describe('Server integrates recipe schema and resolvers also ', () => {
  let server: ApolloServer

  beforeAll(async () => {
    server = new ApolloServer({ typeDefs, resolvers })
    await server.start()
  })
  afterAll(async () => {
    await server.stop()
  })

  it('fetches recipes succesfully', async () => {
    const response = await server.executeOperation({ query: GET_RECIPES })
    const expected = recipesMock

    expect(response.errors).toBeUndefined()
    expect(response.data?.recipes).toEqual(expected)
  })
})
