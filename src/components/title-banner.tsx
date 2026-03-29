import { ReactNode } from "react";
import styles from "./titlebanner.module.scss";

export default function TitleBanner({ children }: { children: ReactNode }) {
  return (
    <div className={styles.con}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
