import React, { Component } from "react"

import {
  activeMenu,
  optionCon,
  iconCon,
  closeMenuLine,
} from "../../styles/component/layout/accessibility.module.scss"

import AccessibilityIcon from "../../svgs/accessibility.svg"

interface MyWindow extends Window {
  __setPreferredFont(font: string): void
  __setPreferredTheme(font: string): void
}
declare var window: MyWindow

export default class Accessibility extends Component {
  state = {
    activeMenu: false,
  }
  toggleMenu = () => {
    this.setState(state => ({ activeMenu: !this.state.activeMenu }))
  }
  toggleFont(type: string, font: string) {
    const html = document.querySelector("html")
    if (html!.getAttribute(type)) {
      window.__setPreferredFont("normal")
      html!.removeAttribute(type)
    } else {
      html!.setAttribute(type, font)
      window!.__setPreferredFont(font)
    }
  }
  toggleTheme(type: string, theme: string) {
    const html = document.querySelector("html")
    if (html!.getAttribute(type)) {
      window.__setPreferredTheme("normal")
      html!.removeAttribute(type)
    } else {
      window.__setPreferredTheme(theme)
      html!.setAttribute(type, theme)
    }
  }
  resetSettings() {
    const html = document.querySelector("html")
    html!.removeAttribute("data-theme")
    html!.removeAttribute("data-font")
    window.__setPreferredTheme("normal")
    window.__setPreferredFont("normal")
  }
  render() {
    return (
      <div className={this.state.activeMenu ? activeMenu : undefined}>
        <div className={optionCon}>
          <h3>Accessibility options</h3>
          <button onClick={e => this.toggleTheme("data-theme", "highContrast")}>
            High contrast mode
          </button>
          <button onClick={e => this.toggleFont("data-font", "dyslexic")}>
            Dyslexic mode
          </button>
          <button onClick={this.resetSettings}>Reset settings</button>
        </div>
        <button
          className={iconCon}
          onClick={this.toggleMenu}
          aria-label={
            this.state.activeMenu
              ? "Close assessibility menu"
              : "Accessibility Menu"
          }
        >
          <AccessibilityIcon />
          <span className={closeMenuLine} />
          <span className={closeMenuLine} />
        </button>
      </div>
    )
  }
}
