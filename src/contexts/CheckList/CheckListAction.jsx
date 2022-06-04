import http from '../../services/api'

export const setLoading = (dispatch, status) => dispatch({ type: 'SET_LOADING', payload: status })

export const setError = (dispatch, error) => dispatch({
  type: 'SET_ERROR',
  payload: { error: error.status, message: error.message },
})

export const getCheckList = async (dispatch, id) => {
  setLoading(dispatch, true)

  await http
    .get(`/checkList/${id}`)
    .then(res => {
      const result = res.data
      dispatch({
        type: 'SET_CHECK_LIST',
        payload: result,
      })
    })
    .catch(error => {
      dispatch({
        type: 'SET_ERROR',
        payload: {
          error: true,
          message: error,
        },
      })
    })
}

export const getCheckLists = async dispatch => {
  setLoading(dispatch, true)

  await http
    .get('/checkList')
    .then(res => {
      const result = res.data
      dispatch({
        type: 'SET_CHECK_LISTS',
        payload: result,
      })
    })
    .catch(error => {
      dispatch({
        type: 'SET_ERROR',
        payload: {
          error: true,
          message: error,
        },
      })
    })
}
