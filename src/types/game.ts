export enum GameStatus {
  IDLE = "IDLE",
  PLAYING = "PLAYING",
  LOSE = "LOSE",
  WIN = "WIN",
  TIMES_UP = "TIMES_UP",
}

export enum GameMode {
  DEFAULT = "Padrão",
  LEVELS = "Teste sua velocidade",
}

export enum GameDifficulty {
  EASY = "Fácil",
  MEDIUM = "Médio",
  HARD = "Difícil",
  IMPOSSIBLE = "Impossível",
  FLASH = "Flash",
}

export const reverseGameMode = Object.fromEntries(
  Object.entries(GameMode).map(([key, value]) => [value, key])
);

export const reverseGameDifficulty = Object.fromEntries(
  Object.entries(GameDifficulty).map(([key, value]) => [value, key])
);
