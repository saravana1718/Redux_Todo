
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  }

  const handleInput = e => {
    setValue(e.target.value);
  }

  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
    
          <input
            type="text"
            value={value}
            onChange={handleInput}
          
          />
      
        <button
       
          type="submit"
        
        >Add Todo</button>
      
    </form>
    </div>
  )
}
