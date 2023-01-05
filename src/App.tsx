import React, { useState } from 'react';
import './App.css';
import ImputComponent from './components/ImputComponent';
import { Todo } from './components/item';
import TodoList from './components/TodoList';

const App: React.FC=()=>{
  const [todo, setTodo] = useState<string>('');
  const [todos, seTodos] = useState<Todo[]>([]);
  const handleAdd =(e:React.FormEvent)=>{
    e.preventDefault()
    if(todo) {
      seTodos([...todos,{id: Date.now(), todo, isDone: false}])
      setTodo('')
    }
  }
  console.log(todo)
  console.log('list',todos)
  return (
    <div className="App">
      <span className='heading'>My ToDo</span>
      <ImputComponent todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList />
      {todos.map(task=>(
        <li key={task.id}>{task.todo}</li>
      ))}
    </div>
  );
}

export default App;
