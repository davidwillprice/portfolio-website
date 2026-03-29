"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobMenuCick = () => {
    toggleMobMenu(!mobMenuOpen);
  };

  const menuLink = (url: string, label: string) => {
    //Get rid of query strings and anchors when comparing
    const comparisonUrl = url.split("#")[0].split("?")[0];
    return (
      <Link
        href={url}
        className={`${styles.link} ${pathname === comparisonUrl ? styles.link__active : ""}`}
        onNavigate={() => {
          toggleMobMenu(false);
        }}>
        {label}
      </Link>
    );
  };

  return (
    <div className={`${styles.container} ${isScrolled ? styles.sticky : ""}`}>
      <header
        className={`${styles.header} ${mobMenuOpen ? styles.header__expanded : ""}`}>
        <Link
          aria-label="Homepage"
          href="/"
          onNavigate={() => {
            toggleMobMenu(false);
          }}>
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
          onClick={handleMobMenuCick}
          aria-label="Mobile menu"
          aria-expanded={mobMenuOpen}
          aria-controls="menu-items">
          <span />
          <span />
          <span />
          <span />
        </button>
        <nav className={styles.nav} id="menu-items">
          {menuLink("/#web", "Web Development")}
          {menuLink("/graphic-design", "Graphic Design")}
          {menuLink("/art", "Art")}
          <a
            className={styles.link}
            href="#contact"
            onClick={() => {
              toggleMobMenu(false);
            }}>
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};
export default Header;
