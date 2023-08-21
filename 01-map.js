// 1. Transforme (Mapeie) o array de objetos cities em um array de strings com o seguinte formato:
// a) "${nomeDaCidade} - ${siglaDoEstado}"
// Exemplo: "Manaus - AM"

const cities = [
  { state: "AM", name: "Manaus" , region: "N" },
  { state: "PA", name: "Belém" , region: "N" },
  { state: "TO", name: "Porto Nacional" , region: "N" },
  { state: "MG", name: "Lavras" , region: "SE" },
  { state: "BA", name: "Feira de Santana" , region: "NE" },
  { state: "PR", name: "Cascavel" , region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" }
];

// USANDO FOR
const citiesAndStatesWithFor = (cities) => {
  const myArray = [];

  for (let index = 0; index < cities.length; index += 1) {
    myArray.push(`${cities[index].name} - ${cities[index].state}`);
  }

  return myArray;
}

console.log(citiesAndStatesWithFor(cities));

// USANDO MAP
// const citiesAndStatesWithMap = (cities) => {
//   return cities.map( (city) => {
//     return `${city.name} - ${city.state}`;
//   });
// }

// Refatorando
const citiesAndStatesWithMap = (cities) => cities.map( (city) => `${city.name} - ${city.state}`);

console.log(citiesAndStatesWithMap(cities));
// console.table(citiesAndStatesWithMap(cities));