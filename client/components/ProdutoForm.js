import React from 'react';
import { Form, FormGroup, FormControl, Col, Button, ControlLabel, HelpBlock } from 'react-bootstrap';
import { container } from '../js/divStyleContainer';
import { connect } from 'react-redux';
import { getData } from '../js/rest-call';
import { putData } from '../js/rest-call';
import AbstractForm from './common/AbstractForm';

const ProdutoForm = React.createClass({

    componentWillMount() {
        getData('http://localhost:8080/timesheet/', 'api/produtos/', this.props.getProduto, this.props.params.produtoId)
    },

    handleSubmit(e) {
        const data = { ...e };
        putData('http://localhost:8080/timesheet/', 'api/produtos/'+ this.props.params.produtoId, this.props.postProduto, data);
    },

    render() {
        return (
            <AbstractForm { ...this.props } sendForm={this.handleSubmit}/>
        )
    }

});

function mapStateToProps(state) {
    return {
        entity: state.produto.entity,
    }
}

export default connect(mapStateToProps)(ProdutoForm);