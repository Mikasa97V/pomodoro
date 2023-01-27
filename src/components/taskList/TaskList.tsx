import React from 'react'
import s from './taskList.module.css'
import { ListItem } from './ListItem'
import { useSelector } from 'react-redux'
import { getTaskList } from "../../features/tasks/selectors"
import { Task } from "../../features/tasks/tasksReducer"
import {getTimeFromMins} from "../../helpers/getTimeFromMins"

export function TaskList() {
  let tasks = useSelector(getTaskList)

  const isTaskListNotEmpty = tasks.length != 0
  const totalTimeFromRedux = tasks.reduce((prev: number, state: Task) => {
    return prev + state.pomodors * state.workTime
  }, 0)
  const totalTime = getTimeFromMins(totalTimeFromRedux)


  return (
    <div className={s.main_wrap}>
      {isTaskListNotEmpty && (
        <div className={s.separate_line}></div>
      )}
      <div className={s.list_of_items}>
        {tasks.map((it: Task) => {
          return (<ListItem key={it.id} id={it.id} pomodors={it.pomodors} name={it.name}/>)
        })}
      </div>
      {isTaskListNotEmpty && (
        <div className={s.total_time}>{totalTime}</div>
      )}
    </div>
  )
}
