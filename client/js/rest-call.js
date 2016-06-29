import rest from 'rest-js';

export function getData(endpoint, resource, executeAction, param) {
    const restApi = rest(endpoint, { crossDomain: true });
    let response = {};
    const completeResource = param != null ? resource + param : resource;
    restApi.get(completeResource,
        {defaultFormat: 'json', defaultDataType: 'json', crossDomain: false, cacheLifetime: 5000},
        function(error, data) {
            if(error) {
                response = {
                    error: true,
                    message: error
                }
                //TODO: executar alguma ação de erro
            } else {
                response = data;
                executeAction(response)
            }
        }
    );
}