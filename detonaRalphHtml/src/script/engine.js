// Definindo o estado do jogo com elementos de interface (view), valores (values) e ações (actions)
const state = {
    view: {
      squares: document.querySelectorAll(".square"),  // Seleciona todos os elementos quadrados para interação
      enemy: document.querySelector(".enemy"),         // Seleciona o elemento que representa o inimigo
      timeLeft: document.querySelector("#time-left"),  // Elemento para exibir o tempo restante do jogo
      score: document.querySelector("#score"),         // Elemento para exibir a pontuação do jogador
    },
    values: {
      gameVelocity: 1000,   // Velocidade de mudança do inimigo (em milissegundos)
      hitPosition: 0,       // Posição do inimigo que deve ser clicada pelo jogador
      result: 0,            // Pontuação do jogador
      curretTime: 60,       // Tempo total do jogo em segundos
    },
    actions: {
      timerId: setInterval(randomSquare, 1000),       // Intervalo que altera a posição do inimigo
      countDownTimerId: setInterval(countDown, 1000), // Intervalo que decrementa o tempo restante
    },
  };
  
  // Função para gerenciar a contagem regressiva do tempo do jogo
  function countDown() {
    state.values.curretTime--; // Diminui o tempo restante em 1 segundo
    state.view.timeLeft.textContent = state.values.curretTime; // Atualiza o tempo restante na interface
  
    // Se o tempo acabar, finaliza o jogo e exibe a pontuação final
    if (state.values.curretTime <= 0) {
      clearInterval(state.actions.countDownTimerId); // Para o intervalo da contagem regressiva
      clearInterval(state.actions.timerId);          // Para o intervalo de alteração do inimigo
      alert("Game Over! O seu resultado foi: " + state.values.result); // Exibe a mensagem final com a pontuação
    }
  }
  
  // Função para tocar um som ao acertar o inimigo
  function playSound(audioName) {
    let audio = new Audio(`./src/audio/${audioName}.m4a`); // Cria o objeto de áudio usando o nome fornecido
    audio.volume = 0.2; // Define o volume do som
    audio.play();       // Toca o som
  }
  
  // Função para mover o inimigo para uma posição aleatória
  function randomSquare() {
    // Remove a classe 'enemy' de todos os quadrados
    state.view.squares.forEach((square) => {
      square.classList.remove("enemy");
    });
  
    // Escolhe um quadrado aleatório e adiciona a classe 'enemy' para indicar a nova posição do inimigo
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id; // Define a posição que o jogador precisa acertar
  }
  
  // Função para adicionar o evento de clique (hit) aos quadrados do jogo
  function addListenerHitBox() {
    state.view.squares.forEach((square) => {
      square.addEventListener("mousedown", () => {
        // Verifica se o quadrado clicado é o inimigo
        if (square.id === state.values.hitPosition) {
          state.values.result++; // Incrementa a pontuação
          state.view.score.textContent = state.values.result; // Atualiza a pontuação na interface
          state.values.hitPosition = null; // Reseta a posição do inimigo
          playSound("hit"); // Toca o som de acerto
        }
      });
    });
  }
  
  // Função de inicialização do jogo
  function initialize() {
    addListenerHitBox(); // Adiciona os eventos de clique aos quadrados
  }
  
  // Inicia o jogo
  initialize();
  