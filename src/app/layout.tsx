import TanstackProvider from "@/components/providers/tanstack-provider";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${MontserratFont.className} ${MontserratFont.variable} !scroll-smooth !antialiased`}
        >
          <TanstackProvider>{children}</TanstackProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
