import React from "react"
import colourPreviewStyles from "../styles/component/colour-preview.module.scss"

const ColourPreview = props => (
  <div
    className={colourPreviewStyles.container}
    style={{ backgroundColor: props.hexColour }}
  >
    <p style={{ color: props.textColour }}>
      {props.hexColour} | rgb({props.rgbColour})
    </p>
  </div>
)

export default ColourPreview
