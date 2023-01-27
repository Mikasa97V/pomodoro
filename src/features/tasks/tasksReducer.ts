/* eslint-disable @typescript-eslint/default-param-last */
import {ADD_NEW_TASK, DELETE_TASK, UPDATE_TASK} from './actionTypes'
import { Reducer } from "redux";

export type Task = {
  id: string,
  pomodors: number,
  workTime: number,
  name: string,
}
export type TTaskData = {
  tasks: Task[],
}

const initialState: TTaskData = {
  tasks: [],
}

export const TasksReducer: Reducer<TTaskData> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks , action.data],
      }
    case UPDATE_TASK:
      return  {
        ...state,
        tasks: state.tasks.map((it) => {
          if (it.id === action.id) {
            return {
              ...it,
              pomodors: action.data
            }
          }
          return it
        })
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((it) => it.id != action.id)
      }
    default:
      return state
  }
}
