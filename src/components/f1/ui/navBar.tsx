import React from "react"
import {
  navCon,
  navBar,
  navItem,
  active,
} from "../../../styles/component/f1/navBar.module.scss"

export default function NavBar(props: {
  changeMode: Function
  activeMode: string
}) {
  function onClickHandler(event: React.MouseEvent<HTMLElement>) {
    const btn = event.target as HTMLElement
    props.changeMode(btn.getAttribute("data-mode"))
  }
  return (
    <div className={navCon}>
      <nav className={navBar}>
        <button
          type="button"
          aria-label="View leaderboards"
          data-mode="leaderboard"
          className={`${navItem} ${
            props.activeMode === "leaderboard" && active
          }`}
          onClick={event => onClickHandler(event)}
        >
          Leaderboard
        </button>
        <button
          type="button"
          aria-label="View F1 standings"
          data-mode="standings"
          className={`${navItem} ${props.activeMode === "standings" && active}`}
          onClick={event => onClickHandler(event)}
        >
          F1 standings
        </button>
        <button
          type="button"
          aria-label="View information"
          data-mode="help"
          className={`${navItem} ${props.activeMode === "help" && active}`}
          onClick={event => onClickHandler(event)}
        >
          Help
        </button>
        <button
          type="button"
          aria-label="View stats"
          data-mode="stats"
          className={`${navItem} ${props.activeMode === "stats" && active}`}
          onClick={event => onClickHandler(event)}
        >
          Stats
        </button>
      </nav>
    </div>
  )
}
