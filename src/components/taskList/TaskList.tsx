import React from 'react'
import s from './taskList.module.css'
import {ListItem} from './ListItem'
import {useDispatch, useSelector} from 'react-redux'
import {getTaskList} from "../../features/tasks/selectors"
import {Task} from "../../features/tasks/tasksReducer"
import {getTimeFromMins} from "../../helpers/getTimeFromMins"
import {updateAllTasks} from "../../features/tasks/actionTypes";

export function TaskList() {
  let tasks = useSelector(getTaskList)
  const dispatch = useDispatch()

  const isTaskListNotEmpty = tasks.length != 0
  const totalTimeFromRedux = tasks.reduce((prev: number, state: Task) => {
    return prev + state.pomodors * state.workTime
  }, 0)
  const totalTime = getTimeFromMins(totalTimeFromRedux)

  const changeListOrder = (id: string) => {
    const temp = tasks[0]
    const index = tasks.findIndex((it: Task) => it.id === id)
    tasks[0] = tasks[index]
    tasks[index] = temp
    dispatch(updateAllTasks(tasks))
  }

  return (
    <div className={s.main_wrap}>
      {isTaskListNotEmpty && (
        <div className={s.separate_line}></div>
      )}
      <div className={s.list_of_items}>
        {tasks.map((it: Task) => {
          return (
            <ListItem
              key={it.id}
              id={it.id}
              pomodors={it.pomodors}
              name={it.name}
              changeListOrder={changeListOrder}
            />
          )
        })}
      </div>
      {isTaskListNotEmpty && (
        <div className={s.total_time}>{totalTime}</div>
      )}
    </div>
  )
}
