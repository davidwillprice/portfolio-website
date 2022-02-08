import React, { Fragment } from "react"

import { tick, cross } from "../../../styles/component/f1/stats.module.scss"

export const helpNotes = (
  <li>
    <a href="https://www.formula1.com/en/latest/article.f1-power-rankings-weve-ranked-the-teams-from-10-to-1-after-pre-season.6DKunC8CA9nHHu6MkuiIQQ.html">
      formula1.com
    </a>{" "}
    and{" "}
    <a href="https://twitter.com/karunchandhok/status/1371374740217159680">
      Sky F1 Analyst Karun Chandok
    </a>{" "}
    made their predictions after preseason testing so had an advantage.
  </li>
)

export function statsNotes(isSeasonOver) {
  return (
    <Fragment>
      <li>
        {isSeasonOver && <span className={tick}>✔</span>} Will was the only
        person who didn't predict that Hamilton would win the drivers title,
        opting for Verstappen;
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖</span>} Will and Pete were
        the only people who didn't predict that Mercedes would win the
        constructors title, opting for Red Bull;
      </li>
      <li>
        Nobody predicted {isSeasonOver && <span className={tick}>✔</span>}{" "}
        Hamilton, {isSeasonOver && <span className={cross}>✖</span>} Leclerc,{" "}
        {isSeasonOver && <span className={tick}>✔</span>} Gasly,{" "}
        {isSeasonOver && <span className={tick}>✔</span>} Raikkonen,{" "}
        {isSeasonOver && <span className={tick}>✔</span>} Schumacher or{" "}
        {isSeasonOver && <span className={tick}>✔</span>} Russell would be
        beaten by their team mate;
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖</span>} Pete was the only
        person to predict that Perez would beat Verstappen, while{" "}
        {isSeasonOver && <span className={cross}>✖</span>} Alex was the only
        person to predict Perez wouldn't finish in the top 6 (10th).
      </li>
      <li>
        {isSeasonOver && <span className={tick}>✔</span>} David was the only
        person to predict that Ferrari would finish as high as 3rd;
      </li>
      <li>
        {isSeasonOver && <span className={tick}>✔</span>} Alex was the only
        person to predict that Norris would beat Riccardo;
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖</span>} James was the only
        person to predict that Stroll would beat Vettel;
      </li>
      <li>
        {isSeasonOver && <span className={cross}>✖</span>} Annie was the only
        person to predict that Ocon would beat Alonso;
      </li>
      <li>
        {isSeasonOver && <span className={tick}>✔</span>} James was the only
        person to predict that Alfa Romeo wouldn't come 8th (9th) and the{" "}
        {isSeasonOver && <span className={cross}>✖</span>} only person to put
        Haas as high as 8th.
      </li>
    </Fragment>
  )
}
