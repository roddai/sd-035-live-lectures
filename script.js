let num1 = 35;
let num2 = '35';

if (num1 === num2) {
  console.log(true);
} else {
  console.log(false);
}

// = é atribuição (exemplo x = 4);
// == é comparação (exemplo 35 == 35 ou 35 == '35'). Em ambos os casos a resposta é true, ou seja, não importa o tipo de dado.
// === é comparação estrita (aqui importa o tipo de dado - exemplo 35 === 35, a resposta é true). (35 === '35', a resposta é false)

// ====================================