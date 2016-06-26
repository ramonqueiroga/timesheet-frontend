export function getProdutos(response) {
    return {
        type: 'GET_PRODUTOS',
        payload: response
    }
}

export function postProdutos(request) {
    return {
        type: 'POST_PRODUTOS',
        payload: request
    }
}