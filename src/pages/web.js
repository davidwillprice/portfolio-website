import React from 'react';

import Layout from '../components/layout';
import TitleBanner from '../components/title-banner';
import SqBrushSplash from '../components/sq-brush-splash';

import brushConStyles from '../styles/brushcon.module.css';

import BrushOne from '../svgs/brush-bg-1.svg';
import BrushTwo from '../svgs/brush-bg-2.svg';

import LypPropSearchDesktopImg from '../images/lyp/lyp-property-search-desktop.png';
import BmaHpMobImg from '../images/bma-hp-mob.png';

export default function WebDev() {
	return (
		<Layout>
			<TitleBanner>
				<h1>Web development</h1>
			</TitleBanner>
			<div className={brushConStyles.workBrushCon}>
				<SqBrushSplash
					brush={<BrushOne />}
					dirTxtRight={true}
					img={LypPropSearchDesktopImg}
					imgAlt="Love Your Postcode property search page on desktop"
					linkDesc="Love Your Postcode web development"
				>
					<h3>Love Your Postcode</h3>
					<p>Aug 2015 - Feb 2019</p>
					<p>Full time position at Birmingham estate agent Love Your Postcode.</p>
				</SqBrushSplash>
				<SqBrushSplash
					brush={<BrushTwo />}
					img={BmaHpMobImg}
					imgAlt="Bristol Marketing Agency homepage on mobile"
					linkDesc="Bristol Marketing Agency web design"
				>
					<h3>Bristol Marketing Agency</h3>
					<p>Feb 2018</p>
					<p>
						Website redesign over a weekend as part of the job application process for a Bristol based marketing
						agency.
				</p>
				</SqBrushSplash>
			</div>
		</Layout>
	);
}
