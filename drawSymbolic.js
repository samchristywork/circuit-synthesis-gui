function drawBox(x, y, id, type, color, index) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 100, 100);

  ctx.fillStyle = "#000000";
  ctx.font = "20px Arial";
  ctx.textAlign = "left";
  ctx.fillText(id, x + 5, y + 20);
  ctx.fillText(type, x + 5, y + 40);

  ctx.fillStyle = "#000000";
  ctx.font = "20px Arial";
  ctx.textAlign = "right";
  ctx.fillText(index + 1, x + 95, y + 90);
}

function drawComponent(c, color, index) {
  drawBox(c.x, c.y, c.id, c.type, color, index);

  var io = {
    inputs: drawInputs(c),
    outputs: drawOutputs(c),
  };

  return io;
}

function drawSymbolic(type) {
  for (let c of components) {
    if (c.type == type) {
      drawPhysical(c, 0, 0);

      return
    }
  }
}
