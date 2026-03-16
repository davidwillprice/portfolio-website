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
  const maxWidth = !width || width > 700 ? 700 : width;
  return (
    <div style={{ maxWidth: maxWidth, margin: "0 auto 16px" }}>
      {headerText && <h3>{headerText}</h3>}
      {children}
    </div>
  );
}
