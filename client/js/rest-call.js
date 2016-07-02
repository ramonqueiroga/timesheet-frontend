import rest from 'rest-js';
import axios from 'axios';

/**
 * função responsavel por realizar chamadas rest
 * */
export function getData(endpoint, resource, executeAction, param) {

    const completeResource = param != null ? endpoint + resource + param : endpoint + resource;
    axios.get(completeResource)
    .then(function(response) {
        executeAction(response.data)
    })
    .catch(function(error) {
        //TODO: executar alguma ação de erro
        console.log(error);
    });
    //const restApi = rest(endpoint, { crossDomain: true });
    //const completeResource = param != null ? resource + param : resource;
    //restApi.get(completeResource, {defaultFormat: 'json', defaultDataType: 'json'},
    //    function(error, dataResponse) {
    //        if(error) {
    //            const response = {
    //                error: true,
    //                message: error
    //            }
    //        } else {
    //            executeAction(dataResponse)
    //        }
    //    }
    //);
}

export function putData(endpoint, resource, executeAction, data) {
    const completeResource = endpoint + resource;
    axios.put(completeResource, {
            ...data
        })
        .then(function (response) {
            executeAction(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

    //
    //const restApi = rest(endpoint, { crossDomain: true });
    //restApi.update(resource, { data: { ...data } },
    //    function(error, dataResponse) {
    //        if(error) {
    //            const responseError = {
    //                error: true,
    //                message: error
    //            }
    //            //TODO: EXECUTAR ALGUMA AÇÃO COM O ERRO
    //        } else {
    //            executeAction(dataResponse)
    //        }
    //    }
    //);
}