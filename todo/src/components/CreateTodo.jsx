import React from 'react'

const CreateTodo = () => {
  return (
    <div className='create-box'>
        <h2>Criar tarefa:</h2>
        <form>
            <input type="text" placeholder='Digite o título' />
            <select>
                <option value="">Selecione uma categoria</option>
                <option value="Estudos">Estudos</option>
                <option value="Pessoal">Pessoal</option>
                <option value="Trabalho">Trabalho</option>
            </select>
            <button className='btn-create'>Criar tarefa</button>
        </form>
    </div>
  )
}

export default CreateTodo