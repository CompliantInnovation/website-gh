import React, { useReducer } from 'react'

const reducer = (state, action) => {
  let result = {
    ...state
  }

  switch (action.type) {
    case 'change-page':
      result.page = action.payload
      return result
    default:
      return result
  }
}

const intitialResponseState = {
  page: 'home'
}

const changePage = (string) => {
  return {
    type: 'change-page',
    payload: string
  }
}

const initState = () => intitialResponseState
const Context = React.createContext({})

function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, undefined, initState)

  return <Context.Provider value={{ state, dispatch }}>{props.children}</Context.Provider>
}

export { Context, ContextProvider, changePage }
