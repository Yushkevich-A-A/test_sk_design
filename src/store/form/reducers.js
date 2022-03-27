const initForm = {
    name: {
        value: '',
        error: null,
        valid: false,
    },
    phone: {
        value: '',
        error: null,
        valid: false,
    },
    mail: {
        value: '',
        error: null,
        valid: false,
    },
    link: {
        value: '',
        error: null,
        valid: false,
    },
    city: {
        value: '',
        error: null,
        valid: false,
    },
    name_org: {
        value: '',
        valid: true,
    },
    recipient: {
        value: '',
        valid: true,
    },
    came_from: {
        value: '',
        valid: true,
    },
};

const serviceManageForm = (state = initForm, action) => {
    switch (action.type) {
        case 'EDIT_ITEM_FORM' :
            const { nameField, value } = action.payload;
            return {...state, [nameField]: { ...state[nameField], value} };
        case 'SET_ERROR_FIELD' :
            const { errorField, error } = action.payload;
            return {...state, [errorField]: { ...state[errorField], error: error, valid: false} };
        case 'RESET_ERROR_FIELD' :
            const { resetErrorField } = action.payload;
            return {...state, [resetErrorField]: { ...state[resetErrorField], error: null} };
        case 'SET_READY_FIELD' :
            const { readyField } = action.payload;
            return {...state, [readyField]: { ...state[readyField], error: null, valid: true} };
        case 'RESET_FORM' :
            return {...initForm}
        default: 
            return {...state};
    }
}

export default serviceManageForm;