import { ReactNode } from "react";
import styles from "./morph.module.scss";

const Morph = (props: { children: ReactNode }) => (
  <div className={styles.container}>{props.children}</div>
);

export default Morph;
