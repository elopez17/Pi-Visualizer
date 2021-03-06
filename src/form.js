const drawLine = require('./drawLine');
const initGraph = require('./initGraph').initGraph;

const handleInput = function(ctx) {
  const start = document.getElementById('start-btn');
  const pause = document.getElementById('pause-btn');
  const skip = document.getElementById('skip-btn');
  const restart = document.getElementById('restart-btn');

  const Pi = "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198";
  let counter = 0;
  let nDigits = document.getElementById('digits').value;
  let isRunning = false;


  start.addEventListener('click', function(e){
    const displayNumber = document.getElementById('display-number');
    const currentNumber = document.getElementById('current-number');
    
    e.stopPropagation();
    if (counter === nDigits + 1 || counter === 0) {
      isRunning = false;
      counter = 0;
      nDigits = document.getElementById("digits").value;
      displayNumber.innerText = "";
      currentNumber.innerText = "";
      ctx.clearRect(0, 0, 600, 600);
      initGraph(ctx);
    }
    if (isRunning === false) {
      isRunning = true;
    } else {
      return;
    }
    
    currentNumber.style.visibility = "visible";
    displayNumber.style.visibility = "visible";

    const intervalId = setInterval(()=> {
      displayNumber.innerText += currentNumber.textContent;
      currentNumber.innerText = Pi[counter];
      if (counter < Pi.length && isNaN(parseInt(Pi[counter]))) {
        nDigits++;
      }
      if ((displayNumber.innerText.length + 1) % 40 === 0) {
        let lineBreak = document.createElement("br");
        displayNumber.appendChild(lineBreak);
      }
      let num = displayNumber.innerText;
      drawLine(ctx, num, counter, nDigits);
      counter++;
      if (counter === nDigits + 1) {
        currentNumber.innerText = "";
        currentNumber.style.visibility = "hidden";
        clearInterval(intervalId);
      }
    }, 100);

    pause.addEventListener('click', function (e2) {
      e2.stopPropagation();
      isRunning = false;
      clearInterval(intervalId);
    });

    restart.addEventListener('click', function (e3) {
      e3.stopPropagation();
      isRunning = false;
      clearInterval(intervalId);
      counter = 0;
      nDigits = document.getElementById("digits").value;
      displayNumber.innerText = "";
      currentNumber.innerText = "";
      currentNumber.style.visibility = "hidden";
      displayNumber.style.visibility = "hidden";
      ctx.clearRect(0, 0, 600, 600);
      initGraph(ctx);
    });

    skip.addEventListener('click', function(e4){
      e4.stopPropagation();
      isRunning = false;
      clearInterval(intervalId);
      while (counter < nDigits + 1) {
        displayNumber.innerText += currentNumber.textContent;
        currentNumber.innerText = Pi[counter];
        if (counter < Pi.length && isNaN(parseInt(Pi[counter]))) {
          nDigits++;
        }
        if ((displayNumber.innerText.length + 1) % 40 === 0) {
          let lineBreak = document.createElement("br");
          displayNumber.appendChild(lineBreak);
        }
        let num = displayNumber.innerText;
        drawLine(ctx, num, counter, nDigits);
        counter++;
      }
      currentNumber.innerText = "";
      currentNumber.style.visibility = "hidden";
    });

  });

};

module.exports = handleInput;