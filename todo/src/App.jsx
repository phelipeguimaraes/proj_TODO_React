import { useState } from 'react'
import Todo from './components/Todo'

import './App.css'
import CreateTodo from './components/CreateTodo';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false
    },
    {
      id: 3,
      text: "Fazer montagem de robô",
      category: "Trabalho",
      isCompleted: false
    },
  ])

  return (
    <>
      <div className="todo">
        <Todo todos={todos} />
        <CreateTodo />
      </div>
    </>
  );
}

export default App
