import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import BackToTop from "./component/BackToTop";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Ridzna Asep Purwanto — IT Staff | Data Analyst | Web Developer",
  description:
    "Portfolio profesional Ridzna Asep Purwanto — S.Kom Teknik Informatika UMP, berpengalaman sebagai IT Staff, Data Analyst, Data & Information Management, dan Web Developer. Terampil Google Sheets, Power BI, PHP, MySQL, dan UI/UX Design.",
  keywords: [
    "Ridzna Asep Purwanto",
    "IT Staff",
    "Data Analyst",
    "Web Developer",
    "Portfolio",
    "Teknik Informatika",
    "Universitas Muhammadiyah Purwokerto",
    "Power BI",
    "MySQL",
    "PHP",
  ],
  openGraph: {
    title: "Ridzna Asep Purwanto — IT Staff | Data Analyst | Web Developer",
    description:
      "Portfolio profesional Ridzna Asep Purwanto. Terampil dalam analisis data, pengembangan website, dan software testing.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={sora.className}>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
