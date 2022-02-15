import { useReducer, useRef } from "react"
import { buildActions } from "./build-actions"
import { Context } from "./context"
import { initialState } from "./data"
import { reducer } from "./reducer"

interface Props {
  children: React.ReactNode
}

export const CounterContextProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const actions = useRef(buildActions(dispatch))
  return (
    <Context.Provider value={[state, actions.current]}>{children}</Context.Provider>
  )
}