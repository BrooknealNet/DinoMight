'use strict'

// *** DOCUMENT WINDOWS ***
let initialPage = document.getElementById('home-imgs');
let startBtn = document.getElementById('start-btn');

// *** Globals ***

let populated = false;

// creating a new instance of the program
let app = new AppState();

// populating that instance with our local save
app.loadItems();
let dinoIndexArray = [];

// *** Helper Functions ***

function rndmNumGen(){
  return Math.floor(Math.random() * app.allDinosaurs.length);
}



function renderDinoImages() {
  for(let i = 0; i < app.allDinosaurs.length; i++){
    app.allDinosaurs[i].wasSeen = false;
  }

  // -------- TODO gonna need a for loop to iterate through and set all wasSeen to false incase it was pulled from local storage
  // this populates an array with randomly selected numbers no higher than the size of the array
  while (dinoIndexArray.length < 5) {
   
    let randomDinoIndex = rndmNumGen();
    if (!dinoIndexArray.includes(randomDinoIndex)) {
      dinoIndexArray.push(randomDinoIndex);
    }
  }

  // itterating through the array we just created, assigning those numbers to dinosaurs by pulling the first from the array
  for (let i = 0; i < 5; i++) {
    let randomIndex = dinoIndexArray.shift()

    // these assign variables the values from the dinosaur objects
    let dinoImage = app.allDinosaurs[randomIndex].image
    let dinoTitle = app.allDinosaurs[randomIndex].name
    let dinoDescrip = app.allDinosaurs[randomIndex].facts
    // This sets was seen was true so the program will know which were shown on screen
    app.allDinosaurs[i].wasSeen = true;

    // This creates a table row with the image of the dinosaur in it. It also sets the alt to the dinos name so the event listner knows which was clicked.
    let heroImageRow = document.createElement('tr');
    heroImageRow.innerHTML = `<img src="${dinoImage}" alt="${dinoTitle}">`;
    initialPage.appendChild(heroImageRow);

    // This creates a new row, everything below can be put on the quiz page
    let dinoRow = document.createElement('tr');
    heroImageRow.appendChild(dinoRow);
            
    // this creates a table data cell with the Dinos name
    let dinoHeader = document.createElement('td');
    dinoHeader.innerText = `${dinoTitle}`;
    dinoRow.appendChild(dinoHeader);
            
    // This creates a table data cell with the dinos description
    
  }
  app.saveToLocalStorage();
  populated = true;
}



function startBtnHandler(){
  if (populated === true){
    // ("#home-imgs tr").remove();
    initialPage.deleteRow(-1);
    initialPage.deleteRow(-1);
    initialPage.deleteRow(-1);
    initialPage.deleteRow(-1);
    initialPage.deleteRow(-1);
  }
  renderDinoImages();
}

// -------- TODO this needs to be called on an event listner for the start game button
startBtn.addEventListener('click', startBtnHandler);

// renderDinoImages();