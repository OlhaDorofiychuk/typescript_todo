import React from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
}
const ImputComponent = ({todo, setTodo}: Props) => {
  return (
  <form className='input'>
    <input className='input_field' type='input' value={todo} onChange={(e)=>setTodo(e.target.value)}placeholder='Enter new task'></input>
    <button className='input_submt' type='submit'>Add</button>
  </form>
  )
}

export default ImputComponent