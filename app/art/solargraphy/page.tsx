import { Metadata } from "next";
import Image from "next/image";

import Solar from "@/src/svgs/solar";
import StandardCentralText from "@/src/components/standard-central-text";
import FullWidthImage from "@/src/components/full-width-img";

import image8 from "@images/solargraphy/solargraph-image-8.jpg";
import image8NoStreaks from "@images/solargraphy/solargraph-image-8-no-streaks.jpg";
import image17 from "@images/solargraphy/solargraph-image-17.jpg";
import image28 from "@images/solargraphy/solargraph-image-28.jpg";
import image28Zoom from "@images/solargraphy/solargraph-image-28-zoom.jpg";
import image28ZoomView from "@images/solargraphy/solargraph-image-28-zoom-view.jpg";
import image34 from "@images/solargraphy/solargraph-image-34.jpg";
import image35 from "@images/solargraphy/solargraph-image-35.jpg";
import image36 from "@images/solargraphy/solargraph-image-36.jpg";
import image44 from "@images/solargraphy/solargraph-image-44.jpg";
import image50 from "@images/solargraphy/solargraph-image-50.jpg";
import image50Inverted from "@images/solargraphy/solargraph-image-50-inverted.jpg";
import image62 from "@images/solargraphy/solargraph-image-62.jpg";
import image73 from "@images/solargraphy/solargraph-image-73.jpg";
import Morph from "@/src/components/morph";

import solarStyles from "@styles/solargraphy.module.scss";
import styles from "@styles/index.module.scss";

export const metadata: Metadata = {
  title: "Solargraphy | David Price",
  description:
    "Pinhole photography aimed at the sky to capture the path of the sun each day",
};

export default function Page() {
  return (
    <>
      <section className={styles.index_title_ban}>
        <div className={styles.index_title_ban_text}>
          <h1 className={styles.index_title}>Solargraphy</h1>
        </div>
        <Solar />
      </section>
      <section>
        <FullWidthImage
          img={image35}
          imgAlt="Solargraph of my parents house in Herefordshire, with the road visible in the foreground"
        />
        <StandardCentralText headerText="The Sun written in silver">
          <p>
            Solargraphy is a photographic technique in which a fixed pinhole
            camera is pointed at the Sun and used to expose photographic paper
            for weeks, months or even years.
          </p>
        </StandardCentralText>
      </section>
      <section>
        <FullWidthImage
          img={image34}
          imgAlt="Solargraph of my parents house in Herefordshire"
        />
        <StandardCentralText>
          <p>
            Due to the length of the exposure time, the movement of the sun
            across the sky is often visible, which each individual streak being
            the path the Sun took each day.
          </p>
        </StandardCentralText>
      </section>
      <section>
        {/* @todo fix morph */}
        <Morph>
          <Image
            src={image8}
            alt="Solargraph from my parents house in Herefordshire"
          />
          <Image
            src={image8NoStreaks}
            alt="Solargraph from my parents house in Herefordshire with no streaks"
          />
        </Morph>
        <StandardCentralText>
          <p>
            My solargraphy started as a hobby in 2012, but eventually became my
            3rd year exhibition project at Aberystwyth University in 2014.
          </p>
          <p>
            During this time, I set up over 120 pinhole cameras across
            Herefordshire and Ceredigion resulting in 74 different solargraphs.
          </p>
        </StandardCentralText>
      </section>
      <section>
        <Morph>
          <Image
            src={image50}
            alt="Solargraph from my parents house that has been heavily affected by mould"
          />
          <Image
            src={image50Inverted}
            alt="Solargraph before it has been digitally inverted"
          />
        </Morph>
        <StandardCentralText>
          <p>
            Solargraphs have their iconic deep blue hue because when first
            retrieved from its pinhole camera, the photographic paper is a
            brown/orange because of its over-exposure to white light.
          </p>
          <p>
            As the paper is used as a negative and the brown is digitally
            inverted giving the final image its signature colour scheme.
          </p>
        </StandardCentralText>
      </section>
      <section>
        <FullWidthImage
          img={image17}
          imgAlt="Solargraph that didn't catch any sun but does have interesting mould patterns"
        />
        <StandardCentralText>
          <p>
            For me the allure of solargraphs are their uniqueness. Although the
            camera is fixed, it evolves with the image as the world swirls
            around them with hundreds of different factors coming together to
            decide the apperance of the final image that has a story unlike any
            other medium of&nbsp;art.
          </p>
          <p>
            Despite the above Solargraph only being up for 2 months in 2012,
            mould started to eat the photographic paper&apos;s gelatine, causing
            the blank areas around the&nbsp;edges.
          </p>
        </StandardCentralText>
      </section>
      <section>
        <FullWidthImage img={image44} imgAlt="Solargraph of Goodrich Castle" />
        <StandardCentralText>
          <p>
            While they are intended to be fixed, the cameras often get moved
            around which can leave multiple exposures of the Sun and the
            camera&pos;s surrounding area.
          </p>
          <p>
            Exposed between July 2012 and April 2013, &quot;Image 44&quot; came
            from the least water logged camera of a batch of 4 that were
            positioned at Goodrich Castle, Herefordshire.
          </p>
        </StandardCentralText>
      </section>
      <section>
        <FullWidthImage
          img={image62}
          imgAlt="Solargraph of the Aberystwyth coast featuring lots of insect faeces"
        />
        <StandardCentralText>
          <p>
            If the pinhole is large enough, insects will often nest in the
            camera and leave faeces on the paper. Birds and sheep can heavily
            damage cameras or destory them completely.
          </p>
          <p>
            Human error can also play a big part. My first three solargraphs
            were black and white because I mistakingly developed them chemically
            instead of scanning them immediately. Finger prints, hairs and ink
            feature in the solargraphs which I could have handled better.
          </p>
          <p>
            &quot;Image 62&quot; is one such Solargraph that features both
            insect activity and fingerprints. The camera was pointed towards the
            Aberystwyth coast between June and October 2013. The sea&apos;s
            horizon is just visible in the centre of the image and several
            exposures of cliffs can be seen beneath the Sun streaks.
          </p>
        </StandardCentralText>
      </section>
      <section>
        <FullWidthImage
          img={image36}
          imgAlt="Solargraph of a field with a church in the background"
        />
        <StandardCentralText>
          <p>
            &quot;Image 36&quot; was exposed between August 2012 and April 2013.
            As the camera stayed very still during its exposure, there is a
            large amount of detail present including the village church on the
            horizon.
          </p>
          <p>
            This solargraph was my first that clearly shows seasonal change in
            the foliage. The sun streaks are hidden where the summer leaves used
            to be, but the leafless branches show clearly from the winter
            months.
          </p>
          <p>
            Unexplainable squiggly green marks feature in the foreground, adding
            even more character.
          </p>
        </StandardCentralText>
      </section>
      <section>
        <div className={solarStyles.dual_images}>
          <div>
            <Image src={image28} alt="Solargraph of Aberystwyth" />
          </div>
          <div>
            <Morph>
              <Image
                src={image28ZoomView}
                alt="View of Aberystwyth to compare with the Solargraph"
              />
              <Image
                src={image28Zoom}
                alt="Cropped Solargraph of Aberystwyth"
              />
            </Morph>
          </div>
        </div>
        <StandardCentralText>
          <p>
            A pinhole camera&apos;s angle of vision is decided by the size of
            the pinhole and the size of the camera itself.
          </p>
          <p>
            Above is &quot;Image 28&quot;, which shows just how large a
            solargraph&apos;s angle of vision can be. It seems to have kept
            relatively still during its exposure between May 2012 and September
            2012, giving a great view of the Welsh coast.
          </p>
          <p>
            While it was pointed directly at Aberystwyth, its large angle of
            vision means that the town only takes up a small area in the centre
            of the solargraph.
          </p>
        </StandardCentralText>
      </section>
      <section>
        <FullWidthImage
          img={image73}
          imgAlt="Solargraph of a field with the fence it is attached to clearly visible on the right"
        />
        <StandardCentralText>
          <p>
            &quot;Image 73&quot; boasts one of the highest levels of detail in
            any of my solargraphs.
          </p>
          <p>
            Although positioned for a relatively short exposure of 5 weeks in
            2014, the camera appears to have stayed relatively still, giving a
            clear view of the fence that the camera was attached to.
          </p>
        </StandardCentralText>
      </section>
    </>
  );
}
