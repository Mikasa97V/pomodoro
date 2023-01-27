export type TCoord = {
  top: number,
  left: number,
}

export type TId = {
  id: string,
  isDropDownOpen: boolean,
  setIsDropDownOpen: (isOpen: boolean) => void,
}
