import React from 'react'
import s from './timer.module.css'
import {Header} from './header'
import {TimeCounter} from './timeCounter'
import {useSelector} from "react-redux";
import {getTaskInfoById} from "../../features/tasks/selectors";
import {useRouteMatch} from "react-router-dom";


export function Timer() {
  const idFromPath = useRouteMatch<{ id: string }>("/tasks/:id")?.params.id;
  const taskById = useSelector(getTaskInfoById(idFromPath))

  return (
      <div className={s.main_wrap}>
        <Header
          taskName={taskById?.name}
        />
        <TimeCounter
          id={idFromPath}
          taskText={taskById?.name}
          taskNumber={taskById?.taskNumber}
          pomodors={taskById?.pomodors}
        />
      </div>
  )
}
