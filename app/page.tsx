import Link from "next/link";
import { Metadata } from "next";

import StandardCentralText from "@components/standard-central-text";
import Solar from "@svgs/solar";
import SqBrushMask from "@components/sq-brush-mask";
import SqBrushSplash from "@components/sq-brush-splash";
import ButtonCon from "@components/button-con.module";
import Starfield from "@components/starfield";

import portraitImg from "@images/david-price-portrait.jpg";
import tamImg from "@images/thought-and-mortar-logo.png";
import cegdImg from "@images/cegd-logo.jpg";
import swiisImg from "@images/swiis/swiis-fc-why-foster-tablet.png";
import lypImg from "@images/lyp/lyp-property-search-desktop.png";
import ptsImg from "@images/predict-the-standings.png";
import obfgImg from "@images/old-bakery-flower-garden-logo.jpg";
import sttImg from "@images/scrap-the-trap.png";
import bmaImg from "@images/bma/bma-hp-mob.png";

import styles from "@styles/index.module.scss";
import btnStyles from "@styles/button.module.scss";
import workConStyles from "@styles/brushcon.module.scss";

export const metadata: Metadata = {
  title: "David Price | Frontend Web Developer",
  description: "Portfolio website for a Bristol-based Frontend Web Developer",
};

export default function Home() {
  const yearsSinceIStartedWork = () => {
    const dateIstartedWork = new Date().setFullYear(2015, 8, 11);
    const millisecondDiff = (new Date().getTime() - dateIstartedWork) / 1000;
    const daysDiff = millisecondDiff / (60 * 60 * 24);
    return Math.abs(Math.round(daysDiff / 365.25));
  };

  return (
    <>
      <section className={styles.index_title_ban}>
        <div className={styles.index_title_ban_text}>
          <h1 className={styles.index_title}> David Price</h1>
          <h2 className={styles.index_subtitle}>Front End Web Developer</h2>
        </div>
        <Solar />
        <Starfield />
      </section>
      <section>
        <SqBrushMask
          border={false}
          external={true}
          brush={"/brushes/brush-bg-1.svg"}
          img={portraitImg}
          imgAlt="David Price Portrait"
          linkDesc="David Price LinkedIn Profile"
          linkUrl="https://www.linkedin.com/in/davidwillprice/"
          imageWidth={250}>
          <p>
            Having graduated with a Fine Art degree in 2014, I taught myself
            HTML and CSS to earn my first Web Developer & Designer position in
            2015.
          </p>
          <p>
            Over the last {yearsSinceIStartedWork()} years I have pushed myself
            to learn new skills and work with new tech, from JavaScript and
            WordPress to React and Shopify Liquid. I take pride in ensuring my
            work is responsive, accessible, modular, organised, and fast to
            load.
          </p>
          <p>
            I believe my creative background helps me approach problem solving
            and UI from a unique perspective.
          </p>
        </SqBrushMask>
      </section>
      <div className="alt_con">
        <section>
          <h2 id="web" className={styles.project_header}>
            Work Experience
          </h2>
          <SqBrushMask
            brush={"/brushes/brush-bg-2.svg"}
            dirTxtRight={true}
            img={tamImg}
            imgAlt="Thought & Mortar logo"
            imageWidth={500}>
            <h3>Thought & Mortar</h3>
            <p>Jun 2024 - Mar 2026</p>
            <p>
              Full-time position as a Front-end Shopify Developer for
              Bristol-based agency Thought & Mortar.
            </p>
            <p>
              Developing custom solutions using Liquid, JavaScript, and CSS to
              meet the needs of a wide variety of clients.
            </p>
            <ButtonCon align={"right"}>
              <Link
                href="/thought-and-mortar/"
                className={`${btnStyles.button} ${btnStyles.primary}`}>
                View T&M Position Details
              </Link>
            </ButtonCon>
          </SqBrushMask>
          <SqBrushMask
            brush={"/brushes/brush-bg-1.svg"}
            dirTxtRight={false}
            img={cegdImg}
            imgAlt="Cambridge Education Group Digital logo"
            imageWidth={500}>
            <h3>Cambridge Education Group&nbsp;Digital</h3>
            <p>Feb 2023 - Jun 2024</p>
            <p>
              Full-time position as a Web Developer implementing online learning
              content while ensuring their quality, responsiveness, and
              accessibility.
            </p>
            <p>
              In an agile scrum environment, collaborating on various in-house
              software. Including adding features and eliminating bugs across
              JavaScript (Next.js) and PHP (WordPress) tech stacks, and
              providing QA, reviews, and proposing changes to colleague Git pull
              requests.
            </p>
          </SqBrushMask>
          <SqBrushSplash
            brushNo={3}
            img={swiisImg}
            dirTxtRight={true}
            imgAlt="Swiis Foster Care Why Foster on tablet"
            linkDesc="Swiis international web development page"
            linkUrl="/swiis/"
            extraMobBotPadding={true}>
            <h3>Swiis International Ltd</h3>
            <p>Feb 2019 - Feb 2023</p>
            <p>
              Full time position as a Web Developer & Designer at Swiis
              International; parent company of Swiis Foster Care, Swiis Foster
              Care Scotland and Swiis Healthcare.
            </p>
            <ButtonCon align={"right"}>
              <Link
                href="/swiis/"
                className={`${btnStyles.button} ${btnStyles.primary}`}>
                View Swiis Position Details
              </Link>
            </ButtonCon>
          </SqBrushSplash>
          <SqBrushSplash
            brushNo={1}
            img={lypImg}
            imgAlt="Love Your Postcode property search page on desktop"
            linkDesc="Love Your Postcode web development page"
            linkUrl="/loveyourpostcode/">
            <h3>Love Your Postcode</h3>
            <p>Aug 2015 - Feb 2019</p>
            <p>
              Full time position as a Web / Graphic Designer at Birmingham
              estate agent Love Your Postcode.
            </p>
            <ButtonCon>
              <Link
                href="/loveyourpostcode/"
                className={`${btnStyles.button} ${btnStyles.primary}`}>
                View LYP Position Details
              </Link>
            </ButtonCon>
          </SqBrushSplash>
        </section>
        <section>
          <h2 className={styles.projectsHeader}>Projects</h2>
          <SqBrushSplash
            brushNo={3}
            img={ptsImg}
            dirTxtRight={true}
            imgAlt="Predict the Standings website screenshot"
            linkDesc="Predict the Standings website"
            linkUrl="https://predictthestandings.com/">
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
              <a
                href="https://predictthestandings.com/"
                className={`${btnStyles.button} ${btnStyles.primary}`}>
                Predict The Standings
              </a>
            </ButtonCon>
          </SqBrushSplash>
          <div className={workConStyles.work_brush_con}>
            <SqBrushMask
              brush={"/brushes/brush-bg-2.svg"}
              img={obfgImg}
              imgAlt="Old Bakery Flower Garden logo"
              imageWidth={500}>
              <h3>Old Bakery Flower Garden</h3>
              <p>Oct 2022 - Current</p>
              <p>
                Volunteer work to design and build a Next.js website for a
                flower shop in Herefordshire.
              </p>
              <p>
                Utilises Contentful to allow the shop owner to update text and
                image themselves, while automatically optimising image file
                types, size and compression.
              </p>
              <ButtonCon>
                <a
                  href="https://www.oldbakeryflowergarden.co.uk/"
                  className={`${btnStyles.button} ${btnStyles.primary}`}>
                  Old Bakery Flower Garden
                </a>
              </ButtonCon>
            </SqBrushMask>
            <SqBrushMask
              brush={"/brushes/brush-bg-3.svg"}
              img={sttImg}
              imgAlt="Old Bakery Flower Garden logo"
              dirTxtRight={true}
              imageWidth={500}>
              <h3>Scrap The Trap</h3>
              <p>Oct 2022 - Current</p>
              <p>
                Volunteer work through{" "}
                <a href="https://veganhacktivists.org/">Vegan Hacktivists</a> to
                design and build an activist website to pressure Home Base to
                stop selling glue traps.
              </p>
              <p>Utilisies Next.js and Tailwind.</p>
              <ButtonCon align={"right"}>
                <a
                  href="https://www.scrapthetrap.com/"
                  className={`${btnStyles.button} ${btnStyles.primary}`}>
                  Scrap The Trap
                </a>
              </ButtonCon>
            </SqBrushMask>
            <SqBrushSplash
              brushNo={2}
              img={bmaImg}
              imgAlt="Bristol Marketing Agency homepage on mobile"
              linkDesc="Bristol Marketing Agency web design page"
              linkUrl="/bristol-marketing-agency/"
              extraMobBotPadding={true}>
              <h3>Bristol Marketing Agency</h3>
              <p>Feb 2018</p>
              <p>
                Website redesign over a weekend as part of the job application
                process for a Bristol based marketing agency.
              </p>
              <ButtonCon>
                <Link
                  href="/bristol-marketing-agency/"
                  className={`${btnStyles.button} ${btnStyles.primary}`}>
                  View Redesign Details
                </Link>
              </ButtonCon>
            </SqBrushSplash>
          </div>
        </section>
        <hr />
        <section>
          <h2 id="web" className={styles.project_header}>
            Completed Courses
          </h2>
          <StandardCentralText width={728}>
            <p>
              2022 -{" "}
              <a
                className="text_link"
                href="https://www.udemy.com/course/nextjs-react-the-complete-guide/">
                &quot;Next.js & React - The Complete Guide&quot;
              </a>{" "}
              by Maximilian Schwarzmüller
            </p>
            <p>
              2021 -{" "}
              <a
                className="text_link"
                href="https://www.udemy.com/course/understanding-typescript/">
                &quot;Understanding TypeScript&quot;
              </a>{" "}
              by Maximilian Schwarzmüller
            </p>
            <p>
              2021 -{" "}
              <a
                className="text_link"
                href="https://www.udemy.com/course/the-complete-javascript-course/">
                &quot;The Complete JavaScript Course&quot;
              </a>{" "}
              by Jonas Schmedtmann
            </p>
          </StandardCentralText>
        </section>
      </div>
    </>
  );
}
