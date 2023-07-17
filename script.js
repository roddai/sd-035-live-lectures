const students35 = {
  studentsInfo: [
    {
      picture: "./images/anadu.png",
      trybe: "CH35",
      studentName: "AnaDu",
      projectLessonsLearned: 5, 
      projectPirilampo: 50,
      projectPixelsArt: 35,
    },
    {
      picture: "./images/cadu.png",
      trybe: "CH35",
      studentName: "Cadu",
      projectLessonsLearned: 2, 
      projectPirilampo: 30,
      projectPixelsArt: 20,
    },
    {
      picture: "./images/gus.png",
      trybe: "CH35",
      studentName: "Gus",
      projectLessonsLearned: 1, 
      projectPirilampo: 10,
      projectPixelsArt: 10,
    },
    {
      picture: "./images/luquinha.png",
      trybe: "CH35",
      studentName: "Luquinha",
      projectLessonsLearned: 4, 
      projectPirilampo: 30,
      projectPixelsArt: 40,
    },
    {
      picture: "./images/nat.png",
      trybe: "CH35",
      studentName: "Nat",
      projectLessonsLearned: 5, 
      projectPirilampo: 55,
      projectPixelsArt: 40,
    },
    {
      picture: "./images/rods.png",
      trybe: "CH35",
      studentName: "Rods",
      projectLessonsLearned: 4, 
      projectPirilampo: 50,
      projectPixelsArt: 31,
    },
    {
      picture: "./images/vic.png",
      trybe: "CH35",
      studentName: "Vic",
      projectLessonsLearned: 4, 
      projectPirilampo: 45,
      projectPixelsArt: 31,
    },
    {
      picture: "./images/vitor.png",
      trybe: "CH35",
      studentName: "Vitor",
      projectLessonsLearned: 5, 
      projectPirilampo: 50,
      projectPixelsArt: 31,
    },
  ]
}

const futureProjects = {
  fundamentos: [
    {
      secao: 5,
      project_name: 'Trybewarts',
    },
    {
      secao: 6,
      project_name: 'Unit Tests',
    },
    {
      secao: 7,
      project_name: 'Zoo Functions',
    }
  ],
  front_end: [
    {
      secao: 1,
      project_name: 'Shopping Cart',
    },
    {
      secao: 2,
      project_name: 'Solar System',
    },
    {
      secao: 3,
      project_name: 'Tryunfo',
    },
    {
      secao: 4,
      project_name: 'TrybeTunes',
    },
    {
      secao: 5,
      project_name: 'Front-end Online Store',
    },
    {
      secao: 6,
      project_name: 'Testes em React',
    },
    {
      secao: 7,
      project_name: 'Trybe Wallet',
    },
    {
      secao: 8,
      project_name: 'Jogo de Trivia',
    },
    {
      secao: 9,
      project_name: 'StarWars Datatable com Context API e Hooks',
    },
    {
      secao: 10,
      project_name: 'App de Receitas',
    }
  ],
  back_end: [
    {
      secao: 1,
      project_name: 'Docker Todo-List',
    },
    {
      secao: 2,
      project_name: 'All For One',
    },
    {
      secao: 3,
      project_name: 'One For All',
    },
    {
      secao: 4,
      project_name: 'Talker Manager',
    },
    {
      secao: 5,
      project_name: 'Store Manager',
    },
    {
      secao: 6,
      project_name: 'API de Blogs',
    },
    {
      secao: 8,
      project_name: 'Trybesmith',
    },
    {
      secao: 9,
      project_name: 'Trybers and Dragons',
    },
    {
      secao: 10,
      project_name: 'TFC - Trybe Futebol Clube',
    },
    {
      secao: 11,
      project_name: 'Commerce',
    },
    {
      secao: 12,
      project_name: 'Car Shop',
    },
    {
      secao: 13,
      project_name: 'App de Delivery',
    },
  ],
  ciencia_computacao: [
    {
      secao: 1,
      project_name: 'Job Insights',
    },
    {
      secao: 2,
      project_name: 'Relatório de Estoque',
    },
    {
      secao: 3,
      project_name: 'Tech News',
    },
    {
      secao: 4,
      project_name: 'Algoritmos',
    },
    {
      secao: 5,
      project_name: 'TING - Trybe is Not Google',
    },
    {
      secao: 6,
      project_name: 'Restaurant Orders',
    },
  ]
}

const randomIndex = (number) => Math.floor(Math.random() * number);
const createElement = (element) => document.createElement(element);

const studentName = document.querySelector('#name');
const gradeLessonsLearned = document.querySelector('#gradeLessonsLearned');
const gradePirilampo = document.getElementById('gradePirilampo');
const gradePixelsArt = document.getElementById('gradePixelsArt');
const picture = document.getElementById('picture');
const results = document.getElementById('results');
const newProjects = document.querySelector('.future-projects');
const main = document.querySelector('main');

const array = students35.studentsInfo;

// Retorna um array com os nomes de estudantes
const generateStudentesName = () => {
  const arrayOfNames = [];

  for (let index = 0; index < array.length; index += 1) {
    arrayOfNames.push(array[index].studentName);
  }
  
  addNames(arrayOfNames);
}

const addNames = (arrayOfNames) => {
  for (let index = 0; index < arrayOfNames.length; index += 1) {
    const newParagraph = createElement('p');

    newParagraph.innerText = arrayOfNames[index];
    newParagraph.className = 'rodsEffect studentName';

    main.firstElementChild.appendChild(newParagraph);
  }
}

const addEventToNames = () => {
  const names = document.querySelectorAll('.studentName');

  for (let index = 0; index < names.length; index += 1) {
    names[index].addEventListener('click', (event) => {
      const capture = event.target.innerText;

      getStudentInfo(capture);
    });
  }
}

const getStudentInfo = (capturedName) => {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].studentName === capturedName) {
      studentName.innerText = capturedName;
      gradeLessonsLearned.innerText = array[index].projectLessonsLearned;
      gradePirilampo.innerText = array[index].projectPirilampo;
      gradePixelsArt.innerText = array[index].projectPixelsArt;
      picture.src = array[index].picture;
    }
  }
  // results.innerText = 'Ainda nada!!!';
  verifyScore();
  createProjectsList();
}

const verifyScore = () => {
  const sum = parseInt(gradeLessonsLearned.innerText) + parseInt(gradePirilampo.innerText) + parseInt(gradePixelsArt.innerText);

  if (sum >= 85) {
    results.innerText = `${sum} - Parabéns, ${studentName.innerText}!`;
    results.className = 'green';
  } else {
    results.innerText = `${sum} - Não foi desta vez, ${studentName.innerText}`;
    results.className = 'red';
  }
}

const createProjectsList = () => {
  const arrayKeys = Object.keys(futureProjects);
  
  for (let initialIndex = 0; initialIndex < arrayKeys.length; initialIndex += 1) {
    const module = arrayKeys[initialIndex]; 
    const newTitle = createElement('h2');
    newTitle.innerText = module.toUpperCase();
    newProjects.appendChild(newTitle);

    for (let index = 0; index < futureProjects[module].length; index += 1) {
      const element = futureProjects[module][index];

      const newParagraph = createElement('p');
      newParagraph.innerText = `Seção ${element.secao} - ${element.project_name}`;
      newParagraph.className = 'rodsEffect';
      newProjects.appendChild(newParagraph);

      fixedBackgroundColor(newParagraph);
    }
  }
}

const fixedBackgroundColor = (newParagraph) => {
  newParagraph.addEventListener('click', () => {
    newParagraph.style.backgroundColor = 'magenta';
  })
}

const removeProject = (project) => {
  const projectsList = document.querySelectorAll('.rodsEffect');
  
  for (let index = 0; index < projectsList.length; index += 1) {
    if (projectsList[index].innerText === project) {
      let parent = projectsList[index].parentElement;
      
      parent.removeChild(projectsList[index]);
    }
  }
}


window.onload = () => {
  generateStudentesName();
  getStudentInfo('Rods');
  addEventToNames();
}

// removeProject('Seção 7 - Zoo Functions');
// removeProject('Seção 3 - Tryunfo');
// removeProject('Seção 4 - Talker Manager');
// removeProject('Seção 5 - TING - Trybe is Not Google');




/* Cria elementos de forma dinâmica.
1) criar o elemento com document.createElement();
2) adiciona propriedades, texto, etc.
3) adiciona na página com appendChild(); a) onde? / b) método / c) quem?
*/