import React from 'react'
import {useRouteMatch} from "react-router-dom";
import {TimerProvider} from "../../providers/timer/TimerProvider";
import {Home} from "./Home";

export const HomeContainer: React.FC = () => {
  const idFromPath = useRouteMatch<{ id: string }>("/tasks/:id")?.params.id;
  return (
    <TimerProvider taskId={idFromPath}>
      <Home/>
    </TimerProvider>

  )
}
