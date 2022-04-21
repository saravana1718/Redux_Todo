import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { VisibilityFilter } from './components/VisibilityFilter';
import "./App.css"
function App() {
  return (
    <div className='App'>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilter />
    </div>
  );
}

export default App;
