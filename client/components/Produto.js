import React from 'react';
import rest from 'rest-js';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { getData } from '../js/rest-call';

const Produto = React.createClass({

    componentWillMount() {
        getData('http://localhost:8080/timesheet/', 'api/produtos', this.props.getProdutos)
    },

    render() {

        const payload = this.props.entities || '';

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
                                <td>
                                    <Link to={`/produtos/${content.id}`}>Icone</Link>
                                </td>
                               </tr>;
                    }) : <tr><td>nenhum resultado foi encontrado</td></tr>}
                    </tbody>
                </Table>
                <div>
                    <Button bsStyle="primary">
                        <Link to={`/produtos/novo`}>Novo</Link>
                    </Button>
                </div>
            </div>
        )
    }
});

function mapStateToProps(state) {
    return {
        entities: state.produto.entities
    }
}

export default connect(mapStateToProps)(Produto);