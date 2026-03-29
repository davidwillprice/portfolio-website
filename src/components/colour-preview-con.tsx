import { ReactNode } from "react";
import styles from "./colour-preview.module.scss";

const ColourPreviewCon = (props: { children: ReactNode }) => (
  <section className={styles.container}>{props.children}</section>
);

export default ColourPreviewCon;
