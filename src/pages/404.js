import Button from '../components/button';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';
import React from 'react';
import TitleBanner from '../components/layout/title-banner';
import FullHeight from '../components/layout/full-height';

import MissingStyles from '../styles/page/missing-page.module.css';

export default function FourZeroFour() {
	return (
		<Layout>
			<FullHeight>
				<TitleBanner>
					<h1>Page not found</h1>
				</TitleBanner >
				<div className={MissingStyles.container}>
					<p>Sorry, I'm afraid the page you are looking for could not be found.</p>
					<br></br>
					<Link to={`/`}>
						<Button btnText="Return to the homepage" />
					</Link>
				</div>
			</FullHeight>
		</Layout >
	);
}
