import { UPDATE_TASK, DELETE_TASK } from './actionTypes'

interface UpdateTaskAction {
  type: typeof UPDATE_TASK
}
interface DeleteTaskAction {
  type: typeof DELETE_TASK
}
export type TasksActionTypes = UpdateTaskAction | DeleteTaskAction


export interface TaskState {
  tasks: [
    {countTime: number, name: string},
  ]
}
