import { useState } from "react"

const Todo = ({todos, removeTodo}) => {


  const [todo, setTodos] = useState([
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


  const completedTodo = (id) => {
    const completedTodo = todos.map(todo => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)

    setTodos(completedTodo)
  }


  return (
    <>
      <h1>Lista de Tarefas</h1>
      <div className="todo-box" >
          {todos.map((todo) => (
            <div className="todo-list" key={todo.id} >
              <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
                  <h3>{todo.text}</h3>
                  <p>({todo.category})</p>
              </div>
              <div className="btn-actions">
                <button className='complete' onClick={() =>  completedTodo(todo.id)}>Completar</button>
                <button className='delete' onClick={() => removeTodo(todo.id)}>X</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Todo