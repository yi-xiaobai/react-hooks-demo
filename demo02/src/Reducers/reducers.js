import { useState, useReducer } from 'react'

import TaskList from './TaskList';
import AddTask from './AddTask';
import actionReducers from './actionReducers';
import { ADD_TODO, REMOVE_TODO, CHANGE_TODO } from './actionTypes'

export default function Reducers() {
    // const [tasks, setTasks] = useState(initialTasks)
    const [tasks, dispatch] = useReducer(actionReducers, initialTasks)


    function handleAddTask(text) {
        dispatch({
            type: ADD_TODO,
            id: nextId++,
            text: text,
        })
    }

    function handleChangeTask(task) {
        dispatch({
            type: CHANGE_TODO,
            ...task
        })
    }

    function handleRemoveTask(id) {
        dispatch({
            type: REMOVE_TODO,
            id: id,
        })
    }

    return (
        <div>
            <h1>todolist列表安排</h1>
            <AddTask addTask={handleAddTask} />
            <TaskList task={tasks} changeTask={handleChangeTask} removeTask={handleRemoveTask} />
        </div>
    )
}


let nextId = 3;
const initialTasks = [
    { id: 0, text: '参观卡夫卡博物馆', done: true },
    { id: 1, text: '看木偶戏', done: false },
    { id: 2, text: '打卡列侬墙', done: false },
];