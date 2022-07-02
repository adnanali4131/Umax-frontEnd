import { logOutConstants } from '../constants/constants'

export const logOutRequest = function () {
  return {
    type: logOutConstants.LOG_OUT_REQUEST,
  }
}

export const logOut = function (navigate) {
  return function (dispatch) {
    dispatch(logOutRequest())
    localStorage.clear()
    navigate('/login')
  }
}
