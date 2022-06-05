export default (state, action) => {
  switch (action.type) {
    case 'SET_CHECK_LISTS':
      return {
        ...state,
        checkLists: action.payload,
      }
    case 'SET_CHECK_LIST':
      return {
        ...state,
        checkList: action.payload,
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
      }
    case 'CLEAR_CHECK_LIST':
      return {
        ...state,
        checkList: null,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    case 'CREATE_CHECK_LIST':
      return {
        ...state,
        message: action.payload,
        checkList: null,
      }
    case 'UPDATE_CHECK_LIST':
      return {
        ...state,
        message: action.payload,
        checkList: null,
      }
    case 'DELETE_CHECK_LIST':
      return {
        ...state,
        message: action.payload,
      }
    default:
      return state
  }
}
