import React, {useEffect}from 'react'
import "../App.css"
import { AddTodo, CancelTodo } from '../Redux/Actions.js'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { v1 as uuid } from "uuid"

function TodoInput() {

    let [name, setName] = useState("")
    let dispatch = useDispatch()
    
    return (
        <div>
            <input onChange={(e) => setName(e.target.value)} className="Input" type="text" placeholder="add todo here" value={name} />
         
            <button onClick={() => setName("")}
            className="Cancel">Cancel</button>
            <div style={{ width: "10px", height: "auto", display: "inline-block" }}></div>
            <button onClick={() => dispatch(AddTodo({
                id: uuid(),
                name: name,
                status: "active"
            }
            ))}
                className="AddTodo">Add Todo</button>
        </div>
    )
}

export default TodoInput
