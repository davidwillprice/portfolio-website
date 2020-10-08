import React from 'react';
/*import { Link } from 'gatsby';*/
import Layout from '../../components/layout/layout';

import BrisAgencyStyles from '../../styles/page/bristolagency.module.css';

import BristolLandscapeSVG from '../../svgs/bristol-landscape.svg'
import BristolAgencyLogoSVG from '../../svgs/bristol-marketing-agency-logo.svg'

export default function bristolAgency() {
    return (
        <Layout>
            <div className={BrisAgencyStyles.logoCon}>
                <BristolLandscapeSVG className={BrisAgencyStyles.bristolLandscape} />
                <BristolAgencyLogoSVG className={BrisAgencyStyles.bristolAgencyLogo} />
            </div>
        </Layout>
    );
}