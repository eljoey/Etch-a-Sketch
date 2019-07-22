//global variables
let paintColor = 'black';
let gridSize = 16;
let randomPaint = false;
let gradualPaint = false;

//test function THROW AWAY WHEN DONE! AYAYA!
function log() {
    console.log('AYAYA');
}


function makeGrid() {
    resetGrid();

    let gridArea = gridSize * gridSize;
    let grid = document.querySelector('.gridArea');
    grid.style.setProperty('--sideLength', gridSize)
    for(let i = 0; i < gridArea; i ++) {
        let box = document.createElement('div');
        box.className = 'grids';
        box.style.setProperty('opacity', .9)
        box.addEventListener('mouseenter', colorGrid)
        grid.appendChild(box);
    }
}

function resetGrid() {
    let grid = document.querySelectorAll('.grids');
    grid.forEach((grids) => {
        grids.style.setProperty('background', 'lightgray');
        grids.style.setProperty('opacity', .9);
    });
}

function colorGrid() {
    if(randomPaint) {        
        randomColor();
        paint(this);
    } else if(gradualPaint) {
        let getOpacity = getComputedStyle(this);
        let newOpacity = getOpacity.opacity -.09;
        this.style.setProperty('opacity', newOpacity);
    } else {
        paint(this);
    }    
}

function paint(obj) {
    obj.style.setProperty('background', paintColor)
}

function askUser() {
    let size = prompt('What would you like the width to be?');
    if (size < 0) {
        size = prompt('Enter a number greater than zero.');
    }
    gridSize = size;
    makeGrid();
}

function blackBrush() {
    paintColor = 'black';
    randomPaint = false;
    gradualPaint = false;
}

function rainbow() {
    resetGrid();
    randomColor();
}

function randomColor() {

    const rand1 = Math.floor(Math.random() * 255);
    const rand2 = Math.floor(Math.random() * 255);
    const rand3 = Math.floor(Math.random() * 255);
    
    color = 'rgb(' + rand1 + ', ' + rand2 + ', ' + rand3 + ')';
    randomPaint = true;
    paintColor = color;
}

function shading() {
    resetGrid();

    gradualPaint = true;
    randomPaint = false;
}

window.onload = makeGrid();