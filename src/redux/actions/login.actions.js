import { logInConstants } from '../constants/constants'

import http from '../../services/httpService'

export const logIn = (payload, navigate) => {
  return function (dispatch) {
    dispatch({ type: logInConstants.LOG_IN_REQUEST })
    http
      .post('/user/login', payload)
      .then((response) => {
        const { token } = response.data
        localStorage.setItem('USER-TOKEN', token)
        dispatch({ type: logInConstants.LOG_IN_SUCCESS, payload: token })

        navigate('/')
      })
      .catch((error) => {
        dispatch(logInConstants.LOG_IN_FAILURE(error.response.data.message))
      })
  }
}
