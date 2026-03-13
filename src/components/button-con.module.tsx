import { ReactNode } from "react";

import styles from "@components/button-con.module.scss";

export default function ButtonCon({
  align,
  children,
}: {
  align?: "right" | "center";
  children: ReactNode;
}) {
  const alignment =
    align === "right" ? styles.right : align === "center" ? styles.center : "";
  return <div className={`${styles.con} ${alignment}`}>{children}</div>;
}
