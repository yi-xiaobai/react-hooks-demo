import { createContext, useReducer, useContext } from 'react'
import actionReducers from './actionReducers';

// 创建任务列表context
const TasksContext = createContext(null)

// 创建 dispatch context
const TasksDispatchContext = createContext(null)


export default function TasksProvide({ children }) {
    const [tasks, dispatch] = useReducer(actionReducers, initialTasks)
    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )

}


export function useTasks() {
    return useContext(TasksContext)
}


export function useDispatch() {
    return useContext(TasksDispatchContext)
}

const initialTasks = [
    { id: 0, text: '参观卡夫卡博物馆', done: true },
    { id: 1, text: '看木偶戏', done: false },
    { id: 2, text: '打卡列侬墙', done: false },
];