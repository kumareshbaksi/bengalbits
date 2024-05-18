// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header"
import Footer1 from "@/Components/Footer1";
import Footer from "@/Components/Footer";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bengal-Bits",
  description: "A software company",
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer1/>
        <Footer/>
        </body>
    </html>
  );
}
