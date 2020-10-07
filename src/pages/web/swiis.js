import React from 'react';
import Layout from '../../components/layout';
import StandardCentralText from '../../components/standard-central-text';



import ShowcaseStyles from '../../styles/page/showcasepage.module.css';

import LypLogo from '../../svgs/lyp-logo.svg';

export default function SwiisDigital() {
    return (
        <Layout>
            <div className={ShowcaseStyles.introCon}>
                <div className={ShowcaseStyles.logoCon}>
                    <LypLogo className={ShowcaseStyles.logo} />
                </div>
                <div className={ShowcaseStyles.introText}>
                    <p>I am currently in a full-time position as a Web Developer & Designer at Swiis International, the parent company of Swiis Foster Care, Swiis Foster Care Scotland and Swiis Healthcare.</p>
                    <p>Duties include:</p>
                    <ul>
                        <li>Using <span className="ShowcaseStyles.highlight">HTML, CSS and JavaScript</span> to develop and manage 6 different <span className="ShowcaseStyles.highlight">Wordpress</span> websites;</li>
                        <li>Monitoring user journeys and general website performance using <span className="ShowcaseStyles.highlight">Google Analytics</span> and <span className="ShowcaseStyles.highlight">Google Tag Manager</span>;</li>
                        <li>Designing and showcasing new layouts and designs via Adobe <span className="ShowcaseStyles.highlight">XD</span>;</li>
                    </ul>
                </div>
            </div>
            <ul className={ShowcaseStyles.introTextContin}>
                <li>
                    Managing and optimising <span className="ShowcaseStyles.highlight">Google Ads</span> and <span className="ShowcaseStyles.highlight">Bing Ads</span> search campaigns;
                </li>
                <li>
                    Improving website <span className="ShowcaseStyles.highlight">SEO</span>: Keyword analysis, building backlinks, on-page optimisation, and monitoring changes via <span className="ShowcaseStyles.highlight">Google Search Console</span> and <span className="ShowcaseStyles.highlight">Semrush</span>;
                </li>
                <li>
                    Creating automated solutions to admin tasks using JavaScript and <span className="ShowcaseStyles.highlight">Google Data Studio</span> that include:
                    <ul>
                        <li>Digitalising previously print forms;</li>
                        <li>Sending automated monthly website and monthly spend reports;</li>
                        <li>Parsing emails and inputting results directly into Google Sheets via <span className="ShowcaseStyles.highlight">Zapier</span>.</li>
                    </ul>
                </li>
            </ul>
        </Layout>
    );
}