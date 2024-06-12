"use client";
import { useState } from "react";

export interface Timer {
  currentTime: number;
  isTicking: boolean;
  timesOut: boolean;
  startTimer: (miliseconds?: number) => void;
}

const useTimer = (initialTime: number): Timer => {
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [isTicking, setIsTicking] = useState(false);
  const [timesOut, setTimesOut] = useState(false);

  const resetTimer = (miliseconds: number) => {
    setIsTicking(true);
    setTimesOut(false);
    setCurrentTime(miliseconds ?? initialTime);
  };

  const startTimer = (miliseconds?: number): void => {
    resetTimer(miliseconds ?? initialTime);
    handleTimeUpdate();
  };

  const handleTimeUpdate = (): NodeJS.Timeout => {
    const tick = 25;
    const interval = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev <= tick) {
          clearInterval(interval);
          setIsTicking(false);
          setTimesOut(true);
          return 0;
        }

        return prev - tick;
      });
    }, tick);

    return interval;
  };

  return {
    currentTime,
    isTicking,
    timesOut,
    startTimer,
  };
};

export default useTimer;
