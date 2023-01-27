import React from 'react';
import s from './menuItems.module.css'
import {MenuItemsArray} from "./MenuItemsArray";
import { Item } from "./Item";
import { IMenuItemsListProps } from "./menuItemsType";
const { v1: uniqueId } = require('uuid')



export function MenuItemsList({taskId}: IMenuItemsListProps) {
  return (
    <ul className={s.menuItemsList}>
      <div className={s.sing}></div>
      {
        MenuItemsArray.map((it) => {
          const key = uniqueId();
          return <Item
            key={key}
            taskId={taskId}
            text={it.text}
            icon={it.icon}
            func={it.func}
          />
        })
      }
    </ul>
  );
}
