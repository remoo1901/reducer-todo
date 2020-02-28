import React, {useReducer, useEffect} from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {todoReducer, initialState} from './reducers/index';

function App() {
  useEffect(() => {
    if (localStorage.getItem('state')){
      const localState = localStorage.getItem('state')
      const parsed = JSON.parse(localState);
      console.log(parsed)
      refreshState(parsed)
    }
    
  }, [])
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const refreshState = (items) => dispatch({type: "REFRESH_ITEMS" , payload: items})
  const addTodo = (item) => dispatch({type: 'ADD_TODO', payload: item})
  const toggleComplete = (id) => dispatch({type: "TOGGLE_COMPLETE", payload: id})
  const clearCompleted = () => dispatch({type: 'CLEAR_COMPLETED'})
  return (
    <div className="App">
     <h1>App</h1>
     {console.log(state.todos)}
     <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
     <TodoList todos={state.todos} toggleComplete={toggleComplete}/>
    </div>
  );
}

export default App;