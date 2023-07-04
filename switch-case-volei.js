// Calcula valor a receber após uma partida de jogo de vôley.

let money = 0;
const championship = 'Jogos Olímpicos' // 'Jogos Olímpicos', 'Campeonato Mundial', 'Copa do Mundo', 'Liga das Nações', 'Liga Mundial', 'Campeonato Sul-Americano', 'Copa Pan-Americana';
const win = true;
const howWin = '3 sets a zero'; // '3 sets a zero', '3 sets a 1', '3 sets a 2';  

if (win === true) {
  if (howWin === '3 sets a 1' || howWin === '3 sets a 2') {
    money += 20000;
  } else if (howWin === '3 sets a zero') {
    money += 40000;
  }
  
  switch (championship) {
    case 'Jogos Olímpicos':
      money += 70000;
      break;
    case 'Campeonato Mundial':
      money += 100000;
      break;
    case 'Copa do Mundo':
      money += 100000;
      break;
    case 'Liga das Nações':
      money += 50000;
      break;
    case 'Liga Mundial':
      money += 60000;
      break;
    case 'Campeonato Sul-Americano':
      money += 40000;
      break;
    case 'Copa Pan-Americana':
      money += 40000;
      break;
    default:
      console.log('Campeonato não encontrado.');
      break;
  }
}

console.log('Money: $' + money);