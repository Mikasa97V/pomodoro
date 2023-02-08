import React, {createContext, useEffect, useRef, useState} from "react";
import {longRestTime, shortRestTime, workTime} from "../../components/timer/timeCounter";

type TimerContextProps = {
  seconds: number
  greenButton: string
  redButton: string
  isWorkTime: boolean,
  numberOfWorks: number,
  handleStart: (cb?: () => void) => void
  handlePause: (cb?: () => void) => void
  setSeconds: (a: number) => void
  increaseTime: () => void
  setStartButtonType: () => void
  setMissPauseType: () => void
  setDoneContinueType: () => void
  setStopPauseType: () => void
  resetTimer: () => void
  setLongRestTime: () => void
  handleGreenButtonClick: () => void
  handleRedButtonClick: () => void
  setIsWorkTime: (isWorkTime: boolean) => void
  setNumberOfWorks: (numberOfWorks: number) => void
}

export const TimerContext = createContext<TimerContextProps>({
  seconds: 25 * 60,
  greenButton: 'Старт',
  redButton: 'Стоп',
  isWorkTime: true,
  numberOfWorks: 0,
  handleStart: () => console.log('start'),
  handlePause: () => console.log('pause'),
  setSeconds: () => console.log('update seconds'),
  increaseTime: () => console.log('increaseTime'),
  setStartButtonType: () => console.log('setStartButtonType'),
  setMissPauseType: () => console.log('setMissPauseType'),
  setDoneContinueType: () => console.log('setDoneContinueType'),
  setStopPauseType: () => console.log('setStopPauseType'),
  resetTimer: () => console.log('resetTimer'),
  setLongRestTime: () => console.log('setLongRestTime'),
  handleGreenButtonClick: () => console.log('handleGreenButtonClick'),
  handleRedButtonClick: () => console.log('handleRedButtonClick'),
  setIsWorkTime: () => console.log('setIsWorkTime'),
  setNumberOfWorks: () => console.log('setNumberOfWorks'),
})

type TimerProviderProps = {
  taskId?: string
  children: React.ReactNode
}
export const TimerProvider: React.FC<TimerProviderProps> = ({taskId, children}) => {
  const [isCounting, setIsCounting] = useState(false)
  const [seconds, setSeconds] = useState(25 * 60)
  const [isWorkTime, setIsWorkTime] = useState(true)
  const [numberOfWorks, setNumberOfWorks] = useState(0)

  const [greenButton, setGreenButton] = useState('Старт')
  const [redButton, setRedButton] = useState('Стоп')

  const timers = useRef<any>({})
  const handleStart = (cb?: () => void) => {
    setIsCounting(true)
    if (cb) {
      cb()
    }
  }
  const handlePause = (cb?: () => void) => {
    setIsCounting(false)
    if (cb) {
      cb()
    }
  }
  const increaseTime = () => setSeconds((prevSeconds) => prevSeconds + 60)

  const setStartButtonType = () => {
    setRedButton('Стоп')
    setGreenButton('Старт')
  }

  const setMissPauseType = () => {
    setRedButton('Пропустить')
    setGreenButton('Пауза')
  }

  const setDoneContinueType = () => {
    setRedButton('Сделано')
    setGreenButton('Продолжить')
  }

  const setStopPauseType = () => {
    setRedButton('Стоп')
    setGreenButton('Пауза')
  }

  const setLongRestTime = () => {
    setIsWorkTime(false)
    setNumberOfWorks(1)
    setSeconds(longRestTime)
    handleStart()
  }

  const resetTimer = () => {
    handlePause()
    setStartButtonType()
    setSeconds(workTime)

    if (numberOfWorks > 5) {
      setLongRestTime()
      setStopPauseType()
    }

  }

  const handleGreenButtonClick = () => {
    if (greenButton === 'Старт') {
      handleStart()
      setGreenButton('Пауза')
    } else if (greenButton === 'Пауза') {
      handlePause()
      setDoneContinueType()
    } else if (greenButton === 'Продолжить') {
      handleStart()
      setGreenButton('Пауза')
      if (isWorkTime) {
        setRedButton('Стоп')
      } else {
        setRedButton('Пропустить')
      }

    }
  }

  const handleRedButtonClick = () => {
    if (redButton === 'Стоп') {
      handlePause()
      setDoneContinueType()
    } else if (redButton === 'Сделано') {
      resetTimer()
      setNumberOfWorks(0)
    } else if (redButton === 'Пропустить') {
      resetTimer()
    }
  }

  useEffect(() => {
    if (seconds != 0) return
    resetTimer()
    if (numberOfWorks <= 5) {
      if (isWorkTime) {
        setMissPauseType()
        setIsWorkTime(false)
        setSeconds(shortRestTime)
        setNumberOfWorks(numberOfWorks + 1)
        handleStart()
      } else {
        setStartButtonType()
        setIsWorkTime(true)
        setSeconds(workTime)
        setNumberOfWorks(numberOfWorks + 1)
      }
    } else {
      setMissPauseType()
      setLongRestTime()
    }
  }, [seconds, numberOfWorks])

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isCounting) {
        setSeconds((prevSeconds) => (prevSeconds >= 1 ? prevSeconds - 1 : 0))
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [isCounting])

  useEffect(() => {
    if (!taskId || !timers.current) return
    timers.current[taskId] = seconds
  }, [seconds])

  useEffect(() => {
    if (!taskId) return
    const timerSeconds = timers.current[taskId]
    if (timerSeconds) {
      setSeconds(timerSeconds)
    } else {
      setSeconds(25 * 60)
      timers.current[taskId] = 25 * 60
    }
    if (timerSeconds < workTime) {
      handlePause(setDoneContinueType)
    } else {
      handlePause(setStartButtonType)
    }
  }, [taskId])

  return (
    <TimerContext.Provider
      value={{
        seconds,
        greenButton,
        redButton,
        isWorkTime,
        numberOfWorks,
        setSeconds,
        handlePause,
        handleStart,
        increaseTime,
        setMissPauseType,
        setDoneContinueType,
        setStopPauseType,
        setStartButtonType,
        resetTimer,
        setLongRestTime,
        handleGreenButtonClick,
        handleRedButtonClick,
        setIsWorkTime,
        setNumberOfWorks,
      }}
      key={taskId}
    >
      {children}
    </TimerContext.Provider>
  )
}
