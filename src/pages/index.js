import React from 'react';
import Layout from '../components/layout';

import HomeStyles from '../styles/home.module.css';
import SolarSVGStyles from '../styles/solarsvg.css';

import SolarSVG from '../svgs/solar.svg';

export default function Home() {
	return (
		<Layout>
			<div className={HomeStyles.homeTitleBanCon}>
				<div className={HomeStyles.homeTitleBan}>
					<SolarSVG className={HomeStyles.solarSVG} />
					<div className={HomeStyles.homeTitleBanText}>
						<h1 className={HomeStyles.homeTitle}> David Price</h1>
						<h2 className={HomeStyles.homeSubtitle}>Web developer & designer</h2>
					</div>
				</div>
			</div>
		</Layout>

	);
}
