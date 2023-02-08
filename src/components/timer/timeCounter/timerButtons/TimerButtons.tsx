import React, {useContext} from 'react'
import s from './timerButtons.module.css'
import root from 'index.module.css'
import {useRouteMatch} from "react-router-dom"
import {TimerContext} from 'providers/timer/TimerProvider'

export function TimerButtons() {
  const {
    greenButton,
    redButton,
    handleGreenButtonClick,
    handleRedButtonClick,
  } = useContext(TimerContext)

  const id = useRouteMatch<{ id: string }>("/tasks/:id")?.params.id;
  let isDisabledStopButton, isDisabledStartButton

  isDisabledStopButton = greenButton === 'Старт' || !Boolean(id)
  isDisabledStartButton = !Boolean(id)

  return (
    <div className={s.main_wrap}>
      <button
        type="button"
        className={`${root.button} ${root.primary_button} ${s.btn_start}`}
        disabled={isDisabledStartButton}
        onClick={handleGreenButtonClick}
      >
        {greenButton}
      </button>
      <button
        type="button"
        className={`${root.button} ${root.secondary_button}`}
        disabled={isDisabledStopButton}
        onClick={handleRedButtonClick}
      >
        {redButton}
      </button>
    </div>
  )
}
