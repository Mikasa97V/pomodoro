import {
  ADD_NEW_TASK,
  DELETE_TASK,
  UPDATE_ALL_TASKS,
  UPDATE_POMODORS, UPDATE_TASK_NAME,
  UPDATE_TASK_NUMBER, UPDATE_TOMATO
} from "./actionTypes";

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
  type: typeof UPDATE_POMODORS,
  id: string,
  data: number,
}

export type TUpdateTaskNumber = {
  type: typeof UPDATE_TASK_NUMBER,
  id: string,
  data: number,
}
export type TUpdateTomato = {
  type: typeof UPDATE_TOMATO,
  id: string,
  data: number,
}

export type TUpdateTaskName = {
  type: typeof UPDATE_TASK_NAME,
  id: string,
  name: string,
}

export type TDeleteTask = {
  type: typeof DELETE_TASK,
  id: string,
}

export type TUpdateAllTasks = {
  type: typeof UPDATE_ALL_TASKS,
  data: TTaskData
}
