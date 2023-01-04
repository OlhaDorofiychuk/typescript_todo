import React, { useState } from 'react';
import './App.css';
import ImputComponent from './components/ImputComponent';

const App: React.FC=()=>{
  const [todo, setTodo] = useState<string>('')
  console.log(todo)
  return (
    <div className="App">
      <span className='heading'>My ToDo</span>
      <ImputComponent todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
