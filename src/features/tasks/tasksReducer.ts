/* eslint-disable @typescript-eslint/default-param-last */
import {
  ADD_NEW_TASK,
  DELETE_TASK,
  UPDATE_ALL_TASKS,
  UPDATE_POMODORS,
  UPDATE_TASK_NAME, UPDATE_TASK_NUMBER
} from './actionTypes'
import { Reducer } from "redux";

export type Task = {
  id: string,
  pomodors: number,
  workTime: number,
  restTime?: number,
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
    case UPDATE_ALL_TASKS: {
      return {
        ...state,
        tasks: action.data
      }
    }
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks , action.data],
      }
    case UPDATE_POMODORS:
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
    case UPDATE_TASK_NUMBER:
      return  {
        ...state,
        tasks: state.tasks.map((it) => {
          if (it.id === action.id) {
            return {
              ...it,
              taskNumber: action.data
            }
          }
          return it
        })
      }
    case UPDATE_TASK_NAME: {
      return {
        ...state,
        tasks: state.tasks.map((it) => {
          if (it.id === action.id) {
            return {
              ...it,
              name: action.name,
            }
          }
          return it
        })
      }
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
