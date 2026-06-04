import { Bodoni_Moda } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Script from "next/script";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bodoni",
});

export const metadata = {
  title: "Glam Gaze | Fashion, Style, Business News",
  description: "Glam Gaze covers fashion, culture, lifestyle, and global trends shaping modern style.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} antialiased`}>

        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18148083881"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18148083881');
          `}
        </Script>

        <Header />
        <main className="pt-44">{children}</main>
        <Footer />
      </body>
    </html>
  );
}