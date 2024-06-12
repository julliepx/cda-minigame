import AltaCrownLine from "@/components/svgs/alta/AltaCrownLine/AltaCrownLine";
import AltaFrame from "@/components/svgs/alta/AltaFrame/AltaFrame";
import Arrow from "@/components/svgs/icons/Arrow/Arrow";
import { GameContextProvider } from "@/contexts/GameContext";
import Link from "next/link";
import "./page.scss";

const GameLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="page game-page">
      <main className="game-container">
        <h1 className="title">Alta Flash</h1>
        <GameContextProvider>{children}</GameContextProvider>
        <AltaCrownLine />
        <AltaFrame />
      </main>
      <Link href={"/"}>
        <Arrow />
      </Link>
    </section>
  );
};

export default GameLayout;
