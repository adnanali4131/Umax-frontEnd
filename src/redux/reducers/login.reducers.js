import { LOG_IN } from '../constants/constants'

const initialState = {
  error: '',
  loading: false,
  user: null,
}

export const logInReducer = (state = initialState, action) => {
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
