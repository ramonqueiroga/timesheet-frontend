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

    renderComment(content, index) {
        return (
            <div className="main" key={index}>
                <p>
                    <strong>{content.descricao}</strong>
                </p>
            </div>
        )
    },

    render() {
        return (
            <div className="main">
                <p>{this.props.payload ? this.props.payload.map(this.renderComment) : '' }</p>
            </div>
        )
    }
});

function mapStateToProps(state) {
    return {
        payload: state.produto.payload
    }
}

export default connect(mapStateToProps)(Produto);