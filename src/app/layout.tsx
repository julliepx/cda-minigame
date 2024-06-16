import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import "../styles/globals.scss";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "AltaFlash",
  description: "A minigame where the player has to be faster than The Flash.",
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
