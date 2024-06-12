import React from 'react';

const DatosIngresados = ({ formData }) => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h3>Datos ingresados:</h3>
            <p>Nombre: {formData.firstName.value}</p>
            <p>Apellido: {formData.lastName.value}</p>
            <p>Correo electrónico: {formData.email.value}</p>
        </div>
    );
};

export default DatosIngresados;
