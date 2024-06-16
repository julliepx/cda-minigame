# AltaFlash

Assim como o nome já induz, o **AltaFlash** é um game onde o desafio é bater a velocidade da luz, e para isso o jogador precisa pressionar sequências de teclas na ordem de aparição o mais rápido que conseguir.

![](https://img.shields.io/badge/Next_JS-000000?style=for-the-badge&logo=next.js)
![](https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react)
![](https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript)
![](https://img.shields.io/badge/HTML-000000?style=for-the-badge&logo=html5)
![](https://img.shields.io/badge/SCSS-000000?style=for-the-badge&logo=sass)
![](https://img.shields.io/badge/Framer_Motion-000000?style=for-the-badge&logo=framer)

## Funcionalidades

- **Modos de Jogo:** o jogo atualmente conta com dois modos de jogo, um onde o jogador é o seu próprio dono e pode escolher a dificuldade que mais lhe agrada, e outro onde suas habilidades de reflexo são colocadas a prova com sequências desafiadoras.
	> **Padrão:** um temporizador é iniciado e algumas teclas serão exibidas para o jogador pressionar em sequência na maior velocidade que conseguir.
  > 
	> **Teste sua Velocidade:** partindo do mesmo princípio do padrão, esse modo fica mais difícil a cada vez que o jogador conclui uma sequência corretamente, tendo assim menos tempo e mais teclas para pressionar.
- **Geração de Teclas:** o app conta atualmente com **3** modos de geração de teclas.
	> **Alfabeto:** as teclas são geradas de A-Z. (eg. ASFGHO)
  >
	>**Numérico:** as teclas são geradas de 0-9. (eg. 186479)
	>
  >**Alfanumérico:** as teclas são geradas tanto de A-Z quanto de 0-9 juntamente. (eg. F9H57L)
	>
  >*O tipo de geração das teclas pode ser configurada. Saiba mais na seção [configuráveis](https://github.com/julliepx/cda-minigame/?tab=readme-ov-file#configuraveis)*
- **Dificuldades:** quando jogado no modo padrão, o AltaFlash possui seleção de dificuldade para que o jogador possa escolher o ritmo que mais lhe agrada. Vamos combinar né? Nem todo mundo tem os melhores dos reflexos!
	> **Disponíveis:** Fácil | Médio | Difícil | Impossível | Flash
	>
  >*O tempo de resolução e a quantidade de teclas é configurável para cada dificuldade. Saiba mais na seção [configuráveis](https://github.com/julliepx/cda-minigame/?tab=readme-ov-file#configuraveis)*
- **Ranking:** depois de treinar bastante, aguçar as habilidades de rapidez, o jogador ainda pode dar uma olhadinha no ranking para dar aquela famosa zombada nos amigos ou até mesmo se desafiar a bater os próprios recordes!
## Configuráveis
Está disponibilizado na pasta public um arquivo JSON com possíveis configurações do game, sendo elas:

- **KeyType:** tipo de geração de teclas podendo ser entre - ALPHABET, NUMERIC ou ALPHANUMERIC.
  >*Para saber mais basta olhar a seção de funcionalidades.*
- **Difficulties:**  uma lista de dificuldades pré-definidas contendo:
	> **Time to solve:** tempo em segundos que o jogador terá para resolver a sequência de teclas.
	>
  >**Number of keys:** número de teclas que o jogador terá que pressionar para encerrar a sequência.
	>
	>*No momento não é possível adicionar dificuldades a mais do que as existentes*
  >*NÃO modifique o nome das dificuldades.*
- **Messages:** mensagens exibidas para o jogador ao completar uma sequência:
	> **Win:** lista com mensagens de vitória personalizáveis para exibir aleatoriamente.
	>
  >**Lose:** lista com mensagens de derrota personalizáveis para exibir aleatoriamente.

## Iniciando o Projeto

*Para rodar a aplicação você precisa do Node.js instalado na sua máquina.*

### Passo a passo:
 1. Clonar o repositório:
	```
	git clone https://github.com/julliepx/cda-minigame.git
	```

 3. Instalar as dependências:
 	```
	npm install
	```
 
 5. Executar o projeto:
	```
	npm run dev
	```

 ## Melhorias para serem Exploradas
*Essa seção contém melhorias que eu faria em um futuro próximo, ou até mesmo se tivesse um pouco mais de tempo para aplicá-las*

- Criação de testes unitários (foram despriorizados para ter mais tempo de implementar novas features)
- Modificação do uso da Context API para um gerenciador mais robusto como Redux ou Zustand.
- Implementar o salvamento da pontuação no modo de jogo **Teste sua Velocidade** 
	> Atualmente não salva pois a intenção seria futuramente salvar tanto o tempo de execução juntamente com a quantidade de sequências executadas.
	
- Opções para trocar dificuldade enquanto já em jogo (eg. Telas de vitória e derrota)
- Implementar mais dificuldades assim como novos modos de jogo (.eg Modo de jogo onde o jogador teria X tempo para pressionar o máximo de teclas possível.)
