export function getProdutos(response) {
    return {
        type: 'GET_PRODUTOS',
        entities: response
    }
};

export function getProduto(response) {
    return {
        type: 'GET_PRODUTO',
        entity: response
    }
}