import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import {ThemeProvider} from "next-themes";

export const metadata: Metadata = {
  title: "Prezentacja z informatyki",
  description: "Prezentacja o tym, co wie o nas telefon i jak możemy się przed tym chronić.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* @ts-ignore*/}
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
             {children}
            
      </body>
    </html>
  );
}
