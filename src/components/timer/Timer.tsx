import React, {useState} from 'react'
import s from './timer.module.css'
import {Header} from './header'
import {TimeCounter} from './timeCounter'
import {useSelector} from "react-redux";
import {getTaskInfoById} from "../../features/tasks/selectors";
import {useRouteMatch} from "react-router-dom";


export function Timer() {
  const id = useRouteMatch<{ id: string }>("/tasks/:id")?.params.id;
  const taskById = useSelector(getTaskInfoById(id))
  const [isCounting, setIsCounting] = useState(false)
  const [greenButtonType, setGreenButtonType] = useState('start')
  const [isWorkTime, setIsWorkTime] = useState(true)
  const [numberOfWorks, setNumberOfWorks] = useState(0)
  return (
    <div className={s.main_wrap}>
      <Header
        taskName={taskById?.name}
        isCounting={isCounting}
        greenButtonType={greenButtonType}
        isWorkTime={isWorkTime}
      />
      <TimeCounter
        taskText={taskById?.name}
        isCounting={isCounting}
        setIsCounting={setIsCounting}
        greenButtonType={greenButtonType}
        setGreenButtonType={setGreenButtonType}
        setIsWorkTime={setIsWorkTime}
        isWorkTime={isWorkTime}
        numberOfWorks={numberOfWorks}
        setNumberOfWorks={setNumberOfWorks}
      />
    </div>
  )
}
