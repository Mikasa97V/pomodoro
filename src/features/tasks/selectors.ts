export const getTaskList = (state: any) => state.tasksReducer.tasks

export const getTaskInfoById = (id?: string) => (state: any) => {
    const taskList = state.tasksReducer.tasks
    return taskList.find((it: any) => it.id === id);
}

export const getTaskNumberById = (id?: string) => (state: any) => {
    const taskList = state.tasksReducer.tasks
    return taskList.find((it: any) => it.id === id)?.taskNumber;
}

export const getTaskPomodorsById = (id?: string) => (state: any) => {
    const taskList = state.tasksReducer.tasks
    return taskList.find((it: any) => it.id === id)?.pomodors;
}

export const getTaskTomatoById = (id?: string) => (state: any) => {
    const taskList = state.tasksReducer.tasks
    return taskList.find((it: any) => it.id === id)?.tomato;
}
