import React from 'react'

export default function CompleteList({CompleteList})
{
    return(
        <div>
            <h2>Complete List</h2>
            <ul>
                {CompleteList?.map((task)=>(
                    <li>{task}</li>
                ))}
            </ul>
        </div>
    )
}