export type Audio = "success" | "tick" | "win" | "lost" | "explosion";

export interface AudioConfiguration {
  volume?: number;
  loop?: boolean;
}
