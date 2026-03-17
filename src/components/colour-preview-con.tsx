import { ReactNode } from "react";
import styles from "./colour-preview.module.scss";

const ColourPreviewCon = (props: { children: ReactNode }) => (
  <div className={styles.container}>{props.children}</div>
);

export default ColourPreviewCon;
