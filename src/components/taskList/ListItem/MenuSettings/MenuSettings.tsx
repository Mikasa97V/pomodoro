import React, { memo, useRef, useState } from 'react'
import s from './menuSettings.module.css'
import { Dropdown } from '../Dropdown'
import { MenuItemsList } from '../Dropdown/MenuItems'
import { TCoord, IProps } from './menuSettingsType'

export const MenuSettings = memo(({ id }: IProps) => {
  const [coords, setCoord] = useState<TCoord>({ top: 0, left: 0 })
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  console.log(coords)
  console.log(isDropDownOpen)

  const ref = useRef<HTMLDivElement>(null)

  function toggleDropdown() {
    setIsDropDownOpen(!isDropDownOpen)
  }

  const onDropDownShow = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()
    let targetCoord = e.currentTarget.getBoundingClientRect()
    let left = targetCoord.left - e.currentTarget.clientWidth * 2.45
    let top =
      targetCoord.top + e.currentTarget.clientHeight * 1.45 + window.scrollY
    setCoord({ top, left })
    toggleDropdown()
  }

  return (
    <div>
      <div className={s.options_button} ref={ref} onClick={onDropDownShow}>
        <div className={s.circle}></div>
        <div className={s.circle}></div>
        <div className={s.circle}></div>
      </div>
      {isDropDownOpen && (
        <Dropdown coords={coords} onClose={toggleDropdown}>
          <div className={s.dropdown}>
            <MenuItemsList taskId={id} setIsDropDownOpen={setIsDropDownOpen} />
          </div>
        </Dropdown>
      )}
    </div>
  )
})
