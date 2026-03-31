import { ReactNode } from "react";

export default function StandardCentralText({
  width,
  headerText,
  children,
}: {
  width?: number;
  headerText?: string;
  children: ReactNode;
}) {
  const maxWidth = !width || width > 750 ? 750 : width;
  return (
    <section style={{ maxWidth: maxWidth, margin: "0 auto 3rem" }}>
      {headerText && <h3>{headerText}</h3>}
      {children}
    </section>
  );
}
