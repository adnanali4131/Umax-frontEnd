import { LOG_OUT } from '../constants/constants'

const initialState = {
  error: '',
  loading: false,
  user: null,
}
// @todo: do not use initialState instead define initial values directly inside reducer
// @todo: remove unused code

export const logOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_OUT.SUCCESS:
      return {
        ...state,
        token: '',
      }
    default:
      return { ...state }
  }
}
