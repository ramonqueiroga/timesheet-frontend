import React from 'react';
import { Link } from 'react-router';
import Menu from './common/Menu';

const Main = React.createClass({
    render() {
        const divStyle = {
            width: '100%',
            height: '100%',
            margin: '0 auto'
        }
        return (
            <div style={divStyle}>
                <Menu { ...this.props } />
                {React.cloneElement(this.props.children, {...this.props, ref:undefined, key:undefined})}
            </div>
        )
    }
});

export default Main;