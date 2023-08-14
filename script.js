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

// Função que adiciona um texto com o filme, na página
const addHarryPotterMovie = () => {
  try {
    const year = document.querySelector('#movie').value;
    const result = document.querySelector('#result');

    result.innerText = `No ano ${year} foi lançado o filme ${getHarryPotterMovie(year)}`;
  
  } catch (error) {
    result.innerText = error.message;

  } finally {
    document.getElementById('movie').value = "";
  }
}

// Função que fornece o filme com base no ano de lançamento
const getHarryPotterMovie = (year) => {
  if (isNaN(parseInt(year))) {
    throw new Error('Valor inesperado. Insira um número.');
  }

  for (let index = 0; index < harryPotterMovies.filmes.length; index += 1) {
    const objectMovie = harryPotterMovies.filmes[index];

    if (parseInt(year) === objectMovie.ano_lancamento) {
      return objectMovie.nome;
    }
  }
  
  // return `Nenhum filme Harry Potter lançado neste ano.`;
  throw new Error('Nenhum filme Harry Potter lançado neste ano.');
}

window.onload = () => {
  const button = document.querySelector('#button');
  button.addEventListener('click', addHarryPotterMovie);
}