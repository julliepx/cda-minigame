"use client";
import useTimer, { Timer } from "@/hooks/useTimer/useTimer";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export enum GameStatus {
  IDLE,
  PLAYING,
  LOSE,
  WIN,
}

export interface GameContext extends Omit<Timer, "startTimer"> {
  totalTime: number;
  status: GameStatus;
  setStatus: Dispatch<SetStateAction<GameStatus>>;
  startGame: () => void;
}

const GameContext = createContext<GameContext>({
  totalTime: 10000,
  currentTime: 10000,
  timesOut: false,
  isTicking: true,
  status: GameStatus.PLAYING,
  setStatus: () => {},
  startGame: () => {},
});

interface GameContextProps {
  children: React.ReactNode;
}

function GameContextProvider(props: GameContextProps) {
  const totalTime = 10000;
  const { currentTime, isTicking, timesOut, startTimer } = useTimer(totalTime);
  const [status, setStatus] = useState<GameStatus>(GameStatus.IDLE);

  const startGame = () => {
    setStatus(GameStatus.PLAYING);
    startTimer();
  };

  const value: GameContext = {
    totalTime,
    currentTime,
    timesOut,
    isTicking,
    status,
    setStatus,
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
