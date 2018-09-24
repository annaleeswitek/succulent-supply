// Action Types
const INCREMENT_CART_COUNT = 'INCREMENT_CART_COUNT'
const DECREMENT_CART_COUNT = 'DECREMENT_CART_COUNT'
const CLEAR_CART_COUNT = 'CLEAR_CART_COUNT'
const UPDATE_CART_COUNT = 'UPDATE_CART_COUNT'

// Action Creators
export const incrementCartCount = () => ({ type: INCREMENT_CART_COUNT })
export const clearCartCount = () => ({ type: CLEAR_CART_COUNT })
export const updateCartCount = itemsRemoved => ({ type: UPDATE_CART_COUNT, itemsRemoved })
export const decrementCartCount = () => ({ type: DECREMENT_CART_COUNT })

// Initial State
let count = 0
localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).succulents.forEach(succ => {
  count = count + succ.quant;
})
const initialState = (JSON.parse(localStorage.getItem('cart'))) ? count : 0

// Reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_CART_COUNT:
      return state + 1
    case CLEAR_CART_COUNT:
      return 0
    case UPDATE_CART_COUNT:
      return state - action.itemsRemoved
    case DECREMENT_CART_COUNT:
      return state - 1
    default:
      return state
  }
}


