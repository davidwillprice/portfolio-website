import React from 'react';
import Layout from '../../components/layout/layout';
import LogoShowcase from '../../components/logo-showcase'
import SEO from '../../components/head/seo';
import StandardCentralText from '../../components/standard-central-text';
import TitleBanner from '../../components/layout/title-banner';

import Illca from '../../images/aber-design/illca-logo.png'

export default function FreelanceLogo() {
    return (
        <Layout>
            <SEO title="Freelance logos" description="Commissioned and practice logos created before I got my first full-time job in the industry." />
            <TitleBanner>
                <h1>Aberystwyth University</h1>
            </TitleBanner>
            <LogoShowcase bgColor="white">
                <img src={Illca} alt="Aberystwyth university ILLCA logo" />
            </LogoShowcase>
            <StandardCentralText headerText="Graphic design for Aberystwyth University">
                <p>In 2014, I spent 5 weeks working as an Exhibition Co-ordinator at Aberystwyth University as part of the 'AberForward' post-graduate scheme. This position was my first taste of professional graphic desing.</p>
                <p>Above is the logo I created for the Institute of Literature, Languages & Creative Arts department of the university.</p>
            </StandardCentralText>
        </Layout >
    );
}