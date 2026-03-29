import { Metadata } from "next";
import Image from "next/image";
import TextBesideImg from "@/src/components/text-beside-img";
import TitleBanner from "@/src/components/title-banner";

import pfDogBreedImg from "@images/t&m/perfectfit-dog-breed-product-page.jpg";
import bbgImg from "@images/t&m/bristol-blue-glass-engraving.png";
import wowShelvingImg from "@images/t&m/wow-shelving-product-page.jpg";
import lillicocoImg from "@images/t&m/lillicoco-ring-resizing.png";

import styles from "@styles/showcasepage.module.scss";

export const metadata: Metadata = {
  title: "Thought & Mortar | David Price",
  description:
    "Full-time position as a Front-end Shopify Developer for Bristol-based agency Thought & Mortar",
};

export default function SwiisDigital() {
  return (
    <>
      <TitleBanner>
        <h1>Thought & Mortar</h1>
      </TitleBanner>
      <section>
        <div className={styles.intro_con}>
          <div
            className={styles.logo_con}
            style={{ backgroundColor: "#2e2e2e" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 114.724 50.508">
              <g
                id="Group_378"
                data-name="Group 378"
                transform="translate(-20.496 -29.917)">
                <path
                  id="_mor"
                  data-name="×mor"
                  d="M6.667,4.967,11.616,0l1.659,1.627L8.327,6.594l5.008,5.025L11.616,13.3,6.638,8.366,1.689,13.3,0,11.62,5.008,6.681.029,1.627,1.689,0Z"
                  transform="translate(20.496 66.558)"
                  fill="#afff2b"></path>
                <path
                  id="thought"
                  d="M71.549,28.932a10.7,10.7,0,0,1-3.625-.654,9.266,9.266,0,0,1-3.13-1.844l1.747-2.12A6.613,6.613,0,0,0,68.8,25.941a6.721,6.721,0,0,0,2.78.609,5.954,5.954,0,0,0,2.3-.392,3.845,3.845,0,0,0,1.5-1.075,4.174,4.174,0,0,0,.815-1.613,7.786,7.786,0,0,0,.248-2V19.7h-.059a4.874,4.874,0,0,1-2.067,1.772,6.57,6.57,0,0,1-2.8.61,7.284,7.284,0,0,1-2.868-.552,6.459,6.459,0,0,1-2.2-1.511,6.817,6.817,0,0,1-1.4-2.251,7.733,7.733,0,0,1-.495-2.774,7.856,7.856,0,0,1,.495-2.789,6.962,6.962,0,0,1,1.4-2.28,6.557,6.557,0,0,1,2.184-1.539,7,7,0,0,1,2.853-.567,6.6,6.6,0,0,1,2.839.64A4.905,4.905,0,0,1,76.47,10.4h.057V8.192h2.65V21.263a10.947,10.947,0,0,1-.379,2.891,6.3,6.3,0,0,1-1.281,2.441,6.452,6.452,0,0,1-2.358,1.7A9.041,9.041,0,0,1,71.549,28.932Zm.407-18.852a4.425,4.425,0,0,0-3.363,1.437,4.4,4.4,0,0,0-.9,1.54,5.732,5.732,0,0,0-.307,1.873,5.524,5.524,0,0,0,.307,1.83,4.5,4.5,0,0,0,2.344,2.615,4.39,4.39,0,0,0,1.92.407,4.814,4.814,0,0,0,1.922-.378,4.429,4.429,0,0,0,1.485-1.031,4.658,4.658,0,0,0,.946-1.54,5.372,5.372,0,0,0,.334-1.9,5.178,5.178,0,0,0-.334-1.859,4.673,4.673,0,0,0-2.446-2.6A4.569,4.569,0,0,0,71.956,10.08ZM52.9,22.339a5.671,5.671,0,0,1-2.315-.436,4.27,4.27,0,0,1-1.6-1.206,5.159,5.159,0,0,1-.932-1.787,7.577,7.577,0,0,1-.305-2.179V8.192h2.737V15.8a9.594,9.594,0,0,0,.131,1.613,3.841,3.841,0,0,0,.479,1.351,2.61,2.61,0,0,0,.961.93,3.156,3.156,0,0,0,1.572.348,3.315,3.315,0,0,0,2.678-1.235,5.039,5.039,0,0,0,1.019-3.3V8.192h2.737V19c0,.358.01.824.029,1.423.019.569.048,1.087.086,1.54H57.586c-.039-.354-.068-.749-.088-1.176s-.028-.791-.028-1.09h-.059a4.522,4.522,0,0,1-1.761,1.873A5.124,5.124,0,0,1,52.9,22.339Zm-16.238,0a8,8,0,0,1-2.94-.538,6.981,6.981,0,0,1-2.358-1.511,7.117,7.117,0,0,1-1.558-2.31,7.467,7.467,0,0,1-.567-2.933,7.371,7.371,0,0,1,.567-2.92,7.006,7.006,0,0,1,1.558-2.28,7.08,7.08,0,0,1,2.358-1.5,8.3,8.3,0,0,1,5.881,0,7.243,7.243,0,0,1,2.373,1.5,6.885,6.885,0,0,1,1.572,2.28,7.35,7.35,0,0,1,.569,2.92,7.445,7.445,0,0,1-.569,2.933,6.993,6.993,0,0,1-1.572,2.31A7.14,7.14,0,0,1,39.6,21.8,8,8,0,0,1,36.661,22.339Zm0-12.259a4.545,4.545,0,0,0-1.965.407,4.276,4.276,0,0,0-1.441,1.089,4.8,4.8,0,0,0-.888,1.583,5.968,5.968,0,0,0,0,3.776,4.96,4.96,0,0,0,.888,1.6,4.188,4.188,0,0,0,1.441,1.1,4.947,4.947,0,0,0,3.93,0,4.2,4.2,0,0,0,1.442-1.1,4.96,4.96,0,0,0,.888-1.6,5.992,5.992,0,0,0,0-3.776,4.8,4.8,0,0,0-.888-1.583,4.285,4.285,0,0,0-1.442-1.089A4.545,4.545,0,0,0,36.661,10.08Zm69.918,12.113a3.964,3.964,0,0,1-2.984-1.075,4.5,4.5,0,0,1-1.034-3.224V10.429H99.912V8.192h2.649V4.241h2.708v3.95h3.668v2.237h-3.668V17.6a2.738,2.738,0,0,0,.465,1.787,1.876,1.876,0,0,0,1.485.538,4.173,4.173,0,0,0,.815-.088,3.114,3.114,0,0,0,.786-.261l.088,2.236a6.588,6.588,0,0,1-1.092.276A7.307,7.307,0,0,1,106.579,22.193Zm-99.912,0a3.964,3.964,0,0,1-2.984-1.075,4.5,4.5,0,0,1-1.034-3.224V10.429H0V8.192H2.649V4.241H5.357v3.95H9.025v2.237H5.357V17.6a2.738,2.738,0,0,0,.465,1.787,1.876,1.876,0,0,0,1.485.538,4.173,4.173,0,0,0,.815-.088,3.114,3.114,0,0,0,.786-.261L9,21.815a6.587,6.587,0,0,1-1.092.276A7.307,7.307,0,0,1,6.667,22.193Zm80.65-.23H84.58V0h2.737V10.284h.059A4.276,4.276,0,0,1,89.065,8.54a5.076,5.076,0,0,1,2.678-.726,5.409,5.409,0,0,1,2.3.45,4.677,4.677,0,0,1,1.6,1.206,4.885,4.885,0,0,1,.946,1.772A7.577,7.577,0,0,1,96.9,13.42v8.54H94.16V14.35a9.473,9.473,0,0,0-.131-1.6,3.879,3.879,0,0,0-.481-1.337,2.638,2.638,0,0,0-.946-.928,3.077,3.077,0,0,0-1.558-.35,3.374,3.374,0,0,0-2.678,1.235,4.949,4.949,0,0,0-1.048,3.3v7.291Zm-71.028,0H13.552V0h2.737V10.284h.059A4.28,4.28,0,0,1,18.036,8.54a5.083,5.083,0,0,1,2.678-.726,5.412,5.412,0,0,1,2.3.45,4.686,4.686,0,0,1,1.6,1.206,4.885,4.885,0,0,1,.946,1.772,7.577,7.577,0,0,1,.305,2.179v8.54H23.13V14.35a9.347,9.347,0,0,0-.131-1.6,3.851,3.851,0,0,0-.479-1.337,2.638,2.638,0,0,0-.946-.928,3.077,3.077,0,0,0-1.558-.35,3.37,3.37,0,0,0-2.678,1.235,4.949,4.949,0,0,0-1.048,3.3v7.291Z"
                  transform="translate(25.133 29.917)"
                  fill="#fff"></path>
                <path
                  id="mortar"
                  d="M32.426,18.135a8.023,8.023,0,0,1-2.94-.537,6.956,6.956,0,0,1-2.358-1.511,7.1,7.1,0,0,1-1.558-2.31A7.449,7.449,0,0,1,25,10.843a7.347,7.347,0,0,1,.568-2.919,6.966,6.966,0,0,1,1.558-2.28,7.037,7.037,0,0,1,2.358-1.5,8.3,8.3,0,0,1,5.881,0,7.234,7.234,0,0,1,2.373,1.5,6.89,6.89,0,0,1,1.572,2.28,7.368,7.368,0,0,1,.567,2.919,7.47,7.47,0,0,1-.567,2.934,7.015,7.015,0,0,1-1.572,2.31A7.149,7.149,0,0,1,35.366,17.6,8.023,8.023,0,0,1,32.426,18.135ZM32.4,5.909a4.562,4.562,0,0,0-1.965.406A4.3,4.3,0,0,0,28.992,7.4,4.81,4.81,0,0,0,28.1,8.988a5.992,5.992,0,0,0,0,3.776,4.967,4.967,0,0,0,.889,1.6,4.188,4.188,0,0,0,1.441,1.1,4.947,4.947,0,0,0,3.93,0,4.188,4.188,0,0,0,1.441-1.1,4.967,4.967,0,0,0,.889-1.6,5.992,5.992,0,0,0,0-3.776A4.81,4.81,0,0,0,35.8,7.4a4.3,4.3,0,0,0-1.441-1.09A4.562,4.562,0,0,0,32.4,5.909Zm39.134,12.16a7.2,7.2,0,0,1-1.7-.217,4.991,4.991,0,0,1-1.615-.712,4.019,4.019,0,0,1-1.208-1.307,3.894,3.894,0,0,1-.481-2,3.535,3.535,0,0,1,.844-2.484,5.368,5.368,0,0,1,2.213-1.394,12.578,12.578,0,0,1,3.085-.624c1.139-.1,2.3-.145,3.464-.145V8.8a2.748,2.748,0,0,0-.931-2.28,3.878,3.878,0,0,0-2.475-.741,5.461,5.461,0,0,0-2.2.45,5.6,5.6,0,0,0-1.733,1.148L67.34,5.635a7.4,7.4,0,0,1,2.489-1.511,8.969,8.969,0,0,1,3.159-.552,7.18,7.18,0,0,1,2.577.422,4.89,4.89,0,0,1,1.791,1.147A4.715,4.715,0,0,1,78.4,6.855a6.353,6.353,0,0,1,.348,2.121V14.99c0,.455.015.949.045,1.466a7.58,7.58,0,0,0,.16,1.264H76.481a8.628,8.628,0,0,1-.233-1.975h-.088a5.323,5.323,0,0,1-1.906,1.713A5.757,5.757,0,0,1,71.532,18.069Zm3.931-6.914c-.671,0-1.382.029-2.111.086a9.868,9.868,0,0,0-1.98.348,3.8,3.8,0,0,0-1.47.785,1.791,1.791,0,0,0-.581,1.4,1.93,1.93,0,0,0,.247,1.016,2.064,2.064,0,0,0,.655.668,2.676,2.676,0,0,0,.9.364,5.092,5.092,0,0,0,1.019.1A3.791,3.791,0,0,0,75.1,14.772a4.181,4.181,0,0,0,1.033-2.891v-.726Zm-14.911,6.8a3.966,3.966,0,0,1-2.985-1.076,4.51,4.51,0,0,1-1.033-3.224V6.187H53.885V3.95h2.649V0h2.708V3.95H62.91V6.187H59.242v7.176a2.731,2.731,0,0,0,.465,1.786,1.871,1.871,0,0,0,1.484.538,4.173,4.173,0,0,0,.815-.088,3.114,3.114,0,0,0,.786-.261l.088,2.237a6.818,6.818,0,0,1-1.091.276A7.436,7.436,0,0,1,60.552,17.953Zm-48.528-.231H9.287V9.528a7.029,7.029,0,0,0-.145-1.482A3.017,3.017,0,0,0,8.647,6.9a2.444,2.444,0,0,0-.9-.755,3.057,3.057,0,0,0-1.368-.276A3.129,3.129,0,0,0,3.857,7.1a5.091,5.091,0,0,0-1,3.3V17.72H.117V6.914c0-.358-.01-.824-.029-1.423S.038,4.377,0,3.95H2.591c.04.353.069.749.088,1.176.02.45.029.807.029,1.09H2.8A4.664,4.664,0,0,1,4.469,4.343a4.8,4.8,0,0,1,2.722-.771,5.012,5.012,0,0,1,2.518.64,4.3,4.3,0,0,1,1.761,2.12,4.948,4.948,0,0,1,1.951-2.048,5.467,5.467,0,0,1,2.737-.712,5.4,5.4,0,0,1,2.3.45,4.662,4.662,0,0,1,1.6,1.206A4.888,4.888,0,0,1,21.005,7a7.534,7.534,0,0,1,.307,2.179v8.539H18.575V10.08a8.407,8.407,0,0,0-.146-1.6,4.069,4.069,0,0,0-.495-1.335A2.685,2.685,0,0,0,17,6.217a2.865,2.865,0,0,0-1.485-.348,3.135,3.135,0,0,0-1.6.392,3.339,3.339,0,0,0-1.091,1.017,4.3,4.3,0,0,0-.612,1.408,6.851,6.851,0,0,0-.19,1.6V17.72Zm74.859,0H84.145V6.914c0-.358-.01-.824-.029-1.423-.019-.569-.048-1.087-.086-1.54H86.62c.039.354.068.759.088,1.206s.028.82.028,1.119h.088a4.787,4.787,0,0,1,1.7-1.961,4.492,4.492,0,0,1,2.518-.741,4.254,4.254,0,0,1,1.077.117l-.116,2.527a5.186,5.186,0,0,0-1.251-.145,3.826,3.826,0,0,0-1.718.362,3.541,3.541,0,0,0-1.208.973,4.126,4.126,0,0,0-.713,1.409,5.976,5.976,0,0,0-.233,1.671v7.231Zm-40.455,0H43.69V6.914c0-.39-.01-.869-.029-1.423s-.048-1.087-.086-1.54h2.591c.038.34.067.734.088,1.206s.029.836.029,1.119h.087a4.787,4.787,0,0,1,1.7-1.961,4.494,4.494,0,0,1,2.519-.741,4.268,4.268,0,0,1,1.077.117l-.117,2.527A5.186,5.186,0,0,0,50.3,6.072a3.833,3.833,0,0,0-1.718.362,3.541,3.541,0,0,0-1.208.973,4.126,4.126,0,0,0-.713,1.409,5.975,5.975,0,0,0-.233,1.671v7.231Z"
                  transform="translate(43.098 62.29)"
                  fill="#fff"></path>
              </g>
            </svg>
          </div>
          <div className={styles.intro_text}>
            <p>
              I worked in a full-time position as a Front-end Shopify Developer
              for Bristol-based agency{" "}
              <span className="styles.highlight">Thought & Mortar</span> from
              June 2024 until its closure in March 2026.
            </p>
            <p>My duties included:</p>
            <ul>
              <li>
                Developing custom solutions to meet the needs of a wide variety
                of clients through bespoke theme features;
              </li>
              <li>
                Pushing the boundaries of{" "}
                <span className="styles.highlight">Shopify</span> with custom{" "}
                <span className="styles.highlight">Liquid</span> and{" "}
                <span className="styles.highlight">JavaScript</span> to overcome
                unique challenges;
              </li>
              <li>
                Translating project briefs into comprehensive{" "}
                <span className="styles.highlight">technical scope</span>{" "}
                documents;
              </li>
              <li>
                Bringing Figma designs to life with responsive{" "}
                <span className="styles.highlight">CSS</span>;
              </li>
            </ul>
          </div>
        </div>
        <ul className={styles.intro_textContin}>
          <li>
            Managing multiple <span className="styles.highlight">CI/CD</span>{" "}
            Git-to-Shopify pipelines at once;
          </li>
          <li>
            Writing approachable client{" "}
            <span className="styles.highlight">documentation</span> which also
            breaks down technical details to help clients feel empowered;
          </li>
          <li>
            Using JavaScript within{" "}
            <span className="styles.highlight">Google Scripts</span> to
            manipulate spreadsheets ready for import;
          </li>
          <li>
            Helping businesses set up their first E-commerce store, migrate from
            other systems like Adobe Commerse and eBay, or update from Shopify
            themes from 1.0 to 2.0;
          </li>
          <li>
            Utilising <span className="styles.highlight">AI</span> as a tool to
            enhance my work and increase productivity, while keeping the core of
            my work distinctly human.
          </li>
        </ul>
      </section>
      <section>
        <h3>PerfectFit</h3>
        <p>
          <a href="https://perfect-fit-dog-harness.com/">PerfectFit</a> were on
          Adobe Commerce and overly reliant on customers using their
          &apos;Harness Calculator&apos; to find the right size harness for
          their dog. The customer would input their dog&apos;s
          breed/measurements and the calculator would link them to the
          appropriate harness, but there wasn&apos;t any recognition of the
          dog&apos;s breed or specific measurements after that, so it was easy
          to get confused as to which harness was recommended.
        </p>
        <Image
          className="img"
          src={pfDogBreedImg}
          alt="Desktop screenshot of the PerfectFit dog breed product page"
          style={{ marginBottom: "16px" }}
        />
        <h4>Dog breeds products</h4>
        <p>
          As part of their move from Adobe Commerce to Shopify and the
          &apos;Habitat&apos; theme, I theorised and implemented{" "}
          <a href="https://perfect-fit-dog-harness.com/products/border-collie-harness">
            &apos;dog breed&apos; products
          </a>
          . We added them as products to their Shopify store, but they are never
          intended to actually be purchased. Instead, they are just a vector for
          purchasing the appropriate harnesses for that size of dog breed
          without disrupting the product structure PerfectFit were used to.
        </p>
        <p>
          &apos;Fit&apos; metaobjects within a metafield store which size dog
          should have which sized harness, and when the &apos;Harness
          selector&apos; inputs are changed by the customer, the{" "}
          <span className="styles.highlight">Section Rendering API</span>{" "}
          updates the UI around the appropriate harness.
        </p>
        <p>
          An important <span className="styles.highlight">SEO</span> benefit was
          that it gave PerfectFit the perfect pages to rank for searches like
          &apos;harness for border collie&apos; or &apos;husky harness&apos;.
        </p>
        <p>Challenges that I overcame implementing this system included:</p>
        <ul>
          <li>
            Setting up a query string system so that customers can return to the
            breed/size/puller/variant that they were viewing previously;
          </li>
          <li>
            Ensuring the customer stays on the same color option when moving
            between harnesses;
          </li>
          <li>
            Updating the variant image in the gallery when moving between
            harnesses and variants;
          </li>
          <li>
            Customizing the Google Structured Data so dog breed harnesses appear
            as a `productGroup`, with the harnesses as products within it.
          </li>
        </ul>
        <h4>Harness finder</h4>
        <p>
          We also kept the{" "}
          <a href="https://perfect-fit-dog-harness.com/harness-finder">
            Harness Finder
          </a>{" "}
          available as an additional avenue for customers to find the correct
          harness.
        </p>
        <p>
          I coded the new version from scratch to work with the new dog breed
          pages, and added new{" "}
          <span className="styles.highlight">Google Analytics 4</span> events
          that fire when a customer succeeds or fails to get a result.
        </p>
        <p>
          These events carry all the form data as parameters, allowing
          PerfectFit to see which breeds/sizes are most commonly searched for.
          This will help inform them which new dog breeds they should add to the
          store and which new fits they should add for existing breeds.
        </p>
        <h4>Collection template promo cards</h4>
        <p>
          T&M&apos;s previous system for promo cards had clients creating a
          metaobject entry with the cards&apos; text/layout/colours etc as
          inputs, assigning the metaobject to a collection&apos;s metafield,
          then assigning the promo card an order in the grid using the section
          settings.
        </p>
        <p>
          As the card&apos;s settings were assigned outside of the theme, if you
          changed a setting like its layout, you would need to then open the
          theme to see what your change looked like.
        </p>
        <p>
          I created a new system for PerfectFit which ditched metaobjects or
          metafields. Promo cards are added as{" "}
          <span className="styles.highlight">theme blocks</span> to the product
          grid of a collection template. The promo card block has
          layout/order/shape/colour settings. Any number of buttons, images,
          text, or graphics can be nested as blocks within the promo block in
          any order.
        </p>
        <p>
          The promo cards don&apos;t interfere with the pagination as I added an
          additional loop to the section which fills the gap on pages where the
          promo cards aren&apos;t rendered.
        </p>
      </section>
      <TextBesideImg
        headerText="Bristol Blue Glass"
        img={bbgImg}
        portraitImg={true}
        maxImgWidth={280}
        imgAlt="Mobile screenshot of the engraving options on a Bristol Blue Glass product page">
        <p>
          Thought & Mortar redesigned the{" "}
          <a href="https://bristol-glass.co.uk">Bristol Blue Glass</a> store,
          when we moved them onto the &apos;Symmetry&apos; Shopify theme.
        </p>
        <p>
          They were paying a monthly fee for a gift wrap app which didn&apos;t
          offer all the functionality they needed, so I created a new system
          using Shopify Liquid and JavaScript.
        </p>
        <p>
          Customers can now purchase the following services on each{" "}
          <a href="https://bristol-glass.co.uk/collections/sculptures/products/abouna-blue-glass-sculpture">
            product page
          </a>
          :
        </p>
        <ul>
          <li>
            Engraving — With settings for the text, font family, and text
            colour;
          </li>
          <li>Gift wrapping;</li>
          <li>A greetings card message.</li>
        </ul>
        <p>
          To the extra cost to the order, hidden items are added to the cart for
          each selected service. Although these items can&apos;t be hidden in
          the checkout, it is clear which service is for which product thanks to
          line item properties on the main product.
        </p>
        <p>
          If the main product is removed from the cart, any services associated
          with it are also removed automatically.
        </p>
        <p>
          As the system relies on JavaScript to work, the services are hidden to
          any users with JavaScript disabled.
        </p>
      </TextBesideImg>
      <section>
        <Image
          className="img"
          src={wowShelvingImg}
          alt="Desktop screenshot of the Wow Shelving product page"
          style={{ marginBottom: "32px" }}
        />
        <h3>Wow Shelving</h3>
        <p>
          As part of their migration from eBay to the &apos;Symmetry&apos;
          Shopify theme, I implemented custom features including:
        </p>
        <ul>
          <li>
            A VAT toggle in the header which uses{" "}
            <span className="styles.highlight">local storage</span> to keep
            track of the customer&apos;s preference;
          </li>
          <li>
            A tile calculator which updates the customer&apos;s item quantity
            based on the area they intend to cover;
          </li>
          <li>
            A discount if the customer is picking up the order from the store —
            Uses JavaScript to add or remove a discount code depending on the
            customer&apos;s selection.
          </li>
        </ul>
      </section>
      <TextBesideImg
        headerText="Lillicoco"
        img={lillicocoImg}
        imgAfterTextOnDesktop={true}
        imgAlt="Mobile screenshot of the ring resizing options on a Lillicoco product page"
        maxImgWidth={280}
        portraitImg={true}>
        <p>
          I was one of several developers to work on the{" "}
          <a href="https://www.lillicoco.com/">Lillicoco</a> store.
        </p>
        <p>
          Using Liquid and JavaScript without any apps, I created a resizing
          block for their{" "}
          <a href="https://www.lillicoco.com/products/art-deco-14ct-gold-cornflower-sapphire-diamond-ring">
            ring product
          </a>{" "}
          pages.
        </p>
        <p>
          As with the Bristol Blue Glass services, the cost of a ring resize is
          added to the order by adding a hidden item to the cart. The boundaries
          and cost of the resizing varies from ring to ring, so I created
          different variants for different costs within the &apos;Ring
          Resize&apos; product.
        </p>
        <p>
          Another feature I worked on was ensuring that orders, which would have
          missed the free delivery threshold because of layaway, actually retain
          their free delivery by adding a hidden item to the cart with JS and
          using an app&apos;s custom shipping rules.{" "}
        </p>
        <p>
          Whenever an item is added or removed from cart, the code calculates
          what the total cost of the order will be after that change, then
          checks if the total is under the threshold with layaway but over the
          threshold without layaway.
        </p>
      </TextBesideImg>
    </>
  );
}
