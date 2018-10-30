const handleInput = require('./form');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName('canvas')[0];
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext("2d");
  handleInput(ctx);
});