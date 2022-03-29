const initForm = {
    isOpen: false,
};

const serviceOpenAdditionalMenu = (state = initForm, action) => {
    switch (action.type) {
        case 'TOGGLE_ADDITIONAL_MENU' :
            const stateOpen = state.isOpen;
            return {...state,  isOpen: !stateOpen };
        case 'RESET_ADDITIONAL_MENU' :
            return {...initForm};
        default: 
            return {...state};
    }
}

export default serviceOpenAdditionalMenu;