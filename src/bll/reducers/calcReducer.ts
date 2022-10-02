import React from 'react';

//initial state
const initialState:CalcStateType = {

}

export const calcReducer = (state: CalcStateType = initialState, action: CalcActionType): CalcStateType => {
  return state
}

//types
export type CalcActionType = any

type CalcStateType = {

}