export interface IProps {
  taskText: string
  isCounting: boolean
  setIsCounting: (isStart: boolean) => void
  setGreenButtonType: (type: string) => void
  greenButtonType: string
  setIsWorkTime: (isWork: boolean) => void
  isWorkTime: boolean
  numberOfWorks: number
  setNumberOfWorks: (number: number) => void
}
