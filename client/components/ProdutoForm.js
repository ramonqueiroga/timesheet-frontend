import React from 'react';
import { Form, FormGroup, FormControl, Col, Button, ControlLabel, HelpBlock } from 'react-bootstrap';
import { container } from '../js/divStyleContainer';
import { connect } from 'react-redux';
import { getData } from '../js/rest-call';
import { putData } from '../js/rest-call';
import { postData } from '../js/rest-call';
import AbstractForm from './common/AbstractForm';

const ProdutoForm = React.createClass({

    componentWillMount() {
        const { produtoId } = this.props.params;
        if(produtoId === 'novo') {
            this.props.novoProduto()
        } else {
            if(this.props.entities) {
                const entity = this.props.entities.find((entity) => { if(entity.id == this.props.params.produtoId) return entity } );
                this.props.getProduto(entity);
            } else {
                this.props.getProduto(this.props.entity)
            }
        }
    },

    handleSubmit(e) {
        const data = { ...e };
        const { produtoId } = this.props.params;
        if(produtoId === 'novo') {
            postData('http://localhost:8080/timesheet/', 'api/produtos/', this.props.postProduto, data)
        } else {
            putData('http://localhost:8080/timesheet/', 'api/produtos/'+ this.props.params.produtoId, this.props.putProduto, data)
        }
        this.context.router.push('/produtos');
    },

    render() {
        return (
            <AbstractForm { ...this.props } sendForm={this.handleSubmit}/>
        )
    }

});

/**
 * Esse contextTypes foi adicionado para poder fazer uso do this.context.router dentro do component.
 * Sem ele a injeção do contexto não é feita
 * */
ProdutoForm.contextTypes = {
    router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        entity: state.produto.entity,
        entities: state.produto.entities
    }
}

export default connect(mapStateToProps)(ProdutoForm);