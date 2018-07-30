import axios from 'axios'

// Action Types
const GET_ONE_SUCCULENT = 'GET_ONE_SUCCULENT'

// Action Creators
const getOneSucculent = succulent => ({ type: GET_ONE_SUCCULENT, succulent })

// Thunk Creator
export const fetchOneSucculent = succulentId => {
  return async dispatch => {
    try {
      const response = await axios.get(`/api/succulents/${succulentId}`)
      const succulent = response.data
      const action = getOneSucculent(succulent)
      dispatch(action)
    } catch (err) {
      console.log(err)
    }
  }
}

// Reducer
export default function(state = {}, action) {
  switch (action.type) {
    case GET_ONE_SUCCULENT:
      return action.succulent
    default:
      return state
  }
}
