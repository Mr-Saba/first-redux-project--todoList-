import React from 'react'
import "../App.css"
import { MdDone } from 'react-icons/md';
import { HiMinus } from 'react-icons/hi';
import {useDispatch} from "react-redux"
import { CompleteTodo, DeleteTodo } from '../Redux/Actions';

function TodoItem(props) {
    let dispatch = useDispatch()
    console.log(props.buttonVisibility)
    return (
        
            <tr>
                <td  style={{ paddingLeft: "10px", marginTop: "5px", float: "left" }}>{props.todo.name}</td>
               { (props.buttonVisibility === "true") ? ( 
                <td>
                    <button onClick={() =>dispatch(DeleteTodo(props.todo.id))}><HiMinus /></button>
                    <div style={{ width: "20px", height: "auto", display: "inline-block" }}></div>
                    <button onClick={() => dispatch(CompleteTodo({
                        ...props.todo,
                        status: "completed"
                    }))}><MdDone /></button>
                </td>
                ) : 
                ( <td></td>)
                }
            </tr>
    )
}

export default TodoItem
