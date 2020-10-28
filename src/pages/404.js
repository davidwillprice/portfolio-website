import Button from '../components/button';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';
import React from 'react';
import FullHeight from '../components/layout/full-height';

import MissingStyles from '../styles/page/missing-page.module.scss';

export default function FourZeroFour() {
	return (
		<Layout>
			<FullHeight>
				<h1 style={{ textAlign: "center" }}>Page not found</h1>
				<div className={MissingStyles.container}>
					<p>Sorry, I'm afraid the page you are looking for could not be found.</p>
					<br></br>
					<Link to={`/`}>
						<Button btnText="Return to the Homepage" />
					</Link>
				</div>
			</FullHeight>
		</Layout >
	);
}
