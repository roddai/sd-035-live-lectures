const data = require('../src/data');

describe('Testa a base de dados.', () => {
  it('Verifica se a base de dados é um objeto.', () => {
    expect(typeof data).toBe('object');
  });

  it('Verifica se a base de dados possui 30 times.', () => {
    expect(data.clubs).toHaveLength(30);
  });

  it('Verifica se a base de dados possui o time "Manchester United".', () => {
    const objectManchester = {
      name: 'Manchester United',
      country: 'Inglaterra',
      years: [1999, 2008],
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/640px-Manchester_United_FC_crest.svg.png',
    }
    expect(data.clubs).toContainEqual(objectManchester);
  });

  it('Verifica se todos os times possuem a propriedade "name".', () => {
    for (let obj of data.clubs) {
      expect(obj).toHaveProperty('name');
    }
  });

  it('Verifica se, ao tentar buscar o time na posição 928 do array, retorna undefined.', () => {
    expect(data.clubs[928]).toBeUndefined();
  });

  it('Verifica se, ao tentar buscar o time na posição 9 do array, não retorna undefined.', () => {
    expect(data.clubs[9]).not.toBeUndefined();
  });

  it('Verifica se existe algum time que o nome começa com uma determinada letra.', () => {
    const verifyFirstLetter = (letter) => {
      let foundTeamName;

      for (let index = 0; index < data.clubs.length; index += 1) {
        if (data.clubs[index].name[0] === letter) {
          return foundTeamName = data.clubs[index].name;
        }
      }
      return `Time não encontrado`;
    }
    expect(verifyFirstLetter('M')).toMatch(/^M/);
    expect(verifyFirstLetter('A')).toMatch(/^A/);
    expect(verifyFirstLetter('S')).toMatch(/^S/);
    expect(verifyFirstLetter('C')).toMatch(/^C/);
  });
});
