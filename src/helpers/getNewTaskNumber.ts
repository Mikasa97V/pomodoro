import {TData} from "../components/Forms/task-form/taskFormType";

export const getNewTaskNumber = (tasksList: TData[]) => {
  let min = 0
  if (tasksList) {
    tasksList.map((it: TData) => {
      min = it.taskNumber > min ? it.taskNumber : min
    })
    min += 1
  }

  return min
}
