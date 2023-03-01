import {useSelector} from "react-redux";

export const useTotalWorkTime = () => useSelector((state: any) => state.statisticsReducer?.totalWorkTime)
export const useTotalPauses = () => useSelector((state: any) => state.statisticsReducer?.totalPauses)
export const useTotalPauseTime = () => useSelector((state: any) => state.statisticsReducer?.totalPauseTime)
export const useTotalTime = () => useSelector((state: any) => state.statisticsReducer?.totalTime)
