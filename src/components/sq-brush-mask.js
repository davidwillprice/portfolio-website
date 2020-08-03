import React, { Component } from 'react';
import sqBrushMaskStyles from '../styles/sqbrushmask.module.css';

import { Link } from 'gatsby';

class SqBrushMask extends Component {
	render() {
		const workExampleClasses = this.props.dirTxtRight
			? sqBrushMaskStyles.workExampleCon + ' ' + sqBrushMaskStyles.workExampleConR
			: sqBrushMaskStyles.workExampleCon;
		return (
			<div className={workExampleClasses}>
				<div className={sqBrushMaskStyles.workExampleText}>{this.props.children}</div>
				<Link className={sqBrushMaskStyles.workExampleLink} aria-label={this.props.linkDesc} to={`/`}>
					<div className={sqBrushMaskStyles.brushPreviewCon}>
						<div className={sqBrushMaskStyles.brushPreview}>
							<img
								alt={this.props.imgAlt}
								src={this.props.img}
								className={sqBrushMaskStyles.image}
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
