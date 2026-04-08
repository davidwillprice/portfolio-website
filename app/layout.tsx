import { Metadata } from "next";

import { Quicksand } from "next/font/google";

import localFont from "next/font/local";

import Header from "@components/header";
import Footer from "@components/footer";

import "@styles/globals.scss";

const quicksand = Quicksand({
  subsets: ["latin"],
});

const rey = localFont({
  src: "../public/fonts/reey.woff2",
  variable: "--font-rey",
});

export const metadata: Metadata = {
  title: "David Price | Frontend Web Developer",
  description: "Portfolio website for a Bristol-based Frontend Web Developer",
  openGraph: {
    images: [
      {
        url: `${process.env.SITE_URL}/open-graph.jpg`,
        width: 1200,
        height: 631,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} ${rey.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          data-goatcounter="https://davidwillprice.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"></script>
      </body>
    </html>
  );
}
