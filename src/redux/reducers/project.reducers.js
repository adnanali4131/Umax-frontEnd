import { projectConstants } from '../constants/constants'

const project = { name: '', status: true, category: '' }
/*
 * state {obj} -> projectReducer
 * state {obj} -> getProjectReducer
 */

export const projectsReducer = (state = { projects: [], project }, action) => {
  switch (action.type) {
    case projectConstants.GET_PROJECTS_REQUEST:
      return { ...state }
    case projectConstants.GET_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload }
    case projectConstants.GET_PROJECTS_FAILURE:
      return { ...state }
    case projectConstants.ADD_PROJECTS_REQUEST:
      return {
        ...state,
      }
    case projectConstants.ADD_PROJECTS_SUCCESS:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      }
    case projectConstants.ADD_PROJECTS_FAILURE:
      return {
        ...state,
      }

    default:
      return state
  }
}
