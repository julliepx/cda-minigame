import { Ranking, RankingUser } from "@/types/ranking";
import {
  LOCAL_STORAGE_KEYS,
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from "./localStorageManager";

export const updateRanking = (currentTime: number, totalTime: number) => {
  const currentUsername: string | null = getItemFromLocalStorage(
    LOCAL_STORAGE_KEYS.username
  );
  let currentRanking: Ranking | null = getItemFromLocalStorage(
    LOCAL_STORAGE_KEYS.ranking
  );

  const username =
    currentUsername && currentUsername != "" ? currentUsername : "Fulaninho";

  const newRecord = -(currentTime - totalTime);
  const newUser: RankingUser = {
    username: username,
    record: newRecord,
  };

  if (currentRanking) {
    const userIndex = currentRanking.users.findIndex(
      (user: RankingUser) => user.username === username
    );

    if (userIndex !== -1) {
      currentRanking.users[userIndex] = {
        ...currentRanking.users[userIndex],
        record: newRecord,
      };
    } else {
      currentRanking.users.push(newUser);
    }
  } else {
    currentRanking = { users: [newUser] };
  }

  setItemToLocalStorage(LOCAL_STORAGE_KEYS.ranking, currentRanking);
};
