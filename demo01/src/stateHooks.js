
import './index.css'
// 引入useState  hooks
import { useState } from 'react'

export default function StateHooks() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div>you clicked {count} times</div>
            <hr />
            <div>
                <button onClick={() => { setCount(count + 1) }}>媳妇</button>
            </div>
            <br />
            <br />
            <br />
            {/* <div style={{ textAlign: 'center' }} className='qiuqiu'>
                <span>最美丽</span>
            </div> */}
        </div>
    )
}