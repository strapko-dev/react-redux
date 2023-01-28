import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import {addNewTodo, fetchTodos} from './store/todoSlice'


function App() {
  const [text, setText] = useState('')
  const dispatch = useAppDispatch()
const {loading, error} = useAppSelector(state => state.todos)

  const addTask = () => {
    if (text.trim().length)
    dispatch(addNewTodo(text))
    setText('')
  }

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div>
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />

      {loading === true && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}

      <TodoList />
    </div>
  );
}

export default App;
