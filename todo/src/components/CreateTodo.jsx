import { useState } from 'react'
import React from 'react'

const CreateTodo = ({ addTodo }) => {

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")

  const createTodo = (e) => {
    e.preventDefault()

    if(title.length === 0 || category.length === 0) return
    addTodo(title, category)

    setTitle("")
    setCategory("")
  }

  return (
    <div className='create-box'>
        <h2>Criar tarefa:</h2>
        <form>
            <input type="text" value={title} placeholder='Digite o título' onChange={(e) => setTitle(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Trabalho">Trabalho</option>
            </select>
            <button className='btn-create' onClick={createTodo}>Criar tarefa</button>
        </form>
    </div>
  )
}

export default CreateTodo