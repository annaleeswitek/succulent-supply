// Action Types
const UPDATE_CART_COUNT = 'UPDATE_CART_COUNT'

// Action Creators
export const updateCartCount = newCount => ({ type: UPDATE_CART_COUNT, newCount })

let count = 0

JSON.parse(localStorage.getItem('cart')).succulents.forEach(succ => {
  count = count + succ.quant;
})

const initialState = (JSON.parse(localStorage.getItem('cart'))) ? count : 0

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART_COUNT:
      return state + 1
    default:
      return state
  }
}


