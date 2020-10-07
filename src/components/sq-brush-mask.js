import React, { Component } from 'react';
import sqBrushStyles from '../styles/component/sqbrush.module.css';

import { Link } from 'gatsby';

class SqBrushMask extends Component {
	render() {
		const workExampleClasses = this.props.dirTxtRight
			? sqBrushStyles.workExampleCon + ' ' + sqBrushStyles.brushMaskCon + ' ' + sqBrushStyles.workExampleConR
			: sqBrushStyles.workExampleCon + ' ' + sqBrushStyles.brushMaskCon;
		return (
			<div className={workExampleClasses}>
				<div className={sqBrushStyles.workExampleText}>{this.props.children}</div>
				<Link className={sqBrushStyles.workExampleLink} aria-label={this.props.linkDesc} to={``}>
					<div className={sqBrushStyles.brushPreviewCon}>
						<div className={sqBrushStyles.brushPreview}>
							<img
								alt={this.props.imgAlt}
								src={this.props.img}
								className={sqBrushStyles.image}
								style={{ maskImage: 'url(' + this.props.brush + ')', maskSize: '100%' }}
							/>
						</div>
					</div>
				</Link>
			</div>
		);
	}
}

export default SqBrushMask;
