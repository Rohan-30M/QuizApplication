import React from 'react'
import {useState} from 'react'
import CompleteList from './Complete';
function Todo({todoList,setodolist})
{

    const[Complted,setComplted]=useState([]);

    function addToCompleted(task)
    {
        setComplted(Complted.concat(task));
        setodolist(todoList.filter(item => item !== task));
        
    }
    
    return(

        
        <div>
            <h2>To-do List</h2>
            <ul>
                {todoList?.map((task,ind)=> (
                    <li>{task} {ind} <button onClick={()=>addToCompleted(task)}>Mark Complete</button></li>
                ))}
            </ul>
            <CompleteList CompleteList={Complted}/>
        </div>
    )
}
export default Todo