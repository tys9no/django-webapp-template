import * as React from 'react'

import { todosState } from '../store'
import Todo from './Todo'

interface IProps {
  todos: todosState;
  toggleTodo: (id: number) => void;
  asyncFunction: (id: number) => void;
}

export default (
  ({ todos, toggleTodo, asyncFunction }) => (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
      <button onClick={()=>asyncFunction(1)}></button>

    </ul>
    )
) as React.SFC<IProps>