import React from 'react';
/*import { Link } from 'gatsby';*/
import Layout from '../../components/layout/layout';
import TitleBanner from '../../components/layout/title-banner';

import BrisAgencyStyles from '../../styles/page/bristolagency.module.css';

import BristolLandscapeSVG from '../../svgs/bristol-landscape.svg'

export default function bristolAgency() {
    return (
        <Layout>
            <div className={BrisAgencyStyles.logoCon}>
                <BristolLandscapeSVG />
            </div>
        </Layout>
    );
}