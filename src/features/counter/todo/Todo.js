import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    create,
    edit,
    toggleComplete,
    remove
} from './todoSlice'

const Todo = () => {
    const [inputText, setInputText] = useState('')
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const handleSubmit = e => {
        e.preventDefault()

        dispatch(create(inputText))
    }

    const handleDelete = (id) => () => {
        dispatch(remove(id))
    }

    const handleToggle = (id) => () => {
        dispatch(toggleComplete(id))
    }

    return (
        <div>
         <form onSubmit={handleSubmit}>
             <input onChange={e => setInputText(e.target.value)} value={inputText}></input>
             <button type="submit">Create New</button>
        </form> 
        {todos.map(todo => (
            <div key={todo.id}>{todo.description} {todo.isComplete ? "DONE" : ""}
            <button onClick={handleDelete(todo.id)}>Delete</button>
            <button onClick={handleToggle(todo.id)}>Toggle</button>
            </div>
            
        ))} 
        </div>
    )
}

export default Todo
