import { Metadata } from "next";
import Link from "next/link";

import ButtonCon from "@/src/components/button-con.module";
import SqBrushMask from "@/src/components/sq-brush-mask";
import TitleBanner from "@/src/components/title-banner";

import btnStyles from "@styles/button.module.scss";
import workConStyles from "@styles/brushcon.module.scss";

import solargraphyImg from "@images/solargraphy/solargraph-image-34-thumbnail.jpg";

export const metadata: Metadata = {
  title: "Art | David Price",
  description:
    "Pinhole photography aimed at the sky to capture the path of the sun each day.",
};

export default function Page() {
  return (
    <>
      <TitleBanner>
        <h1>Art</h1>
      </TitleBanner>
      <div className={workConStyles.workBrushCon}>
        <SqBrushMask
          brush={"/brushes/brush-bg-5.svg"}
          img={solargraphyImg}
          imgAlt="Solargraphy image"
          linkDesc="Solargraphy page"
          linkUrl="/art/solargraphy/">
          <h3>Solargraphy</h3>
          <p>Apr 2012 - Jun 2014</p>
          <p>
            Pinhole photography aimed at the sky to capture the path of the sun
            each day.
          </p>
          <ButtonCon>
            <Link
              href="/art/solargraphy/"
              className={`${btnStyles.button} ${btnStyles.primary}`}>
              Learn More
            </Link>
          </ButtonCon>
        </SqBrushMask>
      </div>
    </>
  );
}
