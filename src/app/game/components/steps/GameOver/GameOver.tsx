import Button from "@/components/common/Button/Button";
import "./GameOver.scss";

const GameOver = () => {
  return (
    <>
      <div className="game">
        <p>Ta precisando melhorar hein! | É disso que eu to falando!</p>
      </div>
      <Button title="TENTAR NOVAMENTE" hasFrame className="restart-button" />
    </>
  );
};

export default GameOver;
