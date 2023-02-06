import React, {useContext, useEffect} from 'react'
import s from './timerButtons.module.css'
import root from 'index.module.css'
import {changeGreenButtonType, changeRedButtonType} from '../../../../helpers/changeButtonType'
import {longRestTime, shortRestTime, workTime} from '../TimeCounter'
import {IProps} from "./timerButtonsType";
import {useRouteMatch} from "react-router-dom";
import {TimerContext} from 'providers/timer/TimerProvider'

export function TimerButtons({data}: IProps) {
  const {seconds, setSeconds, handlePause, handleStart} = useContext(TimerContext)
  const id = useRouteMatch<{ id: string }>("/tasks/:id")?.params.id;

  const {
    greenButton,
    redButton,
    greenButtonType,
    redButtonType,
    isWorkTime,
    numberOfWorks,
    setIsWorkTime,
    setNumberOfWorks,
    setGreenButton,
    setRedButton,
    setGreenButtonType,
    setRedButtonType,
  } = data

  const setLongRestTime = () => {
    setIsWorkTime(false)
    setNumberOfWorks(1)
    setSeconds(longRestTime)
    handleStart()
  }

  const resetTimer = () => {
    handlePause()
    setGreenButtonType('start')
    setRedButtonType('stop')
    setSeconds(workTime)

    if (numberOfWorks > 5) {
      setLongRestTime()
      setRedButtonType('stop')
      setGreenButtonType('pause')
    }

  }

  const handleGreenButtonClick = () => {
    if (greenButtonType === 'start') {
      handleStart()
      setGreenButtonType('pause')
    } else if (greenButtonType === 'pause') {
      handlePause()
      setGreenButtonType('continue')
      setRedButtonType('done')
    } else if (greenButtonType === 'continue') {
      handleStart()
      setGreenButtonType('pause')
      if (isWorkTime) {
        setRedButtonType('stop')
      } else {
        setRedButtonType('miss')
      }

    }
  }

  const handleRedButtonClick = () => {
    if (redButtonType === 'stop') {
      handlePause()
      setRedButtonType('done')
      setGreenButtonType('continue')
    } else if (redButtonType === 'done') {
      resetTimer()
      setNumberOfWorks(0)
    } else if (redButtonType === 'miss') {
      resetTimer()
    }
  }

  useEffect(() => {
    if (seconds != 0) return
    resetTimer()
    if (numberOfWorks <= 5) {
      if (isWorkTime) {
        setRedButtonType('miss')
        setGreenButtonType('pause')
        setIsWorkTime(false)
        setSeconds(shortRestTime)
        setNumberOfWorks(numberOfWorks + 1)
        handleStart()
      } else {
        setRedButtonType('stop')
        setGreenButtonType('start')
        setIsWorkTime(true)
        setSeconds(workTime)
        setNumberOfWorks(numberOfWorks + 1)
      }
    } else {
      setRedButtonType('miss')
      setGreenButtonType('pause')
      setLongRestTime()
    }
  }, [seconds, numberOfWorks])

  useEffect(() => {
    changeGreenButtonType(greenButtonType, setGreenButton)
  }, [greenButtonType])

  useEffect(() => {
    changeRedButtonType(redButtonType, setRedButton)
  }, [redButtonType])

  let isDisabledStopButton
  let isDisabledStartButton
  isDisabledStopButton = greenButtonType === 'start'
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
