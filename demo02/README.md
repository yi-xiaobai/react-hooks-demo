## reducers 使用

```jsx
// 1、实现一个action
dispatch({
    type:'xxx',
    ...
})

// 2、编写reducers函数
export default (tasks, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case CHANGE_TODO:
      return tasks.map((item) => {
        if (item.id === action.id) {
          return action;
        } else {
          return item;
        }
      });
    case REMOVE_TODO:
      return tasks.filter((item) => item.id !== action.id);

    default:
      console.error("please check action type");
      break;
  }
};

// 3、组件中使用reducers
import { useReducer } from "react";
import actionReducers from "./actionReducers";
const [actions, dispatch] = useReducer(actionReducers, []);
// ...
```

## context 使用

```jsx
// 1、创建context
import { createContext } from "react";
export const taskContext = createContext(null);
// ...

// 2、使用context
import { useContext } from "react";
import taskContext from "./taskContext";
const task = useContext(taskContext);
// ...

// 3、提供context
import taskContext from "./taskContext";
<taskContext.Provider value={xxx}>{/* 子组件 */}</taskContext.Provider>;
```
