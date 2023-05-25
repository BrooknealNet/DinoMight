// *** Globals ***

let populated = false;

// creating a new instance of the program
let app = new AppState();

// populating that instance with our local save
app.loadItems();
let dinoIndexArray = [];

// *** DOCUMENT WINDOWS ***
let dinoQuiz = document.getElementById('quiz-images');

function renderQuizImages(){
  for (let i = 0; i < app.allDinosaurs.length; i++) {

    // these assign variables the values from the dinosaur objects
    let dinoImageQuiz = app.allDinosaurs[i].image
    let dinoTitleQuiz = app.allDinosaurs[i].name
    let dinoDescripQuiz = app.allDinosaurs[i].facts

    // This creates a table row with the image of the dinosaur in it. It also sets the alt to the dinos name so the event listner knows which was clicked.
    let heroImageRowQuiz = document.createElement('tr');
    heroImageRowQuiz.innerHTML = `<img src="${dinoImageQuiz}" alt="${dinoTitleQuiz}">`;
    dinoQuiz.appendChild(heroImageRowQuiz);

    // This creates a new row, everything below can be put on the quiz page
    let dinoRowQuiz = document.createElement('tr');
    heroImageRowQuiz.appendChild(dinoRowQuiz);
            
    // this creates a table data cell with the Dinos name
    let dinoHeaderQuiz = document.createElement('td');
    dinoHeaderQuiz.innerText = `Name: ${dinoTitleQuiz}`;
    dinoRowQuiz.appendChild(dinoHeaderQuiz);
            
    // This creates a table data cell with the dinos description
    let dinoFactsQuiz = document.createElement('td');
    dinoFactsQuiz.innerText = `Description: ${dinoDescripQuiz}`;
    dinoRowQuiz.appendChild(dinoFactsQuiz);
  }
}

function checkAnswer(event) {
  let dinoClicked = event.target.name;
  console.log(dinoClicked);
}

renderQuizImages();

dinoQuiz.addEventListener('click', checkAnswer);