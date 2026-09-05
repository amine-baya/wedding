import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amine & Oumayma | Our Wedding",
  description: "Counting down to 15 April 2027",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
