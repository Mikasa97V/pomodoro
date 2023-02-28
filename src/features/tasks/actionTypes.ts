import {ActionCreator} from "redux";
import {TAddNewTask, TDeleteTask, TUpdateTask, TUpdateTaskName, TUpdateTaskNumber} from "./types";

export const DELETE_TASK = 'DELETE_TASK'
export const ADD_NEW_TASK = 'ADD_NEW_TASK'
export const UPDATE_POMODORS = 'UPDATE_POMODORS'
export const UPDATE_TASK_NUMBER = 'UPDATE_TASK_NUMBER'
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME'
export const UPDATE_ALL_TASKS = 'UPDATE_ALL_TASKS'

export const addNewTask: ActionCreator<TAddNewTask> = (data) => ({
  type: ADD_NEW_TASK,
  data,
})

export const updateTask: ActionCreator<TUpdateTask> = (id, data) => ({
  type: UPDATE_POMODORS,
  id,
  data,
})

export const updateTaskNumber: ActionCreator<TUpdateTaskNumber> = (id, data) => ({
  type: UPDATE_TASK_NUMBER,
  id,
  data,
})

export const updateTaskName: ActionCreator<TUpdateTaskName> = (id, name) => ({
  type: UPDATE_TASK_NAME,
  id,
  name,
})

export const deleteTask: ActionCreator<TDeleteTask> = (id) => ({
  type: DELETE_TASK,
  id,
})

export const updateAllTasks: ActionCreator<any> = (data) => ({
  type: UPDATE_ALL_TASKS,
  data
})
