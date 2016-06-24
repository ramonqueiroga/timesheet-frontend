export function getProdutos(location) {

    console.log('testando a minha ação');

    return {
        type: 'GET_PRODUTOS',
        payload: { teste: 'aqui deve vir o conteudo da chamada rest' }
    }
}