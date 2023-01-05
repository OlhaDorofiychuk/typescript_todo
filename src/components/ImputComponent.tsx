import React from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void;
}
const ImputComponent = ({todo, setTodo, handleAdd}: Props) => {
  return (
  <form className='input' onSubmit={handleAdd}>
    <input className='input_field' type='input' value={todo} onChange={(e)=>setTodo(e.target.value)}placeholder='Enter new task'></input>
    <button className='input_submt' type='submit'>Add</button>
  </form>
  )
}

export default ImputComponent