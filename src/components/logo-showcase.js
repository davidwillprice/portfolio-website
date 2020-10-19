import React, { Component } from 'react';
import LogoShowcaseStyles from '../styles/component/logo-showcase.module.css';

class LogoShowcase extends Component {
    render() {
        return <div className={LogoShowcaseStyles.container} style={{ backgroundColor: this.props.bgColor }}>
            {this.props.children}
        </div>;
    }
}

export default LogoShowcase;