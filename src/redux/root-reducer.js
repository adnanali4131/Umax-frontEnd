import { combineReducers } from 'redux'
import { logInReducer } from './reducers/login.reducers'
import { logOutReducer } from './reducers/logout.reducer'
import { projectsReducer } from './reducers/project.reducers'
import { categoryReducers } from './reducers/category.reducers'
import typeReducer from './reducers/types.reducers'

const rootReducer = combineReducers({
  logIn: logInReducer,
  logOut: logOutReducer,
  projects: projectsReducer,
  category: categoryReducers,
  projectTypes: typeReducer,
})

export default rootReducer
