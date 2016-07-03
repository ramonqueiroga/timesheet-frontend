/**
 * Respositório de clients
 * */

import rest from 'rest-js';
import axios from 'axios';

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
}

export function postData(endpoint, resource, executeAction, data) {
    const completeResource = endpoint + resource;
    axios.post(completeResource, { ...data })
    .then(function(response) {
        executeAction(response.data)
    })
    .catch(function(error) {
        console.log(error);
    });
}

export function putData(endpoint, resource, executeAction, data) {
    const completeResource = endpoint + resource;
    axios.put(completeResource, { ...data })
    .then(function (response) {
        executeAction(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });
}