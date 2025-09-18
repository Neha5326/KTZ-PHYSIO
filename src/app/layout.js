import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page"



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "PHYSIOTHERAPY CENTER",
  description: "Physiotherapy & Rehab Center",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "PHYSIOTHERAPY CENTER",
    description: "Physiotherapy & Rehab Center",
    url: "https://ktz-physio.vercel.app/", 
    siteName: "Khadija Tul Zahra Physio Therapy Center",
    images: [
      {
        url: "/physio.png", 
        width: 1200,
        height: 630,
        alt: "KTZ Physio Therapy Logo",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative flex flex-col min-h-screen font-sans">
        <Header></Header>
        <main className="flex-grow">{children}</main>
        <Footer></Footer>

      </body>
    </html>
  );
}