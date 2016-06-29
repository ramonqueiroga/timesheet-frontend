import React from 'react';
import { Form, FormGroup, FormControl, Col, Button, ControlLabel, HelpBlock } from 'react-bootstrap';
import { container } from '../js/divStyleContainer';
import { connect } from 'react-redux';
import { getData } from '../js/rest-call';

const ProdutoForm = React.createClass({

    componentWillMount() {
        getData('http://localhost:8080/timesheet/', 'api/produtos/', this.props.getProduto, this.props.params.produtoId)
    },

    handleSubmit(e) {
        e.preventDefault();
        this.props.postProdutos({teste: 'teste'});
    },

    handleChange(e) {
        let teste = 'ramon';
        this.props.entity[e.target.name] = e.target.value;
    },

    render() {
        const content = { ...this.props.entity };
        return (
            <div style={container}>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Título</ControlLabel>
                        <input type="text" name="titulo" value={content.titulo} onChange={this.handleChange} placeholder="Enter text" />
                        <ControlLabel>Descrição</ControlLabel>
                        <input type="text" name="descricao" value={content.descricao} onChange={this.handleChange} placeholder="Enter text"/>
                        <ControlLabel>Páginas</ControlLabel>
                        <input type="text" name="paginas" value={content.paginas} onChange={this.handleChange} placeholder="Enter text"/>
                        <input type="submit" value="Enviar" />
                    </FormGroup>
                </form>
            </div>
        )
    }


});

function mapStateToProps(state) {
    return {
        entity: state.produto.entity
    }
}

export default connect(mapStateToProps)(ProdutoForm);