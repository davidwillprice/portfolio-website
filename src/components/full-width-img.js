import React, { Component } from 'react';
import FullWidthImgStyles from '../styles/component/full-width-img.module.css';

class FullWidthImage extends Component {
    render() {
        return <div className={FullWidthImgStyles.container}>
            <img src={this.props.img} alt={this.props.imgAlt} />
        </div>;
    }
}

export default FullWidthImage;
