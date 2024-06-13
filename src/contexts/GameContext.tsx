"use client";
import useTimer from "@/hooks/useTimer/useTimer";
import { GameStatus } from "@/types/gameStatus";
import { Timer } from "@/types/timer";
import { AUDIO_MAPPER } from "@/utils/gameAudioHandler";
import { setRootStyleProperty } from "@/utils/styles";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import config from "../../public/configs/gameConfig.json";

export interface GameContext extends Omit<Timer, "startTimer"> {
  totalTime: number;
  status: GameStatus;
  setStatus: Dispatch<SetStateAction<GameStatus>>;
  startGame: () => void;
}

const GameContext = createContext<GameContext>({
  totalTime: 10,
  currentTime: 10,
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
  const totalTime = config.timeToSolve * 1000;
  const { currentTime, isTicking, timesOut, startTimer } = useTimer(totalTime);
  const [status, setStatus] = useState<GameStatus>(GameStatus.IDLE);

  const startGame = () => {
    setStatus(GameStatus.PLAYING);
    startTimer();
  };

  useEffect(() => {
    AUDIO_MAPPER[status]();
    setRootStyleProperty("--ticking", "var(--ticking-0)");
    setRootStyleProperty("--tick-speed", "var(--tick-speed-0)");
  }, [status]);

  useEffect(() => {
    if (timesOut && status === GameStatus.PLAYING)
      setStatus(GameStatus.TIMES_UP);
  }, [status, timesOut]);

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
