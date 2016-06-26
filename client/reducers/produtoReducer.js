function produto(state = [], action) {
    switch (action.type) {
        case 'GET_PRODUTOS':
            return {
                ...state,
                payload :[ ...action.payload ]
            }
        case 'POST_PRODUTOS':
            console.log("POSTANDO O FORMULARIO DE PRODUTO");
        return state
        default:
            break;
    }
    return state;
}

export default produto;