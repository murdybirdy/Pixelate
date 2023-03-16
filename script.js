// Your code here
const pixelTable = document.getElementsByTagName('table')[0];
const addRowButton = document.getElementById('add-row');
const selectMenu = document.getElementsByTagName('select')[0];
let isDrawing = false;

function makeRow() {
  const row = document.createElement('tr');
  for (let i = 0; i < 20; i++) {
    const cell = document.createElement('td');
    row.appendChild(cell);
  }
  pixelTable.appendChild(row);
  
}

function colorize(event) {
  const targetCell = event.target;
  if (targetCell.tagName === 'TD') {
    if(targetCell.className !== selectMenu.value) {
      targetCell.className = selectMenu.value;
    } else {
      targetCell.className = '';
    }
  }
}

addRowButton.addEventListener('click', makeRow); // adds a new row of 20 cells

// pixelTable.addEventListener('click', colorize); // add color to the selected cell

pixelTable.addEventListener('mouseup', function(ev){
  isDrawing = false;
});

pixelTable.addEventListener('mousedown', function(ev){
  colorize(ev);
  isDrawing = true;
});

pixelTable.addEventListener('mouseover', function(ev){
  if (isDrawing === true) {
    colorize(ev);
  }
});

// selectMenu.addEventListener('change',function(ev) {
//   console.log(ev.target.value);
// })