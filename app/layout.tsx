import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Postl",
  description: "A Postman Light App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full w-full box-border" lang="en">
      <body className={`${roboto.className} antialiased h-full w-full`}>
        {children}
      </body>
    </html>
  );
}
