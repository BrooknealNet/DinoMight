'use strict';

// *** Constructors ***

// ------ TODO AppState will probably also need an array to store scores in
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

  const dinoObjects = [{name: 'Allosaurus', facts: 'They are all dead'}, {name: 'Apatosaurus', facts: 'They probably smelled bad'}, {name: 'Archaeopteryx', facts: 'Weird name'}, {name: 'Brachiosaurus', facts: 'My favorite growing up.'}, {name: 'Dilophosaurus', facts: 'Starts with a D'}, {name: 'Parasaurolophus', facts: 'First dino to parachute'}, {name: 'Plesiosaurus', facts: 'Very polite'}, {name: 'Pterodactyl', facts: 'Has trouble pronouncing its Ps'}, {name: 'Spinosaurus', facts: 'Had multiple spines'}, {name: 'Stegosaurus', facts: 'He never leggos'}, {name: 'Tyrannosaurus', facts: 'Gonna need an if loop for this guys name'}, {name: 'Velociraptor', facts: 'Super fast velocity'}];

  for (let i = 0; i < dinoObjects.length; i++) {
    this.allDinosaurs.push(new Dinosaur(dinoObjects[i].name, dinoObjects[i].facts));
  }
}

// *** Local Storage Prototype Functions ***

// -------- TODO These will also have to pass scores to and from storage

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

// *** Executables ***
