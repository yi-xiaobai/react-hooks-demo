import TaskList from './TaskList';
import AddTask from './AddTask';
import TasksProvide from './TasksProvide';
export default function ReducerContext() {
    return (
        <div>
            <h1>todolist列表安排---reducers  and context</h1>
            <TasksProvide>
                <AddTask />
                <TaskList />
            </TasksProvide>
        </div>
    )
}
