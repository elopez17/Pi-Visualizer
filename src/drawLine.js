const segments = require('./segment');

const drawLine = function(ctx, str, digitIdx, totalDigits){
  let digits = findDigits(str);
  if (digits.length !== 2) return false;

  let origin = segments[digits[0]]
  let dest = segments[digits[1]]

  ctx.fillStyle = origin.color;
  ctx.strokeStyle = origin.color;
  ctx.beginPath();
  let originSegmentPos = Math.floor(((digitIdx - 1.0) / totalDigits) * origin.midPoints.length);
  let destSegmentPos = Math.floor((digitIdx / totalDigits) * dest.midPoints.length);
  originSegmentPos = Math.min(originSegmentPos, origin.midPoints.length - 1);
  destSegmentPos = Math.min(destSegmentPos, dest.midPoints.length - 1);
  ctx.moveTo(origin.midPoints[originSegmentPos][0],
    origin.midPoints[originSegmentPos][1]);
  ctx.quadraticCurveTo(300, 300,
    dest.midPoints[destSegmentPos][0],
    dest.midPoints[destSegmentPos][1]);
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