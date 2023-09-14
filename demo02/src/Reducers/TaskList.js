import { useState } from 'react'


export default function TaskList({ task, changeTask, removeTask }) {
    return (
        <div>
            <ul>
                {task.map(item => {
                    return (
                        <li key={item.id}>
                            <Tasks task={item} onChange={changeTask} onRemove={removeTask} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


function Tasks({ task, onChange, onRemove }) {
    const [isEditing, setIsEditing] = useState(false)
    let taskConfig

    if (isEditing) {
        taskConfig = (
            <>
                <input value={task.text} onChange={(e) => {
                    onChange({
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
                onChange({
                    ...task,
                    done: !task.done
                })
            }} />
            {taskConfig}
            <button onClick={() => {
                onRemove(task.id)
            }}>删除</button>
        </label>
    )
}