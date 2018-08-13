import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import succulents from './succulents'
import singleSucculent from './singleSucculent'
import selectedFilters from './filter'
import selectedSucculents from './selectedSucculents'

const reducer = combineReducers({ user, succulents, singleSucculent, selectedFilters, selectedSucculents })

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
