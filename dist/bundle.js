/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const handleInput = __webpack_require__(/*! ./form */ \"./src/form.js\");\nconst initGraph = __webpack_require__(/*! ./initGraph */ \"./src/initGraph.js\").initGraph;\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('canvas');\n  const ctx = canvas.getContext(\"2d\");\n    \n  initGraph(ctx);\n  handleInput(ctx);\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/drawLine.js":
/*!*************************!*\
  !*** ./src/drawLine.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const segments = __webpack_require__(/*! ./segment */ \"./src/segment.js\");\n\nconst drawLine = function(ctx, str, digitIdx, totalDigits){\n  let digits = findDigits(str);\n  if (digits.length !== 2) return false;\n\n  let origin = segments[digits[0]];\n  let dest = segments[digits[1]];\n\n  ctx.fillStyle = origin.color;\n  ctx.strokeStyle = origin.color;\n  ctx.beginPath();\n  let originSegmentPos = Math.floor(((digitIdx - 1.0) / totalDigits) * origin.midPoints.length);\n  let destSegmentPos = Math.floor((digitIdx / totalDigits) * dest.midPoints.length);\n  originSegmentPos = Math.min(originSegmentPos, origin.midPoints.length - 1);\n  destSegmentPos = Math.min(destSegmentPos, dest.midPoints.length - 1);\n  ctx.moveTo(origin.midPoints[originSegmentPos][0],\n    origin.midPoints[originSegmentPos][1]);\n  ctx.quadraticCurveTo(300, 300,\n    dest.midPoints[destSegmentPos][0],\n    dest.midPoints[destSegmentPos][1]);\n  ctx.stroke();\n};\n\nconst findDigits = function(str){\n  let digit1, digit2, idx = str.length - 1;\n\n  while (idx >= 0) {\n    digit2 = parseInt(str[idx]);\n    if (!isNaN(digit2)) {\n      idx--;\n      break;\n    }\n    idx--;\n  }\n  while (idx >= 0) {\n    digit1 = parseInt(str[idx]);\n    if (!isNaN(digit1)) {\n      break;\n    }\n    idx--;\n  }\n\n  let result = [];\n  if (!isNaN(digit1)) result.push(digit1);\n  if (!isNaN(digit2)) result.push(digit2);\n  return result;\n};\n\nmodule.exports = drawLine;\n\n//# sourceURL=webpack:///./src/drawLine.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const drawLine = __webpack_require__(/*! ./drawLine */ \"./src/drawLine.js\");\nconst initGraph = __webpack_require__(/*! ./initGraph */ \"./src/initGraph.js\").initGraph;\n\nconst handleInput = function(ctx) {\n  const start = document.getElementById('start-btn');\n  const pause = document.getElementById('pause-btn');\n  const skip = document.getElementById('skip-btn');\n  const restart = document.getElementById('restart-btn');\n\n  const Pi = \"3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198\";\n  let counter = 0;\n  let nDigits = document.getElementById('digits').value;\n  let isRunning = false;\n\n\n  start.addEventListener('click', function(e){\n    const displayNumber = document.getElementById('display-number');\n    const currentNumber = document.getElementById('current-number');\n    \n    e.stopPropagation();\n    if (counter === nDigits + 1 || counter === 0) {\n      isRunning = false;\n      counter = 0;\n      nDigits = document.getElementById(\"digits\").value;\n      displayNumber.innerText = \"\";\n      currentNumber.innerText = \"\";\n      ctx.clearRect(0, 0, 600, 600);\n      initGraph(ctx);\n    }\n    if (isRunning === false) {\n      isRunning = true;\n    } else {\n      return;\n    }\n    \n    currentNumber.style.visibility = \"visible\";\n    displayNumber.style.visibility = \"visible\";\n\n    const intervalId = setInterval(()=> {\n      displayNumber.innerText += currentNumber.textContent;\n      currentNumber.innerText = Pi[counter];\n      if (counter < Pi.length && isNaN(parseInt(Pi[counter]))) {\n        nDigits++;\n      }\n      if ((displayNumber.innerText.length + 1) % 40 === 0) {\n        let lineBreak = document.createElement(\"br\");\n        displayNumber.appendChild(lineBreak);\n      }\n      let num = displayNumber.innerText;\n      drawLine(ctx, num, counter, nDigits);\n      counter++;\n      if (counter === nDigits + 1) {\n        currentNumber.innerText = \"\";\n        currentNumber.style.visibility = \"hidden\";\n        clearInterval(intervalId);\n      }\n    }, 100);\n\n    pause.addEventListener('click', function (e2) {\n      e2.stopPropagation();\n      isRunning = false;\n      clearInterval(intervalId);\n    });\n\n    restart.addEventListener('click', function (e3) {\n      e3.stopPropagation();\n      isRunning = false;\n      clearInterval(intervalId);\n      counter = 0;\n      nDigits = document.getElementById(\"digits\").value;\n      displayNumber.innerText = \"\";\n      currentNumber.innerText = \"\";\n      currentNumber.style.visibility = \"hidden\";\n      displayNumber.style.visibility = \"hidden\";\n      ctx.clearRect(0, 0, 600, 600);\n      initGraph(ctx);\n    });\n\n    skip.addEventListener('click', function(e4){\n      e4.stopPropagation();\n      isRunning = false;\n      clearInterval(intervalId);\n      while (counter < nDigits + 1) {\n        displayNumber.innerText += currentNumber.textContent;\n        currentNumber.innerText = Pi[counter];\n        if (counter < Pi.length && isNaN(parseInt(Pi[counter]))) {\n          nDigits++;\n        }\n        if ((displayNumber.innerText.length + 1) % 40 === 0) {\n          let lineBreak = document.createElement(\"br\");\n          displayNumber.appendChild(lineBreak);\n        }\n        let num = displayNumber.innerText;\n        drawLine(ctx, num, counter, nDigits);\n        counter++;\n      }\n      currentNumber.innerText = \"\";\n      currentNumber.style.visibility = \"hidden\";\n    });\n\n  });\n\n};\n\nmodule.exports = handleInput;\n\n//# sourceURL=webpack:///./src/form.js?");

/***/ }),

/***/ "./src/initGraph.js":
/*!**************************!*\
  !*** ./src/initGraph.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const initGraph = function(ctx) {\n  ctx.lineWidth = 15;\n  for (let i = 0; i < 10; i++) {\n    drawSegment(ctx, i)\n  }\n  ctx.lineWidth = 1;\n};\n\nconst Segments = {\n  0: \"#684130\",\n  1: \"#e8915b\",\n  2: \"#5c2e84\",\n  3: \"#d668e0\",\n  4: \"#1b8078\",\n  5: \"#24f7ec\",\n  6: \"#16559e\",\n  7: \"#149aff\",\n  8: \"#47633d\",\n  9: \"#a3d674\"\n};\n\nconst drawSegment = function(ctx, index) {\n  let startAngle = (1.5 + (index * 0.2) + 0.01) * Math.PI;\n  let endAngle = (1.7 + (index * 0.2) - 0.01) * Math.PI;\n  ctx.beginPath();\n  ctx.strokeStyle = Segments[index];\n  ctx.arc(300, 300, 270, startAngle, endAngle);\n  ctx.stroke();\n};\n\nmodule.exports = {\n  initGraph,\n  Segments\n};\n\n//# sourceURL=webpack:///./src/initGraph.js?");

/***/ }),

/***/ "./src/segment.js":
/*!************************!*\
  !*** ./src/segment.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const COLORS = __webpack_require__(/*! ./initGraph */ \"./src/initGraph.js\").Segments;\n\nconst ENDS = {\n  0: [[309, 60.168], [436, 102.252]],\n  1: [[448, 111.066], [526, 219.228]],\n  2: [[530, 231.443], [530, 368.556]],\n  3: [[526, 380.771], [448, 488.933]],\n  4: [[436, 497.747], [309, 539.831]],\n  5: [[291, 539.831], [164, 497.747]],\n  6: [[152, 488.933], [74, 380.771]],\n  7: [[70, 368.556], [70, 231.443]],\n  8: [[74, 219.228], [152, 111.066]],\n  9: [[164, 102.252], [291, 60.168]]\n};\n\nconst Segment = function(index) {\n  this.number = index;\n  this.color = COLORS[index];\n  this.start = ENDS[index][0];\n  this.end = ENDS[index][1];\n  this.midPoints = [];\n\n  let lowerX = Math.min(this.start[0], this.end[0]);\n  let upperX = Math.max(this.start[0], this.end[0]);\n  let lowerY = Math.min(this.start[1], this.end[1]);\n  let upperY = Math.max(this.start[1], this.end[1]);\n\n  const radius = 240;\n  for (let x = lowerX; x <= upperX; x++) {\n    let y = Math.sqrt(Math.pow(radius, 2) - Math.pow(x - 300, 2));\n    if (y + 300 >= lowerY && y + 300 <= upperY) {\n      this.midPoints.push([x, y + 300]);\n    }\n    if (-y + 300 >= lowerY && -y + 300 <= upperY) {\n      this.midPoints.push([x, -y + 300]);\n    }\n  }\n  for (let y = lowerY; y <= upperY; y++) {\n    let x = Math.sqrt(Math.pow(radius, 2) - Math.pow(y - 300, 2));\n    if (this.number === 2 || (x + 300 >= lowerX && x + 300 <= upperX)) {\n      this.midPoints.push([x + 300, y]);\n    }\n    if (this.number === 7 || (-x + 300 >= lowerX && -x + 300 <= upperX)) {\n      this.midPoints.push([-x + 300, y]);\n    }\n  }\n  if (this.start[0] === this.end[0]) {//start x === end x\n    if (this.start[1] < this.end[1]) {//start y < end y\n      this.midPoints.sort(function(a, b){return a[1] - b[1]});\n    } else {\n      this.midPoints.sort(function(a, b){return b[1] - a[1]});\n    }\n  } else {\n    if (this.start[0] < this.end[0]) {//start x < end x\n      this.midPoints.sort(function(a, b){return a[0] - b[0]});\n    } else {\n      this.midPoints.sort(function(a, b){return b[0] - a[0]});\n    }\n  }\n};\n\nconst segments = new Array(10);\n\nfor (let i = 0; i < 10; i++) {\n  segments[i] = new Segment(i);\n}\n\nmodule.exports = segments;\n\n//# sourceURL=webpack:///./src/segment.js?");

/***/ })

/******/ });