//colors array
let colors = ['hsl(60, 100%, 54%)', 
  'hsl;(231, 100%, 54%)',
  'hsl(321, 100%, 54%)',
  'hsl(289, 100%, 50%)',
  'hsl(31, 100%, 49%)'
];
let counter = 0;
let colorHistory = [];
let redoStack = []

//get button and box 
let button = document.getElementById('color');
let box = document.getElementById('square');
let undobutton = document.getElementById('undo');
let redobutton = document.getElementById ('redo')

//add event listener
button.addEventListener('click', changeColor)
function changeColor(){
//add event listener for undo
undobutton.addEventListener('click', undoColor)
//add event listener for redo
redobutton.addEventListener('click', redoColor)
  if(box) {
    //randomizer
let randomcolor = colors[Math.floor(Math.random() * colors.length)]
redoStack = [];
//get container
colorHistory.push(randomcolor);
box.style.backgroundColor = randomcolor;
counter = counter + 1;
box.innerText = counter;
  }
}
function undoColor() {
    if (box && colorHistory.length > 0) {
      //Get the last color from history
      let lastColor = colorHistory.pop();
      redoStack.push(box.style.backgroundColor);
        box.style.backgroundColor = lastColor;
    }   else {
        console.log ("no colors to undo")
    }
    }
previousColor = box.style.backgroundColor; 
box.style.backgroundColor = randomColor;
counter --;
box.innerText = counter - 1 ;
  //function for redo
function redoColor() { 
    if (box && redoStack.length > 0) {
      let colortoRedo = redoStack.pop();
      colorHistory.push(box.style.backgroundColor);
      box.style.backgroundColor = colortoRedo;
      box.innerText = counter + 1;
      counter ++;
    } 
    }
    
