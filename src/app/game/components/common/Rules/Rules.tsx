"use client";
import Button from "@/components/common/Button/Button";
import {
  LOCAL_STORAGE_KEYS,
  setItemToLocalStorage,
} from "@/utils/localStorageManager";
import { Dispatch, SetStateAction } from "react";
import "./Rules.scss";

interface RulesProps {
  setIsNewcomer: Dispatch<SetStateAction<boolean | undefined>>;
}

const Rules = ({ setIsNewcomer }: RulesProps) => {
  return (
    <div className="rules-wrapper">
      <section>
        <ul className="list">
          <li>
            <span>Objetivo: </span>nesse mini-game você enfrenta uma sequência
            aleatória de teclas e terá que pressionar elas na ordem correta o
            mais rápido que conseguir, antes que o seu tempo acabe! Sabe aquela
            competição entre amigos? Está na hora de provar que você é o mais
            rápido.
          </li>
          <li>
            <span>Extra: </span>o jogo atualmente conta com dois modos de jogo,
            um onde você é o seu próprio dono e pode escolher a dificuldade que
            mais te agrada, e outro onde suas habilidades de reflexo são
            colocadas a prova com sequências desafiadoras.
          </li>
          <li>
            <span>Ranking: </span>depois de treinar bastante, aguçar tuas
            habilidades de rapidez, você ainda pode dar uma olhadinha no ranking
            para dar aquela famosa zombada nos amigos ou até mesmo se desafiar a
            bater teus próprios recordes!
          </li>
        </ul>
      </section>
      <Button
        title="Bora lá!"
        hasFrame
        className="understood-rules"
        onClick={() => {
          setItemToLocalStorage(LOCAL_STORAGE_KEYS.newcomer, false);
          setIsNewcomer(false);
        }}
      />
    </div>
  );
};

export default Rules;
