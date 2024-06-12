import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { useGameContext } from "@/contexts/TimerContext";
import "./PreGame.scss";

const PreGame = () => {
  const { startGame } = useGameContext();

  return (
    <>
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
      <Button
        title="INICIAR"
        hasFrame
        className="start-button"
        onClick={startGame}
      />
    </>
  );
};

export default PreGame;
