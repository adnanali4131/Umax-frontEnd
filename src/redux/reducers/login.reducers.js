import { logInConstants } from '../constants/constants'

export const logInReducer = (
  state = {
    error: '',
    loading: false,
    user: null,
  },
  action,
) => {
  switch (action.type) {
    case logInConstants.LOG_IN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case logInConstants.LOG_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case logInConstants.LOG_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      }

    default:
      return { ...state }
  }
}
