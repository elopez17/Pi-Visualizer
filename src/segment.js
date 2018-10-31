const COLORS = require('./initGraph').Segments;

const ENDS = {
  0: [[309, 60.168], [436, 102.252]],
  1: [[448, 111.066], [526, 219.228]],
  2: [[530, 231.443], [530, 368.556]],
  3: [[526, 380.771], [448, 488.933]],
  4: [[436, 497.747], [309, 539.831]],
  5: [[291, 539.831], [164, 497.747]],
  6: [[152, 488.933], [74, 380.771]],
  7: [[70, 368.556], [70, 231.443]],
  8: [[74, 219.228], [152, 111.066]],
  9: [[164, 102.252], [291, 60.168]]
};

const Segment = function(index) {
  this.color = COLORS[index];
  this.start = ENDS[index][0];
  this.end = ENDS[index][1];
  this.midPoints = [];

  for (let i = 0; i < 2 * radius; i++) {
    // ctx.beginPath();
    // ctx.moveTo(300, 300);
    let x = 300 - radius + i;
    let y = Math.sqrt(Math.pow(radius, 2) - Math.pow(x - 300, 2));
    // ctx.lineTo(x, y + 300);
    // ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(x, -y + 300);
    ctx.stroke();
  }

};

const segments = new Array(10);

for (let i = 0; i < 10; i++) {
  segments[i] = new Segment(i);
}

module.exports = segments;