import React from 'react'
import Form from './Form'
import { useState } from 'react'
import Todo from './Todo';
import { useEffect } from 'react';


const TodoList = () => {

    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem('todos')){
            setTodos(JSON.parse(localStorage.getItem('todos')))
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    const aggTodo = (todo) => {
        console.log(todo);
        setTodos((old) => [...old, todo]);
    };

    const deleteTodo = (id) => {
        setTodos((old) => old.filter(item => item.id !== id));
    }

    const editTodo = (id) => {
        const editarTodos = todos.map(item => (
            item.id === id ? {...item, estado: !item.estado } : item
        ))

        setTodos(editarTodos);
    }
return (
    <>
        <Form aggTodo={aggTodo}/>
        <ul className='list-group list-group-numbered mt-3'>
        {
            todos.map(item =>(
                <Todo 
                key={item.id} 
                todo={item} 
                deleteTodo={deleteTodo} 
                editTodo={editTodo} 
                />
            ))
        }
        </ul>
    </>
  )
}

export default TodoList