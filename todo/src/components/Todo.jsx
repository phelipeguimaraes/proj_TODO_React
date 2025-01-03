import React from 'react'

const Todo = ({todos, removeTodo, completedTodo}) => {



  return (
    <>
      <h1>Lista de Tarefas</h1>
      <div className="todo-box">
          {todos.map((todo) => (
            <div className="todo-list" key={todo.id}>
              <div>
                  <h3>{todo.text}</h3>
                  <p>({todo.category})</p>
              </div>
              <div className="btn-actions">
                <button className='complete' onClick={() => completedTodo(todo.id)}>Completar</button>
                <button className='delete' onClick={(e) => removeTodo(todo.id)}>X</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Todo