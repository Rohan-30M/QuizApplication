import React from 'react'
import {useState} from 'react'
import Todo from './Todo'
import Complete from './Complete'
const Home=()=>
{
    
    const[todolist,setodolist]=useState([]);
    const[tocomplete,setocomplete]=useState([]);
    const[task,setTask]=useState('');
    function handleOnClick()
    {
        if(task)
        {
            setodolist(todolist.concat(task));
            setTask('');
        }
    }
    return(
        <>
            <h1>To do List App</h1>
            <input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}}></input>//
            <button onClick={handleOnClick}>Add Task</button>
            <Todo todoList={todolist} setodolist={setodolist}/>
        </>
    )
}
export default Home