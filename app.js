'use strict';

// *** Globals ***

// Probably several but I am not sure what yet

// *** Constructors ***

function AppState() {
    this.allDinosaurs = [];
}

function Dinosaur(name, wasSeen, fileExtension = 'png') {
    this.name = name;
    this.image = `img/${name}.${fileExtension}`;
    this.wasSeen = wasSeen;
}

// *** Local Storage ***

// need two local storages. One for the dino memory game that is replaced every time they return to index and one for 
// best score/time that is not replaced, but added on to. Maybe stores best 5 scores?

// *** Helper Functions ***

// random number generator that returns 1 to how ever many dinos we have

// a function to make sure each dinosaur is only picked once. That also changes wasSeen to true. Probably easier to do
// together

// event listners for both buttons

// event listeners for the dinosaurs they click on

// *** Prototypes ***

// gonna need a prototype to pick however many dinosaurs and display them on the page

// a porototype to render all the dinosaurs on one page 

// a prototype to track score

// *** Executables ***