import React from "react"
import Layout from "../components/layout/layout"
/* eslint-disable */ import SolarSVGStyles from "../styles/component/svg/solarsvg.scss" /* eslint-enable */
import SEO from "../components/head/seo.js"
import SqBrushSplash from "../components/sq-brush-splash"
import SqBrushMask from "../components/sq-brush-mask"
import Button from "../components/button"
import ButtonCon from "../components/button-con"

import IndexStyles from "../styles/page/index.module.scss"
import brushConStyles from "../styles/component/brushcon.module.scss"
import globalStyles from "../styles/global.module.scss"

import SolarSVG from "../svgs/solar.svg"
import BrushOne from "../svgs/brush-bg-1.svg"
import BrushTwo from "../svgs/brush-bg-2.svg"
import BrushThree from "../svgs/brush-bg-3.svg"

import LypPropSearchDesktopImg from "../images/lyp/lyp-property-search-desktop.png"
import BmaHpMobImg from "../images/bma/bma-hp-mob.png"
import SwiisWhyFosterTabImg from "../images/swiis/swiis-fc-why-foster-tablet.png"
import MontyHallImg from "../images/monty-hall/monty-hall-3-doors.png"
import f1Img from "../images/f1-prediction-game/f1-prediction-game-screenshot.png"
import portrait from "../images/david-price-portrait.jpg"

export default function Index() {
  return (
    <Layout>
      <SEO
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
      <h2
        id="web"
        className={`${IndexStyles.projectsHeader} ${globalStyles.anchor}`}
      >
        Projects
      </h2>
      <div className={brushConStyles.workBrushCon}>
        <SqBrushSplash
          brush={<BrushThree />}
          img={SwiisWhyFosterTabImg}
          imgAlt="Swiis Foster Care Why Foster on tablet"
          linkDesc="Swiis international web development page"
          linkUrl="/swiis/"
          nonDesktop={true}
        >
          <h3>Swiis International Ltd</h3>
          <p>Feb 2019 - Current</p>
          <p>
            Full time position as a Web Developer & Designer at Swiis
            International; parent company of Swiis Foster Care, Swiis Foster
            Care Scotland and Swiis Healthcare.
          </p>
          <ButtonCon>
            <Button url="/swiis/" btnText="Learn More" />
          </ButtonCon>
        </SqBrushSplash>
        <SqBrushSplash
          brush={<BrushOne />}
          dirTxtRight={true}
          img={LypPropSearchDesktopImg}
          imgAlt="Love Your Postcode property search page on desktop"
          linkDesc="Love Your Postcode web development page"
          linkUrl="/loveyourpostcode/"
        >
          <h3>Love Your Postcode</h3>
          <p>Aug 2015 - Feb 2019</p>
          <p>
            Full time position as a Web / Graphic Designer at Birmingham estate
            agent Love Your Postcode.
          </p>
          <ButtonCon dirTxtRight={true}>
            <Button url="/loveyourpostcode/" btnText="Learn More" />
          </ButtonCon>
        </SqBrushSplash>
        <SqBrushSplash
          brush={<BrushTwo />}
          img={BmaHpMobImg}
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
            <Button url="/bristol-marketing-agency/" btnText="Learn More" />
          </ButtonCon>
        </SqBrushSplash>
        <SqBrushSplash
          brush={<BrushThree />}
          dirTxtRight={true}
          external={true}
          img={MontyHallImg}
          imgAlt="Monty Hall's 3 doors"
          linkUrl="https://github.com/davidwillprice/montyhall"
          linkDesc="Github page for my Monty Hall Problem code"
        >
          <h3>Monty Hall Problem</h3>
          <p>Dec 2020</p>
          <p>
            Side project to create an interactive illustration of the Monty Hall
            Problem. Although there are already other online versions, I wanted
            to see if I could make a better looking, more accessible adaptation
            with more features.
          </p>
          <ButtonCon dirTxtRight={true}>
            <Button
              external={true}
              url="https://github.com/davidwillprice/montyhall"
              btnText="View Source"
              btnColor="secondary"
              btnIcon="github"
            />
          </ButtonCon>
        </SqBrushSplash>
        <SqBrushSplash
          brush={<BrushOne />}
          img={f1Img}
          imgAlt="F1 prediction game screenshot"
          linkUrl="/f1-prediction-game-2021/"
          linkDesc="Github page for my Monty Hall Problem code"
        >
          <h3>F1 Prediction Game</h3>
          <p>2021</p>
          <p>
            Side project to create a game where people guess the final standings
            of the 2021 Formula 1 season.
          </p>
          <ButtonCon>
            <Button url="/f1-prediction-game-2021/" btnText="View Game" />
            <Button
              external={true}
              url="https://github.com/davidwillprice/portfolio-website/blob/master/src/components/f1-prediction-game.js"
              btnText="View Source"
              btnColor="secondary"
              btnIcon="github"
            />
          </ButtonCon>
        </SqBrushSplash>
      </div>
    </Layout>
  )
}
