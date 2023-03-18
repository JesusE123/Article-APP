import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid';
import useForm from '../hooks/useForm';
import Img from './Img';


const Form = ({ aggTodo,}) => {
    
    const initialState = {
        nombre: '',
        descripcion: '',
        estado: "pendiente",
        prioridad: false
    }
    const [inputs, handleChange, reset] = useForm(initialState)

    const { nombre, descripcion, estado, prioridad } = inputs;

    const handleSubmit = e => {
        e.preventDefault();
        if (!nombre.trim()) {
            e.target[0].focus();
            Swal.fire({
                title: 'Error!',
                text: 'the article is required',
                icon: 'error',
                confirmButtonText: 'ok'
            })
            return;
        }
        if (!descripcion.trim()) {
            e.target[1].focus();
            Swal.fire({
                title: 'Error!',
                text: 'the description is required',
                icon: 'error',
                confirmButtonText: 'ok'
            })
            return;
        }
        Swal.fire({
            title: 'Success!',
            text: 'the article has been saved correctly',
            icon: 'success',
        });
        aggTodo({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === "pendiente" ? false : true,
            prioridad: prioridad,
            id: uuidv4(),
        });
        reset()
    }


    return (
        <>
            <div className="d-flex justify-content-between bg-danger"> 
            <h3 className='pt-1'>Taskings for completed RMA CABA</h3>
            <Img />
            </div>
                
                <form onSubmit={handleSubmit} className="mt-2 ms-3">
                    <input
                        type="text"
                        className='form-control mb-2 w-50'
                        placeholder='Task'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    />
                    <textarea
                        className='form-control mb-2 w-50'
                        placeholder='Description'
                        name='descripcion'
                        value={descripcion}
                        onChange={handleChange}

                    />

                    <select name="estado" className='form-control mb-2 w-50' value={estado} onChange={handleChange}>
                        <option value="pendiente">pendiente</option>
                        <option value="completado">completado</option>
                    </select>

                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            name='prioridad'
                            id="flexCheckDefault"
                            checked={prioridad}
                            onChange={handleChange}

                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                        >
                            Priority
                        </label>
                        
                    </div>
                    <button type='submit' className='btn btn-primary'>ADD</button>
                    
                </form>
           
        </>
    )
}

export default Form
