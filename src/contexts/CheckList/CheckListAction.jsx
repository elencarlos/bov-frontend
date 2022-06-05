import http from '../../services/api'

export const setLoading = (dispatch, status) => dispatch({ type: 'SET_LOADING', payload: status })
export const clearCheckList = (dispatch, status) => dispatch({ type: 'CLEAR_CHECK_LIST', payload: status })

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

export const createCheckList = async (dispatch, data) => {
  setLoading(dispatch, true)

  await http
    .post('/checkList', data)
    .then(res => {
      const result = res.data
      dispatch({
        type: 'CREATE_CHECK_LIST',
        payload: 'Check List criado com sucesso',
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

export const updateCheckList = async (dispatch, data, id) => {
  setLoading(dispatch, true)

  await http
    .put(`/checkList/${id}`, data)
    .then(res => {
      console.log(res)
      dispatch({
        type: 'UPDATE_CHECK_LIST',
        payload: 'Check List atualizado com sucesso',
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

export const deleteCheckList = async (dispatch, id) => {
  setLoading(dispatch, true)

  await http
    .delete(`/checkList/${id}`)
    .then(res => {
      console.log(res)
      dispatch({
        type: 'DELETE_CHECK_LIST',
        payload: 'Check List deletado com sucesso',
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
