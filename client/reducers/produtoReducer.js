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
        case 'POST_PRODUTO':
            return {
                ...state,
                data: { ...action.data }
            }
        case 'PUT_PRODUTO':
            return {
                ...state,
                data: { ...action.data }
            }
        default:
            break;
    }
    return state;
}

export default produto;