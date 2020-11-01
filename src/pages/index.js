import React from 'react';
import Layout from '../components/layout/layout';
import FullHeight from '../components/layout/full-height';
import IndexStyles from '../styles/page/index.module.scss';
/* eslint-disable */import SolarSVGStyles from '../styles/component/svg/solarsvg.scss';/* eslint-enable */
import SEO from '../components/head/seo.js';

import SolarSVG from '../svgs/solar.svg';

export default function Index() {
	return (
		<Layout>
			<SEO title="David Price Web Design" description="I am currently in a full-time position as a Web Developer & Designer at Swiis International" />
			<FullHeight>
				<div className={IndexStyles.indexTitleBan}>
					<SolarSVG className={IndexStyles.solarSVG} />
					<div className={IndexStyles.indexTitleBanText}>
						<h1 className={IndexStyles.indexTitle}> David Price</h1>
						<h2 className={IndexStyles.indexSubtitle}>Front End Web Developer</h2>
					</div>
				</div>
			</FullHeight>
		</Layout>

	);
}