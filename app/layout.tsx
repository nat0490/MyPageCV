"use client";
import React from "react"; //Utile?
// import type { Metadata } from "next";
import { ThemeProvider, useTheme } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Nathalie Sartor",
//   description: "A propos de moi",
// };

export default function RootLayout({ children}: Readonly<{children: React.ReactNode}>) {
  const { theme, setTheme } = useTheme();
  return (

        <html suppressHydrationWarning 
        // className="" 
          className={`overflow-y-auto scrollbar  ${theme ==="light" ? "scrollbar-thumb-pink-200  scrollbar-track-pink-100/50  " : "scrollbar-thumb-pink-600/50  scrollbar-track-pink-950/50"}`}
        >
          
          <head >
            <title>Nathalie Sartor</title>
            <meta name="description" content="A propos de moi, mon parcours, mes réalisations" />
            <meta name="author" content="Nathalie Sartor" />
            <meta name="image" content={require("@assets/moi_meme.png")} />

            {/* <!-- Open Graph Meta Tags (for Facebook, LinkedIn, etc.) --> */}
              {/* <meta property="og:title" content="Nathalie Sartor" />
              <meta property="og:description" content="A propos de moi, mon parcours, mes réalisations" />
              <meta property="og:image" content="https://yourdomain.com/path/to/your-image.png" />
              <meta property="og:url" content="https://yourdomain.com" />
              <meta property="og:type" content="website" /> */}
              
              {/* <!-- Twitter Card Meta Tags --> */}
              {/* <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Nathalie Sartor" />
              <meta name="twitter:description" content="A propos de moi, mon parcours, mes réalisations" />
              <meta name="twitter:image" content="https://yourdomain.com/path/to/your-image.png" />
              <meta name="twitter:url" content="https://yourdomain.com" /> */}
          </head>
          <body className={inter.className }>
            <ThemeProvider>{children}</ThemeProvider>
          </body>
        </html>
 
  );
}

