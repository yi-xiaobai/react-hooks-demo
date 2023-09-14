import { useState } from 'react'


export default function AddTask({ addTask }) {
    const [text, setText] = useState('')

    return (
        <div>
            <input value={text} onChange={(e) => {
                setText(e.target.value)
            }} />

            <button onClick={() => {
                setText('')
                addTask(text)
            }}>添加</button>
        </div>
    )
}