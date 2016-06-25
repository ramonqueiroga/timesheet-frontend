export function getProdutos(response) {
    return {
        type: 'GET_PRODUTOS',
        payload: response
    }
}