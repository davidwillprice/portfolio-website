import React, { Component } from "react"

import accessibStyles from "../../styles/component/layout/accessibility.module.scss"

import AccessibilityIcon from "../../svgs/accessibility.svg"

class Accessibility extends Component {
  state = {
    activeMenu: false,
  }
  toggleMenu = () => {
    this.setState(state => ({ activeMenu: !state.activeMenu }))
    console.log(this.state.activeMenu)
  }
  toggleA11y(type, mode) {
    const html = document.querySelector("html")
    if (html.getAttribute(type)) {
      html.removeAttribute(type)
    } else {
      html.setAttribute(type, mode)
    }
  }
  resetSettings() {
    const html = document.querySelector("html")
    html.removeAttribute("data-theme")
    html.removeAttribute("data-font")
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
          <button onClick={e => this.toggleA11y("data-theme", "dark", e)}>
            High contrast mode
          </button>
          <button onClick={e => this.toggleA11y("data-font", "dyslexic", e)}>
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
