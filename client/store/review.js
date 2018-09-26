import axios from 'axios'

// Thunk Creator
export const writeNewReview = reviewAndId => {
  return async dispatch => {
    try {
    const id = reviewAndId[1]
    const review = reviewAndId[0]
    const postReview = await axios.post(`/api/reviews/${id}`, review)
    } catch (err) {
    console.error(err)
    }
  }
}
