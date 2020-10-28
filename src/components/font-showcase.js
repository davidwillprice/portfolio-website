import React, { Component } from 'react';
import fontShowcaseStyles from '../styles/component/font-showcase.module.scss';
class FontShowcase extends Component {
    render() {
        return <div className={fontShowcaseStyles.container} style={{ fontFamily: this.props.fontFamily, color: this.props.color, backgroundColor: this.props.bgColor, fontWeight: this.props.fontWeight }}>
            {this.props.children}
            <h4>{this.props.fontName}</h4>
            <hr></hr>
            <p><span>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn</span> Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy&nbsp;Zz</p>
            <p>1 2 3 4 5 6 7 8 9&nbsp;0</p>
            <p>! ? # @ ( ) &&nbsp;£</p>
        </div>
    }
}
export default FontShowcase;