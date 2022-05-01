import React from "react"

import {
  sliderFooter,
  sliderCon,
  slider,
} from "../../../styles/component/football/footer-slider.module.scss"

export default function FooterSlider(props: {
  selectedGameWeek: number
  noOfGameWeeks: number
  changeGameWeek: Function
}) {
  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    props.changeGameWeek(+event.target.value)
  }

  return (
    <div className={sliderFooter}>
      <div className={sliderCon}>
        Game Week {props.selectedGameWeek + 1}
        {/*If there is data for more than one game week, show the range slider*/}
        {props.noOfGameWeeks > 1 && (
          <input
            onChange={event => onChangeHandler(event)}
            aria-label="Game week slider"
            type="range"
            min="0"
            max={props.noOfGameWeeks - 1}
            className={slider}
            value={props.selectedGameWeek}
          />
        )}
      </div>
    </div>
  )
}
