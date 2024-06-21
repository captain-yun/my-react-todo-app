import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/todos')
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => {
        console.error('Error occured on fetching', err);
      });
  }, []);

  function addTodo(title) {
    axios
      .post('http://localhost:3001/todos', { title: title, completed: false })
      .then((res) => {
        setTodos([...todos, res.data]);
      })
      .catch((err) => {
        console.error('Error occured on fetching', err);
      });
  }

  function updateTodo(newTodo) {
    axios
      .put(`http://localhost:3001/todos/${newTodo.id}`, newTodo)
      .then((response) => {
        setTodos(
          todos.map((todo) => (todo.id === newTodo.id ? response.data : todo))
        );
      })
      .catch((error) => {
        console.error('There was an error updating the todo!', error);
      });
  }

  function removeTodo(id) {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.error('There was an error deleting the todo!', error);
      });
  }

  return (
    <div className="bg-blue-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-black-600 ml-2">TodoList</h1>
        </div>
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default App;
