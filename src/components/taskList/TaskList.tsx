import React from 'react'
import s from './taskList.module.css'
import { ListItem } from './ListItem'
import { useSelector } from 'react-redux'
import { selectors } from '../../features/tasks'

export function TaskList() {
  const tasks = useSelector(selectors.getTaskList)
  console.log('tasks from redux: ', tasks);
  // const totalTime = getTotalTime()

  return (
    <div className={s.main_wrap}>
      <div className={s.separate_line}></div>
      <div className={s.list_of_items}>
        {tasks.map((it) => {
          return <ListItem countTime={it.countTime} name={it.name}/>
        })}
      </div>
      <div className={s.total_time}> мин</div>
    </div>
  )
}
