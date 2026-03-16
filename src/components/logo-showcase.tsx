import { ReactNode } from "react";
import styles from "./logo-showcase.module.scss";

const LogoShowcase = (props: { bgColor: string; children: ReactNode }) => (
  <div className={styles.container} style={{ backgroundColor: props.bgColor }}>
    {props.children}
  </div>
);

export default LogoShowcase;
