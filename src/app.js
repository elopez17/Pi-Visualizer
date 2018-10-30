const handleInput = require('./form');
const initGraph = require('./initGraph');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext("2d");
    
  initGraph(ctx);
  handleInput(ctx);
});