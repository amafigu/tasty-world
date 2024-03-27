import { axios } from '../axios/config'

export const getRecipies = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VUE_APP_API_DOMAIN}/recipies`)
    if (response && response.status === 200) {
      console.log(response)
      return response.data
    }
  } catch (err) {
    console.error(err)
  }
}
