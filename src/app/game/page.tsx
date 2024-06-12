import Link from "next/link";
import Button from "../components/common/Button/Button";
import Input from "../components/common/Input/Input";
import AltaCrownLine from "../components/svgs/alta/AltaCrownLine/AltaCrownLine";
import AltaFrame from "../components/svgs/alta/AltaFrame/AltaFrame";
import Arrow from "../components/svgs/icons/Arrow/Arrow";
import "./page.scss";

const Game = () => {
  return (
    <section className="page game-page">
      <main className="game-container">
        <h1 className="title">Alta Flash</h1>

        {/* <div className="game">
          <p>Pressione as teclas na ordem correta</p>
          <Keys />
        </div>
        <Timer /> */}

        <div className="username-container">
          <Input
            id="username"
            label="Nome de Usuário:"
            placeholder="Digite aqui..."
          />
          <span>
            O usuário será utilizado apenas para fins da exibição de ranking*
          </span>
        </div>
        <Button title="INICIAR" hasFrame className="start-button" />

        <AltaCrownLine />
        <AltaFrame />
      </main>
      <Link href={"/"}>
        <Arrow />
      </Link>
    </section>
  );
};

export default Game;
