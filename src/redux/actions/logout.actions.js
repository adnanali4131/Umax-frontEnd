import { LOG_OUT } from '../constants/constants'

export const logOutRequest = function () {
  return {
    type: LOG_OUT.REQUEST,
  }
}

export const logOut = function (navigate) {
  return function (dispatch) {
    dispatch(logOutRequest())
    localStorage.clear()
    navigate('/login')
  }
}
