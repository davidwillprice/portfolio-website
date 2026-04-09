import { Metadata } from "next";
import TitleBanner from "@/src/components/title-banner";
import TextBesideImg from "@components/text-beside-img";

import themeBlockImg from "@images/articles/thought-and-mortar-theme-blocks-article.jpg";

export const metadata: Metadata = {
  title: "Theme Blocks Article | David Price",
  description:
    "What do developers think of Shopify theme blocks? Eight months on from their release, I speak to developers to find out why opinions are still so split",
};

export default function Page() {
  return (
    <>
      <TitleBanner>
        <h1 className="h3">
          What do developers think of Shopify theme blocks?
        </h1>
        <p>
          <strong>3rd Feb 2026</strong>
        </p>
      </TitleBanner>
      <TextBesideImg
        img={themeBlockImg}
        maxImgWidth={300}
        imgAlt="Abstract depiction of theme blocks drawn by Simon Mosse">
        <p>
          Formally released in June 2025 as part of the ‘Horizons’ Shopify
          edition, theme blocks are proving divisive among the developers of
          Shopify themes.
        </p>
        <p>
          Are they one of the most exciting updates Shopify has ever shipped, or
          the product of a Shopify executive looking to justify a bonus?
        </p>
        <p>
          Eight months on from their release, we speak to a variety of
          developers to find out why opinions are still so split.
        </p>
      </TextBesideImg>
      <hr style={{ marginTop: "1rem" }} />
      <section>
        <h2>What are theme blocks?</h2>
        <p>
          In short, ‘theme blocks’ are designed to be an alternative to the
          traditional ‘section blocks’ which are tied to the section they are
          coded for. If you have a ‘button’ section block within a rich text
          section but want to use the same block within an ‘image-with-text’
          section, you need to manually copy the block’s code and settings from
          section to section.
        </p>
        <p>
          In contrast, theme blocks are re-usable across sections and nestable
          within each other. This allows them to be far more modular and
          versatile within the theme editor.
        </p>
        <p>
          If you aren’t familiar with theme blocks, the{" "}
          <a href="https://shopify.dev/docs/storefronts/themes/architecture/blocks">
            Shopify Blocks documentation
          </a>{" "}
          provides further detail.
        </p>
        <h2>What makes theme blocks important?</h2>
        <p>
          As the name might suggest, building a theme with section blocks feels
          very section focused. Sections are tailor made for their purpose and
          then slotted together to make the theme. Elements like buttons or
          image wrappers can be reused between sections using{" "}
          <a href="https://shopify.dev/docs/storefronts/themes/architecture/snippets">
            snippets
          </a>
          .
        </p>
        <p>
          Building a theme oriented around theme blocks changes the focus to the
          blocks themselves, with sections feeling more like vehicles for those
          blocks.
        </p>
        <p>
          As sections can’t use both section blocks and theme blocks, developers
          with themes on the Shopify store are left with a dilemma.
        </p>
        <p>
          If you want to incorporate theme blocks within a section, the section
          needs to be rebuilt with theme blocks in mind, and the rebuild would
          then break all the merchants’ settings when they update their
          theme.&nbsp;
        </p>
        <p>
          As Thomas<strong>, </strong>Technical Director and Founder of{" "}
          <a href="https://brickspacelab.com/">Brickspace Lab</a> put it to me:
        </p>
        <blockquote>
          <p>
            “We are building a new ‘theme block’ powered theme that will be the
            foundation for all future themes. It&apos;s not really possible for
            us to update our current themes without introducing many breaking
            changes.”
          </p>
        </blockquote>
        <p>
          Michaël Gallego, lead developer of{" "}
          <a href="https://maestrooo.com/">Maestrooo</a> themes described how
          they have been burned by large Shopify updates before, when a colour
          scheme update broke for a lot of merchants when they tried to update.
        </p>
        <blockquote>
          <p>
            “Theme blocks being a much bigger change, this is a no-go for us for
            our existing themes. For newer themes (for instance Stretch) we
            adopted theme blocks where it made sense. When we released the theme
            there were unfortunately too many limitations on theme blocks that
            did not allow us to adopt them more.”
          </p>
        </blockquote>
        <p>
          Michaël would like to see Shopify introduce improvements to their
          theme upgrade system, which is fortunately in the works{" "}
          <a href="https://community.shopify.com/t/theme-update-with-custom-code/556051/3?u=davidprice">
            according to an August Ask Me Anything run by Shopify staff
          </a>
          .
        </p>
        <p>
          Mitch, content creator for{" "}
          <a href="https://www.cleancanvas.co.uk/">Clean Canvas</a>, believes
          theme blocks negatives outweigh their positives to the extent that
          they won’t be working with them until improvements are made:
        </p>
        <blockquote>
          <p>
            “I think it&apos;s unnecessary, I think someone at Shopify needed to
            justify a bonus or something…We honestly hope that Shopify looks at
            this, and is like, ‘yeah, this isn&apos;t good. We need to redesign
            this or get rid of it’... We&apos;re not to do a thing for now,
            we&apos;re way too focused on other tasks to really consider trying
            to do this, and we don&apos;t like the idea of having to create new
            themes for this. We&apos;re currently not working with theme blocks
            at the moment. We are going to continue to focus on our themes, and
            add new features to them. That&apos;s our priority.”
          </p>
        </blockquote>
        <h2>What do theme blocks mean for merchants?</h2>
        <p>
          Theme blocks give merchants more power to shape their themes how they
          wish, while increasing the risk of confusion within the theme editor.
          With the ability to nest 8 levels of theme blocks, there is a
          consensus among developers that theme blocks have a steeper learning
          curve for merchants than section blocks.
        </p>
        <p>
          In their{" "}
          <a href="https://ultramarinastudios.com/blog/why-primavera-went-all-in-on-shopify-theme-blocks/">
            June blog
          </a>
          , ​​theme studio Ultramarina laid out how they’ve tried to flatten
          that learning curve:
        </p>
        <blockquote>
          <p>
            “From our past experience working with other site builders, we knew
            that merchants could easily be overwhelmed by too many levels of
            nesting. We chose to forgo generic wrapper blocks, even if it meant
            losing some flexibility, if it meant for a smoother merchant
            experience… We also focused on exposing global theme blocks only
            where they made the most sense, such as rich text sections and other
            areas where merchants need dynamic content flexibility. In order for
            a block to be considered a global theme block, we had to come up
            with a valid use case for it in more than two sections.”
          </p>
        </blockquote>
        <p>
          Michaël worries there is a setup fatigue for merchants with theme
          blocks. With section blocks, adding a section would often only involve
          filling out a few settings. With theme blocks, adding a section
          involves adding and clicking into more blocks to fill out each of
          their block settings.
        </p>
        <p>
          Many developers feel the theme editor hasn’t kept up with the
          functionality theme blocks offer, but believe there are plenty of
          avenues for improvement. Suggestions include:
        </p>
        <ul>
          <li>
            <p>The ability to collapse block/section settings</p>
          </li>
          <li>
            <p>The ability to drag and drop blocks between blocks</p>
          </li>
          <li>
            <p>
              The ability to multi-select blocks and sections so they can be
              dragged or copied at the same time
            </p>
          </li>
          <li>
            <p>
              Building on the preset system to make setting up sections with
              theme blocks easier
            </p>
          </li>
          <li>
            <p>A theme setup page where the common components can be managed</p>
          </li>
        </ul>
        <hr style={{ marginTop: "3rem" }} />
        <h2>What is the future of theme blocks?</h2>
        <p>
          The decision to split themes into more modular and compartmentalised
          elements makes sense in the context of Shopify’s increasing focus on
          AI. It’s no coincidence that AI generated blocks and theme blocks were
          formally released within the same Shopify Edition, and they have
          served as a springboard for the empowered AI generation within the
          recently released{" "}
          <a href="https://www.shopify.com/editions/winter2026">
            Renaissance Edition
          </a>
          .
        </p>
        <p>
          You can find a complete spectrum of developer opinions on theme
          blocks, from those who won’t touch them at all in their current state,
          to Ultramarina who “think [theme blocks] is one of the most exciting
          updates Shopify has ever shipped”.
        </p>
        <p>
          However, there is a general consensus that improvements could have
          been made, and with Shopify’s direction towards structures that are as
          AI friendly as possible, hopefully a lot of those improvements are on
          the way.
        </p>
      </section>
      <hr style={{ marginTop: "3rem" }} />
      <section style={{ marginBottom: "3rem" }}>
        <p style={{ textAlign: "center" }}>
          <i>
            First published on the Thought & Mortar website. Blog image drawn by{" "}
            <a href="https://simonmosse.com/">Simon Mosse</a>.
          </i>
        </p>
      </section>
    </>
  );
}
