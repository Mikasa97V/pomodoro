export type TCoord = {
  top: number,
  left: number,
}

export type IProps = {
  id: string,
  isDropDownOpen: boolean,
  setIsDropDownOpen: (isOpen: boolean) => void,
}
