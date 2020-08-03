import React from 'react';
/*import { Link } from 'gatsby';*/
import Layout from '../components/layout';
import TitleBanner from '../components/title-banner';
import SqBrushMask from '../components/sq-brush-mask';

import LypLeaflet from '../images/lyp/lyp-leaflet-mock-up.jpg';
import TeslaNowIcon from '../images/teslanow-icon.jpg';
import AberLogo from '../images/aber-inspired-logo-thumbnail.jpg';

export default function GraphicDesign() {
	return (
		<Layout>
			<TitleBanner>
				<h1>Graphic design</h1>
			</TitleBanner>
			<SqBrushMask
				brush={'/svgs/brush-bg-2.svg'}
				img={LypLeaflet}
				imgAlt="Love Your Postcode leaflet mock up"
				linkDesc="Love Your Postcode graphic design"
			>
				<h3>Love Your Postcode</h3>
				<p>Aug 2015 - Feb 2019</p>
				<p>Full time position at Birmingham estate agent Love Your Postcode.</p>
			</SqBrushMask>
			<SqBrushMask
				brush={'/svgs/brush-bg-1.svg'}
				dirTxtRight={true}
				img={TeslaNowIcon}
				imgAlt="TESLANOW icon"
				linkDesc="TESLANOW page"
			>
				<h3>TESLANOW</h3>
				<p>Jun 2015</p>
				<p>Icon, app and website design for a company through freelancer.com.</p>
			</SqBrushMask>
			<SqBrushMask
				brush={'/svgs/brush-bg-3.svg'}
				img={AberLogo}
				imgAlt="Aberystwyth Inspired logo"
				linkDesc="Aberystwyth university graphic design"
			>
				<h3>Aberystwyth Univeristy</h3>
				<p>Jan 2015 - Feb 2015</p>
				<p>
					Logos, posters and a mural that I designed while working as an Exhibition Co-ordinator at
					Aberystwyth University as part of the 'AberForward' post-graduate scheme.
				</p>
			</SqBrushMask>
		</Layout>
	);
}
