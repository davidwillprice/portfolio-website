import React, { Component } from 'react';
import FullHeightStyles from '../../styles/component/layout/full-height.module.scss';

class FullHeight extends Component {
    render() {
        return <div className={FullHeightStyles.fullHeightCon}>
            <div className={FullHeightStyles.fullHeight}>
                {this.props.children}
            </div>
        </div>;
    }
}

export default FullHeight;