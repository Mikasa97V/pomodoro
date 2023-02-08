import {ActionCreator} from "redux";

export const SET_TOTAL_WORK_TIME = 'SET_TOTAL_WORK_TIME'
export const SET_TOTAL_WORKS_DONE = 'SET_TOTAL_WORKS_DONE'
export const SET_TOTAL_PAUSES = 'SET_TOTAL_PAUSES'
export const SET_TOTAL_PAUSE_TIME = 'SET_TOTAL_PAUSE_TIME'
export const SET_TOTAL_TIME = 'SET_TOTAL_TIME'

export type SET_TOTAL_WORK_TIME_TYPE = {
  type: typeof SET_TOTAL_WORK_TIME,
  payload: number
}
export type SET_TOTAL_WORKS_DONE_TYPE = {
  type: typeof SET_TOTAL_WORKS_DONE,
  payload: number
}
export type SET_TOTAL_PAUSES_TYPE = {
  type: typeof SET_TOTAL_PAUSES,
  payload: number
}
export type SET_TOTAL_PAUSE_TIME_TYPE = {
  type: typeof SET_TOTAL_PAUSE_TIME,
  payload: number
}
export type SET_TOTAL_TIME_TYPE = {
  type: typeof SET_TOTAL_TIME,
  payload: number
}

export const setTotalWorkTime: ActionCreator<SET_TOTAL_WORK_TIME_TYPE> = (payload: number) => ({
  type: SET_TOTAL_WORK_TIME,
  payload,
})
export const setTotalWorksDone: ActionCreator<SET_TOTAL_WORKS_DONE_TYPE> = (payload: number) => ({
  type: SET_TOTAL_WORKS_DONE,
  payload,
})
export const setTotalPauses: ActionCreator<SET_TOTAL_PAUSES_TYPE> = (payload: number) => ({
  type: SET_TOTAL_PAUSES,
  payload,
})
export const setTotalPauseTime: ActionCreator<SET_TOTAL_PAUSE_TIME_TYPE> = (payload: number) => ({
  type: SET_TOTAL_PAUSE_TIME,
  payload,
})
export const setTotalTime: ActionCreator<SET_TOTAL_TIME_TYPE> = (payload: number) => ({
  type: SET_TOTAL_TIME,
  payload,
})

export type StatisticsActionType =
  | SET_TOTAL_WORK_TIME_TYPE
  | SET_TOTAL_WORKS_DONE_TYPE
  | SET_TOTAL_PAUSES_TYPE
  | SET_TOTAL_PAUSE_TIME_TYPE
  | SET_TOTAL_TIME_TYPE
