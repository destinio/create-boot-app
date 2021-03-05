import React, { createContext, useContext, useReducer } from 'react'

interface StateInterface {
  loaded: boolean
}

type Actions = {
  type: string
}

type AppContextType = {
  state: StateInterface
  dispatch: React.Dispatch<Actions>
}

const AppContext = createContext<AppContextType>(null!)

export function useAppContext() {
  return useContext(AppContext)
}

const initState = {
  loaded: false,
}

function appReducer(state: StateInterface, action: Actions) {
  switch (action.type) {
    default:
      return state
  }
}

type Props = {
  children: React.ReactNode
}

export default function AppContextProvider({ children }: Props) {
  const [state, dispatch] = useReducer(appReducer, initState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}
