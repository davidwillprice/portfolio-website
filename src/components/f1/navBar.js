import React from "react"
import {
  navCon,
  navBar,
  navItem,
  leaderboardBtn,
  standingsBtn,
  helpBtn,
  statsBtn,
} from "../../styles/component/f1/navBar.module.scss"

export default function NavBar(props) {
  function onClickHandler(event) {
    props.changeMode(event)
  }
  return (
    <div className={navCon}>
      <nav className={navBar}>
        <button
          type="button"
          aria-label="View leaderboards"
          data-mode="leaderboard"
          className={`${navItem} ${leaderboardBtn}`}
          onClick={event => onClickHandler(event)}
        >
          Leaderboard
        </button>
        <button
          type="button"
          aria-label="View F1 standings"
          data-mode="standings"
          className={`${navItem} ${standingsBtn}`}
          onClick={event => onClickHandler(event)}
        >
          F1 standings
        </button>
        <button
          type="button"
          aria-label="View information"
          data-mode="help"
          className={`${navItem} ${helpBtn}`}
          onClick={event => onClickHandler(event)}
        >
          Help
        </button>
        <button
          type="button"
          aria-label="View stats"
          data-mode="stats"
          className={`${navItem} ${statsBtn}`}
          onClick={event => onClickHandler(event)}
        >
          Stats
        </button>
      </nav>
    </div>
  )
}
