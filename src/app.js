const handleInput = require('./form');
const initGraph = require('./initGraph').initGraph;
// const Segment = require('./segment');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext("2d");
    
  initGraph(ctx);
  const radius = 240;

  
  // ctx.strokeStyle = "#ffffff"
  // for (let i = 0; i < 2 * radius; i++) {
  //   let index = Math.abs(i - radius);
  //   if (index < 10){
  //     // if (index === 9) {
  //     //   let x = 300 - radius + i;
  //     //   let y = Math.sqrt(Math.pow(radius, 2) - Math.pow(x - 300, 2));
  //     //   ctx.fillStyle = 'green';
  //     //   ctx.fillRect(x, -y + 300, 4, 4);
  //     //   console.log(`x: ${x}, y: ${-y + 300}`);
  //     // }
  //     continue;
  //   }
  //   if (index - 135 < 14 && index - 135 > 0){
  //     // if (index - 135 === 1) {
  //     //   let x = 300 - radius + i;
  //     //   let y = Math.sqrt(Math.pow(radius, 2) - Math.pow(x - 300, 2));
  //     //   ctx.fillStyle = 'green';
  //     //   ctx.fillRect(x, -y + 300, 4, 4);
  //     //   console.log(`x: ${x}, y: ${-y + 300}`);
  //     // }
  //     continue;
  //   }
  //   if (index - 225 < 6 && index - 225 > 0){
  //     // if (index - 225 === 5) {
  //     //   let x = 300 - radius + i;
  //     //   let y = Math.sqrt(Math.pow(radius, 2) - Math.pow(x - 300, 2));
  //     //   ctx.fillStyle = 'green';
  //     //   ctx.fillRect(x, -y + 300, 3, 3);
  //     //   console.log(`x: ${x}, y: ${-y + 300}`);
  //     // }
  //     continue;
  //   }
  //   // ctx.beginPath();
  //   // ctx.moveTo(300, 300);
  //   let x = 300 - radius + i;
  //   let y = Math.sqrt(Math.pow(radius, 2) - Math.pow(x - 300, 2));
  //   // ctx.lineTo(x, y + 300);
  //   // ctx.stroke();

  //   ctx.beginPath();
  //   ctx.moveTo(300, 300);
  //   ctx.lineTo(x, -y + 300);
  //   ctx.stroke();
  // }


  handleInput(ctx);
});