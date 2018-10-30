const handleInput = function(ctx) {
  const start = document.getElementById('start-btn');
  const pause = document.getElementById('pause-btn');
  const skip = document.getElementById('skip-btn');
  const restart = document.getElementById('restart-btn');

  const Pi = "3.1415926535";
  
  start.addEventListener('click', function(e){
    e.stopPropagation();
    console.log("start button was clicked");
    const displayNumber = document.getElementById('display-number');
    const currentNumber = document.getElementById('current-number');
    let counter = 0;
    const intervalId = setInterval(()=> {
      displayNumber.innerText += currentNumber.textContent;
      currentNumber.innerText = Pi[counter];
      console.log(currentNumber.textContent);
      counter++;
      if (counter === Pi.length) {
        displayNumber.innerText += currentNumber.textContent;
        currentNumber.innerText = "";
        clearInterval(intervalId);
      }
    }, 1000);
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