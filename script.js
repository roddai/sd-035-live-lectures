let num1 = 35;
let num2 = '35';

if (num1 === num2) {
  // console.log(true);
} else {
  // console.log(false);
}

// = é atribuição (exemplo x = 4);
// == é comparação (exemplo 35 == 35 ou 35 == '35'). Em ambos os casos a resposta é true, ou seja, não importa o tipo de dado.
// === é comparação estrita (aqui importa o tipo de dado - exemplo 35 === 35, a resposta é true). (35 === '35', a resposta é false)

// ====================================

let fralda;
const babyPeso = 16;

if (typeof babyPeso !== 'number') {
  fralda = 'Insira valor númerico para o peso do bebê.'
} else if (babyPeso <= 4) {
  fralda = 'RN';
} else if (babyPeso > 4 && babyPeso <= 6) {
  fralda = 'RN+';
} else if (babyPeso > 6 && babyPeso <= 8) {
  fralda = 'P';
} else if (babyPeso > 8 && babyPeso <= 10) {
  fralda = 'M';
} else if (babyPeso > 10 && babyPeso <= 13) {
  fralda = 'G';
} else if (babyPeso > 13 && babyPeso <= 15) {
  fralda = 'XG';
} else if (babyPeso > 15 && babyPeso <= 20) {
  fralda = 'XXG';
} else {
  fralda = 'Já está bom, né!';
}

console.log(fralda);