import React, { Component } from 'react';
import StandCenTexStyles from '../styles/stand-cent-tex.module.css';

class StandardCentralText extends Component {
    render() {
        return <div className={StandCenTexStyles.standardTexCon}>
            <h3 className={StandCenTexStyles.textSubheader}>{this.props.headerText}</h3>
            {this.props.children}</div>;
    }
}

export default StandardCentralText;
