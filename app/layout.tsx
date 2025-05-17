'use client'

import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import { Providers } from "./providers";
import Head from 'next/head';
import './globals.css';
import '../lib/font.css'; 
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import ThemeRegistry from './theme/ThemeRegistry';

const theme = createTheme({
  typography: {
    fontFamily: `'Montserrat', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: "#ffffff", color: "black" }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}