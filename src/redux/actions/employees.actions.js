import { employeesConstants } from '../constants/constants'
import http from '../../services/httpService'
import { message } from 'antd'

export const addEmployees = (payload) => {
  return (dispatch) => {
    dispatch({ type: employeesConstants.ADD_EMPLOYEES_REQUEST })
    http
      .post('/user/register', payload)
      .then(({ data }) => {
        dispatch({
          type: employeesConstants.ADD_EMPLOYEES_SUCCESS,
          payload: data.category,
        })
        message.success('Category is Added')
      })
      .catch((error) => {
        message.error('Unable to add category')
        dispatch({
          type: employeesConstants.ADD_EMPLOYEES_FAILURE,
        })
      })
  }
}

export const getEmployees = () => {
  return (dispatch) => {
    dispatch({ type: employeesConstants.GET_EMPLOYEES_REQUEST })
    http
      .get('/user')
      .then(({ data }) => {
        dispatch({
          type: employeesConstants.GET_EMPLOYEES_SUCCESS,
          payload: data.user,
        })
      })
      .catch(() => {
        message.error('Unable to get projects ')
        dispatch({
          type: employeesConstants.GET_EMPLOYEES_FAILURE,
        })
      })
  }
}
