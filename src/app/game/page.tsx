"use client";
import { useGameContext } from "@/contexts/GameContext";
import { GameStatus } from "@/types/game";
import {
  LOCAL_STORAGE_KEYS,
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "@/utils/localStorageManager";
import { useEffect, useState } from "react";
import Rules from "./components/common/Rules/Rules";
import EndGame from "./components/steps/EndGame/EndGame";
import GameRunning from "./components/steps/GameRunning/GameRunning";
import PreGame from "./components/steps/PreGame/PreGame";
import "./page.scss";

const GamePage = () => {
  const { status } = useGameContext();
  const [isNewcomer, setIsNewcomer] = useState<boolean>();

  useEffect(() => {
    let newcomer: boolean | null = getItemFromLocalStorage(
      LOCAL_STORAGE_KEYS.newcomer
    );

    if (newcomer == null) {
      setItemToLocalStorage(LOCAL_STORAGE_KEYS.newcomer, true);
      newcomer = true;
    }

    setIsNewcomer(newcomer);
  }, []);

  if (isNewcomer) return <Rules setIsNewcomer={setIsNewcomer} />;

  if (status === GameStatus.IDLE) return <PreGame />;

  if (status === GameStatus.PLAYING) return <GameRunning />;

  return <EndGame />;
};

export default GamePage;
