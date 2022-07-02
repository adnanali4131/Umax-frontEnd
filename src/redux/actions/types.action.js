import { typesConstants } from '../constants/constants'
import http from '../../services/httpService'
import { message } from 'antd'

export function getTypeAction() {
  return (dispatch) => {
    dispatch({ type: typesConstants.GET_TYPES_REQUEST })
    http
      .get('/projectTypes')
      .then((res) => {
        dispatch({
          type: typesConstants.GET_TYPES_SUCCESS,
          payload: res.data.types,
        })
      })
      .catch(() => {
        message.error('Unable to get types data')
        dispatch({
          type: typesConstants.GET_TYPES_FAILURE,
        })
      })
  }
}
