import React, { Component } from 'react';
import colourPreviewConStyles from '../styles/component/colour-preview-con.module.css';

class ColourPreviewCon extends Component {
    render() {
        return <div className={colourPreviewConStyles.container}>
            {this.props.children}
        </div>;
    }
}

export default ColourPreviewCon;