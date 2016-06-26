import React from 'react';
import { Form, FormGroup, FormControl, Col, Button, ControlLabel, HelpBlock } from 'react-bootstrap';
import { container } from '../js/divStyleContainer';
import { connect } from 'react-redux';

const ProdutoForm = React.createClass({

    handleSubmit(e) {
        e.preventDefault();
        this.props.postProdutos({teste: 'teste'});
    },

    render() {
        return (
            <div style={container}>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Título</ControlLabel>
                        <input type="text" ref="titulo" placeholder="Enter text" />
                        <ControlLabel>Descrição</ControlLabel>
                        <input type="text" ref="descricao" placeholder="Enter text"/>
                        <ControlLabel>Páginas</ControlLabel>
                        <input type="text" ref="paginas" placeholder="Enter text"/>
                        <input type="submit" value="Enviar" />
                    </FormGroup>
                </form>
            </div>
        )
    }


});

function mapStateToProps(state) {
    return {
        payload: state.produto.payload
    }
}

export default connect(mapStateToProps)(ProdutoForm);