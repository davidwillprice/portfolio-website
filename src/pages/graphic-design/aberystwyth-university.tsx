import React from "react"
import Layout from "../../components/layout/layout"
import LogoShowcase from "../../components/logo-showcase"
import Seo from "../../components/head/seo"
import StandardCentralText from "../../components/standard-central-text"
import TitleBanner from "../../components/layout/title-banner"

import AberInspired from "../../images/aber-design/aber-inspired.png"
import AberInspiredWelsh from "../../images/aber-design/aber-inspired-welsh.png"
import Illca from "../../images/aber-design/illca-logo.png"
import StepForward from "../../images/aber-design/step-forward-poster.jpg"
import StepForwardWelsh from "../../images/aber-design/step-forward-poster-welsh.jpg"

import * as AberStyles from "../../styles/page/aber.module.scss"

export default function FreelanceLogo() {
  return (
    <Layout>
      <Seo
        title="Freelance logos"
        description="Commissioned and practice logos created before I got my first full-time job in the industry."
      />
      <TitleBanner>
        <h1>Aberystwyth University</h1>
      </TitleBanner>
      <LogoShowcase bgColor="white">
        <img src={Illca} alt="Aberystwyth university ILLCA logo" />
      </LogoShowcase>
      <StandardCentralText headerText="Graphic design for Aberystwyth University">
        <p>
          In 2014, I spent 5 weeks working as an Exhibition Co-ordinator at
          Aberystwyth University as part of the 'AberForward' post-graduate
          scheme. This position was my first taste of professional graphic
          desing.
        </p>
        <p>
          Above is the logo I created for the Institute of Literature, Languages
          & Creative Arts department of the university.
        </p>
      </StandardCentralText>
      <div className={AberStyles.beInspiredCon}>
        <img
          src={AberInspiredWelsh}
          alt="Aberystwyth University 'Be Inspired' Welsh logo"
        />
        <img
          src={AberInspired}
          alt="Aberystwyth University 'Be Inspired' English logo"
        />
      </div>
      <StandardCentralText headerText="Be Inspired">
        <p>
          As a Welsh university, every design I created had to have a Welsh and
          English version, with the Welsh version featuring first.
        </p>
        <p>
          Catering for both languages was particularly difficult for the above
          project, where I designed a logo for a department wide competition
          called 'Be Inspired'.
        </p>
      </StandardCentralText>
      <div className={AberStyles.stepForwardCon}>
        <img
          src={StepForwardWelsh}
          alt="Aberystwyth University 'Step Forward' Welsh poster"
        />
        <img
          src={StepForward}
          alt="Aberystwyth University 'Step Forward' English poster"
        />
      </div>
      <StandardCentralText headerText="Step Foward">
        <p>
          The above posters were created for an ILLCA careers event called 'Step
          Forward'.
        </p>
        <p>
          If I were to redo the task, I would try removing the box pattern as
          currently the design feels too busy and I'd prefer more attention be
          brought to the text.
        </p>
      </StandardCentralText>
    </Layout>
  )
}
