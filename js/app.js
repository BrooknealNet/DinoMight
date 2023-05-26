'use strict';

// *** Constructors ***

function AppState() {
  this.allDinosaurs = [];
  this.scores = [];
}

function Dinosaur(name, facts, fileExtension = 'png') {
  this.name = name;
  this.facts = facts;
  this.image = `img/${name}.${fileExtension}`;
  this.wasSeen = false;
}

// *** Prototypes ***

AppState.prototype.instantiateDinosaurs = function () {
  const dinoObjects = [{name: 'Allosaurus', facts: 'Knifelike teeth and strong, sharp claw.'}, {name: 'Apatosaurus', facts: 'Can grow up to 69ft.'}, {name: 'Archaeopteryx', facts: 'First fossils were found in 1861.'}, {name: 'Brachiosaurus', facts: 'Can weigh from 33 to 35 tons and eats almost 440lbs.'}, {name: 'Dilophosaurus', facts: 'Name means "double-crested lizard".'}, {name: 'Parasaurolophus', facts: 'Tube on its head works like a trumpet and makes loud noises.'}, {name: 'Plesiosaurus', facts: 'Had a turle like body, paddle-fins like a whale, and a long neck like a giant snake.'}, {name: 'Quetzalcoatlus', facts: 'Had a larger wingspan than a small plane, but it was very light at 550 lbs.'}, {name: 'Spinosaurus', facts: 'Possibly longer and heaver than a T-rex.'}, {name: 'Stegosaurus', facts: 'Famous for the row of giant diamond-shaped plates on its back.'}, {name: 'Tyrannosaurus', facts: 'The deadliest of all meat eating dinos and the most famous of all dinosaurs.'}, {name: 'Velociraptor', facts: 'Bird like hunter, covered in feathers.'}];

  for (let i = 0; i < dinoObjects.length; i++) {
    this.allDinosaurs.push(new Dinosaur(dinoObjects[i].name, dinoObjects[i].facts));
  }
}

// *** Local Storage Prototype Functions ***

AppState.prototype.saveToLocalStorage = function () {
  const stringDinosaurs = JSON.stringify(this.allDinosaurs);
  const stringScores = JSON.stringify(this.scores);
  localStorage.setItem('dinosaurs', stringDinosaurs);
  localStorage.setItem('scores', stringScores);

}
  
AppState.prototype.loadItems = function () {
  const loadedDinosaurs = localStorage.getItem('dinosaurs');
  const loadedScores = localStorage.getItem('scores');
  const parsedScores = JSON.parse(loadedScores);
  this.scores = parsedScores;
  if (loadedDinosaurs){
    const parcedDinosaurs = JSON.parse(loadedDinosaurs);
    this.allDinosaurs = parcedDinosaurs;
  } else {
    this.instantiateDinosaurs();
  }
}

//music for startButton and time elapsed
let audio = document.getElementById("myAudio");
let startButton = document.getElementById("start-btn");
let startQuizButton = document.getElementById("start-quiz-btn");


startButton.addEventListener("click", function() {
  audio.play();
  startTime = Date.now();
  localStorage.setItem("startTime", startTime);
});



let startTime;

startQuizButton.addEventListener("click", function() {
  let endTime = Date.now();
  let elapsedTime = (endTime - startTime) / 1000; 
  console.log(`Time elapsed: ${elapsedTime} seconds`);
});
