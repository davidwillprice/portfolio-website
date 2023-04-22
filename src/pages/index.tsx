import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
/* eslint-disable */ import SolarSVGStyles from "../styles/component/svg/solarsvg.scss" /* eslint-enable */
import Seo from "../components/head/seo"
import SqBrushSplash from "../components/sq-brush-splash"
import SqBrushMask from "../components/sq-brush-mask"
import Button from "../components/button"
import ButtonCon from "../components/button-con"
import StandardCentralText from "../components/standard-central-text"

import * as IndexStyles from "../styles/page/index.module.scss"
import * as brushConStyles from "../styles/component/brushcon.module.scss"
import { anchor, textLink } from "../styles/global.module.scss"

import SolarSVG from "../svgs/solar.svg"
import BrushOne from "../svgs/brush-bg-1.svg"
import BrushTwo from "../svgs/brush-bg-2.svg"
import BrushThree from "../svgs/brush-bg-3.svg"

import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"

export default function Index({
  data,
}: {
  data: {
    cegd: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    portrait: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    swiis: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    lyp: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    bma: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    monty: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    f1: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    football: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
  }
}) {
  const cegdImg = data.cegd.childImageSharp.gatsbyImageData
  const portrait = data.portrait.childImageSharp.gatsbyImageData
  const swiisImg = data.swiis.childImageSharp.gatsbyImageData
  const lypImg = data.lyp.childImageSharp.gatsbyImageData
  const bmaImg = data.bma.childImageSharp.gatsbyImageData
  const montyImg = data.monty.childImageSharp.gatsbyImageData
  const f1Img = data.f1.childImageSharp.gatsbyImageData
  const footballImg = data.football.childImageSharp.gatsbyImageData

  return (
    <Layout>
      <Seo
        title="David Price Web Design"
        description="I am currently in a full-time position as a Web Developer & Designer at Swiis International"
      />
      <div className={IndexStyles.indexTitleBan}>
        <SolarSVG className={IndexStyles.solarSVG} />
        <div className={IndexStyles.indexTitleBanText}>
          <h1 className={IndexStyles.indexTitle}> David Price</h1>
          <h2 className={IndexStyles.indexSubtitle}>Front End Web Developer</h2>
        </div>
      </div>
      <SqBrushMask
        external={true}
        brush={"/svgs/brush-bg-1.svg"}
        img={portrait}
        imgAlt="David Price Portrait"
        linkDesc="David Price LinkedIn Profile"
        linkUrl="https://www.linkedin.com/in/davidwillprice/"
        size={"small"}
      >
        <p>
          Having graduated with a Fine Art degree in 2014, I taught myself HTML
          and CSS to earn my first Web Developer & Designer position in 2015.
        </p>
        <p>
          After gaining 6 years experience building and maintaining responsive
          websites, I am now also proficient in JavaScript.
        </p>
        <p>
          I am always pushing myself to learn new skills in my free time,
          currently including Git, React, Gatsby and Sass.
        </p>
        <p>
          I believe my creative background helps me approach problem solving and
          UI from a unique perspective.
        </p>
      </SqBrushMask>
      <section>
        <h2 id="web" className={`${IndexStyles.projectsHeader} ${anchor}`}>
          Projects
        </h2>
        <div className={brushConStyles.workBrushCon}>
          <SqBrushMask
            brush={"/svgs/brush-bg-1.svg"}
            dirTxtRight={true}
            img={cegdImg}
            imgAlt="Cambridge Education Group Digital logo"
          >
            <h3>Cambridge Education Group&nbsp;Digital</h3>
            <p>Feb 2023 - Current</p>
            <p>
              Full-time position as a Web Developer transferring course content
              between systems while ensuring their quality, responsiveness, and
              accessiblity. Also working on modular solutions to automate and
              scale the process.
            </p>
          </SqBrushMask>
          <SqBrushSplash
            brush={<BrushThree />}
            img={swiisImg}
            imgAlt="Swiis Foster Care Why Foster on tablet"
            linkDesc="Swiis international web development page"
            linkUrl="/swiis/"
            nonDesktop={true}
          >
            <h3>Swiis International Ltd</h3>
            <p>Feb 2019 - Feb 2023</p>
            <p>
              Full time position as a Web Developer & Designer at Swiis
              International; parent company of Swiis Foster Care, Swiis Foster
              Care Scotland and Swiis Healthcare.
            </p>
            <ButtonCon>
              <Button
                url="/swiis/"
                linkDesc="Swiis international web development page"
                btnText="Learn More"
              />
            </ButtonCon>
          </SqBrushSplash>
          <SqBrushSplash
            brush={<BrushOne />}
            dirTxtRight={true}
            img={lypImg}
            imgAlt="Love Your Postcode property search page on desktop"
            linkDesc="Love Your Postcode web development page"
            linkUrl="/loveyourpostcode/"
          >
            <h3>Love Your Postcode</h3>
            <p>Aug 2015 - Feb 2019</p>
            <p>
              Full time position as a Web / Graphic Designer at Birmingham
              estate agent Love Your Postcode.
            </p>
            <ButtonCon align={"right"}>
              <Button
                url="/loveyourpostcode/"
                linkDesc="Love Your Postcode web development page"
                btnText="Learn More"
              />
            </ButtonCon>
          </SqBrushSplash>
          <SqBrushSplash
            brush={<BrushTwo />}
            img={bmaImg}
            imgAlt="Bristol Marketing Agency homepage on mobile"
            linkDesc="Bristol Marketing Agency web design page"
            linkUrl="/bristol-marketing-agency/"
            nonDesktop={true}
          >
            <h3>Bristol Marketing Agency</h3>
            <p>Feb 2018</p>
            <p>
              Website redesign over a weekend as part of the job application
              process for a Bristol based marketing agency.
            </p>
            <ButtonCon>
              <Button
                url="/bristol-marketing-agency/"
                linkDesc="Bristol Marketing Agency web design page"
                btnText="Learn More"
              />
            </ButtonCon>
          </SqBrushSplash>
          <SqBrushSplash
            brush={<BrushThree />}
            dirTxtRight={true}
            external={true}
            img={montyImg}
            imgAlt="Monty Hall's 3 doors"
            linkUrl="https://github.com/davidwillprice/montyhall"
            linkDesc="Github page for my Monty Hall Problem code"
          >
            <h3>Monty Hall Problem</h3>
            <p>Dec 2020</p>
            <p>
              Side project to create an interactive illustration of the Monty
              Hall Problem. Although there are already other online versions, I
              wanted to see if I could make a better looking, more accessible
              adaptation with more features.
            </p>
            <ButtonCon align="right">
              <Button
                external={true}
                url="https://github.com/davidwillprice/montyhall"
                btnText="View Source"
                btnColor="secondary"
                btnIcon="github"
                linkDesc="Github page for my Monty Hall Problem code"
              />
            </ButtonCon>
          </SqBrushSplash>
          <SqBrushSplash
            brush={<BrushOne />}
            img={f1Img}
            imgAlt="F1 prediction game screenshot"
            linkUrl="/f1-prediction-game/2022/"
            linkDesc="View F1 prediction game"
          >
            <h3>F1 Prediction Game</h3>
            <p>2020-</p>
            <p>
              Side project to create a game where people guess the final
              standings of each Formula 1 season.
            </p>
            <ButtonCon>
              <Button
                url="/f1-prediction-game/2023/"
                linkDesc="View F1 prediction game"
                btnText="View F1 Prediction Game"
              />
              <Button
                external={true}
                url="https://github.com/davidwillprice/portfolio-website/tree/main/src/components/f1"
                btnText="View Source"
                linkDesc="View F1 Prediction Game source code"
                btnColor="secondary"
                btnIcon="github"
              />
            </ButtonCon>
          </SqBrushSplash>
          <SqBrushSplash
            brush={<BrushOne />}
            dirTxtRight={true}
            img={footballImg}
            imgAlt="Football Prediction gme screenshot"
            linkUrl="/football-prediction-game/2022-2023/"
            linkDesc="View Football Prediction Game"
          >
            <h3>Premier League Prediction Game</h3>
            <p>2019-</p>
            <p>
              Side project to create a game where people guess the final
              standings of each Premier League season.
            </p>
            <ButtonCon align="right">
              <Button
                url="/football-prediction-game/2022-2023/"
                btnText="View Football Prediction Game"
              />
              <Button
                external={true}
                url="https://github.com/davidwillprice/portfolio-website/tree/main/src/components/football"
                btnText="View Source"
                linkDesc="View Football Prediction Game source code"
                btnColor="secondary"
                btnIcon="github"
              />
            </ButtonCon>
          </SqBrushSplash>
        </div>
      </section>
      <section>
        <h2 id="web" className={IndexStyles.projectsHeader}>
          Completed Courses
        </h2>
        <StandardCentralText width="650">
          <p style={{ marginTop: 50 }}>
            2022 -{" "}
            <a
              className={textLink}
              href="https://www.udemy.com/course/nextjs-react-the-complete-guide/"
            >
              "Next.js & React - The Complete Guide"
            </a>{" "}
            by Maximilian Schwarzmüller{" "}
          </p>
          <p>
            2021 -{" "}
            <a
              className={textLink}
              href="https://www.udemy.com/course/understanding-typescript/"
            >
              "Understanding TypeScript"
            </a>{" "}
            by Maximilian Schwarzmüller{" "}
          </p>
          <p>
            2021 -{" "}
            <a
              className={textLink}
              href="https://www.udemy.com/course/the-complete-javascript-course/"
            >
              "The Complete JavaScript Course"
            </a>{" "}
            by Jonas Schmedtmann{" "}
          </p>
        </StandardCentralText>
      </section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    cegd: file(relativePath: { eq: "cegd-logo.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    portrait: file(relativePath: { eq: "david-price-portrait.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    swiis: file(relativePath: { eq: "swiis/swiis-fc-why-foster-tablet.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    lyp: file(relativePath: { eq: "lyp/lyp-property-search-desktop.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    bma: file(relativePath: { eq: "bma/bma-hp-mob.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    monty: file(relativePath: { eq: "monty-hall/monty-hall-3-doors.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    f1: file(
      relativePath: {
        eq: "f1-prediction-game/f1-prediction-game-screenshot.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    football: file(
      relativePath: {
        eq: "football-prediction-game/football-prediction-game-screenshot.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
  }
`
