import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "../styles/globals.scss";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "AltaFlash",
  description: "Você consegue ser o mais rápido?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={almarai.className}>{children}</body>
    </html>
  );
}
