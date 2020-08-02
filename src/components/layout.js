import React from 'react';
import globalStyles from '../styles/global.module.css';
import Header from './header.js';
import Footer from './footer.js';

/*import { useStaticQuery, graphql } from 'gatsby';*/
export default function Layout({ children }) {
	/*const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	);
	*/
	return (
		<div className={globalStyles.pageCon}>
			<Header />
			<div className={globalStyles.contentCon}>{children}</div>
			<div className={globalStyles.test} />
			<Footer />
		</div>
	);
}
