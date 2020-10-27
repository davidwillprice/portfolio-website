import React, { Component } from 'react';
import LogoShowcaseStyles from '../styles/component/button.module.scss';

class Button extends Component {
    render() {
        return <button className={LogoShowcaseStyles.button}>
            {this.props.btnText}
        </button>;
    }
}

export default Button;