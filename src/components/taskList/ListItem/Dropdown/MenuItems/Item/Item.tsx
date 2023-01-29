import React, {useMemo} from 'react'
import s from './item.module.css'
import {IMenuItemProps} from "./itemType";
import {useDispatch, useSelector} from "react-redux";
import {getTaskInfoById} from "../../../../../../features/tasks/selectors";
import {deleteTask, updateTask} from "../../../../../../features/tasks/actionTypes";

export const Item = (props: IMenuItemProps) => {
  const {
    taskId,
    text,
    icon,
    func,
  } = props

  const task = useSelector(getTaskInfoById(taskId));
  const dispatch = useDispatch();

  const test = () => {
    const res = func(task)
    switch (res.type) {
      case 'increase': {
        dispatch(updateTask(taskId, res.pomodors))
        break
      }
      case 'decrease': {
        dispatch(updateTask(taskId, res.pomodors))
        break
      }
      case 'edit': {
        console.log('edit')
        break
      }
      case 'delete': {
        console.log('delete')
        dispatch(deleteTask(taskId))
        break
      }
      default: {
        break
      }
    }
  }

  const getDisableCondition = useMemo(() => {
    switch (text) {
      case 'Уменьшить':
        return task.pomodors === 1
      default:
        return false
    }
  }, [task])

  return (
    <li className={s.item_wrap}>
      <button className={s.item} onClick={test} disabled={getDisableCondition}>
        {icon}
        <span>{text}</span>
      </button>

    </li>
  )
}
