import React from 'react';
import Layout from '../components/layout/layout';
import TitleBanner from '../components/layout/title-banner';

export default function PrivacyPolicy() {
	return (
		<Layout>
			<TitleBanner>
				<h1>Privacy Policy</h1>
			</TitleBanner>
			<p>Personal Data is collected for the following purposes and using the following services:</p>
			<ul>
				<li>
					<p><strong>Google Analytics (Google LLC)</strong></p>
					<p>Google Analytics is a web analysis service provided by Google LLC (“Google”). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network.</p>
					<p>Personal Data processed: Cookies; Usage Data.</p>
					<p><a href="https://policies.google.com/privacy">Privacy Policy</a> | <a href="https://tools.google.com/dlpage/gaoptout?hl=en">Opt Out</a></p>
				</li>
			</ul>
		</Layout>
	);
}
