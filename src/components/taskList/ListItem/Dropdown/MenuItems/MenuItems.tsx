import React from 'react'
import s from './menuItems.module.css'
import { MenuItemsArray } from './MenuItemsArray'
import { Item } from './Item'
import { IMenuItemsListProps } from './menuItemsType'

export function MenuItemsList({
  taskId,
  setIsDropDownOpen,
}: IMenuItemsListProps) {
  return (
    <ul className={s.menuItemsList}>
      <div className={s.sing}></div>
      {MenuItemsArray.map((it) => {
        return (
          <Item
            key={it.text}
            taskId={taskId}
            text={it.text}
            icon={it.icon}
            func={it.func}
            setIsDropDownOpen={setIsDropDownOpen}
          />
        )
      })}
    </ul>
  )
}
