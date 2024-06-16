"use client";
import { Timer } from "@/types/timer";
import { useCallback, useRef, useState } from "react";

const useTimer = (initialTime: number): Timer => {
  const [currentTime, setCurrentTime] = useState(initialTime);
  const [isTicking, setIsTicking] = useState(false);
  const [timesOut, setTimesOut] = useState(false);
  const interval = useRef<NodeJS.Timeout | null>(null);

  const handleTimeUpdate = useCallback((): NodeJS.Timeout => {
    const tick = 10;
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
  }, []);

  const resetTimer = (miliseconds: number) => {
    setIsTicking(true);
    setTimesOut(false);
    setCurrentTime(miliseconds ?? initialTime);
  };

  const startTimer = (miliseconds?: number): void => {
    resetTimer(miliseconds ?? initialTime);
    if (interval.current) {
      clearInterval(interval.current);
    }
    interval.current = handleTimeUpdate();
  };

  return {
    currentTime,
    isTicking,
    timesOut,
    startTimer,
  };
};

export default useTimer;
