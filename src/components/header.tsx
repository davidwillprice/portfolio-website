"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import ContactIcons from "./contact-icons";

import logoSvg from "@svgs/david-price-logo.svg";

import styles from "@components/header.module.scss";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobMenuOpen, toggleMobMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobMenuClick = () => {
    toggleMobMenu(!mobMenuOpen);

    document.documentElement.classList.toggle("mobile-menu-open", !mobMenuOpen);
  };

  const menuLink = (url: string, label: string) => {
    //Get rid of query strings and anchors when comparing
    const comparisonUrl = url.split("#")[0].split("?")[0];
    return (
      <Link
        href={url}
        className={`${styles.link} ${pathname === comparisonUrl ? styles.link__active : ""}`}
        onNavigate={handleMobMenuClick}>
        {label}
      </Link>
    );
  };

  return (
    <div className={`${styles.container} ${isScrolled ? styles.sticky : ""}`}>
      <header
        className={`${styles.header} ${mobMenuOpen ? styles.header__expanded : ""}`}>
        <Link aria-label="Homepage" href="/" onNavigate={handleMobMenuClick}>
          <Image
            src={logoSvg}
            alt="David Price Logo"
            width={40}
            height={40}
            className={styles.logo}
          />
        </Link>
        <button
          className={styles.hamburger}
          onClick={handleMobMenuClick}
          aria-label="Mobile menu"
          aria-expanded={mobMenuOpen}
          aria-controls="menu-items">
          <span />
          <span />
          <span />
          <span />
        </button>
        <nav className={styles.nav} id="menu-items">
          <div className={styles.text_links}>
            {menuLink("/#web", "Web Development")}
            {menuLink("/graphic-design", "Graphic Design")}
            {menuLink("/art", "Art")}
            <a
              className={`${styles.link} ${styles.desktop_only}`}
              href="#contact"
              onClick={() => {
                toggleMobMenu(false);
              }}>
              Contact
            </a>
          </div>
          <ContactIcons mobileOnly={true} />
        </nav>
      </header>
    </div>
  );
};
export default Header;
