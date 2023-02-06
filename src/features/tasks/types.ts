import {ADD_NEW_TASK, DELETE_TASK, UPDATE_ALL_TASKS, UPDATE_POMODORS, UPDATE_TASK_INFO} from "./actionTypes";

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

export type TUpdateTaskInfo = {
  type: typeof UPDATE_TASK_INFO,
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
