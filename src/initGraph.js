const initGraph = function(ctx) {
  ctx.beginPath();
  ctx.arc(300, 300, 200, 0, 2 * Math.PI);
  ctx.strokeStyle = 'green';
  ctx.closePath();
  ctx.stroke();
};

module.exports = initGraph;