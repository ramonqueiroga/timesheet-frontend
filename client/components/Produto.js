import React from 'react';
import rest from 'rest-js';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

const Produto = React.createClass({

    componentDidMount() {
        const restApi = rest('http://localhost:8080/timesheet/', { crossDomain: true });
        const { props } = this;
        let response = {};
        restApi.get('api/produtos',
            {defaultFormat: 'json', defaultDataType: 'json', crossDomain: false, cacheLifetime: 50000},
            function(error, data) {
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

        const payload = this.props.payload || '';

        return (
            <div className="main">
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Título</th>
                            <th>Páginas</th>
                            <th>Editar</th>
                        </tr>
                    </thead>

                    <tbody>

                    {payload ? payload.map((content, index)=> {
                        return <tr key={index}>
                                <td>{content.descricao}</td>
                                <td>{content.titulo}</td>
                                <td>{content.paginas}</td>
                                <td>Icone</td>
                               </tr>;
                    }) : <tr><td>nenhum resultado foi encontrado</td></tr>}

                    </tbody>
                </Table>
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