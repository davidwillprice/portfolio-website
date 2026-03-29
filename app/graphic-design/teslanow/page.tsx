import { Metadata } from "next";
import Image from "next/image";

import FullWidthImage from "@/src/components/full-width-img";
import LogoShowcase from "@/src/components/logo-showcase";
import StandardCentralText from "@/src/components/standard-central-text";
import TitleBanner from "@/src/components/title-banner";

import styles from "@styles/teslanow.module.scss";

import LogoImg from "@images/teslanow/teslanow-logo.png";
import InCarMockup from "@images/teslanow/in-car-mock-up.jpg";
import icons from "@images/teslanow/icon-showcase.jpg";

export const metadata: Metadata = {
  title: "Teslanow Graphic Design | David Price",
  description:
    "Icon, app and website design for a company through freelancer.com.",
};

export default function Teslanow() {
  return (
    <>
      <TitleBanner>
        <h1>Teslanow</h1>
      </TitleBanner>
      <LogoShowcase bgColor="#EDEDED">
        <Image src={LogoImg} alt="TESLANOW logo" />
      </LogoShowcase>
      <StandardCentralText headerText="TESLANOW app, icon and&nbsp;website">
        <p>
          This project was the winning submission to a contest on{" "}
          <a href="https://www.freelancer.com/" rel="nofollow">
            freelancer.com
          </a>{" "}
          to design an icon, app and website for an application called
          &apos;TESLANOW&apos;.
        </p>
      </StandardCentralText>
      <section className={styles.in_car_mockup_con}>
        <Image
          className={styles.in_car_mockup}
          src={InCarMockup}
          alt="Tesla interior"
        />
        <div className={styles.app_spritesheet}></div>
      </section>
      <StandardCentralText>
        <p>
          My app designs would be fleshed out to work inside a Tesla&pos;s web
          browser. My website mock up would be created in HTML and CSS with the
          aim of driving sign ups to the project.
        </p>
      </StandardCentralText>
      <FullWidthImage
        img={icons}
        imgAlt="Showcase of the different icons I made for the TeslaNow project"
      />
      <StandardCentralText headerText="Clean tailor-made&nbsp;icons">
        <p>
          Once I had the colour scheme and logo sorted, the icons and other
          assets came easily.
        </p>
        <p>
          The flat shadow design was popular at the time and helps make the
          icons pop.
        </p>
      </StandardCentralText>
    </>
  );
}
