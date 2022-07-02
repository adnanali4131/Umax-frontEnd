import { categoryConstants } from '../constants/constants'
import http from '../../services/httpService'
import { message } from 'antd'

export const addCategory = (payload) => {
  return (dispatch) => {
    dispatch({ type: categoryConstants.ADD_CATEGORY_REQUEST })
    http
      .post('/category', payload)
      .then(({ data }) => {
        message.success('Category is Added')
        dispatch({
          type: categoryConstants.ADD_CATEGORY_SUCCESS,
          payload: data.category,
        })
      })
      .catch((error) => {
        message.error('Unable to add category')
        dispatch({
          type: categoryConstants.ADD_CATEGORY_FAILURE,
        })
      })
  }
}

export const getCategorys = () => {
  return (dispatch) => {
    dispatch({ type: categoryConstants.GET_CATEGORY_REQUEST })
    http
      .get('/category')
      .then(({ data }) => {
        dispatch({
          type: categoryConstants.GET_CATEGORY_SUCCESS,
          payload: data,
        })
      })
      .catch(() => {
        message.error('Unable to get category')
        dispatch({ type: categoryConstants.GET_CATEGORY_FAILURE })
      })
  }
}
