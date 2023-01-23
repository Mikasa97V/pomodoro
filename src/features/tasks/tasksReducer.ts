/* eslint-disable @typescript-eslint/default-param-last */

import { UPDATE_TASK, DELETE_TASK } from './actionTypes'
import { TasksActionTypes } from './types'

const initialState = [
  {countTime: 2, name: 'ghseyfgyesfg'},
]

export default (state = initialState, action: TasksActionTypes) => {
  switch (action.type) {
    case UPDATE_TASK:
      return {
        ...state,
      }
    case DELETE_TASK:
      return { ...state, countTime: 6, name: 'delete' }
    default:
      return state
  }
}
