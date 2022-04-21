
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);

  const handleCheked = () => dispatch(toggleTodo(todo.id));

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (
   <>
  <div className='list'>
      <input type='checkbox'
      onChange={handleCheked} />
        <p >{todo.content}</p>
        </div>
    </>
  )
}
