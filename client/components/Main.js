import React from 'react';
import { Link } from 'react-router';
import Menu from './common/Menu';

const Main = React.createClass({
    render() {
        return (
            <div>
                <Menu { ...this.props } />
                {React.cloneElement(this.props.children, {...this.props, ref:undefined, key:undefined})}
            </div>
        )
    }
});

export default Main;