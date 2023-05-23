'use strict';

// *** Globals ***

// Probably several but I am not sure what yet

// *** DOCUMENT WINDOWS ***


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

// *** Local Storage ***

// need two local storages. One for the dino memory game that is replaced every time they return to index and one for 
// best score/time that is not replaced, but added on to. Maybe stores best 5 scores?

// *** Helper Functions ***


// a function to make sure each dinosaur is only picked once. That also changes wasSeen to true. Probably easier to do
// together

// event listners for both buttons

// event listeners for the dinosaurs they click on

// *** Prototypes ***

AppState.prototype.instantiateDinosaurs = function () {

    const dinoNames = ['Allosaurus', 'Apatosaurus', 'Archaeopteryx', 'Brachiosaurus', 'Dilophosaurus', 'Parasaurolophus', 'Plesiosaurus', 'Pterodactyl', 'Spinosaurus', 'Stegosaurus', 'Tyrannosaurus', 'Velociraptor'];
  
    for (let i = 0; i < dinoNames.length; i++) {
        this.allDinosaurs.push(new Dinosaur(dinoNames[i]));
    }
  
}

AppState.prototype.saveToLocalStorage = function () {
    const stringDinosaurs = JSON.stringify(this.allDinosaurs);
    // console.log('stringified dinosaurs >>>> ', stringDinosaurs);
    localStorage.setItem('dinosaurs', stringDinosaurs);
}
  
AppState.prototype.loadItems = function () {
    const loadedDinosaurs = localStorage.getItem('dinosaurs');
    console.log('Products from local storage >>>> ', loadedDinosaurs)
    if (loadedDinosaurs){
      const parcedDinosaurs = JSON.parse(loadedDinosaurs);
    //   console.log('Parsed Products >>>> ', [parcedDinosaurs]);
      this.allDinosaurs = parcedDinosaurs;
    } else {
      this.instantiateDinosaurs();
    }
  }
// gonna need a prototype to pick however many dinosaurs and display them on the page

// a porototype to render all the dinosaurs on one page 

// a prototype to track score

// *** Executables ***
