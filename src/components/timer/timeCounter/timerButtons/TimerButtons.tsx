import React, {useContext, useMemo} from 'react'
import s from './timerButtons.module.css'
import root from 'index.module.css'
import {useRouteMatch} from "react-router-dom"
import {GreenButton, RedButton, TimerContext} from 'providers/timer/TimerProvider'

export function TimerButtons() {
  const {
    greenButton,
    redButton,
    handleGreenButtonClick,
    handleRedButtonClick,
  } = useContext(TimerContext)

  const id = useRouteMatch<{ id: string }>("/tasks/:id")?.params.id;

  const isDisabledStopButton = greenButton === 'Старт' || !Boolean(id)
  const isDisabledStartButton = !Boolean(id)

  const buttonsBackState: any = useMemo(() => {
    return {
      'Старт': 'START',
      'Пауза': 'PAUSE',
      'Стоп': 'STOP',
      'Продолжить': 'CONTINUE',
      'Пропустить': 'MISS',
      'Сделано': 'DONE',
    }
  }, [])

  return (
    <div className={s.main_wrap}>
      <button
        type="button"
        className={`${root.button} ${root.primary_button} ${s.btn_start}`}
        disabled={isDisabledStartButton}
        onClick={() => handleGreenButtonClick(buttonsBackState[greenButton] as GreenButton)}
      >
        {greenButton}
      </button>
      <button
        type="button"
        className={`${root.button} ${root.secondary_button}`}
        disabled={isDisabledStopButton}
        onClick={() => handleRedButtonClick(buttonsBackState[redButton] as RedButton)}
      >
        {redButton}
      </button>
    </div>
  )
}
