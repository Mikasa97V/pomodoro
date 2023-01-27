import {ADD_NEW_TASK, DELETE_TASK, UPDATE_TASK} from "./actionTypes";

export type TTaskData = {
  id: string,
  pomodors: number,
  workTime: number,
  name: string,
}

export type TAddNewTask = {
  type: typeof ADD_NEW_TASK,
  data: TTaskData,
}

export type TUpdateTask = {
  type: typeof UPDATE_TASK,
  id: string,
  data: number,
}

export type TDeleteTask = {
  type: typeof DELETE_TASK,
  id: string,
}
