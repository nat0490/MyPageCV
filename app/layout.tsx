"use client";
import React from "react"; //Utile?
// import type { Metadata } from "next";
import { ThemeProvider, useTheme } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
// import { GoogleAnalytics } from '@next/third-parties/google';



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children}: Readonly<{children: React.ReactNode}>) {
  const { theme, setTheme } = useTheme();
  return (
        <html suppressHydrationWarning 
          className={`overflow-y-auto scrollbar  ${theme ==="light" ? "scrollbar-thumb-pink-200  scrollbar-track-pink-100/50  " : "scrollbar-thumb-pink-600/50  scrollbar-track-pink-950/50"}`}
        >
          
          <head >
            <title>Nathalie Sartor</title>
            <meta name="description" content="A propos de moi, mon parcours, mes réalisations" />
            <meta name="author" content="Nathalie Sartor" />
            {/* <meta name="image" content={require("@assets/moi_meme.png")} src={require("@/assets/skills/iconGit1.png")}/> */}


                 {/* <!-- Google tag (gtag.js) --> */}
              {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-FEVE5RQQNF"></script>
              <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-FEVE5RQQNF');
              </script> */}
          </head>
       
          <body className={inter.className }>
            <ThemeProvider>{children}</ThemeProvider>
          </body>
        </html>
 
  );
}

