const drawLine = require('./drawLine');

const handleInput = function(ctx) {
  const start = document.getElementById('start-btn');
  const pause = document.getElementById('pause-btn');
  const skip = document.getElementById('skip-btn');
  const restart = document.getElementById('restart-btn');

  const Pi = "0.1234567890";
  
  start.addEventListener('click', function(e){
    e.stopPropagation();
    console.log("start button was clicked");
    const displayNumber = document.getElementById('display-number');
    const currentNumber = document.getElementById('current-number');
    let counter = 0;

    const intervalId = setInterval(()=> {
      displayNumber.innerText += currentNumber.textContent;
      currentNumber.innerText = Pi[counter];
      let num = displayNumber.innerText;
      drawLine(ctx, num, counter, Pi.length);
      counter++;
      if (counter === Pi.length + 1) {
        currentNumber.innerText = "";
        clearInterval(intervalId);
      }
    }, 100);

  });
  pause.addEventListener('click', function(e){
    e.stopPropagation();
    console.log("pause button was clicked");
  });
  skip.addEventListener('click', function(e){
    e.stopPropagation();
    console.log("skip button was clicked");
  });
  restart.addEventListener('click', function(e){
    e.stopPropagation();
    console.log("restart button was clicked");
  });
};

module.exports = handleInput;