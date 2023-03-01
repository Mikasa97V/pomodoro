import {useSelector} from "react-redux";

export const getTomato = () => useSelector((state: any) => state.tomatoCount?.tomato)
export const getDeletedTomato = () => useSelector((state: any) => state.tomatoCount?.deletedTomato)
