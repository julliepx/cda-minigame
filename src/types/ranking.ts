export interface RankingUser {
  username: string;
  record: number;
}

export interface Ranking {
  users: RankingUser[];
}
