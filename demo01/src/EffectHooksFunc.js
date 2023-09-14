import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

export default function EffectHooksFunc() {
    const [count, setCount] = useState(0)

    function Index() {
        useEffect(() => {
            console.log('==>Get effect Index enter');
            return () => {
                console.log('==>Get effect Index 886');
            }
        })
        return <h1>首页组件</h1>
    }

    function News() {
        useEffect(() => {
            console.log('==>Get effect News enter');
            return () => {
                console.log('==>Get effect News 886');
            }
        }, [])
        return <h1>新闻组件</h1>
    }


    useEffect(() => {
        console.log(` you clicked ${count} times`);
        return () => {
            console.log('didi');
        }
    }, [count])

    return (
        <div>
            <h2>EffectHooksFunc组件</h2>
            <hr />
            <div>
                you clicked {count} times
            </div>
            <br />
            <div>
                <button onClick={() => { setCount(count + 1) }}>次数 + 1</button>
            </div>
            <br />

            <Router>
                <ul>
                    <li>
                        <Link to="/">Index</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route path="/" component={Index} exact></Route>
                    <Route path="/news" component={News}></Route>
                </Switch>
            </Router>
        </div>
    )
}