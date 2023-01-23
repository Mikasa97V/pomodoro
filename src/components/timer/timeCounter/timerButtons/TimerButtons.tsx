import React, { useEffect } from 'react'
import s from './timerButtons.module.css'
import root from '../../../../index.module.css'
import {
  changeGreenButtonType,
  changeRedButtonType,
} from '../../../../helpers/changeButtonType'
import { longRestTime, shortRestTime, workTime } from '../TimeCounter'

type Data = {
  setIsCounting: (isStart: boolean) => void
  setGreenButtonType: (type: string) => void
  setGreenButton: (text: string) => void
  greenButtonType: string
  greenButton: string
  redButton: string
  setRedButton: (text: string) => void
  redButtonType: string
  setRedButtonType: (type: string) => void
  setTimerLeft: (time: number) => void
  timerLeft: number
  isWorkTime: boolean
  setIsWorkTime: (isWork: boolean) => void
  numberOfWorks: number
  setNumberOfWorks: (number: number) => void
}

interface IProps {
  data: Data
}

export function TimerButtons({ data }: IProps) {
  const {
    setIsCounting,
    greenButton,
    greenButtonType,
    setGreenButtonType,
    setGreenButton,
    redButton,
    setRedButton,
    redButtonType,
    setRedButtonType,
    setTimerLeft,
    timerLeft,
    isWorkTime,
    setIsWorkTime,
    numberOfWorks,
    setNumberOfWorks,
  } = data

  const handleStart = () => setIsCounting(true)
  const handlePause = () => setIsCounting(false)
  const setLongRestTime = () => {
    setIsWorkTime(false)
    setNumberOfWorks(1)
    setTimerLeft(longRestTime)
  }
  const resetTimer = () => {
    handlePause()
    setGreenButtonType('start')
    setRedButtonType('stop')
    setTimerLeft(workTime)

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
      setRedButtonType('stop')
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
    }
  }

  useEffect(() => {
    if (timerLeft != 0) return
    resetTimer()
    if (numberOfWorks <= 5) {
      if (isWorkTime) {
        setRedButtonType('miss')
        setGreenButtonType('pause')
        setIsWorkTime(false)
        setTimerLeft(shortRestTime)
        setNumberOfWorks(numberOfWorks + 1)
        handleStart()
      } else {
        setRedButtonType('stop')
        setGreenButtonType('pause')
        setIsWorkTime(true)
        setTimerLeft(workTime)
        setNumberOfWorks(numberOfWorks + 1)
        handleStart()
      }
    } else {
      setRedButtonType('miss')
      setGreenButtonType('pause')
      setLongRestTime()
    }
  }, [timerLeft, numberOfWorks])

  useEffect(() => {
    changeGreenButtonType(greenButtonType, setGreenButton)
  }, [greenButtonType])

  useEffect(() => {
    changeRedButtonType(redButtonType, setRedButton)
  }, [redButtonType])

  let isDisabled
  isDisabled = greenButtonType === 'start'

  return (
    <div className={s.main_wrap}>
      <button
        type="button"
        className={`${root.button} ${root.primary_button} ${s.btn_start}`}
        onClick={handleGreenButtonClick}
      >
        {greenButton}
      </button>
      <button
        type="button"
        className={`${root.button} ${root.secondary_button}`}
        disabled={isDisabled}
        onClick={handleRedButtonClick}
      >
        {redButton}
      </button>
    </div>
  )
}
