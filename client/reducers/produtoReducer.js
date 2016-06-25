function produto(state = [], action) {
    switch (action.type) {
        case 'GET_PRODUTOS':
            return {
                ...state, payload: action.payload
            }

        default:
            break;
    }
    return state;
}

export default produto;