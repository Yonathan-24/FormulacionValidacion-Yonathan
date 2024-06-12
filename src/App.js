// App.js
import React, { useState } from 'react';
import Formulario from './componentes/Formulario';
import DatosIngresados from './componentes/DatosIngresados';
import { initialState } from './initialState';

const App = () => {
    const [formData, setFormData] = useState(initialState);

    const handleFormDataChange = (newFormData) => {
        setFormData(newFormData);
    };

    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <Formulario onFormDataChange={handleFormDataChange} />
            <DatosIngresados formData={formData} />
        </div>
    );
};

export default App;
