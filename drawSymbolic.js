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

function drawLink(input, output) {
  ctx.strokeStyle = "#111111";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.moveTo(input.x, input.y);
  ctx.lineTo(output.x, output.y);
  ctx.stroke();
}

function drawPorts(c, ports, side) {
  ctx.font = "20px Arial";

  var io = [];

  for (var i = 0; i < ports.length; i++) {
    var offset = 100 / (ports.length + 1);
    var port = {
      name: ports[i],
      x: c.x + (side == "left" ? -5 : 105),
      y: c.y + offset + (i * offset)
    }
    io.push(port);

    ctx.fillStyle = "#111111";
    ctx.fillRect(port.x - 5, port.y - 5, 10, 10);

    ctx.fillStyle = "#111111";
    if (side == "left") {
      ctx.textAlign = "right";
      ctx.fillText(ports[i], port.x - 10, port.y + 5);
    } else {
      ctx.textAlign = "left";
      ctx.fillText(ports[i], port.x + 10, port.y + 5);
    }
  }

  return io;
}

function drawInputs(c) {
  var ports = getInputs(c);
  return drawPorts(c, ports, "left");
}

function drawOutputs(c) {
  var ports = getOutputs(c);
  return drawPorts(c, ports, "right");
}

function drawAssembly(c) {
  var subassembly = c.subassembly;
  var links = c.links;

  var io = {};

  // draw subassemblies
  for (let i = 0; i < subassembly.length; i++) {
    var s = subassembly[i];

    var id = s[0];
    var type = s[1];
    var x = s[2];
    var y = s[3];

    var found = false;
    for (let c of components) {
      if (c.type == type) {
        c.x = x;
        c.y = y;
        c.id = id;

        if (i == selectedSubassembly) {
          var ports = drawComponent(c, "#ffffff", i);
          io[id] = ports;
        } else {
          var ports = drawComponent(c, "#aaaaaa", i);
          io[id] = ports;
        }

        found = true;

        break;
      }
    }
    if (!found) {
      console.log("could not find component: " + type);
    }
  }

  for (let l of links) {
    var from = l[0];
    var fromPort = l[1];
    var to = l[2];
    var toPort = l[3];

    drawLink(io[from].outputs[fromPort], io[to].inputs[toPort]);
  }
}

function drawSymbolic(type) {
  for (let c of components) {
    if (c.type == type) {
      drawAssembly(c);

      drawPhysical(c, 0, 0);

      return
    }
  }
}
