import React from 'react';
import Layout from '../components/layout/layout';

import IndexStyles from '../styles/page/index.module.css';
/* eslint-disable */import SolarSVGStyles from '../styles/component/svg/solarsvg.css';/* eslint-enable */
import SEO from '../components/head/seo.js';

import SolarSVG from '../svgs/solar.svg';

export default function Index() {
	return (
		<Layout>
			<SEO title="David Price Web Design" description="I am currently in a full-time position as a Web Developer & Designer at Swiis International" />
			<div className={IndexStyles.indexTitleBanCon}>
				<div className={IndexStyles.indexTitleBan}>
					<SolarSVG className={IndexStyles.solarSVG} />
					<div className={IndexStyles.indexTitleBanText}>
						<h1 className={IndexStyles.indexTitle}> David Price</h1>
						<h2 className={IndexStyles.indexSubtitle}>Web developer & designer</h2>
					</div>
				</div>
			</div>
		</Layout>

	);
}
