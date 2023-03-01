import {ActionCreator} from "redux";

export const SET_TOMATO = 'SET_TOMATO'
export const SET_DELETED_TOMATO = 'SET_DELETED_TOMATO'

export type SET_TOMATO_TYPE = {
  type: typeof SET_TOMATO,
  payload: number,
}

export type SET_DELETED_TOMATO_TYPE = {
  type: typeof SET_DELETED_TOMATO,
  payload: number,
}

export const setTomato: ActionCreator<SET_TOMATO_TYPE> = (payload: number) => ({
  type: SET_TOMATO,
  payload,
})

export const setDeletedTomato: ActionCreator<SET_DELETED_TOMATO_TYPE> = (payload: number) => ({
  type: SET_DELETED_TOMATO,
  payload,
})

export type TomatoCountActionType = SET_TOMATO_TYPE | SET_DELETED_TOMATO_TYPE
