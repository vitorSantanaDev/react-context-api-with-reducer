import * as actionsTypes from "./actions-types"

type action = { type: any; payload?: any }
type dispatch = (action: action) => void

export const buildActions = (dispatch: dispatch) => {
  return {
    increase: () => dispatch({ type: actionsTypes.INCREASE }),
    decrease: () => dispatch({ type: actionsTypes.DECREASE }),
    reset: () => dispatch({ type: actionsTypes.RESET }),
    setCounter: (payload: any) => dispatch({ type: actionsTypes.SET_COUNTER, payload }),
    asynIncrease: () => asyncIncreaseFN(dispatch),
    asyncError: () => asyncErrorFN(dispatch)
  }
}

const asyncIncreaseFN = async (dispatch: dispatch) => {
  dispatch({ type: actionsTypes.ASYNC_INCREASE_START })
  return await new Promise(resolve => {
    setTimeout(() => {
      dispatch({ type: actionsTypes.ASYNC_INCREASE_END })
      resolve('RESOLVED!')
    }, 2000)
  })
}

const asyncErrorFN = async (dispatch: dispatch) => {
  dispatch({ type: actionsTypes.ASYNC_INCREASE_START })
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      dispatch({ type: actionsTypes.ASYNC_INCREASE_ERROR })
      reject(new Error('Deu ruim!'))
    }, 2000)
  })
}