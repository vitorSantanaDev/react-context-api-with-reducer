import * as actionsTypes from "./actions-types"
import { initialState } from "./data"

type state =  { counter: number, loading: boolean }
type action = { type: any; payload: any }

export const reducer = (state: state, action: action) => {
  console.log(action)
  switch(action.type) {
    case actionsTypes.INCREASE: {
      return { ...state, counter: state.counter + 1 }
    }
    case actionsTypes.DECREASE: {
      return { ...state, counter: state.counter - 1 }
    }
    case actionsTypes.RESET: {
      return { ...initialState }
    }
    case actionsTypes.SET_COUNTER: {
      return { ...state, counter: state.counter + action.payload }
    }
    case actionsTypes.ASYNC_INCREASE_START: {
      return { ...state, loading: true }
    }
    case actionsTypes.ASYNC_INCREASE_END: {
      return { ...state, loading: false, counter: state.counter + 1  }
    }
    case actionsTypes.ASYNC_INCREASE_ERROR: {
      return { ...state, loading: false }
    }
  }
  return { ...state }
}