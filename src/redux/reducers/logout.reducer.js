import { logOutConstants } from '../constants/constants'

export const logOutReducer = (
  state = {
    error: '',
    loading: false,
    user: null,
  },
  action,
) => {
  switch (action.type) {
    case logOutConstants.LOG_OUT_SUCCESS:
      return {
        ...state,
        token: '',
      }
    default:
      return { ...state }
  }
}
