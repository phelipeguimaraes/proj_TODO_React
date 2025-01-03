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

  const addTodo = (title, category) => {
    const newTodo = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text: title,
      category: category,
      isCompleted: false
    }]

    setTodos(newTodo)

  }

  const removeTodo = (id) => {
    const newTodofilted = todos.filter(todo => todo.id !== id)

    setTodos(newTodofilted)
  }
  
  return (
    <>
      <div className="todo">
        <Todo todos={todos} removeTodo={removeTodo} completedTodo={completedTodo}/>
        <CreateTodo addTodo={addTodo} />
      </div>
    </>
  );
}

export default App
