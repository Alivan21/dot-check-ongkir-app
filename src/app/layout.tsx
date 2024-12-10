import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cek RajaOngkir",
  description: "Cek ongkos kirim dengan RajaOngkir",
};

const MontserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MontserratFont.className} ${MontserratFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
