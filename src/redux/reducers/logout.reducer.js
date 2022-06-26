import { LOG_OUT } from '../constants/constants'

export const logOutReducer = (
  state = {
    error: '',
    loading: false,
    user: null,
  },
  action,
) => {
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
