import * as React from 'react';
import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google"
import './globals.css'

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <main
          {children}
      </body>
    </html>
  );
}
