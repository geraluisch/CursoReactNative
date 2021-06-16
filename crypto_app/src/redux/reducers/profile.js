const defaultState =  {    
    nombre: 'unknown',  
    correo: '', 
    telefono: '', 
    filePath: '',   
}

const profile = (state = defaultState, action) => {
    switch (action.type) {
        case 'SAVE_PROFILE':
            return {
                ...state,
                nombre: action.nombre,
                correo: action.correo,
                telefono: action.telefono,
                filePath: action.filePath,
            } 
        case  "SET_INIT":  
            return {
                ...state,
                nombre: action.nombre,
                correo: action.correo,
                telefono: action.telefono,
                filePath: action.filePath,
            }      
        default:
            return state;
    };
}

export default profile;