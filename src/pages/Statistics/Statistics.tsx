import React from 'react'
import s from './statistics.module.css'
import {StatisticalCards} from "../../components/statisticalCards";
import {TextInfoBlock} from "./textInfoBlock";
import {PomodorsBlock} from "./pomodorsBlock";
import {useDispatch, useSelector} from "react-redux";
import {getTaskList} from "../../features/tasks/selectors";
import {getDeletedTomato} from "../../features/tomatoCount/selectors";
import {setTomato} from "../../features/tomatoCount/actionTypes";

export const Statistics: React.FC = () => {
  const dispatch = useDispatch()

  const initialValue = 0;
  const currentTomato = useSelector(getTaskList)
    .map((it: any) => it?.tomato)
    .reduce((accumulator: any, currentValue: number) => accumulator + currentValue, initialValue)
  const deletedTomato = getDeletedTomato()

  dispatch(setTomato(currentTomato + deletedTomato))

  return (
    <div className={s.main_wrap}>
      <div className={s.main_content_wrap}>
        <div className={s.main_chart_content_wrap}>
            <h3 className={s.page_title}>Ваша активность</h3>
            <div className={s.main_info_wrap}>
              <TextInfoBlock />
              <PomodorsBlock />
            </div>
        </div>
        <div className={s.main_chart_wrap}>
          <div>Select</div>
          <div style={{height: '471px'}}>Chart</div>
        </div>
      </div>
      <StatisticalCards/>
    </div>
  )
}
