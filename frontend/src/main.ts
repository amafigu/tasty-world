import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core'
import fetch from 'cross-fetch'
import './assets/styles/global.css'
import { FontAwesomeIcon } from './icons/iconsLibrary'

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

app.mount('#app')
