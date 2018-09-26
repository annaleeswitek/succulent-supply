//Action Types

const SELECT_SUCCULENT = 'SELECT_SUCCULENT'

const DESELECT_SUCCULENT = 'DESELECT_SUCCULENT'

// Action Creators

export const selectSucculent = selectedSucculent => ({
  type: SELECT_SUCCULENT, selectedSucculent
})

export const deselectSucculent = selectedSucculent => ({
  type: DESELECT_SUCCULENT, selectedSucculent
})

// Reducer

export default function (state = [], action) {
  let idx = state.indexOf(action.selectedSucculent)
  switch (action.type) {
    case SELECT_SUCCULENT:
      return [...state, action.selectedSucculent]
    case DESELECT_SUCCULENT:
      return [
        ...state.slice(0, idx),
        ...state.slice(idx + 1)
      ]
    default:
      return state
  }
}
