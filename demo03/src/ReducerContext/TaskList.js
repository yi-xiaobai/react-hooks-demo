import { useState } from 'react'
import { useTasks, useDispatch } from './TasksProvide'


export default function TaskList() {
    const tasks = useTasks()
    return (
        <div>
            <ul>
                {tasks.map(item => {
                    return (
                        <li key={item.id}>
                            <Tasks task={item} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


function Tasks({ task }) {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch()
    let taskConfig

    if (isEditing) {
        taskConfig = (
            <>
                <input value={task.text} onChange={(e) => {
                    dispatch({
                        type: "change",
                        ...task,
                        text: e.target.value
                    })
                }} />
                <button onClick={() => {
                    setIsEditing(false)
                }}>保存</button>
            </>
        )
    } else {
        taskConfig = (
            <>
                {task.text}
                <button onClick={() => {
                    setIsEditing(true)
                }}>编辑</button>
            </>
        )
    }
    return (
        <label>
            <input type='checkbox' value={task.done} checked={task.done} onChange={() => {
                dispatch({
                    type: "change",
                    ...task,
                    done: !task.done
                })
            }} />
            {taskConfig}
            <button onClick={() => {
                dispatch({
                    type: "remove",
                    id: task.id
                })
            }}>删除</button>
        </label>
    )
}