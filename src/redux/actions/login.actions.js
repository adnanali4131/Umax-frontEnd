import { LOG_IN } from '../constants/constants'

import http from '../../services/httpService'

//Sign in action creators
const logInRequest = () => {
  return {
    type: LOG_IN.REQUEST,
  }
}
const logInSuccess = (token) => {
  return {
    type: LOG_IN.SUCCESS,
    payload: {
      token,
    },
  }
}
const logInFailure = (error) => {
  return {
    type: LOG_IN.FAILURE,
    payload: error,
  }
}

export const logIn = (payload, navigate) => {
  return function (dispatch) {
    dispatch(logInRequest)
    http
      .post('/user/login', payload)
      .then((response) => {
        const { token } = response.data
        localStorage.setItem('USER-TOKEN', token)
        dispatch(logInSuccess(token))

        navigate('/')
      })
      .catch((error) => {
        dispatch(logInFailure(error.response.data.message))
      })
  }
}
