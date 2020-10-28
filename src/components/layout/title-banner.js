import React, { Component } from 'react';
import titleBannerStyles from '../../styles/component/layout/titlebanner.module.scss';

class TitleBanner extends Component {
	render() {
		return <div className={titleBannerStyles.titleBannerCon}>{this.props.children}</div>;
	}
}

export default TitleBanner;
