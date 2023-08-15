const { getHarryPotterMovie, addHarryPotterMovie, verifyMovieByYear } = require('./script');

// 'Testa função que adiciona filmes.'
  // 1- 'Verifica se a função addHarryPotterMovie existe.'
  it('Verifica se a função addHarryPotterMovie existe.', () => {
    expect(typeof addHarryPotterMovie).toBe('function');
  })

  // 2- 'Verifica se a função addHarryPotterMovie, ao receber o ano 2011 como parâmetro, retorna o texto "No ano 2011 foi lançado o filme Harry Potter e as Relíquias da Morte - Parte 2".'
  it('Verifica se a função addHarryPotterMovie, ao receber o ano 2011 como parâmetro, retorna o texto correto.', () => {
    expect(addHarryPotterMovie(2011)).toBe("No ano 2011 foi lançado o filme Harry Potter e as Relíquias da Morte - Parte 2");
  })

  // 3- 'Verifica se a função addHarryPotterMovie, ao receber o ano 2008 como parâmetro, retorna o texto "No ano 2008 não foi lançado nenhum filme do Harry Potter".'
  it('Verifica se a função addHarryPotterMovie, ao receber o ano 2008 como parâmetro, retorna o texto correto.', () => {
    expect(addHarryPotterMovie(2008)).toBe("No ano 2008 não foi lançado nenhum filme do Harry Potter");
  });

  // 4- 'Verifica se a função addHarryPotterMovie, ao receber "undefined" como parâmetro, retorna um erro com a mensagem: "Valor inesperado. Insira um número.".'
  it('Verifica se a função addHarryPotterMovie, ao receber "undefined" como parâmetro, retorna o erro correto.', () => {
    expect(addHarryPotterMovie(undefined)).toBe("Valor inesperado. Insira um número.");
  })

  // 5- 'Verifica se a função addHarryPotterMovie, ao receber "xablau" como parâmetro, retorna um erro com a mensagem: "Valor inesperado. Insira um número.".'
  it('Verifica se a função addHarryPotterMovie, ao receber "xablau" como parâmetro, retorna o erro correto.', () => {
    expect(addHarryPotterMovie('xablau')).toBe("Valor inesperado. Insira um número.");
  })

// =============================================

// 'Testa função que fornece o título do filme ou um erro.'
  // 1- 'Verifica se a função getHarryPotterMovie existe.'

  // 2- 'Verifica se a função getHarryPotterMovie, ao receber o ano 2010 como parâmetro, retorna o filme "Harry Potter e as Relíquias da Morte - Parte 1".'

  // 3- 'Verifica se a função getHarryPotterMovie, ao receber o ano 2015 como parâmetro, lança um erro e retorna o texto "No ano 2015 não foi lançado nenhum filme do Harry Potter.'

  // 4- 'Verifica se a função getHarryPotterMovie, ao receber "xablau" como parâmetro, lança um erro e retorna o texto "Valor inesperado. Insira um número.'


// =============================================

// 'Testa função que fornece o título do filme.'
  // 1- 'Verifica se a função verifyMovieByYear existe.'

  // 2- 'Verifica se a função verifyMovieByYear, ao receber o ano 2010 como parâmetro, retorna o filme "Harry Potter e as Relíquias da Morte - Parte 1".'

  // 3- 'Verifica se a função verifyMovieByYear, ao receber o ano 2015 como parâmetro, retorna "undefined".'


// ===================== USANDO TDD ========================

// 'Testa função que fornece o array com principais atores dos filmes.'
  // 1- 'Verifica se a função getArrayWithActors existe.'

  // 2- 'Verifica se a função getArrayWithActors, ao receber o ano 2011 como parâmetro, retorna um array com os principais atores do filme deste ano.'