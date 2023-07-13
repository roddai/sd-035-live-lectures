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

const randomIndex = (number) => Math.floor(Math.random() * number);

const studentName = document.querySelector('#name');
const gradeLessonsLearned = document.querySelector('#gradeLessonsLearned');
const gradePirilampo = document.getElementById('gradePirilampo');
const gradePixelsArt = document.getElementById('gradePixelsArt');
const picture = document.getElementById('picture');
const results = document.getElementById('results');

const getStudentInfo = () => {
  const array = students35.studentsInfo;
  const number = randomIndex(array.length);

  studentName.innerText = array[number].studentName;
  gradeLessonsLearned.innerText = array[number].projectLessonsLearned;
  gradePirilampo.innerText = array[number].projectPirilampo;
  gradePixelsArt.innerText = array[number].projectPixelsArt;
  picture.src = array[number].picture;
  // results.innerText = 'Ainda nada!!!';
  verifyScore();
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

getStudentInfo();