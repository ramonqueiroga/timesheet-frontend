import React from 'react';

const ProdutosPage = React.createClass({
    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, {...this.props, ref:undefined, key:undefined})}
            </div>
        )
    }
});

export default ProdutosPage;