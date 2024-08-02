import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { AuthProvider } from "@/context/AuthContext";
import { OrdersProvider } from "@/context/OrdersContext";
import CamionGif from "@/components/CamionGif/Camion";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce"
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <OrdersProvider>
           <AuthProvider>
          <NavBar />
          <CamionGif />
          {children}
          <Footer /> 
          </AuthProvider> 
          </OrdersProvider>  
        </body>
    </html>
  );
}
