import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | David Price",
  description:
    "This website doesn't collect or store any of your personal data - Period",
};

export default function Page() {
  return (
    <section className="full_page_section">
      <h1>Privacy Policy</h1>
      <p>
        This website doesn&apos;t collect or store any identifiable personal
        data. Period.
      </p>
    </section>
  );
}
