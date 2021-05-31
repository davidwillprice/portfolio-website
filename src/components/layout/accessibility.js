import React, { Component } from "react"

import accessibStyles from "../../styles/component/layout/accessibility.module.scss"

import AccessibilityIcon from "../../svgs/accessibility.svg"

class Accessibility extends Component {
  state = {
    activeMenu: false,
  }
  toggleMenu = () => {
    this.setState(state => ({ activeMenu: !state.activeMenu }))
  }
  toggleFont(type, font) {
    const html = document.querySelector("html")
    if (html.getAttribute(type)) {
      window.__setPreferredFont("normal")
      html.removeAttribute(type)
    } else {
      html.setAttribute(type, font)
      window.__setPreferredFont(font)
    }
  }
  toggleTheme(type, mode) {
    const html = document.querySelector("html")
    if (html.getAttribute(type)) {
      window.__setPreferredTheme("normal")
      html.removeAttribute(type)
    } else {
      window.__setPreferredTheme(mode)
      html.setAttribute(type, mode)
    }
  }
  resetSettings() {
    const html = document.querySelector("html")
    html.removeAttribute("data-theme")
    html.removeAttribute("data-font")
    window.__setPreferredTheme("normal")
    window.__setPreferredFont("normal")
  }
  render() {
    return (
      <div
        className={`${accessibStyles.con} ${
          this.state.activeMenu ? accessibStyles.activeMenu : ""
        }`}
      >
        <div className={accessibStyles.optionCon}>
          <h3>Accessibility options</h3>
          <button
            onClick={e => this.toggleTheme("data-theme", "highContrast", e)}
          >
            High contrast mode
          </button>
          <button onClick={e => this.toggleFont("data-font", "dyslexic", e)}>
            Dyslexic mode
          </button>
          <button onClick={this.resetSettings}>Reset settings</button>
        </div>
        <button
          className={accessibStyles.iconCon}
          onClick={this.toggleMenu}
          aria-label={
            this.state.activeMenu
              ? "Close assessibility menu"
              : "Accessibility Menu"
          }
        >
          <AccessibilityIcon />
          <span className={accessibStyles.closeMenuLine} />
          <span className={accessibStyles.closeMenuLine} />
        </button>
      </div>
    )
  }
}
export default Accessibility
