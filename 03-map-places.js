const data = require('./places');

// Transforme (Mapeie) o array de objeto cities em um array de objetos do seguinte formado:
// {
//   state: "Amazonas",
//   city: "Manaus",
//   region: "Norte"
// }

const findState = (shortState) => {
  for (let state of data.states) {
    if (state.short === shortState) {
      return state.name;
    }
  }
}

const findRegion = (shortRegion) => {
  for (let region of data.regions) {
    if (region.short === shortRegion) {
      return region.name;
    }
  }
}

const arrayCities = (data) => data.cities.map((city) => ({
  state: findState(city.state),
  city: city.name,
  region: findRegion(city.region),
}));

console.log(arrayCities(data));