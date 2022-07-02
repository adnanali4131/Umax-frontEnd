import { message } from 'antd'

import { projectConstants } from '../constants/constants'
import http from '../../services/httpService'

export const addProject = (payload) => {
  return (dispatch) => {
    dispatch({ type: projectConstants.ADD_PROJECTS_REQUEST })
    http
      .post('/project', payload)
      .then(({ data }) => {
        message.success('Project added')
        dispatch({
          type: projectConstants.ADD_PROJECTS_SUCCESS,
          payload: data.project,
        })
      })
      .catch((error) => {
        message.error('Unable to add project')
        dispatch({
          type: projectConstants.ADD_PROJECTS_FAILURE,
        })
      })
  }
}

export const getProjects = () => {
  return (dispatch) => {
    dispatch({ type: projectConstants.GET_PROJECTS_REQUEST })
    http
      .get('/project')
      .then(({ data }) => {
        dispatch({
          type: projectConstants.GET_PROJECTS_SUCCESS,
          payload: data.project,
        })
      })
      .catch(() => {
        message.error('Unable to get projects ')
        dispatch({
          type: projectConstants.ADD_PROJECTS_FAILURE,
        })
      })
  }
}
