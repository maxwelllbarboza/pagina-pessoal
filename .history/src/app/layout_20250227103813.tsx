import * as React from 'react';
import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google"
import './globals.css'

const 

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
