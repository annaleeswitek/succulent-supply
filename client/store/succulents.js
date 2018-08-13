import axios from 'axios'

//Action Type
const GET_SUCCS = 'GET_SUCCS'

// Action Creator
const getSuccs = succulents => ({type: GET_SUCCS, succulents})

// Thunk Creator
export const fetchSucculents = () => {
	return async dispatch => {
		try {
			const response = await axios.get('/api/succulents')
			const succs = response.data
			const action = getSuccs(succs)
			dispatch(action)
		} catch (err) {
			console.log(err)
		}
	}
}

// Reducer
export default function(state = [], action) {
	switch (action.type) {
		case GET_SUCCS:
      return action.succulents
		default:
			return state
	}
}
