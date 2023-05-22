'use strict';

// *** Globals ***



// *** Constructors ***

function AppState() {
    this.allDinosaurs = [];
}

function Dinosaur(name, wasSeen, fileExtension = 'png') {
    this.name = name;
    this.image = 'img/${name}.${fileExtension}';
    this.wasSeen = false;
}

// *** Helper Functions ***



// *** Prototypes ***



// *** Executables ***