import React, { Component } from 'react';
import textBesideImgStyles from '../styles/component/text-beside-img.module.scss';

class TextBesideImg extends Component {
    render() {
        return <div className={textBesideImgStyles.container}>
            <img src={this.props.img} alt={this.props.imgAlt} />
            <div className={textBesideImgStyles.textCon}>
                <h3 className={textBesideImgStyles.textSubheader}>{this.props.headerText}</h3>
                {this.props.children}
            </div>
        </div>;
    }
}

export default TextBesideImg;