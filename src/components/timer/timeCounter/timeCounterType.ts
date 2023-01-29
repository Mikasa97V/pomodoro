export interface IProps {
  taskText: string
  setGreenButtonType: (type: string) => void
  greenButtonType: string
  setIsWorkTime: (isWork: boolean) => void
  isWorkTime: boolean
  numberOfWorks: number
  setNumberOfWorks: (number: number) => void
}
