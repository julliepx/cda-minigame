"use client";
import { useGameContext } from "@/contexts/TimerContext";
import GameOver from "./components/steps/GameOver/GameOver";
import GameRunning from "./components/steps/GameRunning/GameRunning";
import PreGame from "./components/steps/PreGame/PreGame";
import "./page.scss";

const Game = () => {
  const { isTicking, timesOut } = useGameContext();

  if (isTicking) return <GameRunning />;

  if (timesOut) return <GameOver />;

  return <PreGame />;
};

export default Game;
