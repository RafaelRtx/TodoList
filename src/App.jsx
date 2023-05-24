import React, { useState } from 'react'
import './App.css' 

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState([''])

  const handleInputChange = (event)=>{
    setNewTask(event.target.value)
  }

  const handleAddTask =()=>{
    if (newTask.trim() !== ''){
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  }

  const handleDeleteTask = (index)=>{
    const updatedTasks = [...tasks]
    updatedTasks.splice(index, 1)
    setTasks(updatedTasks)
  }

  return (
    <div className='bg'>
      <div className='container'>
        <h1>Lista de tarefas</h1>
        <input type = "text" value={newTask} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Adicionar tarefa</button>
        <ul className='list'>
          {tasks.map((task,index)=>(
            <li key={index}>
              {task}
              <button onClick={()=>handleDeleteTask(index)}>Excluir tarefa</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
