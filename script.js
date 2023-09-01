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

canvas.addEventListener("mousemove", function(e) {
  var i = findComponent(currentComponent);

  var x = 2 * (e.clientX - canvas.offsetLeft - 25);
  var y = 2 * (e.clientY - canvas.offsetTop - 25);

  x = Math.round(x / 50) * 50;
  y = Math.round(y / 50) * 50;

  if (selectedSubassembly != null) {
    components[i].subassembly[selectedSubassembly][2] = x;
    components[i].subassembly[selectedSubassembly][3] = y;
  }

  render();
});

var selectedSubassembly = null;
var currentComponent = "8 bit adder";

render();
