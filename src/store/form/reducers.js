const initForm = {
    
}

const serviceManageForm = (state = initForm, action) => {
    switch (action.type) {
        case 'EDIT_ITEM_FORM' :
            const { name, value } = action.payload;
            return {...state, [name]: value };
        default: 
            return {...state};
    }
}

export default serviceManageForm;