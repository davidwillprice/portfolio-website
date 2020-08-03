import React, { Component } from 'react';
import sqBrushSplashStyles from '../styles/sqbrushsplash.module.css';

import { Link } from 'gatsby';

class SqBrushSplash extends Component {
	render() {
		const workExampleClasses = this.props.dirTxtRight
			? sqBrushSplashStyles.workExampleCon + ' ' + sqBrushSplashStyles.workExampleConR
			: sqBrushSplashStyles.workExampleCon;
		return (
			<div className={workExampleClasses}>
				<div className={sqBrushSplashStyles.workExampleText}>{this.props.children}</div>
				<Link className={sqBrushSplashStyles.workExampleLink} aria-label={this.props.linkDesc} to={`/`}>
					<div className={sqBrushSplashStyles.brushPreviewCon}>
						<div className={sqBrushSplashStyles.brushPreview}>
							<img alt={this.props.imgAlt} src={this.props.img} className={sqBrushSplashStyles.image} />
							{React.cloneElement(this.props.brush, { className: sqBrushSplashStyles.brushBg })}
						</div>
					</div>
				</Link>
			</div>
		);
	}
}

export default SqBrushSplash;
