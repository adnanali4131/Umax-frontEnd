import { combineReducers } from 'redux'
import { logInReducer } from './reducers/login.reducers'
import { logOutReducer } from './reducers/logout.reducer'

const rootReducer = combineReducers({
  logIn: logInReducer,
  logOut: logOutReducer,
})

export default rootReducer
