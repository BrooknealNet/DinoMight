// *** Globals ***

let guessCorrect = 0;
let attempts = 0;


// creating a new instance of the program
let app = new AppState();

// populating that instance with our local save
app.loadItems();

// *** DOCUMENT WINDOWS ***
let dinoQuiz = document.getElementById('quiz-images');

function renderQuizImages() {
  for (let i = 0; i < app.allDinosaurs.length; i++) {

    // these assign variables the values from the dinosaur objects
    let dinoImageQuiz = app.allDinosaurs[i].image;
    let dinoTitleQuiz = app.allDinosaurs[i].name;
    let dinoDescripQuiz = app.allDinosaurs[i].facts;

    // This creates a table row with the image of the dinosaur in it. It also sets the alt to the dinos name so the event listner knows which was clicked.
    let heroImageRowQuiz = document.createElement('tr');
    heroImageRowQuiz.setAttribute('id', `${dinoTitleQuiz}`);
    heroImageRowQuiz.innerHTML = `<img src="${dinoImageQuiz}" title="${dinoTitleQuiz}" alt="${dinoTitleQuiz}">`;
    dinoQuiz.appendChild(heroImageRowQuiz);

    // This creates a new row, everything below can be put on the quiz page
    let dinoRowQuiz = document.createElement('tr');
    heroImageRowQuiz.appendChild(dinoRowQuiz);

    // this creates a table data cell with the Dinos name
    let dinoHeaderQuiz = document.createElement('td');
    dinoHeaderQuiz.innerText = `${dinoTitleQuiz}`;
    dinoRowQuiz.appendChild(dinoHeaderQuiz);

    // This creates a table data cell with the dinos description
    let dinoFactsQuiz = document.createElement('td');
    dinoFactsQuiz.innerText = `${dinoDescripQuiz}`;
    dinoRowQuiz.appendChild(dinoFactsQuiz);
  }
}

function checkAnswer(event) {
  let dinoClicked = event.target.title;
  for (let i = 0; i < app.allDinosaurs.length; i++) {

    if (app.allDinosaurs[i].name == dinoClicked && app.allDinosaurs[i].wasSeen == true) {
      guessCorrect += 1;
      document.getElementById(dinoClicked).className = 'correct';
      break;
    } else {
      document.getElementById(dinoClicked).className = 'nicetry';
    }
  }
  attempts += 1;
  calculateScore();
}

function calculateScore() {
  if (guessCorrect === 5){
    let roundScore = {
      guesses: `${attempts}`,

      correct: `${guessCorrect}`
    }
    app.scores.push(roundScore);
    app.saveToLocalStorage();
  }
}

renderQuizImages();

dinoQuiz.addEventListener('click', checkAnswer);

