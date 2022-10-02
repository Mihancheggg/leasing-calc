import {applyMiddleware, combineReducers, createStore } from "redux"
import {CalcActionType, calcReducer} from './reducers/calcReducer'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

const rootReducer = combineReducers({
  calc: calcReducer
  })

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//types
export type AppStateType = ReturnType<typeof rootReducer>

export type AppRootActionsType =
  | CalcActionType

export type ThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  AppRootActionsType
  >

export type DispatchActionType = ThunkDispatch<AppStateType, unknown, AppRootActionsType>

//typed hooks
export const useAppDispatch = () => useDispatch<DispatchActionType>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

// @ts-ignore
window.store = store