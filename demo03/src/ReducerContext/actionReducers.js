
import { ADD_TODO, REMOVE_TODO, CHANGE_TODO } from './actionTypes'


export default (tasks, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false
                }
            ]
        case CHANGE_TODO:
            console.log('==>Get tasks', tasks);
            console.log('==>Get tasks', action);
            return tasks.map(item => {
                if (item.id === action.id) {
                    return action
                } else {
                    return item
                }
            })
        case REMOVE_TODO:
            return tasks.filter(item => item.id !== action.id)

        default:
            console.error('please check action type');
            break;
    }
}