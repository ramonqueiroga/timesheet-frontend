import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/defaultActionCreators';
import * as productActionCreators from '../actions/productActionCreators';
import Main from './Main';

function mapStateToProps(state) {
    return {
        description: state.description,
        initialData: state.initialData
    }
}

/**
 * POR ENQUANTO O bindActionCreators NÃO ACEITA NESTED OBJECTS, POR ISSO TEMOS QUE UTILIZAR O Object.assign
 * QUANDO VAMOS INFORMAR MAIS DE UM ACTIOCREATOR PARA O BIND
 * */
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, actionCreators, productActionCreators), dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;