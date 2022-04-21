
import { useDispatch, useSelector } from 'react-redux';
import { VISIBILITY_FILTER } from '../constants';
import { setFilter } from '../redux/actions';

export const VisibilityFilter = () => {
  const dispatch = useDispatch();
  const {  visibilityFilter } = useSelector(state => state);

  return (
    <>
    <div className='filter'>
      
     
          {Object.keys(VISIBILITY_FILTER).map(filterkey => {
            const currentFilter = VISIBILITY_FILTER[filterkey];
           
            return (
              currentFilter == visibilityFilter?(
              <span
            
                onClick={() => dispatch(setFilter(currentFilter))}
              >
                {currentFilter}
              </span>
              ):(
                <a href='#'  onClick={() => dispatch(setFilter(currentFilter))}>{currentFilter}</a>
              )
             
            )
          })}
         </div>
      
    </>
  )
}
