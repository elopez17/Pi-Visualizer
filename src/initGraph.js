const initGraph = function(ctx) {
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = 'green';
  ctx.closePath();
  ctx.stroke();
  // ctx.save();
};

module.exports = initGraph;