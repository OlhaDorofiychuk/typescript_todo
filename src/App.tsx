import React, { useState } from 'react';
import './App.css';
import ImputComponent from './components/ImputComponent';
import { Todo } from './components/item';
import TodoList from './components/TodoList';
import {DragDropContext, DropResult} from 'react-beautiful-dnd'

const App: React.FC=()=>{
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([])

  function getUID (){
    return Date.now()
  }
  const handleAdd =(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo) {
      setTodos([...todos,{id: getUID(), todo, isDone: false}])
      setTodo('')
    }
  }
  
  const onDragEnd=(result:DropResult)=>{
const {source, destination}=result;
console.log('result',result)
if(!destination) 
return

if(destination.droppableId===source.droppableId && destination.index===source.index) 
return

let add;
let active=todos;
let completed= completedTodos;

    if(source.droppableId==='myList') {
      add=active[source.index];
      active.splice(source.index,1);
    }else {
      add=completed[source.index];
      completed.splice(source.index,1);
    }
    if(destination.droppableId==='myList') {
      active.splice(destination.index,0,add);
    }else {
      completed.splice(destination.index,0,add);
    }

setCompletedTodos(completed)
setTodos(active)
  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}> 
      <div className="App">
     <span className='heading'>My ToDo</span>
     <ImputComponent todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <TodoList todos={todos} setTodos={setTodos}
     completedTodos={completedTodos}
     setCompletedTodos={setCompletedTodos}
     />

   </div>
  </DragDropContext>
   
  );
}

export default App;
