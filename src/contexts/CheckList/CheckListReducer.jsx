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
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
