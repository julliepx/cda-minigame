import Button from "@/components/common/Button/Button";
import Link from "next/link";
import "./EmptyRanking.scss";
const EmptyRanking = () => {
  return (
    <div className="empty-ranking">
      <h1 className="empty-title">
        Parece que ninguém decidiu experimentar a adrenalina ainda, bora ser o
        primeiro?
      </h1>
      <Link href="/game">
        <Button title="COMEÇAR" hasFrame className="empty-button" />
      </Link>
    </div>
  );
};

export default EmptyRanking;
