import {Task} from "../features/tasks/tasksReducer";

export const checkUniquenessOfTaskText = (text: string, tasksList: Task[]) => {
  const transformTextFromProps = text.toUpperCase()
  return Boolean(tasksList.find((it: Task) => it.name.toUpperCase() === transformTextFromProps))
}
