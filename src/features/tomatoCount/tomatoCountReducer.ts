import {Reducer} from 'redux'
import {SET_DELETED_TOMATO, SET_TOMATO, TomatoCountActionType} from "./actionTypes";

export type TTomatoCountReducer = {
  tomato: number,
  deletedTomato: number,
}

const initialState = {
  tomato: 0,
  deletedTomato: 0,
}

export const TomatoCountReducer: Reducer<TTomatoCountReducer, TomatoCountActionType> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOMATO:
      return {...state, tomato: action.payload}
    case SET_DELETED_TOMATO:
      return {...state, deletedTomato: state.deletedTomato + action.payload}
    default:
      return state
  }
}
