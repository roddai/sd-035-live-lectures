const data = require('./data');

const findClubByYear = (year) => {
  const arrayClubs = data.clubs;

  for (let index = 0; index < arrayClubs.length; index += 1) {
    if (arrayClubs[index].years.includes(year)) {
      return `O campeão mundial do ano ${year} foi o ${arrayClubs[index].name}`;
    }
  }
  return `Não houve campeão mundial neste ano`;
}

console.log(findClubByYear(2000));
console.log(findClubByYear(2024));
