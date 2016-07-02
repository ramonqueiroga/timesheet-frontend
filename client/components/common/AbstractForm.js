import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
export const fields = ['id', 'descricao', 'paginas', 'titulo'];

const AbstractForm = React.createClass({
    render() {

        const {
            fields: { descricao, paginas, titulo },
            handleSubmit,
            resetForm,
            submitting,
            sendForm
            } = this.props;

        return (
            <form onSubmit={handleSubmit(sendForm)}>
                <div>
                    <label>Descrição</label>
                    <div>
                        <input type="text" placeholder="descricao" { ...descricao } />
                    </div>
                </div>
                <div>
                    <label>Título</label>
                    <div>
                        <input type="text" placeholder="titulo" { ...titulo } />
                    </div>
                </div>
                <div>
                    <label>Páginas</label>
                    <div>
                        <input type="text" placeholder="paginas" { ...paginas } />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={submitting}>
                        {submitting ? <i/> : <i/>} Submit
                    </button>
                    <button type="button" disabled={submitting} onClick={resetForm}>
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }
});

AbstractForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
}


export default reduxForm({
    form: 'abstractForm',
    fields
},
/**
* state to props
* */
state => ({
    initialValues: state.produto.entity
}))(AbstractForm)
