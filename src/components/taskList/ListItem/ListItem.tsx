import React, {useContext, useEffect, useState} from 'react'
import s from './listItem.module.css'
import {Link, useHistory} from "react-router-dom";
import {MenuSettings} from "./MenuSettings";
import {IProps} from "./listItemType";
import {TimerContext} from "../../../providers/timer/TimerProvider";

export function ListItem({
                           id,
                           pomodors,
                           name,
                           changeListOrder
                         }: IProps) {
  const history = useHistory()
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const {isWorkTime} = useContext(TimerContext)
  const [cursorType, setCursorType] = useState(`${s.cursor_default}`)

  const onClickHandle = () => {
    if (isWorkTime === null) {
      changeListOrder(id)
      history.push(`/tasks/${id}`)
    }
  }

  useEffect(() => {
    if (isWorkTime === null) setCursorType(`${s.cursor_default}`)
    else setCursorType(`${s.cursor_not_allowed}`)
  }, [isWorkTime])

  return (
    <div className={`${s.main_wrap} ${cursorType}`}>
      <div className={s.link_width} onClick={onClickHandle}>
        <div className={s.task_info_wrap}>
          <div className={s.pomodors}>
            <span className={s.pomodors_text}>{pomodors}</span>
          </div>
          <div className={s.task_text}>{name}</div>
        </div>
      </div>
      <Link to={`/tasks/${id}/settings`}>
        <MenuSettings id={id} isDropDownOpen={isDropDownOpen} setIsDropDownOpen={setIsDropDownOpen}/>
      </Link>
    </div>
  )
}
