import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_UMAX_BE

//
// axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
//   'token',
// )}`

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500

    if (!expectedError) {
      console.log(error)
      console.error('An unexpected error occurrred.', error)
    }

    return Promise.reject(error)
  },
)

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
}

export default httpService
