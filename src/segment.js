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
  this.number = index;
  this.color = COLORS[index];
  this.start = ENDS[index][0];
  this.end = ENDS[index][1];
  this.midPoints = [];

  let lowerX = Math.min(this.start[0], this.end[0]);
  let upperX = Math.max(this.start[0], this.end[0]);
  let lowerY = Math.min(this.start[1], this.end[1]);
  let upperY = Math.max(this.start[1], this.end[1]);

  const radius = 240;
  for (let x = lowerX; x <= upperX; x++) {
    let y = Math.sqrt(Math.pow(radius, 2) - Math.pow(x - 300, 2));
    if (y + 300 >= lowerY && y + 300 <= upperY) {
      this.midPoints.push([x, y + 300]);
    }
    if (-y + 300 >= lowerY && -y + 300 <= upperY) {
      this.midPoints.push([x, -y + 300]);
    }
  }
  for (let y = lowerY; y <= upperY; y++) {
    let x = Math.sqrt(Math.pow(radius, 2) - Math.pow(y - 300, 2));
    if (this.number === 2 || (x + 300 >= lowerX && x + 300 <= upperX)) {
      this.midPoints.push([x + 300, y]);
    }
    if (this.number === 7 || (-x + 300 >= lowerX && -x + 300 <= upperX)) {
      this.midPoints.push([-x + 300, y]);
    }
  }
  if (this.start[0] === this.end[0]) {//start x === end x
    if (this.start[1] < this.end[1]) {//start y < end y
      this.midPoints.sort(function(a, b){return a[1] - b[1]});
    } else {
      this.midPoints.sort(function(a, b){return b[1] - a[1]});
    }
  } else {
    if (this.start[0] < this.end[0]) {//start x < end x
      this.midPoints.sort(function(a, b){return a[0] - b[0]});
    } else {
      this.midPoints.sort(function(a, b){return b[0] - a[0]});
    }
  }
};

const segments = new Array(10);

for (let i = 0; i < 10; i++) {
  segments[i] = new Segment(i);
}

module.exports = segments;