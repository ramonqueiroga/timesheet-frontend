import rest from 'rest-js';


export function getProdutos(location) {

    console.log('testando a minha ação');
    var restApi = rest('http://localhost:8080/timesheet/', { crossDomain: true });

    restApi.read('api/produtos', function(error, data){
       if(error) {
           console.log(error);
       } else {
           console.log(data);
       }
    });

    return {
        type: 'GET_PRODUTOS',
        payload: { teste: 'aqui deve vir o conteudo da chamada rest' }
    }
}