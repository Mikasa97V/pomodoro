 export type Data = {
  // setIsCounting: (isStart: boolean) => void
  setGreenButtonType: (type: string) => void
  setGreenButton: (text: string) => void
  greenButtonType: string
  greenButton: string
  redButton: string
  setRedButton: (text: string) => void
  redButtonType: string
  setRedButtonType: (type: string) => void
  // setTimerLeft: (time: number) => void
  // timerLeft: number
  isWorkTime: boolean
  setIsWorkTime: (isWork: boolean) => void
  numberOfWorks: number
  setNumberOfWorks: (number: number) => void
}
