'use strict';

// *** Constructors ***

// ------ TODO AppState will probably also need an array to store scores in
function AppState() {
  this.allDinosaurs = [];
}

// ------ TODO facts is turned off till we create the array of objects in the instantiateDinosaurs function. Then it will also need to be added to the things we pass in to it as well.
function Dinosaur(name, fileExtension = 'png') {
  this.name = name;
  // this.facts = facts;
  this.image = `img/${name}.${fileExtension}`;
  this.wasSeen = false;
}

// *** Prototypes ***

AppState.prototype.instantiateDinosaurs = function () {

  // ------ TODO this will need an array of objects (each object a dino name and description using those keys.)
  const dinoNames = ['Allosaurus', 'Apatosaurus', 'Archaeopteryx', 'Brachiosaurus', 'Dilophosaurus', 'Parasaurolophus', 'Plesiosaurus', 'Pterodactyl', 'Spinosaurus', 'Stegosaurus', 'Tyrannosaurus', 'Velociraptor'];
  
  for (let i = 0; i < dinoNames.length; i++) {
    this.allDinosaurs.push(new Dinosaur(dinoNames[i]));
  }
}

// *** Local Storage Prototype Functions ***

// -------- TODO These will also have to pass scores to and from storage

AppState.prototype.saveToLocalStorage = function () {
  const stringDinosaurs = JSON.stringify(this.allDinosaurs);
  localStorage.setItem('dinosaurs', stringDinosaurs);
}
  
AppState.prototype.loadItems = function () {
  const loadedDinosaurs = localStorage.getItem('dinosaurs');
  if (loadedDinosaurs){
    const parcedDinosaurs = JSON.parse(loadedDinosaurs);
    this.allDinosaurs = parcedDinosaurs;
  } else {
    this.instantiateDinosaurs();
  }
}

// *** Executables ***
