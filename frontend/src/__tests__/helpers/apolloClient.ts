import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import fetch from 'cross-fetch'

export function mockApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      // Matches the URI actual queries use
      uri: 'http://localhost:4000/graphql',
      fetch,
    }),
    cache: new InMemoryCache(),
  })
}
