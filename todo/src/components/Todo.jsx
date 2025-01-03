import React from 'react'

const Todo = ({todos}) => {
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
                <button className='complete'>Completar</button>
                <button className='delete'>X</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Todo