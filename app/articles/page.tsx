import { Metadata } from "next";
import Link from "next/link";

import ButtonCon from "@/src/components/button-con.module";
import SqBrushMask from "@/src/components/sq-brush-mask";
import TitleBanner from "@/src/components/title-banner";

import btnStyles from "@styles/button.module.scss";
import workConStyles from "@styles/brushcon.module.scss";

import themeBlockImg from "@images/articles/thought-and-mortar-theme-blocks-article.jpg";

export const metadata: Metadata = {
  title: "Articles | David Price",
  description:
    "Thoughts and reflections on design, development, and the creative process.",
};

export default function Page() {
  return (
    <>
      <TitleBanner>
        <h1>Articles</h1>
      </TitleBanner>
      <section className={workConStyles.workBrushCon}>
        <SqBrushMask
          brush={"/brushes/brush-bg-4.svg"}
          img={themeBlockImg}
          imgAlt="Theme blocks image"
          linkDesc="Theme blocks article"
          linkUrl="/articles/theme-blocks/">
          <h3>What do developers think of Shopify theme blocks?</h3>
          <p>3rd Feb 2026</p>
          <p>
            An article written during my{" "}
            <Link href="/thought-and-mortar/">
              developer position at Thought & Mortar
            </Link>{" "}
            discussing how divisive Shopify theme blocks were proving amongst
            developers 8 months on from their June 2025 release.
          </p>
          <ButtonCon>
            <Link
              href="/articles/theme-blocks/"
              className={`${btnStyles.button} ${btnStyles.primary}`}>
              Learn More
            </Link>
          </ButtonCon>
        </SqBrushMask>
      </section>
    </>
  );
}
