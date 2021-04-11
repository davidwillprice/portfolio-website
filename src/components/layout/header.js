import React, { Component } from "react"
import { Link } from "gatsby"
import headerStyles from "../../styles/component/layout/header.module.scss"
import Logo from "../../svgs/personal-logo.svg"

class Header extends Component {
  state = {
    isMobMenuTrig: false,
    randomNo: Math.random() * 1,
  }
  toggleMobMenu = () => {
    this.setState(state => ({ isMobMenuTrig: !state.isMobMenuTrig }))
  }
  closeMobMenu = () => {
    this.setState(state => ({ isMobMenuTrig: false }))
  }
  render() {
    const genRandomHeader =
      this.state.randomNo > 0.9 ? headerStyles.secretMenuExp : ""
    const headerExpClass = this.state.isMobMenuTrig
      ? " " + headerStyles.expandedHeader + " " + genRandomHeader
      : ""

    return (
      <div className={headerStyles.headerCon}>
        <header className={headerStyles.header + headerExpClass}>
          <Link aria-label="David Price Logo" to={`/`}>
            <Logo className={headerStyles.headerLogo} />
          </Link>
          <button
            className={headerStyles.headerMenuTrig}
            onClick={this.toggleMobMenu}
            aria-label="Mobile menu"
          >
            <span className={headerStyles.headerTrigLines} />
            <span className={headerStyles.headerTrigLines} />
            <span className={headerStyles.headerTrigLines} />
            <span className={headerStyles.headerTrigLines} />
          </button>
          <div className={headerStyles.headerNav}>
            {/*<div className={classnames(headerStyles.headerNav, headerStyles.expandedHeaderNav)}>*/}
            <a
              href="/#web"
              className={headerStyles.headerMenuItem}
              activeClassName={headerStyles.activeHeaderMenuItem}
              onClick={this.closeMobMenu}
            >
              Web development
            </a>
            <Link
              className={headerStyles.headerMenuItem}
              to={`/graphic-design/`}
              activeClassName={headerStyles.activeHeaderMenuItem}
            >
              Graphic design
            </Link>
            <Link
              className={headerStyles.headerMenuItem}
              to={`/art/`}
              activeClassName={headerStyles.activeHeaderMenuItem}
            >
              Art
            </Link>
            <a
              className={headerStyles.headerMenuItem}
              href="#contact"
              onClick={this.toggleMobMenu}
            >
              Contact
            </a>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
