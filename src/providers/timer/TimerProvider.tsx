import React, {createContext, useEffect, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  setTotalWorkTime,
  setTotalWorksDone,
  setTotalPauses,
  setTotalPauseTime,
  setTotalTime,
} from "../../features/statistics/actionTypes";
import {deleteTask, updateTask, updateTaskNumber, updateTomato} from "../../features/tasks/actionTypes";
import {useHistory} from "react-router-dom";
import {
  getTaskNumberById,
  getTaskPomodorsById,
  getTaskTomatoById
} from "../../features/tasks/selectors";
import {setDeletedTomato} from "../../features/tomatoCount/actionTypes";

export type GreenButton = 'START' | 'PAUSE' | 'CONTINUE'
export type RedButton = 'STOP' | 'MISS' | 'DONE' | 'BTNDONE' | 'BTNMISS'
type Button = 'RED' | 'GREEN'
type TimerContextProps = {
  seconds: number
  isWorkTime: boolean | null
  greenButton: string
  redButton: string
  handleGreenButtonClick: (a: GreenButton) => void
  handleRedButtonClick: (a: RedButton) => void
  increaseTotalWorksDone: () => void
  increaseTime: () => void
  totalWorksDone: number
  totalTime: number
  workTime: number
  pausedTime: number
  totalPauses: number
}

export const TimerContext = createContext<TimerContextProps>({
  seconds: 0,
  isWorkTime: null,
  greenButton: 'Старт',
  redButton: 'Стоп',
  handleGreenButtonClick: a => console.log(a),
  handleRedButtonClick: a => console.log(a),
  increaseTotalWorksDone: () => {},
  increaseTime: () => {},
  pausedTime: 0,
  totalPauses: 0,
  workTime: 0,
  totalTime: 0,
  totalWorksDone: 0,
})

type TimerProviderProps = {
  taskId?: string
  children: React.ReactNode
}
export const TimerProvider: React.FC<TimerProviderProps> = ({
                                                              taskId,
                                                              children
                                                            }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  let currentTomato = useSelector(getTaskTomatoById(taskId))
  const taskPomodors = useSelector(getTaskPomodorsById(taskId))
  const taskNumber = useSelector(getTaskNumberById(taskId))
  const [isPause, setIsPause] = useState(false)

  // Статистика
  const [totalTime, setTotalTimeLocal] = useState(0)
  const [workTime, setWorkTime] = useState(0)
  const [pausedTime, setPausedTime] = useState(0)
  const [totalPauses, setTotalPausesLocal] = useState(0)

  // Счетчик выполненных работ
  const [totalWorksDone, setTotalWorksDoneLocal] = useState(1)
  const increaseTotalWorksDone = () => setTotalWorksDoneLocal((prev) => ++prev)

  // Запущен ли таймер
  const [isCounting, setIsCounting] = useState(false)

  const DEFAULT_WORK_TIME_SECONDS = 25 * 60
  const DEFAULT_BREAK_TIME_SECONDS = 3 * 60
  const LONG_BREAK_TIME_SECONDS = 15 * 60

  // Остаток секунд на таймере
  const [seconds, setSeconds] = useState(DEFAULT_WORK_TIME_SECONDS)

  // Тип таймера работа / отдых
  const [isWorkTime, setIsWorkTime] = useState<boolean | null>(null)

  // Текст для кнопок таймера
  const [greenButton, setGreenButton] = useState('Старт')
  const [redButton, setRedButton] = useState('Стоп')

  const buttonsState = useMemo(() => {
    return {
      START: 'Старт',
      PAUSE: 'Пауза',
      STOP: 'Стоп',
      CONTINUE: 'Продолжить',
      MISS: 'MISS',
      BTNMISS: 'Пропустить',
      DONE: 'Сделано',
      BTNDONE: 'BTNDONE',
    }
  }, [])

  const setButtonState = (btn: Button, state: GreenButton | RedButton) => {
    if (btn === 'RED') {
      setRedButton(buttonsState[state])
    } else {
      setGreenButton(buttonsState[state])
    }
  }

  const increaseTime = () => setSeconds((prevSeconds) => prevSeconds + 60)
  const increaseTomato = () => {
    const tomato = currentTomato + 1
    dispatch(updateTomato(taskId, tomato))
  }

  const handleStart = () => {
    setButtonState('GREEN', 'PAUSE')
    setButtonState('RED', 'STOP')
    setIsWorkTime(true)
    setIsCounting(true)
  }
  const handlePause = () => {
    setIsPause(true)
    setButtonState('GREEN', 'CONTINUE')
    setButtonState('RED', isWorkTime ? 'DONE' : 'BTNMISS')
    setIsCounting(false)
    setTotalPausesLocal((prev) => ++prev)
  }
  const handleStop = () => {
    setIsPause(false)
    setButtonState('GREEN', 'START')
    setButtonState('RED', 'STOP')
    setIsWorkTime(null)
    setIsCounting(false)
    setSeconds(DEFAULT_WORK_TIME_SECONDS)
  }
  const handleContinue = () => {
    setButtonState('GREEN', 'PAUSE')
    setButtonState('RED', isWorkTime ? 'STOP' : 'BTNMISS')
    setIsCounting(true)
  }
  const handleMiss = () => {
    setButtonState('GREEN', 'START')
    setButtonState('RED', 'STOP')
    if (seconds >= DEFAULT_BREAK_TIME_SECONDS / 2 || seconds >= LONG_BREAK_TIME_SECONDS / 2) increaseTomato()
    setIsWorkTime(null)
    setIsCounting(false)
    setSeconds(DEFAULT_WORK_TIME_SECONDS)
  }
  const handleDone = () => {
    setButtonState('GREEN', 'PAUSE')
    setButtonState('RED', 'BTNMISS')
    setIsWorkTime(false)
    setIsCounting(true)
    increaseTotalWorksDone()
    setSeconds(totalWorksDone % 4 === 0 ? LONG_BREAK_TIME_SECONDS : DEFAULT_BREAK_TIME_SECONDS)
    if (!isPause) increaseTomato()
    setIsPause(false)
  }

  const handleDoneWithBtn = () => {
    const bonusTomato = currentTomato + 1
    dispatch(setDeletedTomato(bonusTomato))
    dispatch(deleteTask(taskId))
    setIsPause(false)
    handleStop()
    increaseTotalWorksDone()
    increaseTomato()
    history.push(`/tasks`)
  }

  const handleMissWithBtn = () => {
    handleMiss()
    dispatch(updateTask(taskId, taskPomodors - 1))
    dispatch(updateTaskNumber(taskId, taskNumber + 1))
  }

  const handleGreenButtonClick = (state: GreenButton) => {
    switch (state) {
      case "START":
        return handleStart()
      case "PAUSE":
        return handlePause()
      case "CONTINUE":
        return handleContinue()
    }
  }

  const handleRedButtonClick = (state: RedButton) => {
    switch (state) {
      case "STOP":
        return handleStop()
      case "DONE":
        return handleDone()
      case "MISS":
        return handleMiss()
      case "BTNMISS":
        return handleMissWithBtn()
      case "BTNDONE":
        return handleDoneWithBtn()
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isCounting) {
        setSeconds((prevSeconds) => --prevSeconds)
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [isCounting])

  useEffect(() => {
    if (seconds === 0) {
      if (isWorkTime === true) {
        handleDone()
      } else {
        setIsPause(false)
        handleMiss()
      }
    }
  }, [seconds])

  useEffect(() => {
    if (!taskId) return
    handleStop()
  }, [taskId])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTotalTimeLocal((prev) => ++prev)
      if (isWorkTime === true) {
        setWorkTime((prev) => ++prev)
      }
      if (!isCounting) {
        setPausedTime((prevSeconds) => ++prevSeconds)
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [isWorkTime, isCounting])

  useEffect(() => {
    dispatch(setTotalTime(totalTime))
  }, [totalTime])
  useEffect(() => {
    dispatch(setTotalWorkTime(workTime))
  }, [workTime])
  useEffect(() => {
    dispatch(setTotalPauseTime(pausedTime))
  }, [pausedTime])
  useEffect(() => {
    dispatch(setTotalPauses(totalPauses))
  }, [totalPauses])
  useEffect(() => {
    dispatch(setTotalWorksDone(totalWorksDone))
  }, [totalWorksDone])

  return (
    <TimerContext.Provider
      value={{
        seconds,
        isWorkTime,
        greenButton,
        redButton,
        handleGreenButtonClick,
        handleRedButtonClick,
        increaseTotalWorksDone,
        increaseTime,
        totalWorksDone,
        totalTime,
        workTime,
        pausedTime,
        totalPauses,
      }}
      key={taskId}
    >
      {children}
    </TimerContext.Provider>
  )
}
