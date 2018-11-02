const initGraph = function(ctx) {
  ctx.lineWidth = 15;
  for (let i = 0; i < 10; i++) {
    drawSegment(ctx, i)
  }
  ctx.lineWidth = 1;
};

const Segments = {
  0: "#684130",
  1: "#e8915b",
  2: "#5c2e84",
  3: "#d668e0",
  4: "#1b8078",
  5: "#24f7ec",
  6: "#16559e",
  7: "#149aff",
  8: "#47633d",
  9: "#a3d674"
};

const drawSegment = function(ctx, index) {
  let startAngle = (1.5 + (index * 0.2) + 0.01) * Math.PI;
  let endAngle = (1.7 + (index * 0.2) - 0.01) * Math.PI;
  ctx.beginPath();
  ctx.strokeStyle = Segments[index];
  ctx.arc(300, 300, 270, startAngle, endAngle);
  ctx.stroke();
};

module.exports = {
  initGraph,
  Segments
};
// initGraph;