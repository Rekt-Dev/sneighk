import './style.css';

const appDiv = document.getElementById('app');

let canvas = document.getElementById('canvas');

let ROWS = 50;
let COLS = 30;
let PIXEL = 10;

function initalizeCanvas() {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let pixel = document.createElement('div');
      pixel.style.position = 'absolute';
      pixel.style.border = `1px solid red`;
      pixel.style.left = j * PIXEL + `px`;
      pixel.style.top = i * PIXEL + `px`;

      pixel.style.width = PIXEL + `px`;
      pixel.style.height = PIXEL + `px`;

      canvas.appendChild(pixel);
    }
  }
}
initalizeCanvas();
