import React from "react"
import Layout from "../components/layout/layout"
import FullHeight from "../components/layout/full-height"
import IndexStyles from "../styles/page/index.module.scss"
import StandardCentralText from "../components/standard-central-text"
/* eslint-disable */ import SolarSVGStyles from "../styles/component/svg/solarsvg.scss" /* eslint-enable */
import SEO from "../components/head/seo.js"

import SolarSVG from "../svgs/solar.svg"

export default function Index() {
  return (
    <Layout>
      <SEO
        title="David Price Web Design"
        description="I am currently in a full-time position as a Web Developer & Designer at Swiis International"
      />
      <FullHeight>
        <div className={IndexStyles.indexTitleBan}>
          <SolarSVG className={IndexStyles.solarSVG} />
          <div className={IndexStyles.indexTitleBanText}>
            <h1 className={IndexStyles.indexTitle}> David Price</h1>
            <h2 className={IndexStyles.indexSubtitle}>
              Front End Web Developer
            </h2>
          </div>
        </div>
        <StandardCentralText>
          <p>
            Having graduated with a Fine Art degree in 2014, I taught myself
            HTML and CSS to earn my first Web Developer & Designer position in
            2015. After gaining 6 years experience building and maintaining
            responsive websites, I am now also proficient in JavaScript. I am
            always pushing myself to learn new skills in my free time, currently
            including Git, React, Gatsby and Sass.
          </p>

          <p>
            I believe my creative background helps me approach problem solving
            and UI from a unique perspective.
          </p>
        </StandardCentralText>
      </FullHeight>
    </Layout>
  )
}
