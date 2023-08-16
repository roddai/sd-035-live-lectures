const { findClubByYear } = require('../src/findClubByYear');

describe('Testes da função findClubByYear', () => {
  it('Verifica se a função findClubByYear existe.', () => {
    expect(typeof findClubByYear).toBe('function');
  });

  it('Verifica se a função findClubByYear, ao receber 2015 como parâmetro, retorna "O campeão mundial do ano 2015 foi o Barcelona".', () => {
    // fail('Teste vazio!');
    expect(findClubByYear(2015)).toBe("O campeão mundial do ano 2015 foi o Barcelona");
  });

  it('Verifica se a função findClubByYear, ao receber 2024 como parâmetro, retorna "Não houve campeão mundial neste ano".', () => {
    expect(findClubByYear(2024)).toBe("Não houve campeão mundial neste ano");
  })
}); 