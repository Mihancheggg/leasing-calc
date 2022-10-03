import React from 'react';
import {CalcDataType} from '../../api/calcApi';

//initial state
const initialState: CalcStateType = {
  data: {},
  status: 'idle'
}

export const calcReducer = (state: CalcStateType = initialState, action: CalcActionType): CalcStateType => {
  return state
}

//types
export type CalcActionType = any

type CalcStateType = {
  data: CalcDataType
  status: CalcStatusType
}

export type CalcStatusType = 'idle' | 'loading'