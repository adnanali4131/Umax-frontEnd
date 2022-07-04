import { employeesConstants } from '../constants/constants'

const user = {
  firstName: '',
  lastName: '',
  status: true,
  email: '',
  dob: '',
  role: '',
}

export const employeesReducers = (state = { users: [], user }, action) => {
  switch (action.type) {
    case employeesConstants.GET_EMPLOYEES_REQUEST:
      return {
        ...state,
      }
    case employeesConstants.GET_EMPLOYEES_SUCCESS:
      return { ...state, users: action.payload }

    case employeesConstants.GET_EMPLOYEES_FAILURE:
      return { ...state }

    case employeesConstants.ADD_EMPLOYEES_REQUEST:
      return {
        ...state,
      }
    case employeesConstants.ADD_EMPLOYEES_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    case employeesConstants.ADD_EMPLOYEES_FAILURE:
      return {
        ...state,
      }
    default:
      return state
  }
}
