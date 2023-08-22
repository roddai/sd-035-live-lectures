// Mostrar SOMENTE as pessoas que NÃO podem dirigir

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false }
]

// USANDO FOR
const filterCanTDriveWithFor = (users) => {
  const canTDrive = [];

  for (let user of users) {
    if (user.isDriver === false) {
      canTDrive.push(user);
    }
  }
  return canTDrive;
}

// console.log(filterCanTDriveWithFor(users));

// USANDO FILTER()
// const filterCanTDrive = (users) => {
//   return users.filter((user) => {
//     return user.isDriver === false;
//   })
// }

// Refatorando
// const filterCanTDrive = (users) => users.filter((user) => user.isDriver === false);

// TRAZER SOMENTE OS NOMES DENTRO DO ARRAY
// const filterCanTDrive = (users) => {
//   const result = users.filter((user) => {
//     return user.isDriver === false;
//   })
//   return result.map((object) => {
//     return object.firstName; 
//   });
// }

// Refatorando
const filterCanTDrive = (users) => users
  .filter((user) => user.isDriver === false)
  .map((object) => object.firstName);

console.log(filterCanTDrive(users));