import React, { createContext, useContext, useReducer } from 'react'

const AppContext = createContext()

export function useAppContext() {
  return useContext(AppContext)
}

const initState = {
  loaded: false,
}

function appReducer(state, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default function AppContextProvider({children}) {
  const [state, dispatch] = useReducer(appReducer, initState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
