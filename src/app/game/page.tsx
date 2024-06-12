"use client";
import { GameStatus, useGameContext } from "@/contexts/GameContext";
import EndGame from "./components/steps/EndGame/EndGame";
import GameRunning from "./components/steps/GameRunning/GameRunning";
import PreGame from "./components/steps/PreGame/PreGame";
import "./page.scss";

const Game = () => {
  const { status } = useGameContext();

  if (status === GameStatus.IDLE) return <PreGame />;

  if (status === GameStatus.PLAYING) return <GameRunning />;

  return <EndGame />;
};

export default Game;
