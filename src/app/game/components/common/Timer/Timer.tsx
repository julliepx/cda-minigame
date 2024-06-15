"use client";
import "./Timer.scss";

interface TimerProps {
  totalTime: number;
  currentTime: number;
}

const Timer = ({ totalTime, currentTime }: TimerProps) => {
  const getCurrentTimeBarWidth = (): string => {
    return `${(currentTime / totalTime) * 100}%`;
  };

  return (
    <div className="timer-wrapper">
      <div className="timer">
        <div
          className="current-time"
          style={{ width: getCurrentTimeBarWidth() }}
        ></div>
      </div>
      <div className="hints">
        <span className="text">Tempo</span>
        <span className="time">{(currentTime / 1000).toFixed(2)}</span>
      </div>
    </div>
  );
};

export default Timer;
