import { axios } from '../axios/config'

export const getRecipies = async () => {
  try {
    const response = await axios.get('/recipies')
    if (response && response.status === 200) {
      return response
    }
  } catch (err) {
    console.error(err)
  }
}
