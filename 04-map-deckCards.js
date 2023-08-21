const data = require('./deckCards');

/* RETORNAR TODOS OS ELEMENTOS DO ARRAY CARDS NO SEGUINTE FORMATO:
{
  nome: "nome do monstro",
  tipo: "nome do tipo do monstro",
  atributo: "nome do atributo do monstro",
  img: "link da imagem do monstro"
}
*/

// FUNÇÃO QUE RETORN AO OBJETO QUE POSSUI O ID PASSADO COMO ARGUMENTO
const findElement = (array, cardElement) => {
  for (let objeto of array) {
    if (objeto.id === cardElement) {
      return objeto.name;
    }
  }
}

// FUNÇÃO QUE RETORNA UM ARRAY DE OBJETOS NO FORMATO ESCOLHIDO, USANDO MAP();
// const resumeInfo = (data) => {
//   return data.cards.map((card) => {
//     return {
//       nome: card.name,
//       tipo: findElement(data.types, card.typeId),
//       atributo: findElement(data.attributes, card.attributeId),
//       img: card.img,
//     }
//   });
// }

// MESMA FUNÇÃO, USANDO MAP() E OBJECT PROPERTY SHORTHAND;
const resumeInfo = (data) => data.cards.map((card) => {
  const nome = card.name;
  const tipo = findElement(data.types, card.typeId);
  const atributo = findElement(data.attributes, card.attributeId);
  const img = card.img;

  return { nome, tipo, atributo, img }
});

console.log(resumeInfo(data));