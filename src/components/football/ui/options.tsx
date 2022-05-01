import React from "react"

import {
  opening,
  options,
} from "../../../styles/component/football/options.module.scss"

export default function Options(props: {
  mode: string
  playerGroupsArr: string[]
  changePlayerGroup: Function
}) {
  function changePlayerGroupHandler(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    props.changePlayerGroup(event.target.value)
  }
  return (
    <div className={opening}>
      <div className={options}>
        {
          //If in standings mode, allow the player to pick which player group to show
          props.mode === "standings" && (
            <select
              aria-label="Select player group to display"
              name="playerGroup"
              id="playerGroup"
              onBlur={event => changePlayerGroupHandler(event)}
              onChange={event => changePlayerGroupHandler(event)}
            >
              <option value={props.playerGroupsArr[0]} hidden>
                Player group
              </option>
              {props.playerGroupsArr.map(group => (
                <option key={group} value={group}>
                  {group}
                </option>
              ))}
            </select>
          )
        }
      </div>
    </div>
  )
}
