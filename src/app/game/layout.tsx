"use client";
import AltaCrownLine from "@/components/svgs/alta/AltaCrownLine/AltaCrownLine";
import AltaFrame from "@/components/svgs/alta/AltaFrame/AltaFrame";
import Tooltip from "@/components/svgs/icons/Tooltip/Tooltip";
import { GameContextProvider } from "@/contexts/GameContext";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import AudioHandler from "./components/common/AudioHandler/AudioHandler";
import GameModeInfo from "./components/common/GameModeInfo/GameModeInfo";
import "./page.scss";

const GameLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <section className="page game-page">
      <div className="game-page-container">
        <motion.div
          layout
          style={{
            border: 0,
          }}
          transition={{ duration: 0.5 }}
          className="box-shadow"
        >
          <main className="game-container">
            <h1 className="title">AltaFlash</h1>
            <Tooltip
              className="tooltip"
              onClick={() => setShowInfo((prev) => !prev)}
            />
            <GameContextProvider>{children}</GameContextProvider>
            <AudioHandler />
            <AltaCrownLine />
            <AltaFrame />
          </main>
        </motion.div>
        <AnimatePresence>{showInfo && <GameModeInfo />}</AnimatePresence>
      </div>
    </section>
  );
};

export default GameLayout;
