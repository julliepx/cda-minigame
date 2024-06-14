"use client";
import AltaButtonFrame from "@/components/svgs/alta/AltaButtonFrame/AltaButtonFrame";
import { Ranking } from "@/types/ranking";
import {
  LOCAL_STORAGE_KEYS,
  getItemFromLocalStorage,
} from "@/utils/localStorageManager";
import { Qwitcher_Grypen } from "next/font/google";
import { useEffect, useState } from "react";
import EmptyRanking from "../EmptyRanking/EmptyRanking";
import "./RankingUsers.scss";

const corinthia = Qwitcher_Grypen({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RankingUsers = () => {
  const [ranking, setRanking] = useState<Ranking | null>();

  useEffect(() => {
    const ranking: Ranking | null = getItemFromLocalStorage(
      LOCAL_STORAGE_KEYS.ranking
    );
    setRanking(ranking);
  }, []);

  const orderedRanking = ranking?.users.sort((a, b) => a.record - b.record);

  if (!ranking || !ranking.users) return <EmptyRanking />;

  return (
    <>
      {orderedRanking?.map(({ username, record }, index) => (
        <div key={username} className="ranking-position">
          <AltaButtonFrame className={index % 2 == 0 ? "rotate" : ""} />
          <p className={`position ${corinthia.className}`}>{index + 1}</p>
          <p className="username">{username}</p>
          <p className="time">{(record / 1000).toFixed(1)}s</p>
        </div>
      ))}
    </>
  );
};

export default RankingUsers;
