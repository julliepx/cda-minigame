import Button from "@/components/common/Button/Button";
import Input from "@/components/common/Input/Input";
import { useGameContext } from "@/contexts/GameContext";
import {
  LOCAL_STORAGE_KEYS,
  setItemToLocalStorage,
} from "@/utils/localStorageManager";
import { useState } from "react";
import "./PreGame.scss";

const PreGame = () => {
  const { startGame } = useGameContext();
  const [username, setUsername] = useState("");

  const start = () => {
    setItemToLocalStorage(LOCAL_STORAGE_KEYS.username, username);
    startGame();
  };

  return (
    <>
      <div className="username-container">
        <Input
          id="username"
          label="Nome de Usuário:"
          placeholder="Digite aqui..."
          maxLength={16}
          value={username}
          onChange={(v) => setUsername(v.currentTarget.value)}
        />
        <span>
          O usuário será utilizado apenas para fins da exibição de ranking*
        </span>
      </div>
      <Button
        title="INICIAR"
        hasFrame
        className="start-button"
        onClick={start}
      />
    </>
  );
};

export default PreGame;
