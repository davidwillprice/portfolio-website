import { Metadata } from "next";
import Link from "next/link";

import ButtonCon from "@/src/components/button-con.module";
import SqBrushMask from "@/src/components/sq-brush-mask";
import TitleBanner from "@/src/components/title-banner";

import btnStyles from "@styles/button.module.scss";
import workConStyles from "@styles/brushcon.module.scss";

export const metadata: Metadata = {
  title: "Graphic Design | David Price",
  description:
    "Showcase of the graphic design different projects I have worked on",
};

import teslaNowIconImg from "@images/teslanow/teslanow-icon.jpg";
import aberForwardImg from "@images/aber-design/aber-inspired-logo-thumbnail.jpg";
import springholmLogoImg from "@images/freelance-logos/springholm-wells-farm-logo-thumbnail.jpg";

export default function GraphicDesign() {
  return (
    <>
      <TitleBanner>
        <h1>Graphic design</h1>
      </TitleBanner>
      <div className={workConStyles.workBrushCon}>
        <SqBrushMask
          brush={"/brushes/brush-bg-1.svg"}
          dirTxtRight={true}
          img={teslaNowIconImg}
          imgAlt="TESLANOW icon"
          linkDesc="TESLANOW page"
          linkUrl="/graphic-design/teslanow/">
          <h3>TESLANOW</h3>
          <p>Jun 2015</p>
          <p>
            Icon, app and website design for a company through freelancer.com.
          </p>
          <ButtonCon align={"right"}>
            <Link
              href="/graphic-design/teslanow/"
              className={`${btnStyles.button} ${btnStyles.primary}`}
              aria-label="TESLANOW page">
              Learn More
            </Link>
          </ButtonCon>
        </SqBrushMask>
        <SqBrushMask
          brush={"/brushes/brush-bg-3.svg"}
          img={aberForwardImg}
          imgAlt="Aberystwyth Inspired logo"
          linkDesc="Aberystwyth university graphic design"
          linkUrl="/graphic-design/aberystwyth-university/">
          <h3>Aberystwyth University</h3>
          <p>Jan 2015 - Feb 2015</p>
          <p>
            Logos, posters and a mural that I designed while working at
            Aberystwyth University.
          </p>
          <ButtonCon>
            <Link
              href="/graphic-design/aberystwyth-university/"
              className={`${btnStyles.button} ${btnStyles.primary}`}
              aria-label="Aberystwyth university graphic design">
              Learn More
            </Link>
          </ButtonCon>
        </SqBrushMask>

        <SqBrushMask
          brush={"/brushes/brush-bg-4.svg"}
          img={springholmLogoImg}
          imgAlt="Logo for an Australian summer retreat camp"
          linkDesc="Freelance logos"
          linkUrl="/graphic-design/freelance-logos/"
          dirTxtRight={true}>
          <h3>Freelance logos</h3>
          <p>Feb 2015 - Aug 2015</p>
          <p>
            Commissioned and practice logos created before I got my first
            full-time job in the industry.
          </p>
          <ButtonCon align={"right"}>
            <Link
              href="/graphic-design/freelance-logos/"
              className={`${btnStyles.button} ${btnStyles.primary}`}
              aria-label="Freelance logos">
              Learn More
            </Link>
          </ButtonCon>
        </SqBrushMask>
      </div>
    </>
  );
}
