import Axios from 'axios'
const instance = Axios.create({
  baseURL: import.meta.env.VITE_APP_API_DOMAIN,
  responseType: 'json',
  timeout: 20000
})
const axios = instance
export { axios }
