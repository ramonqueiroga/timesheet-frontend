export function getProdutos(response) {
    return {
        type: 'GET_PRODUTOS',
        entities: response
    }
}

export function getProduto(response) {
    return {
        type: 'GET_PRODUTO',
        entity: response
    }
}

export function putProduto(data) {
    return {
        type: 'PUT_PRODUTO',
        data
    }
}

export function postProduto(data) {
    return {
        type: 'POST_PRODUTO',
        data
    }
}

export function novoProduto() {
    return {
        type: 'NOVO_PRODUTO'
    }
}