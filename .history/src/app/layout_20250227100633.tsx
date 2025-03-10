import * as React from 'react';
import type { Metadata } from "next";

import { Box } from '@mui/material';


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      
              <CssBaseline />
              <Box
              component="main"
              sx={{
                bgcolor: 'background.defalt',
              
                fontFamily:'roboto'
              }}
            >
              {children}
            </Box>
           
      </body>
    </html>
  );
}
