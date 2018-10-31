const segments = require('./segment');

const drawLine = function(ctx, str, digitIdx){
  let digits = findDigits(str);
  if (digits.length !== 2) return false;

  let origin = segments[digits[0]]
  let dest = segments[digits[1]]
  ctx.beginPath();
  ctx.strokeStyle = origin.color;
  ctx.moveTo(origin.start[0], origin.start[1]);
  ctx.lineTo(dest.start[0], dest.start[1]);
  ctx.stroke();
};

const findDigits = function(str){
  let digit1, digit2, idx = str.length - 1;

  while (idx >= 0) {
    digit2 = parseInt(str[idx]);
    if (!isNaN(digit2)) {
      idx--;
      break;
    }
    idx--;
  }
  while (idx >= 0) {
    digit1 = parseInt(str[idx]);
    if (!isNaN(digit1)) {
      break;
    }
    idx--;
  }

  let result = [];
  if (!isNaN(digit1)) result.push(digit1);
  if (!isNaN(digit2)) result.push(digit2);
  return result;
};

module.exports = drawLine;