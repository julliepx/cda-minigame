import Arrow from "@/components/svgs/icons/Arrow/Arrow";
import Link from "next/link";
import RankingUsers from "./components/common/RankingUsers/RankingUsers";
import "./page.scss";

const RankingPage = () => {
  return (
    <section className="page ranking-page">
      <main className="ranking-container">
        <RankingUsers />
      </main>
      <Link href={"/"}>
        <Arrow />
      </Link>
    </section>
  );
};

export default RankingPage;
