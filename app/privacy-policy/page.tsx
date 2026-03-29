import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | David Price",
  description:
    "This website doesn't collect or store any of your personal data - Period",
};

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginBottom: "32px" }}>
      <h1>Privacy Policy</h1>
      <p>
        This website doesn&apos;t collect or store any identifiable personal
        data. Period.
      </p>
    </div>
  );
}
