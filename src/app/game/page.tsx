"use client";
import { useGameContext } from "@/contexts/GameContext";
import { GameStatus } from "@/types/game";
import EndGame from "./components/steps/EndGame/EndGame";
import GameRunning from "./components/steps/GameRunning/GameRunning";
import PreGame from "./components/steps/PreGame/PreGame";
import "./page.scss";

const GamePage = () => {
  const { status } = useGameContext();

  if (status === GameStatus.IDLE) return <PreGame />;

  if (status === GameStatus.PLAYING) return <GameRunning />;

  return <EndGame />;
};

export default GamePage;
