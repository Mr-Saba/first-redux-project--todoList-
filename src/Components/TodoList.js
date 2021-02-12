import React from 'react'
import "../App.css"
import {useDispatch} from "react-redux"

function TodoList() {
    let dispatch = useDispatch()
    return (       
                    <tr>
                        <th style={{ paddingLeft: "10px", marginTop: "5px", float: "left" }}>Todos</th>
                        <th>Actions</th>
                    </tr>
                    
    )
}

export default TodoList
