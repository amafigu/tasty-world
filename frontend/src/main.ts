import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import fetch from 'cross-fetch'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  fetch
})

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})

app.use(router)

app.mount('#app')
