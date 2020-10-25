import React from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';
import TitleBanner from '../components/layout/title-banner';

import MissingStyles from '../styles/page/missing-page.module.css';

export default function FourZeroFour() {
	return (
		<Layout>
			<TitleBanner>
				<h1>Page not found</h1>
			</TitleBanner>
			<div className={MissingStyles.container}>
				<p>Sorry, I'm afraid the page you are looking for could not be found.</p>
				<Link to={`/`}>
					<p>Return to the homepage.</p>
				</Link>
			</div>
		</Layout>
	);
}
