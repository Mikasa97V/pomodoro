export const getTaskList = (state: any) => state.tasksReducer.tasks

export const getTaskInfoById = (id?: string) => (state: any) => {
    const taskList = state.tasksReducer.tasks
    return taskList.find((it: any) => it.id === id);
}
