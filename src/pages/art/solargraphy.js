import React from 'react';
import FullWidthImage from '../../components/full-width-img';
import Layout from '../../components/layout/layout';
import SEO from '../../components/head/seo';
import StandardCentralText from '../../components/standard-central-text';
import TitleBanner from '../../components/layout/title-banner';

import Image35 from '../../images/solargraphy/solargraph-image-35.jpg';

export default function FreelanceLogo() {
	return (
		<Layout>
			<SEO title="Solgraphy" description="Showcase of the different pieces of art I have created" />
			<TitleBanner>
				<h1>Solargraphy</h1>
			</TitleBanner>
			<FullWidthImage img={Image35} imgAlt="Solargraph image of my parents house in Herefrodshire, with the road visible in the foreground" />
			<StandardCentralText headerText="The Sun written in silver">
				<p>Solargraphy is a photographic technique in which a fixed pinhole camera is pointed at the Sun and used to expose photographic paper for extremely long periods of time.</p>
				<p>Due to the length of the exposure time, the movement of the sun across the sky is often visible, which each individual streak being the path the Sun took each day.</p>
			</StandardCentralText>
		</Layout >
	);
}