import { useState, useEffect } from 'react'


export default function EffectHooks() {
    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     console.log(11);
    //     document.title = `you clicked ${count} times`
    // })

    useEffect(() => {
        setTimeout(() => {
            console.log(11);
            document.title = `you clicked ${count} times`
        }, 3000);
    })
    console.log(22);
    return (
        <div>
            <p>you clicked {count} times</p>
            <button onClick={() => {
                setCount(count + 1)
            }}>点我增加</button>
        </div>
    )
}