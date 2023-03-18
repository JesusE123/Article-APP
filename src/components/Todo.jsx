import React from 'react'

const Todo = ({ todo, deleteTodo, editTodo }) => {
    return (
        <>
            <h2>Taskings pending</h2>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{todo.nombre} ({todo.estado ? 'finalizado' : "pendiente"})</div>
                    <p>{todo.descripcion}</p>
                    <div>
                        <button className='btn btn-danger me-2' onClick={() => deleteTodo(todo.id)}>Eliminar</button>
                        <button className='btn btn-warning' onClick={() => editTodo(todo.id)}>Editar</button>
                    </div>
                </div>

                <span className="badge bg-danger rounded-pill">{todo.prioridad && "priority"}</span>
            </li>

        </>
    )
}

export default Todo
