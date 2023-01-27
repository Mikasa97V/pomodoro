import React from "react";
import { TTaskData } from "../../../../../../features/tasks/types";

export interface IMenuItemProps {
  taskId: string
  text: string
  icon: React.ReactNode
  func: (task: TTaskData) => { type: string, pomodors?: number, error?: boolean }
}
