import React, { useState } from 'react'
import s from './timer.module.css'
import { Header } from './header'
import { TimeCounter } from './timeCounter'

export function Timer() {
  const [isCounting, setIsCounting] = useState(false)
  const [greenButtonType, setGreenButtonType] = useState('start')
  const [isWorkTime, setIsWorkTime] = useState(true)
  const [numberOfWorks, setNumberOfWorks] = useState(0)
  return (
    <div className={s.main_wrap}>
      <Header isCounting={isCounting} greenButtonType={greenButtonType} isWorkTime={isWorkTime}/>
      <TimeCounter
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
