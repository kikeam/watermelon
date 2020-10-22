import React, { useState } from 'react'
import Task from './Task'
import styled from 'styled-components'
import { generate as id } from 'shortid'


const TasksContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap:2rem;
`
const Button = styled.button`
    height: 40px;
    width: 40px;
    padding: 5px;
    background-color: ${({ theme }) => theme.green2};
    color: black;
    border: none;
    outline:none;
    &:hover{
        background-color: ${({ theme }) => theme.green1};
    }
`


const Tasks = () => {
    const initialState=['Cinta','Conso','Pocket'] 
    const [tasks, setTasks] = useState(initialState);
    const newTask = () => {
      const task = prompt('Introduce el nombre de la nueva tarea:')
      setTasks([...tasks,task]) 
    }
    
    return (
        <>
        <TasksContainer>
            {tasks.map(task=>(
                <Task key={id()} name={task}></Task>)
            )}
            <Button onClick={()=>newTask()}>+</Button>  
        </TasksContainer>
        
        </>
    )
}

export default Tasks
