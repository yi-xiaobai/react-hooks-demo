import StateHooks from "./stateHooks"
import EffectHookClass from "./EffectHooksClass"
import EffectHooksFunc from "./EffectHooksFunc"
export default function App() {
    return (
        <div>
            <h1>这里是根组件</h1>
            <br />
            <br />
            <StateHooks />
            <br />
            <br />
            <EffectHookClass />
            <br />
            <br />
            <EffectHooksFunc />
        </div>
    )
}