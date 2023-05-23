'use strict';

// *** Constructors ***

function AppState() {
  this.allDinosaurs = [];
}

function Dinosaur(name, fileExtension = 'png') {
  this.name = name;
  // this.facts = facts;
  this.image = `img/${name}.${fileExtension}`;
  this.wasSeen = false;
}

// *** Prototypes ***

AppState.prototype.instantiateDinosaurs = function () {

  // this will need an array of objects (each object a dino name and description using those keys.)
  const dinoNames = ['Allosaurus', 'Apatosaurus', 'Archaeopteryx', 'Brachiosaurus', 'Dilophosaurus', 'Parasaurolophus', 'Plesiosaurus', 'Pterodactyl', 'Spinosaurus', 'Stegosaurus', 'Tyrannosaurus', 'Velociraptor'];
  
  for (let i = 0; i < dinoNames.length; i++) {
    this.allDinosaurs.push(new Dinosaur(dinoNames[i]));
  }
}

// *** Local Storage Prototype Functions ***

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
