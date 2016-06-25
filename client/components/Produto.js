import React from 'react';
import rest from 'rest-js';
import { connect } from 'react-redux';

const Produto = React.createClass({

    componentDidMount() {
        const restApi = rest('http://localhost:8080/timesheet/', { crossDomain: true });
        const { props } = this;
        let response = {};
        restApi.get('api/produtos', function(error, data) {
            if(error) {
                response = {
                    error: true,
                    message: error
                }
            } else {
                response = data;
                props.getProdutos(response);
            }
        });
    },

    render() {
        return (
            <div>
                Tela de produtos
            </div>
        )
    }
});

function mapStateToProps(state) {
    return {
        payload: { ...state.produto.payload }
    }
}

export default connect(mapStateToProps)(Produto);