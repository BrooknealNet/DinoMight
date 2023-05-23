'use strict'

let initialPage = document.getElementById('home-imgs');

let app = new AppState();
app.loadItems();
let dinoIndexArray = [];

function rndmNumGen(){
    return Math.floor(Math.random() * app.allDinosaurs.length);
  }


function renderDinoImages() {

  while (dinoIndexArray.length < 5) {
    let randomDinoIndex = rndmNumGen();
    if (!dinoIndexArray.includes(randomDinoIndex)) {
      dinoIndexArray.push(randomDinoIndex);
    }
  }

  for (let i = 0; i < 5; i++) {
    let randomIndex = dinoIndexArray.shift()

    let dinoImage = app.allDinosaurs[randomIndex].image
    let dinoTitle = app.allDinosaurs[randomIndex].name
    let dinoDescrip = app.allDinosaurs[randomIndex].facts
    app.allDinosaurs[i].wasSeen = true;

    let heroImageRow = document.createElement('tr');
    heroImageRow.innerHTML = `<img src="${dinoImage}" alt="${dinoTitle}">`;
    initialPage.appendChild(heroImageRow);

    let dinoRow = document.createElement('tr');
    heroImageRow.appendChild(dinoRow);
            
    let dinoHeader = document.createElement('td');
    dinoHeader.innerText = `Name: ${dinoTitle}`;
    dinoRow.appendChild(dinoHeader);
            
    let dinoFacts = document.createElement('td');
    dinoFacts.innerText = `Description: ${dinoDescrip}`;
    dinoRow.appendChild(dinoFacts);
  }
}

renderDinoImages();