window.onload = makeGrid(24);

function makeGrid(number) {
    let gridArea = number * number;
    let grid = document.querySelector('.gridArea');
    grid.style.setProperty("--sideLength", number)
    for(let i = 0; i < gridArea; i ++) {
        let box = document.createElement('div');
        box.className = 'grid';
        grid.appendChild(box);
    }
}