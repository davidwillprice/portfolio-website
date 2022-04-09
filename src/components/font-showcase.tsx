import React, { ReactChild } from "react"
import * as fontShowcaseStyles from "../styles/component/font-showcase.module.scss"
const FontShowcase = (props: {
  fontFamily: string
  color: string
  fontWeight?: number | undefined
  bgColor: string
  children?: ReactChild | ReactChild[]
  fontName: string
}) => (
  <div
    className={fontShowcaseStyles.container}
    style={{
      fontFamily: props.fontFamily,
      color: props.color,
      backgroundColor: props.bgColor,
      fontWeight: props.fontWeight,
    }}
  >
    {props.children}
    <h4>{props.fontName}</h4>
    <hr></hr>
    <p>
      <span>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn</span> Oo Pp Qq Rr Ss Tt
      Uu Vv Ww Xx Yy&nbsp;Zz
    </p>
    <p>1 2 3 4 5 6 7 8 9&nbsp;0</p>
    <p>! ? # @ ( ) &&nbsp;£</p>
  </div>
)
export default FontShowcase
