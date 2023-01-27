import {ActionCreator} from "redux";
import {TAddNewTask, TDeleteTask, TUpdateTask} from "./types";

export const DELETE_TASK = 'DELETE_TASK'
export const ADD_NEW_TASK = 'ADD_NEW_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'
export const UPDATE_ALL_TASKS = 'UPDATE_ALL_TASKS'

export const addNewTask: ActionCreator<TAddNewTask> = (data) => ({
  type: ADD_NEW_TASK,
  data,
})

export const updateTask: ActionCreator<TUpdateTask> = (id, data) => ({
  type: UPDATE_TASK,
  id,
  data,
})

export const deleteTask: ActionCreator<TDeleteTask> = (id) => ({
  type: DELETE_TASK,
  id,
})

export const updateAllTasks: ActionCreator<any> = (data) => ({
  type: UPDATE_ALL_TASKS,
  data
})
