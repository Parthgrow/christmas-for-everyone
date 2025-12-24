import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Christmas Through Every Sense",
  description:
    "Exploring how Christmas is experienced by people with different physical abilities — celebrating diverse sensory experiences of Christmas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
