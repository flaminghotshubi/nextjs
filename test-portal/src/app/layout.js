
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './_component/_navbar/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
<div>
        
        <Navbar className="w-full"/>
        
        {children}
        </div>
        

      </body>
    </html>
  );
}
