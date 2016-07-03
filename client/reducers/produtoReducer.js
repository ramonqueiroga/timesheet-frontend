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
                entity: { ...action.data },
                entities: [
                    ...state.entities,
                    { ...action.data }
                ]
            }
        case 'PUT_PRODUTO':
            let indexChangedValue = '';
            state.entities.map((content, index) => {
                if(content.id == action.data.id) {
                    indexChangedValue = index;
                    return;
                }
            });
            return {
                ...state,
                entity: { ...action.data },
                entities: [
                    ...state.entities.slice(0, indexChangedValue),
                    { ...state.entities[indexChangedValue] = { ...action.data } },
                    ...state.entities.slice(indexChangedValue + 1)
                ]
            }
        case 'NOVO_PRODUTO':
            return {
                ...state,
                entity: {}
            }
        default:
            break;
    }
    return state;
}

export default produto;