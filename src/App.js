import './App.css';
import AddTodoForm from './AddTodoForm';
import ToDo from './ToDo';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const allTodos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const addTodo = (newTodo) => {
    dispatch({type: 'ADD', payload: newTodo})
  }

  const removeTodo = (id) => {
    dispatch({type: 'DELETE', payload: id})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>To-Do List</h2>
        <div className="App-container">
          {allTodos.map(todo => 
                <ToDo task={todo.task} id={todo.id} remove={removeTodo} key={todo.id}/>)}
        </div>
        <div className="App-form">
          <AddTodoForm add={addTodo} />
        </div>
      </header>
      
    </div>
  );
}

export default App;
