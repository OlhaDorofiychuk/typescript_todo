import React from 'react'
import { Todo } from './item'
import SingleTodo from './SingleTodo'
import './style.css'
import { Droppable } from 'react-beautiful-dnd'

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedTodos:Todo[]
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos,setTodos, completedTodos,setCompletedTodos}) => {
  return (
    <div className='container'>
        <Droppable droppableId='myList'>
            {
                (provided, snapshot)=> (
                <div className={`list_todos ${snapshot.isDraggingOver?'dragactive' :'nodrag'}`} 
                ref={provided.innerRef}
                {...provided.droppableProps}>
                <span className="list_todos_heading">Active Tasks</span>
                {todos?.map((todo, index)=>(
                    <SingleTodo 
                    todo={todo} 
                    todos={todos} 
                    key={todo.id} 
                    setTodos={setTodos} 
                    index={index}/>
                ))}
                {provided.placeholder}
             </div>
             )
            }
         
        </Droppable>
        <Droppable droppableId='TodosListCompleted'>
            {
                (provided,snapshot)=>( <div className={`list_todos completed ${snapshot.isDraggingOver?'dragcompleted' :'remove'}`} 
                ref={provided.innerRef}
                {...provided.droppableProps}>
                <span className="list_todos_heading">Completed Tasks</span>
                    {completedTodos?.map((todo, index)=>(
                        <SingleTodo 
                        todo={todo} 
                        todos={todos} 
                        key={todo.id} 
                        setTodos={setCompletedTodos} 
                        index={index}/>
                    ))}
                    {provided.placeholder}
                </div>
                )
            }
        
        </Droppable>
       
    </div>
  )
}

export default TodoList