import React, { useContext, useReducer } from 'react'
import CheckListContext from './CheckListContext'
import CheckListReducer from './CheckListReducer'

export const useCheckList = () => {
  const { state, dispatch } = useContext(CheckListContext)
  return [state, dispatch]
}

export function CheckListState({ children }) {
  const initialState = {
    checkLists: [],
    checkList: {},
    loading: false,
    error: false,
    message: '',
  }

  const [state, dispatch] = useReducer(CheckListReducer, initialState)

  return (
    <CheckListContext.Provider value={{ state, dispatch }}>
      {children}
    </CheckListContext.Provider>
  )
}
