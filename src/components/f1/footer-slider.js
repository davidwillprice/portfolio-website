import React from "react"

import {
  sliderFooter,
  sliderCon,
  slider,
} from "../../styles/component/f1/footer-slider.module.scss"

export default function FooterSlider(props) {
  function onChangeHandler(event) {
    props.changeRound(event)
  }

  return (
    <div className={sliderFooter}>
      <div className={sliderCon}>
        Round {parseInt(props.selectedRound) + 1} :
        <span id="track-name"> {props.trackName}</span>
        {/*If there is data for more than once race, show the range slider*/}
        {props.noOfRounds > 1 && (
          <input
            onChange={event => onChangeHandler(event)}
            aria-label="Grand Prix race slider"
            type="range"
            min="0"
            max={props.noOfRounds - 1}
            className={slider}
            value={parseInt(props.selectedRound)}
          />
        )}
      </div>
    </div>
  )
}
