var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var text = document.getElementById("text");

var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
canvas.width = screenWidth - 18;
canvas.height = screenHeight;

function render() {
  ctx.fillStyle = "#333333";
  ctx.fillRect(0, 0, screenWidth, screenHeight);

  ctx.save();
  ctx.scale(.5, .5);

  drawSymbolic(currentComponent);
  ctx.restore();

  text.innerHTML = JSON.stringify(components, null, 2);
}

var selectedSubassembly = null;
var currentComponent = "8 bit adder";

render();
