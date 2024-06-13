export interface Timer {
  currentTime: number;
  isTicking: boolean;
  timesOut: boolean;
  startTimer: (miliseconds?: number) => void;
}
