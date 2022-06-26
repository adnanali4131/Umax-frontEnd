import { LOG_IN } from '../constants/constants'

export const logInReducer = (
  state = {
    error: '',
    loading: false,
    user: null,
  },
  action,
) => {
  switch (action.type) {
    case LOG_IN.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case LOG_IN.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case LOG_IN.SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
      }

    default:
      return { ...state }
  }
}
