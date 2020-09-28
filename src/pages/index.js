import React from 'react';
import Layout from '../components/layout';
import HomeStyles from '../styles/home.module.css';

import SolarImg from '../images/solargraph-test.png'

export default function Home() {
	return (
		<Layout>
			<div className={HomeStyles.homeTitleBanCon}>
				<div className={HomeStyles.homeTitleBan}>
					<img src={SolarImg} />
					<div className={HomeStyles.homeTitleBanText}>
						<h1 className={HomeStyles.homeTitle}> David Price</h1>
						<h2 className={HomeStyles.homeSubtitle}>Web developer & designer</h2>
					</div>
				</div>
			</div>
		</Layout>
	);
}
