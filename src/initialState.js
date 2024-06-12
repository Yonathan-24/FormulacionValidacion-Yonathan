// initialState.js
export const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

const validateField = (field, value) => {
    switch (field) {
        case 'firstName':
        case 'lastName':
            if (value.length < 2) {
                return 'El campo debe tener al menos 2 caracteres';
            }
            break;
        case 'email':
            if (!/\S+@\S+\.\S+/.test(value)) {
                return 'El correo electrónico no es válido';
            }
            break;
        default:
            return null;
    }
    return null;
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FIELD_VALUE':
            return {
                ...state,
                [action.field]: {
                    value: action.value,
                    error: validateField(action.field, action.value)
                }
            };
        default:
            return state;
    }
};
