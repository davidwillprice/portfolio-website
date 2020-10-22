import React, { Component } from 'react';
import morphStyles from '../styles/component/morph.module.css';

class Morph extends Component {
    render() {
        return <div className={morphStyles.container}>
            {this.props.children}
        </div>;
    }
}

export default Morph;
