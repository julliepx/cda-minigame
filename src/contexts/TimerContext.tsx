"use client";
import useTimer, { Timer } from "@/hooks/useTimer/useTimer";
import { createContext, useContext } from "react";

export interface GameContext extends Omit<Timer, "startTimer"> {
  totalTime: number;
  startGame: () => void;
}

const GameContext = createContext<GameContext>({
  totalTime: 10000,
  currentTime: 10000,
  isTicking: true,
  timesOut: false,
  startGame: () => {},
});

interface GameContextProps {
  children: React.ReactNode;
}

function GameContextProvider(props: GameContextProps) {
  const totalTime = 10000;
  const { currentTime, isTicking, timesOut, startTimer } = useTimer(totalTime);

  const startGame = () => startTimer();

  const value: GameContext = {
    totalTime,
    currentTime,
    isTicking,
    timesOut,
    startGame,
  };
  return (
    <GameContext.Provider value={value}>{props.children}</GameContext.Provider>
  );
}

function useGameContext() {
  return useContext(GameContext);
}

export { GameContextProvider, useGameContext };
