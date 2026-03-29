import { Metadata } from "next";
import Image from "next/image";

import LogoShowcase from "@/src/components/logo-showcase";
import StandardCentralText from "@/src/components/standard-central-text";
import TitleBanner from "@/src/components/title-banner";

import AberInspiredImg from "@images/aber-design/aber-inspired.png";
import AberInspiredWelshImg from "@images/aber-design/aber-inspired-welsh.png";
import IllcaImg from "@images/aber-design/illca-logo.png";
import StepForwardImg from "@images/aber-design/step-forward-poster.jpg";
import StepForwardWelshImg from "@images/aber-design/step-forward-poster-welsh.jpg";

import styles from "@styles/aber.module.scss";

export const metadata: Metadata = {
  title: "AberForward Graphic Design | David Price",
  description:
    "I spent 5 weeks working as an Exhibition Co-ordinator at Aberystwyth University",
};

export default function FreelanceLogo() {
  return (
    <>
      <TitleBanner>
        <h1>Aberystwyth University</h1>
      </TitleBanner>
      <LogoShowcase bgColor="white">
        <Image src={IllcaImg} alt="Aberystwyth university ILLCA logo" />
      </LogoShowcase>
      <StandardCentralText headerText="Graphic design for Aberystwyth University">
        <p>
          In 2014, I spent 5 weeks working as an Exhibition Co-ordinator at
          Aberystwyth University as part of the &apos;AberForward&apos;
          post-graduate scheme. This position was my first taste of professional
          graphic desing.
        </p>
        <p>
          Above is the logo I created for the Institute of Literature, Languages
          & Creative Arts department of the university.
        </p>
      </StandardCentralText>
      <section>
        <div className={styles.be_inspired_con}>
          <Image
            src={AberInspiredWelshImg}
            alt="Aberystwyth University 'Be Inspired' Welsh logo"
          />
          <Image
            src={AberInspiredImg}
            alt="Aberystwyth University 'Be Inspired' English logo"
          />
        </div>
      </section>
      <StandardCentralText headerText="Be Inspired">
        <p>
          As a Welsh university, every design I created had to have a Welsh and
          English version, with the Welsh version featuring first.
        </p>
        <p>
          Catering for both languages was particularly difficult for the above
          project, where I designed a logo for a department wide competition
          called &apos;Be Inspired&apos;.
        </p>
      </StandardCentralText>
      <section>
        <div className={styles.step_forward_con}>
          <Image
            src={StepForwardWelshImg}
            alt="Aberystwyth University 'Step Forward' Welsh poster"
          />
          <Image
            src={StepForwardImg}
            alt="Aberystwyth University 'Step Forward' English poster"
          />
        </div>
      </section>
      <StandardCentralText headerText="Step Foward">
        <p>
          The above posters were created for an ILLCA careers event called
          &apos;Step Forward&apos;.
        </p>
        <p>
          If I were to redo the task, I would try removing the box pattern as
          currently the design feels too busy and I&apos;d prefer more attention
          be brought to the text.
        </p>
      </StandardCentralText>
    </>
  );
}
