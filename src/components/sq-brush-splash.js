import React, { Component } from 'react';
import sqBrushStyles from '../styles/sqbrush.module.css';

import { Link } from 'gatsby';

class SqBrushSplash extends Component {
	render() {
		const workExampleClasses = this.props.dirTxtRight
			? sqBrushStyles.workExampleCon + ' ' + sqBrushStyles.brushSplashCon + ' ' + sqBrushStyles.workExampleConR
			: sqBrushStyles.workExampleCon + ' ' + sqBrushStyles.brushSplashCon;
		return (
			<div className={workExampleClasses}>
				<div className={sqBrushStyles.workExampleText}>{this.props.children}</div>
				<Link className={sqBrushStyles.workExampleLink} aria-label={this.props.linkDesc} to={this.props.linkUrl}>
					<div className={sqBrushStyles.brushPreviewCon}>
						<div className={sqBrushStyles.brushPreview}>
							<img alt={this.props.imgAlt} src={this.props.img} className={sqBrushStyles.image} />
							{React.cloneElement(this.props.brush, { className: sqBrushStyles.brushBg })}
						</div>
					</div>
				</Link>
			</div>
		);
	}
}

export default SqBrushSplash;
