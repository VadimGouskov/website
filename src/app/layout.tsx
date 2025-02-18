import "./styles/globals.css";
import "./styles/tailwind.config.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/Header/Header";

const sansFont = Fira_Code({
  variable: "--primary-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vadim Gouskov",
  description: "TODP TPODO TPODO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansFont.variable} flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
