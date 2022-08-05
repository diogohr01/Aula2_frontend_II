let round = prompt("Digite a quantidade de rodadas que você deseja jogar: ")

let playerWin = 0
let machineWin = 0
let empate = 0

// inicio do laço para repetição de partida.
for (let i = 0; i < round; i++){
let playerNumber = parseInt(prompt('Escolha um número: 1= Pedra, 2= Papel, 3= Tesoura: '))
console.log(playerNumber)

// função que gera um número randomico inteiro.
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
let maquinaConvertida = getRandomIntInclusive(1,3)
console.log(maquinaConvertida)

// Teste de condição
if (playerNumber == 1 && maquinaConvertida == 3) {
  playerWin = playerWin + 1
  alert("Player escolhe Pedra, Pedra vence Tesoura = Você ganhou!")
} else if (playerNumber == 1 && maquinaConvertida == 2) {
  machineWin = machineWin + 1
  alert("Máquina escolhe Papel, Papel vence Pedra = Você perdeu!")
} else if (playerNumber == 1 && maquinaConvertida == 1) {
  empate = empate + 1
  alert("Máquina e Player escolhem Pedra = Empatou!")
}

if (playerNumber == 2 && maquinaConvertida == 1) {
  playerWin = playerWin + 1
  alert("Player escolhe Papel, Papel vence Pedra = Você ganhou!")
} else if (playerNumber == 2 && maquinaConvertida == 3) {
  machineWin = machineWin + 1
  alert("Máquina escolhe Tesoura, Tesoura vence Papel = Você perdeu!")
} else if (playerNumber == 2 && maquinaConvertida == 2) {
  empate = empate + 1
  alert("Máquina e Player escolhem Papel = Empatou!")
}

if (playerNumber ==3 && maquinaConvertida == 2) {
  playerWin = playerWin + 1
  alert("Player escolhe Tesoura, Tesoura vence Papel = Você ganhou!")
} else if (playerNumber == 3 && maquinaConvertida == 1) {
  machineWin = machineWin + 1
  alert("Máquina escolhe Pedra, Pedra vence Papel => Você perdeu!")
} else if (playerNumber == 3 && maquinaConvertida == 3) {
  empate = empate + 1
  alert("Máquina e Player escolhem Tesoura = Empatou!")
}
}
alert("Resultado final: Player: " + playerWin + " Máquina: " + machineWin + " Empates: " + empate)