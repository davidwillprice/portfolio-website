import React from "react"
import Layout from "../../components/layout/layout"
import LogoShowcase from "../../components/logo-showcase"
import Seo from "../../components/head/seo"
import StandardCentralText from "../../components/standard-central-text"
import TitleBanner from "../../components/layout/title-banner"

import Bayouanimal from "../../images/freelance-logos/bayouanimal-gym.jpg"
import EuroZone from "../../images/freelance-logos/eurozone-tuning.png"
import Ozone from "../../images/freelance-logos/ozone-gaming.jpg"
import Springholm from "../../images/freelance-logos/springholm-wells-farm.jpg"
import TheComInsu from "../../images/freelance-logos/the-commercial-insurance-broker.png"
import Waga from "../../images/freelance-logos/wagamama-logo.jpg"

export default function FreelanceLogo() {
  return (
    <Layout>
      <Seo
        title="Freelance logos"
        description="Commissioned and practice logos created before I got my first full-time job in the industry."
      />
      <TitleBanner>
        <h1>freelance logos</h1>
      </TitleBanner>
      <LogoShowcase bgColor="#EDEDED">
        <img src={Springholm} alt="Springholm summer retreat camp logo" />
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
      <LogoShowcase bgColor="white">
        <img src={Bayouanimal} alt="Bayouanimal Gym logo" />
      </LogoShowcase>
      <StandardCentralText headerText="Bayouanimal Gym">
        <p>
          Logo I created using a client provided pencil drawing for an American
          Gym on{" "}
          <a href="https://www.reddit.com/r/logorequests/" rel="nofollow">
            /r/logorequests
          </a>
          .
        </p>
      </StandardCentralText>
      <LogoShowcase bgColor="#CC3134">
        <img src={EuroZone} alt="EuroZone Tuning Logo" />
      </LogoShowcase>
      <StandardCentralText headerText="EuroZone Tuning">
        <p>
          A commissioned logo for automotive parts vendor 'EuroZone Tuning' who
          are based in Connecticut.
        </p>
        <p>
          I chose Vremena Grotesk as a font for its industrial and authoritative
          appearence.
        </p>
      </StandardCentralText>
      <LogoShowcase bgColor="white">
        <img src={TheComInsu} alt="The Commercial Insurance Broker logo" />
      </LogoShowcase>
      <StandardCentralText headerText="The Commercial Insurance Broker">
        <p>
          A commissioned logo for the 'The Commercial Insurance Broker', a
          trading name of 'Mortgage Broker Ltd'.
        </p>
        <p>
          The four icons represent the companies specialties of fleet, offices,
          trades and general liability.
        </p>
      </StandardCentralText>
      <LogoShowcase bgColor="#FFF8FF">
        <img src={Waga} alt="Wagamama DOTA 2 logo" />
      </LogoShowcase>
      <StandardCentralText headerText="Wagamama DOTA 2 streamer">
        <p>
          Logo created for professional video game streamer Niklas 'Wagamama'
          Högström who broadcasts his games of DOTA 2 to thousands via the
          streaming service Twitch.
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
        <img src={Ozone} alt="Ozone gaming logo" />
      </LogoShowcase>
      <StandardCentralText headerText="Ozone Gaming">
        <p>
          Logo created for a requested on{" "}
          <a href="https://www.reddit.com/r/logorequests/" rel="nofollow">
            /r/logorequests
          </a>{" "}
          by a gaming team called 'Ozone Gaming'.
        </p>
        <p>
          I feel the majority of gaming logos come across pretty garish, but I
          was content that this design looks professional enough to avoid that.
        </p>
      </StandardCentralText>
    </Layout>
  )
}
