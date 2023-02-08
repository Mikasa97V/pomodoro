import {Reducer} from "redux";
import {
  SET_TOTAL_PAUSE_TIME,
  SET_TOTAL_PAUSES,
  SET_TOTAL_TIME,
  SET_TOTAL_WORK_TIME,
  SET_TOTAL_WORKS_DONE,
  StatisticsActionType
} from "./actionTypes";

export type TStatisticsReducer = {
  totalWorkTime: number
  totalWorksDone: number
  totalPauses: number
  totalPauseTime: number
  totalTime: number
}

const initialState: TStatisticsReducer = {
  totalWorkTime: 0,
  totalWorksDone: 0,
  totalPauses: 0,
  totalPauseTime: 0,
  totalTime: 0,
}

export const StatisticsReducer: Reducer<TStatisticsReducer, StatisticsActionType> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOTAL_WORK_TIME:
      return {
        ...state,
        totalWorkTime: action.payload
      }
    case SET_TOTAL_PAUSES:
      return {
        ...state,
        totalPauses: action.payload,
      }
    case SET_TOTAL_WORKS_DONE:
      return {
        ...state,
        totalWorksDone: action.payload
      }
    case SET_TOTAL_PAUSE_TIME:
      return {
        ...state,
        totalPauseTime: action.payload
      }
    case SET_TOTAL_TIME:
      return {
        ...state,
        totalTime: action.payload
      }
    default:
      return state
  }
}
