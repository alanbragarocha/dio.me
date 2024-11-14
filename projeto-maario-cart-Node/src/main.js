const player1 ={
    Nome: "Mario",
    Velocidade: 4,
    Força: 5,
    Manobrabilidade: 3,
    Ponttos: 0, 
};

const player2 ={
    Nome: "Luigi",
    Velocidade:3,
    Força: 4,
    Manobrabilidade: 3,
    Ponttos: 0, 
};

// Função para sortear bloco
async function getRandomBlock() {
    // Implementação da função
    return Math.floor(Math.random() * 10);
}

async function playRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Rodada ${round}`);

        // sortear bloco para o player 1
     }
}

(async function main() { // função auto executável
    console.log(`🏁 corrida entre ${player1.Nome} e ${player2.Nome} ...\n`);

    await playRaceEngine(player1, player2);
}());
//teste