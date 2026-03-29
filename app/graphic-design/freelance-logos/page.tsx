import { Metadata } from "next";
import Image from "next/image";

import LogoShowcase from "@/src/components/logo-showcase";
import StandardCentralText from "@/src/components/standard-central-text";
import TitleBanner from "@/src/components/title-banner";

import EuroZone from "@images/freelance-logos/eurozone-tuning.png";
import Ozone from "@images/freelance-logos/ozone-gaming.jpg";
import Springholm from "@images/freelance-logos/springholm-wells-farm.jpg";
import TheComInsu from "@images/freelance-logos/the-commercial-insurance-broker.png";
import Waga from "@images/freelance-logos/wagamama-logo.jpg";

export const metadata: Metadata = {
  title: "Freelance Logos | David Price",
  description:
    "Commissioned and practice logos created before I got my first full-time job in the industry",
};

export default function FreelanceLogo() {
  return (
    <>
      <TitleBanner>
        <h1>Freelance logos</h1>
      </TitleBanner>
      <LogoShowcase bgColor="#EDEDED">
        <Image src={Springholm} alt="Springholm summer retreat camp logo" />
      </LogoShowcase>
      <StandardCentralText headerText="Springholm Wellness Farm">
        <p>
          Created for a summer retreat camp that requested a logo on{" "}
          <a href="https://www.reddit.com/r/logorequests/" rel="nofollow">
            /r/logorequests
          </a>
          .
        </p>
        <p>
          My aim was to capture the sense of wonder and tranquility that I got
          from going camping as a child.
        </p>
      </StandardCentralText>
      <LogoShowcase bgColor="#CC3134">
        <Image src={EuroZone} alt="EuroZone Tuning Logo" />
      </LogoShowcase>
      <StandardCentralText headerText="EuroZone Tuning">
        <p>
          A commissioned logo for automotive parts vendor &apos;EuroZone
          Tuning&apos; who are based in Connecticut.
        </p>
        <p>
          I chose Vremena Grotesk as a font for its industrial and authoritative
          appearence.
        </p>
      </StandardCentralText>
      <LogoShowcase bgColor="white">
        <Image src={TheComInsu} alt="The Commercial Insurance Broker logo" />
      </LogoShowcase>
      <StandardCentralText headerText="The Commercial Insurance Broker">
        <p>
          A commissioned logo for the &apos;The Commercial Insurance
          Broker&apos;, a trading name of &apos;Mortgage Broker Ltd&apos;.
        </p>
        <p>
          The four icons represent the companies specialties of fleet, offices,
          trades and general liability.
        </p>
      </StandardCentralText>
      <LogoShowcase bgColor="#FFF8FF">
        <Image src={Waga} alt="Wagamama DOTA 2 logo" />
      </LogoShowcase>
      <StandardCentralText headerText="Wagamama DOTA 2 streamer">
        <p>
          Logo created for professional video game streamer Niklas
          &apos;Wagamama&apos; Högström who broadcasts his games of DOTA 2 to
          thousands via the streaming service Twitch.
        </p>
        <p>
          The logo features a character from the game itself which Niklas
          already used prominently in his own marketing.
        </p>
        <p>
          If I were to remake the logo, I would simplify the character, possibly
          making them just a silhouette.
        </p>
      </StandardCentralText>
      <LogoShowcase bgColor="white">
        <Image src={Ozone} alt="Ozone gaming logo" />
      </LogoShowcase>
      <StandardCentralText headerText="Ozone Gaming">
        <p>
          Logo created for a requested on{" "}
          <a href="https://www.reddit.com/r/logorequests/" rel="nofollow">
            /r/logorequests
          </a>{" "}
          by a gaming team called &apos;Ozone Gaming&apos;.
        </p>
        <p>
          I feel the majority of gaming logos come across pretty garish, but I
          was content that this design looks professional enough to avoid that.
        </p>
      </StandardCentralText>
    </>
  );
}
