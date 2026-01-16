import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(homepage)/Navbar/page";
import Footer from "./(homepage)/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Little Lemon - Mediterranean Restaurant",
  description: "Family-owned Mediterranean restaurant serving authentic flavors with a modern twist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}