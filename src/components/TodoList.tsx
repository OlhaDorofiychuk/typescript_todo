import React from 'react'
import { Todo } from './item'
import SingleTodo from './SingleTodo'
import './style.css'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='container'>
        <div className="list_todos">
            <span className="list_todos_heading">Active Tasks</span>
            {todos.map((todo)=>(
                <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
            ))}
        </div>
        <div className="list_todos completed">
        <span className="list_todos_heading">Completed Tasks</span>
            {todos.map((todo)=>(
                <SingleTodo todo={todo} todos={todos} key={todo.id} setTodos={setTodos}/>
            ))}
        </div>
    </div>
  )
}

export default TodoList