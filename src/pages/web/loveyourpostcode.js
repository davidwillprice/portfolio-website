import React from 'react';
import Layout from '../../components/layout';


import LypDigStyles from '../../styles/lypdig.module.css';
import LypLogo from '../../svgs/lyp-logo.svg';

export default function LypDigital() {
    return (
        <Layout>
            <div className={LypDigStyles.introCon}>
                <div className={LypDigStyles.logoCon}>
                    <LypLogo className={LypDigStyles.logo} />
                    <h3>Digital Design</h3>
                </div>
                <div className={LypDigStyles.introText}>
                    <p>I worked for West Midlands based 'Love Your Postcode Estate Agents' full-time as a Web / Graphic Designer between August 2015 and February 2019.</p>
                    <p>Duties included:</p>
                    <ul>
                        <li>Using HTML, CSS and JavaScript to develop and manage the Love Your Postcode Wordpress website;</li>
                        <li>Coding marketing emails with maximum compatibility;</li>
                        <li>Monitoring user journeys and general website performance using Google Analytics;</li>
                        <li>Managing Google Adword search, display, video and app campaigns;</li>
                    </ul>
                </div>
            </div>
            <ul className={LypDigStyles.introTextContin}>
                <li>
                    Working as part of a team to improve website SEO: Building backlinks, managing Google Search Console, keyword analysis, meta titles/descriptions, header structure and other on-page optimisation;
            </li>
                <li>
                    Copywriting website pages and blog content.
                </li>
            </ul>
</Layout>
    );
}