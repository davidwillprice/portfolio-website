import React from 'react';

import Button from '../components/button';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';
import SEO from '../components/head/seo.js';
import TitleBanner from '../components/layout/title-banner';
import SqBrushSplash from '../components/sq-brush-splash';

import brushConStyles from '../styles/component/brushcon.module.css';

import BrushOne from '../svgs/brush-bg-1.svg';
import BrushTwo from '../svgs/brush-bg-2.svg';
import BrushThree from '../svgs/brush-bg-3.svg';

import LypPropSearchDesktopImg from '../images/lyp/lyp-property-search-desktop.png';
import BmaHpMobImg from '../images/bma/bma-hp-mob.png';
import SwiisWhyFosterTabImg from '../images/swiis/swiis-fc-why-foster-tablet.png';

export default function WebDev() {
	return (
		<Layout>
			<SEO title="Web development" description="The different web development projects and positions I have worked in" />
			<TitleBanner>
				<h1>Web development</h1>
			</TitleBanner>
			<div className={brushConStyles.workBrushCon}>
				<SqBrushSplash
					brush={<BrushThree />}
					img={SwiisWhyFosterTabImg}
					imgAlt="Swiis Foster Care Why Foster on tablet"
					linkDesc="Swiis international web development page"
					linkUrl="/web/swiis/"
					nonDesktop={true}
				>
					<h3>Swiis International Ltd</h3>
					<p>Feb 2019 - Current</p>
					<p>Full time position at parent company of Swiis Foster Care, Swiis Foster Care Scotland and Swiis Healthcare.</p>
					<Link to={`/web/swiis/`}>
						<Button btnText="Learn More" />
					</Link>
				</SqBrushSplash>
				<SqBrushSplash
					brush={<BrushOne />}
					dirTxtRight={true}
					img={LypPropSearchDesktopImg}
					imgAlt="Love Your Postcode property search page on desktop"
					linkDesc="Love Your Postcode web development page"
					linkUrl="/web/loveyourpostcode/"
				>
					<h3>Love Your Postcode</h3>
					<p>Aug 2015 - Feb 2019</p>
					<p>Full time position at Birmingham estate agent Love Your Postcode.</p>
					<Link to={`/web/loveyourpostcode/`}>
						<Button btnText="Learn More" />
					</Link>
				</SqBrushSplash>
				<SqBrushSplash
					brush={<BrushTwo />}
					img={BmaHpMobImg}
					imgAlt="Bristol Marketing Agency homepage on mobile"
					linkDesc="Bristol Marketing Agency web design page"
					linkUrl="/web/bristol-marketing-agency/"
					nonDesktop={true}
				>
					<h3>Bristol Marketing Agency</h3>
					<p>Feb 2018</p>
					<p>Website redesign over a weekend as part of the job application process for a Bristol based marketing agency.</p>
					<Link to={`/web/bristol-marketing-agency/`}>
						<Button btnText="Learn More" />
					</Link>
				</SqBrushSplash>
			</div>
		</Layout>
	);
}
