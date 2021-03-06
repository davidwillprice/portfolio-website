import React, { Component } from "react"
import globalStyles from "../../styles/global.module.scss"
import Header from "./header"
import Footer from "./footer"
import Accessibility from "./accessibility"

class Layout extends Component {
  state = {
    usingMouse: false,
  }
  //Using mouse, updating state
  usingMouseFn = () => {
    this.setState({ usingMouse: true })
  }
  //If tab has been pressed, update state
  usingKeysFn = e => {
    if (e.key === "Tab") {
      this.setState({ usingMouse: false })
    }
  }

  componentDidMount() {
    //User is using a mouse
    document.body.addEventListener("mousedown", this.usingMouseFn)
    //User is using keyboard
    document.body.addEventListener("keydown", this.usingKeysFn)
  }

  render() {
    //Update class depending on if the user last used a mouse or keyboard
    const navType = this.state.usingMouse
      ? globalStyles.usingMouse
      : globalStyles.usingKeys

    return (
      <div className={globalStyles.pageCon + " " + navType}>
        <Header />
        <main
          className={`${globalStyles.contentCon} ${
            this.props.widthLimited === true &&
            globalStyles.contentConWidthStrict
          } ${this.props.marginTopDesktop ? globalStyles.addedMargin : ""}`}
        >
          {this.props.children}
        </main>
        {this.props.footer && <Footer />}
        <Accessibility />
        <script
          data-goatcounter="https://davidwillprice.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </div>
    )
  }
}

Layout.defaultProps = {
  footer: true,
  widthLimited: true,
}

export default Layout
