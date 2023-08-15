const harryPotterMovies = {
  filmes: [
    {
      "nome": "Harry Potter e a Pedra Filosofal", 
      "ano_lancamento": 2001, 
      "atores_principais": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
      "nome": "Harry Potter e a Câmara Secreta",
      "ano_lancamento": 2002,
      "atores_principais": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
      "nome": "Harry Potter e o Prisioneiro de Azkaban",
      "ano_lancamento": 2004,
      "atores_principais": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
      "nome": "Harry Potter e o Cálice de Fogo",
      "ano_lancamento": 2005,
      "atores_principais": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
      "nome": "Harry Potter e a Ordem da Fênix",
      "ano_lancamento": 2007,
      "atores_principais": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
      "nome": "Harry Potter e o Enigma do Príncipe",
      "ano_lancamento": 2009,
      "atores_principais": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
      "nome": "Harry Potter e as Relíquias da Morte - Parte 1",
      "ano_lancamento": 2010,
      "atores_principais": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    },
    {
      "nome": "Harry Potter e as Relíquias da Morte - Parte 2",
      "ano_lancamento": 2011,
      "atores_principais": ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]
    }
  ]
}

// FUNÇÃO QUE FORNECE TÍTULO DO FILME OU UM ERRO
const getHarryPotterMovie = (year) => {
  if (isNaN(year)) {
    throw new Error('Valor inesperado. Insira um número.');
  }

  if (verifyMovieByYear(year) === undefined) {
    throw new Error(`No ano ${year} não foi lançado nenhum filme do Harry Potter`);
  } else {
    return verifyMovieByYear(year);
  }
}

// FUNÇÃO QUE FORNECE O TÍTULO DO FILME
const verifyMovieByYear = (year) => {
  for (let index = 0; index < harryPotterMovies.filmes.length; index += 1) {
    if (harryPotterMovies.filmes[index].ano_lancamento === year) {
      return harryPotterMovies.filmes[index]['nome'];
    }
  }
}

// FUNÇÃO QUE ADICIONA TEXTO NA SAÍDA DO CONSOLE
const addHarryPotterMovie = (year) => {
  try {
    return `No ano ${year} foi lançado o filme ${getHarryPotterMovie(year)}`;

  } catch (error) {
    return error.message;
  }
}



// console.log(addHarryPotterMovie(2011));
// console.log(addHarryPotterMovie(2008));
// console.log(addHarryPotterMovie('xablau'));
// console.log(addHarryPotterMovie());

console.log(getHarryPotterMovie(2010));
// console.log(getHarryPotterMovie(2015));
// console.log(getHarryPotterMovie('xablau'));

// console.log(verifyMovieByYear(2010));
// console.log(verifyMovieByYear(2015));