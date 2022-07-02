import { typesConstants } from '../constants/constants'

const type = { name: '', status: false }

export default function typeReducer(state = { types: [], type }, action) {
  switch (action.type) {
    case typesConstants.GET_TYPES_REQUEST:
      return {
        ...state,
      }
    case typesConstants.GET_TYPES_SUCCESS:
      return {
        ...state,
        types: action.payload,
      }
    case typesConstants.GET_TYPES_FAILURE:
      return {
        ...state,
      }

    default:
      return state
  }
}
