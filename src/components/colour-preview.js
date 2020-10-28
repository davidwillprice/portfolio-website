import React, { Component } from 'react';
import colourPreviewStyles from '../styles/component/colour-preview.module.scss';

class ColourPreview extends Component {
    render() {
        return <div className={colourPreviewStyles.container} style={{ backgroundColor: this.props.hexColour }}>
            <p style={{ color: this.props.textColour }}>{this.props.hexColour} | rgb({this.props.rgbColour})</p>
        </div>;
    }
}

export default ColourPreview;
