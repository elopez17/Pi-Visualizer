const handleInput = require('./form');
// const initGraph = require('./initGraph');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName('canvas')[0];
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");
  // ctx.beginPath();
  // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  // ctx.strokeStyle = "green";
  // ctx.closePath();
  // ctx.stroke();
  // while (true) {
  ctx.fillStyle = 'red';
  ctx.fillRect(100, 100, 100, 100);
    
  // }
  // ctx.save();
  // initGraph(ctx);
  handleInput(ctx);
});