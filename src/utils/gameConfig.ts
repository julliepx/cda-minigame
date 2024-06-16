import { GameDifficulty, reverseGameDifficulty } from "@/types/game";
import config from "../../public/configs/gameConfig.json";

export const getConfigDifficulty = (difficulty: GameDifficulty) => {
  const configDifficulty = config.difficulties.find(
    (d) => d.difficulty === reverseGameDifficulty[difficulty]
  );

  return configDifficulty ?? config.difficulties[0];
};
