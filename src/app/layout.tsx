import type { Metadata } from "next";
import { Noto_Serif_Bengali, Quicksand  } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

const primarytext = Quicksand ({
  subsets: ["latin"],
  variable: "--font-oswald-next",
});

export const metadata: Metadata = {
  title: "Songbodpotro",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSerifBengali.className} ${primarytext.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <Marquee />
        <div className="bg-[#FAFAFA]">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
