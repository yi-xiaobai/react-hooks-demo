import { useState } from 'react'
import { useDispatch } from './TasksProvide'



export default function AddTask({ addTask }) {
    const dispatch = useDispatch()

    const [text, setText] = useState('')

    return (
        <div>
            <input value={text} onChange={(e) => {
                setText(e.target.value)
            }} />

            <button onClick={() => {
                setText('')
                dispatch({
                    type: 'add',
                    id: nextId++,
                    text: text
                })
            }}>添加</button>
        </div>
    )
}

let nextId = 3;