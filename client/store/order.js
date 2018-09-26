import axios from "axios"

// Thunk Creator
export const createNewOrder = order => {
  return async dipatch => {
    try {
      const createNewOrder = await axios.post('/api/orders', order)
    } catch (err) {
      console.error(err)
    }
  }
}
