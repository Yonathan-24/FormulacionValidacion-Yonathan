import React, { useReducer } from 'react';
import { initialState, reducer } from '../initialState'; // Ajusta la ruta según sea necesario

const Formulario = ({ onFormDataChange }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'SET_FIELD_VALUE', field: name, value });

        onFormDataChange({
            ...state,
            [name]: { ...state[name], value }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check for any validation errors
        const hasErrors = Object.keys(state).some(field => state[field].error);
        if (hasErrors) {
            alert('Por favor corrige los errores antes de enviar el formulario.');
        } else {
            alert('Formulario enviado exitosamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <label>
                Nombre:
                <input 
                    type="text" 
                    name="firstName" 
                    value={state.firstName.value} 
                    onChange={handleChange} 
                />
                {state.firstName.error !== null && (
                    <p className="error" style={{ color: 'red' }}>{state.firstName.error}</p>
                )}
            </label>
            <label>
                Apellido:
                <input 
                    type="text" 
                    name="lastName" 
                    value={state.lastName.value} 
                    onChange={handleChange} 
                />
                {state.lastName.error !== null && (
                    <p className="error" style={{ color: 'red' }}>{state.lastName.error}</p>
                )}
            </label>
            <label>
                Correo electrónico:
                <input 
                    type="email" 
                    name="email" 
                    value={state.email.value} 
                    onChange={handleChange} 
                />
                {state.email.error !== null && (
                    <p className="error" style={{ color: 'red' }}>{state.email.error}</p>
                )}
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Formulario;
