import React from 'react'
import AddIcon from 'assets/img/DropDownIcons/Add.svg'
import MinusIcon from 'assets/img/DropDownIcons/Minus.svg'
import EditIcon from 'assets/img/DropDownIcons/Edit.svg'
import DeleteIcon from 'assets/img/DropDownIcons/Delete.svg'
import { TTaskData } from "features/tasks/types";

export const MenuItemsArray = [
  {
    text: 'Увеличить',
    icon: <img src={AddIcon} alt=''/>,
    func: (task: TTaskData) => {
      return {
        type: 'increase',
        pomodors: task.pomodors + 1,
      }
    }
  },
  {
    text: 'Уменьшить',
    icon: <img src={MinusIcon} alt=''/>,
    func: (task: TTaskData) => {
      return {
        type: 'decrease',
        pomodors: task.pomodors - 1,
      }
    }
  },
  {
    text: 'Редактировать',
    icon: <img src={EditIcon} alt=''/>,
    func: (task: TTaskData) => {
      console.log('task', task)
      return {
        type: 'edit',
      }
    }
  },
  {
    text: 'Удалить',
    icon: <img src={DeleteIcon} alt=''/>,
    func: (task: TTaskData) => {
      console.log('task', task)
      return {
        type: 'delete',
      }
    }
  },
]
