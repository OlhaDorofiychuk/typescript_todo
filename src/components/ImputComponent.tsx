import { useRef } from 'react';
import './style.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e:React.FormEvent)=>void;
}
const ImputComponent:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
  <form className='input' 
  onSubmit={(e)=>{handleAdd(e);
  inputRef.current?.blur();
  }}
  >
    <input className='input_field' type='text' value={todo} ref={inputRef} onChange={(e)=>setTodo(e.target.value)}placeholder='Enter new task'></input>
    <button className='input_submit' type='submit'>Add</button>
  </form>
  )
}

export default ImputComponent