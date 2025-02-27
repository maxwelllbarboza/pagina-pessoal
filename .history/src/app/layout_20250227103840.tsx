import * as React from 'react';
import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google"
import './globals.css'

const jetBrainsMono = JetBrains_Mono({
  subsets: [],
  weight: [],
  variable
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
