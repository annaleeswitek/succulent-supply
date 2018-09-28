import axios from "axios"

// Thunk Creator
export const createNewOrder = order => {
  console.log('thunk has thunked')
  return async dipatch => {
    try {
      const createNewOrder = await axios.post('/api/orders', order)
    } catch (err) {
      console.error(err)
    }
  }
}
