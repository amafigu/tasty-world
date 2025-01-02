import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import fetch from 'cross-fetch'
import { createApp, h, provide } from 'vue'
import App from './App.vue'
import './assets/styles/global.css'
import { FontAwesomeIcon } from './icons/iconsLibrary'
import router from './router'

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_APP_HTTP_LINK,
  fetch,
})

const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.component('FontAwesomeIcon', FontAwesomeIcon)

app.use(router)

async function useMsw() {
  // only intercept queries by testing
  if (import.meta.env.MODE === 'test') {
    const { worker } = await import('./__tests__/mocks/msw/browser')
    return worker.start()
  }
  return Promise.resolve()
}

useMsw().then(() => {
  app.mount('#app')
})
