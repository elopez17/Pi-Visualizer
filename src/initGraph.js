const initGraph = function(ctx) {
  ctx.lineWidth = 15;
  for (let i = 0; i < 10; i++) {
    drawSegment(ctx, i)
  }
  ctx.lineWidth = 1;
};

const Segments = {
  0: "#0f425a",
  1: "#32a4e7",
  2: "#4d7719",
  3: "#46cf64",
  4: "#690404",
  5: "#e70f19",
  6: "#945200",
  7: "#e36903",
  8: "#3f1e4e",
  9: "#8c51c3"
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