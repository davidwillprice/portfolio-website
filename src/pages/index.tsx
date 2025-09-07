import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
/* eslint-disable */ import SolarSVGStyles from "../styles/component/svg/solarsvg.module.scss" /* eslint-enable */
import Seo from "../components/head/seo"
import SqBrushSplash from "../components/sq-brush-splash"
import SqBrushMask from "../components/sq-brush-mask"
import Button from "../components/button"
import ButtonCon from "../components/button-con"
import StandardCentralText from "../components/standard-central-text"

import * as IndexStyles from "../styles/page/index.module.scss"
import * as brushConStyles from "../styles/component/brushcon.module.scss"
import { anchor, textLink } from "../styles/global.module.scss"

import Solar from "../svgs/solar"
import BrushOne from "../svgs/brush-bg-1.svg"
import BrushTwo from "../svgs/brush-bg-2.svg"
import BrushThree from "../svgs/brush-bg-3.svg"

import { IGatsbyImageData } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"

export default function Index({
  data,
}: {
  data: {
    obfg: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    cegd: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    portrait: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    swiis: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    lyp: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    bma: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    monty: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    pts: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    tam: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    stt: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
  }
}) {
  const obfgImg = data.obfg.childImageSharp.gatsbyImageData
  const cegdImg = data.cegd.childImageSharp.gatsbyImageData
  const portrait = data.portrait.childImageSharp.gatsbyImageData
  const swiisImg = data.swiis.childImageSharp.gatsbyImageData
  const lypImg = data.lyp.childImageSharp.gatsbyImageData
  const ptsImg = data.pts.childImageSharp.gatsbyImageData
  const bmaImg = data.bma.childImageSharp.gatsbyImageData
  const sttImg = data.stt.childImageSharp.gatsbyImageData
  const tamImg = data.tam.childImageSharp.gatsbyImageData

  const yearsSinceIStartedWork = () => {
    const dateIstartedWork = new Date().setFullYear(2015, 8, 11)
    const millisecondDiff = (new Date().getTime() - dateIstartedWork) / 1000
    const daysDiff = millisecondDiff / (60 * 60 * 24)
    return Math.abs(Math.round(daysDiff / 365.25))
  }

  return (
    <Layout>
      <Seo
        title="David Price Web Design"
        description="Bristol-based Front-End Web Developer"
      />
      <div className={IndexStyles.indexTitleBan}>
        <Solar />
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
          Over the last {yearsSinceIStartedWork()} years I have pushed myself to
          learn new skills and work with new tech, from JavaScript and WordPress
          to React and Shopify Liquid. I take pride in ensuring my work is
          responsive, accessible, modular, organised, and fast to load.
        </p>
        <p>
          I believe my creative background helps me approach problem solving and
          UI from a unique perspective.
        </p>
      </SqBrushMask>
      <section>
        <h2 id="work" className={IndexStyles.projectsHeader}>
          Work Experience
        </h2>
        <SqBrushMask
          brush={"/svgs/brush-bg-2.svg"}
          dirTxtRight={true}
          img={tamImg}
          imgAlt="Thought & Mortar logo"
        >
          <h3>Thought & Mortar</h3>
          <p>Jun 2024 - Current</p>
          <p>
            Full-time position as a Front-end Shopify developer for Bristol
            based digital agency Thought & Mortar.
          </p>
          <p>
            The core of the role is building upon store themes for merchants.
            Using Shopify Liquid, JavaScript, and CSS to craft custom solutions
            that meet the needs of a variety of clients.
          </p>
        </SqBrushMask>
        <SqBrushMask
          brush={"/svgs/brush-bg-1.svg"}
          dirTxtRight={false}
          img={cegdImg}
          imgAlt="Cambridge Education Group Digital logo"
        >
          <h3>Cambridge Education Group&nbsp;Digital</h3>
          <p>Feb 2023 - Jun 2024</p>
          <p>
            Full-time position as a Web Developer implementing online learning
            content while ensuring their quality, responsiveness, and
            accessiblity.
          </p>
          <p>
            In an agile scrum environment, collaborating on various in-house
            software. Including adding features and eliminating bugs across
            JavaScript (Next.js) and PHP (WordPress) tech stacks, and providing
            QA, reviews, and proposing changes to colleague Git pull requests.
          </p>
        </SqBrushMask>
        <SqBrushSplash
          brush={<BrushThree />}
          img={swiisImg}
          dirTxtRight={true}
          imgAlt="Swiis Foster Care Why Foster on tablet"
          linkDesc="Swiis international web development page"
          linkUrl="/swiis/"
          extraMobBotPadding={true}
        >
          <h3>Swiis International Ltd</h3>
          <p>Feb 2019 - Feb 2023</p>
          <p>
            Full time position as a Web Developer & Designer at Swiis
            International; parent company of Swiis Foster Care, Swiis Foster
            Care Scotland and Swiis Healthcare.
          </p>
          <ButtonCon align={"right"}>
            <Button
              url="/swiis/"
              linkDesc="Swiis international web development page"
              btnText="View Swiis Position Details"
            />
          </ButtonCon>
        </SqBrushSplash>
        <SqBrushSplash
          brush={<BrushOne />}
          img={lypImg}
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
          <ButtonCon>
            <Button
              url="/loveyourpostcode/"
              linkDesc="Love Your Postcode web development page"
              btnText="View LYP Position Details"
            />
          </ButtonCon>
        </SqBrushSplash>
      </section>
      <section>
        <h2 className={`${IndexStyles.projectsHeader} ${anchor}`}>Projects</h2>
        <SqBrushSplash
          brush={<BrushThree />}
          img={ptsImg}
          dirTxtRight={true}
          imgAlt="Predict the Standings website screenshot"
          linkDesc="Predict the Standings website"
          linkUrl="https://predictthestandings.com/"
        >
          <h3>Predict The Standings</h3>
          <p>Jan 2024 - Current</p>
          <p>
            Website where people around the world can compete to predict the
            standings for various sports and competitions.
          </p>
          <p>
            Utilises Nextjs, MongoDB, and Auth.js so people can sign in using
            OAuth and keep their performances from previous seasons.
          </p>
          <ButtonCon align={"right"}>
            <Button
              url="https://predictthestandings.com/"
              linkDesc="Predict the Standings website"
              btnText="Predict The Standings"
            />
          </ButtonCon>
        </SqBrushSplash>
        <div className={brushConStyles.workBrushCon}>
          <SqBrushMask
            brush={"/svgs/brush-bg-2.svg"}
            img={obfgImg}
            imgAlt="Old Bakery Flower Garden logo"
          >
            <h3>Old Bakery Flower Garden</h3>
            <p>Oct 2022 - Current</p>
            <p>
              Volunteer work to design and build a Next.js website for a flower
              shop in Herefordshire.
            </p>
            <p>
              Utilises Contentful to allow the shop owner to update text and
              image themselves, while automatically optimising image file types,
              size and compression.
            </p>
            <ButtonCon>
              <Button
                url="https://www.oldbakeryflowergarden.co.uk/"
                linkDesc="Old Bakery Flower Garden"
                btnText="Old Bakery Flower Garden"
              />
            </ButtonCon>
          </SqBrushMask>
          <SqBrushMask
            brush={"/svgs/brush-bg-3.svg"}
            img={sttImg}
            imgAlt="Old Bakery Flower Garden logo"
            dirTxtRight={true}
          >
            <h3>Scrap The Trap</h3>
            <p>Oct 2022 - Current</p>
            <p>
              Volunteer work through{" "}
              <a className={textLink} href="https://veganhacktivists.org/">
                Vegan Hacktivists
              </a>{" "}
              to design and build an activist website to pressure Home Base to
              stop selling glue traps.
            </p>
            <p>Utilisies Next.js and Tailwind.</p>
            <ButtonCon align={"right"}>
              <Button
                url="https://www.scrapthetrap.com/"
                linkDesc="Scrap The Trap"
                btnText="Scrap The Trap"
              />
            </ButtonCon>
          </SqBrushMask>
          <SqBrushSplash
            brush={<BrushTwo />}
            img={bmaImg}
            imgAlt="Bristol Marketing Agency homepage on mobile"
            linkDesc="Bristol Marketing Agency web design page"
            linkUrl="/bristol-marketing-agency/"
            extraMobBotPadding={true}
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
                btnText="View Redesign Details"
              />
            </ButtonCon>
          </SqBrushSplash>
          {/* <SqBrushSplash
            brush={<BrushThree />}
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
            <ButtonCon>
              <Button
                external={true}
                url="https://github.com/davidwillprice/montyhall"
                btnText="View Source"
                btnColor="secondary"
                btnIcon="github"
                linkDesc="Github page for my Monty Hall Problem code"
              />
            </ButtonCon>
          </SqBrushSplash> */}
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
    obfg: file(relativePath: { eq: "old-bakery-flower-garden-logo.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
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
    pts: file(
      relativePath: {
        eq: "predict-the-standings/predict-the-standings_laptop-screenshot.png"
      }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    tam: file(relativePath: { eq: "thought-and-mortar.png" }) {
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
    stt: file(relativePath: { eq: "scrap-the-trap.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
    monty: file(relativePath: { eq: "monty-hall/monty-hall-3-doors.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: NONE)
      }
    }
  }
`
