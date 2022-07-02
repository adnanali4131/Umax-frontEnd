import { categoryConstants } from '../constants/constants'
const category = { name: '', status: true, type: '' }

export const categoryReducers = (
  state = { categorys: [], category },
  action,
) => {
  switch (action.type) {
    case categoryConstants.GET_CATEGORY_REQUEST:
      return { ...state }
    case categoryConstants.GET_CATEGORY_SUCCESS: {
      return { ...state, categorys: action.payload }
    }
    case categoryConstants.GET_CATEGORY_FAILURE:
      return { ...state }

    case categoryConstants.ADD_CATEGORY_REQUEST:
      return { ...state }

    case categoryConstants.ADD_CATEGORY_SUCCESS:
      return [...state.categorys, action.payload]

    case categoryConstants.ADD_CATEGORY_FAILURE:
      return { ...state }

    default:
      return state
  }
}
