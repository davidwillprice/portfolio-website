import React from "react"
import * as colourPreviewStyles from "../styles/component/colour-preview.module.scss"

const ColourPreview = (props: {
  hexColour: string
  rgbColour: string
  textColour: string
}) => (
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
