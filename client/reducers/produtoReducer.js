function produto(state = [], action) {
    switch (action.type) {
        case 'GET_PRODUTOS':
            return {
                ...state,
                entities :[ ...action.entities ]
            }
        case 'GET_PRODUTO':
            return {
                ...state,
                entity: { ...action.entity }
            }
        default:
            break;
    }
    return state;
}

export default produto;