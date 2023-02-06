import React, {createContext, useEffect, useRef, useState} from "react";

type TimerContextProps = {
  seconds: number
  handleStart: () => void
  handlePause: (cb?: () => void) => void
  setSeconds: (a: number) => void
  increaseTime: () => void
}

export const TimerContext = createContext<TimerContextProps>({
  seconds: 3,
  handleStart: () => console.log('start'),
  handlePause: () => console.log('pause'),
  setSeconds: () => console.log('update seconds'),
  increaseTime: () => console.log('increaseTime')
})

type TimerProviderProps = {
  taskId?: string
  children: React.ReactNode
}
export const TimerProvider: React.FC<TimerProviderProps> = ({taskId, children}) => {
  const [isCounting, setIsCounting] = useState(false)
  const [seconds, setSeconds] = useState(25 * 60)
  const timers = useRef<any>({})
  const handleStart = () => setIsCounting(true)
  const handlePause = (cb?: () => void) => {
    setIsCounting(false)
    if (cb) {
      cb()
    }
  }
  const increaseTime = () => setSeconds((prevSeconds) => prevSeconds + 60)

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
      setSeconds(3)
      timers.current[taskId] = 3
    }
  }, [taskId])

  return (
    <TimerContext.Provider
      value={{
        seconds,
        setSeconds,
        handlePause,
        handleStart,
        increaseTime,
      }}
      key={taskId}
    >
      {children}
    </TimerContext.Provider>
  )
}
