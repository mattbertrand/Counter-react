import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Todo from './features/counter/todo/Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
