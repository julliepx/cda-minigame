import AltaCrownLine from "@/components/svgs/alta/AltaCrownLine/AltaCrownLine";
import AltaFrame from "@/components/svgs/alta/AltaFrame/AltaFrame";
import Arrow from "@/components/svgs/icons/Arrow/Arrow";
import { GameContextProvider } from "@/contexts/GameContext";
import Link from "next/link";
import AudioHandler from "./components/common/AudioHandler/AudioHandler";
import "./page.scss";

const GameLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="page game-page">
      <div className="box-shadow">
        <main className="game-container">
          <h1 className="title">Alta Flash</h1>
          <GameContextProvider>{children}</GameContextProvider>
          <AudioHandler />
          <AltaCrownLine />
          <AltaFrame />
        </main>
      </div>
      <Link href={"/"}>
        <Arrow />
      </Link>
    </section>
  );
};

export default GameLayout;
