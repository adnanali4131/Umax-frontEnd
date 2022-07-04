import { combineReducers } from 'redux'
import { logInReducer } from './reducers/login.reducers'
import { logOutReducer } from './reducers/logout.reducer'
import { projectsReducer } from './reducers/project.reducers'
import { categoryReducers } from './reducers/category.reducers'
import { employeesReducers } from './reducers/employees.reducers'
import typeReducer from './reducers/types.reducers'

const rootReducer = combineReducers({
  logIn: logInReducer,
  logOut: logOutReducer,
  projects: projectsReducer,
  category: categoryReducers,
  employees: employeesReducers,
  projectTypes: typeReducer,
})

export default rootReducer
