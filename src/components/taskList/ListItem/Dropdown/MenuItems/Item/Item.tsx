import React, {useMemo} from 'react'
import s from './item.module.css'
import {IMenuItemProps} from "./itemType";
import {useDispatch, useSelector} from "react-redux";
import {getTaskInfoById} from "../../../../../../features/tasks/selectors";
import {deleteTask, updateTask} from "../../../../../../features/tasks/actionTypes";
import { useHistory } from 'react-router-dom'

export const Item = (props: IMenuItemProps) => {
  const {
    taskId,
    text,
    icon,
    func,
  } = props

  const task = useSelector(getTaskInfoById(taskId));
  const dispatch = useDispatch();
  const history = useHistory()

  const handlerClick = () => {
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
        dispatch(deleteTask(taskId))
        setTimeout(() => history.push('/tasks'), 0)
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
      <button className={s.item} onClick={handlerClick} disabled={getDisableCondition}>
        {icon}
        <span>{text}</span>
      </button>
    </li>
  )
}
