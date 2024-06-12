"use client";
import "./timer.scss";

interface TimerProps {
  totalTime: number;
  currentTime: number;
}

const Timer = ({ totalTime, currentTime }: TimerProps) => {
  const getCurrentTimeBarWidth = (): string => {
    return `${(currentTime / totalTime) * 100}%`;
  };

  return (
    <div className="timer">
      <div
        className="current-time"
        style={{ width: getCurrentTimeBarWidth() }}
      ></div>
    </div>
  );
};

export default Timer;
