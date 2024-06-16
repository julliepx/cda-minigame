import AltaFrame from "@/components/svgs/alta/AltaFrame/AltaFrame";
import { motion } from "framer-motion";
import "./GameModeInfo.scss";

const GameModeInfo = () => {
  return (
    <motion.aside
      key={"gameModeInfo"}
      initial={{ opacity: 0, y: 1000 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: 1000 }}
      transition={{ duration: 0.25 }}
      className="modes-explanation"
    >
      <div className="sections-wrapper">
        <section>
          <h1 className="title">Nome de Usuário</h1>
          <ul className="list">
            <li>
              Seu nome de usuário é opcional, isso porque o nome se usuário é
              utilizado apenas para fins de demonstração de placar no ranking
              que você pode acessar ao canto inferior direito da tela.
            </li>
          </ul>
        </section>
        <section>
          <h1 className="title">Modos de Jogo</h1>
          <ul className="list">
            <li>
              <span>Padrão:</span> um temporizador é iniciado e algumas teclas
              serão exibidas para você pressionar em sequência na maior
              velocidade que conseguir.
            </li>
            <li>
              <span>Teste sua Velocidade:</span> partindo do mesmo princípio do
              padrão, esse modo fica mais difícil a cada vez que você conclui
              uma sequência corretamente, tendo assim menos tempo e mais teclas.
            </li>
          </ul>
        </section>
      </div>
      <AltaFrame />
    </motion.aside>
  );
};

export default GameModeInfo;
