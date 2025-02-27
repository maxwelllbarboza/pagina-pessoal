import * as React from 'react';
import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
      <ThemeProvider theme={theme}>
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
            </ThemeProvider>
      </body>
    </html>
  );
}
