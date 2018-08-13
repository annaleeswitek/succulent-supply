//Action Types
const ADD_FILTER = 'ADD_SELECTED_FILTER'

const REMOVE_FILTER = 'REMOVE_FILTER'

// Action Creators
export const addFilter = selectedFilter => ({
  type: ADD_FILTER, selectedFilter
})

export const removeFilter = selectedFilter => ({
  type: REMOVE_FILTER, selectedFilter
})

// Reducer
export default function (state = [], action) {
  let idx = state.indexOf(action.selectedFilter)
  switch (action.type) {
    case ADD_FILTER:
      return [...state, action.selectedFilter]
    case REMOVE_FILTER:
      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]
    default:
      return state
  }
}

