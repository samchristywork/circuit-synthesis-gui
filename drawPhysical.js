function drawPhysical(c, px, py) {
  if (!c.hasOwnProperty("physical")) {
    components[index].physical = [
    ];
  }

  for (let p of c.physical) {
    var x = 600 + p.x + px;
    var y = 100 + p.y + py;

    if (p.hasOwnProperty("foo")) {
      for (let i = 0; i < p.foo.length; i++) {
        var x = p.foo[i].x;
        var y = p.foo[i].y;
        var type = p.foo[i].type;

        var c = components[findComponent(type)];
        drawPhysical(c, x, y);
      }
    }

    for (let row of p.blocks) {
      var x2 = x;
      for (let col of row) {
        if (col == " ") {
          x2 += 20;
          continue;
        } else if (col == col.toLowerCase()) {
          ctx.fillStyle = "#77ff77";
        } else if (col == col.toUpperCase()) {
          ctx.fillStyle = "#ff7777";
        } else {
          console.log("Error: unknown physical block: " + col);
        }

        ctx.font = "20px Arial";
        ctx.fillRect(x2, y, 20, 20);
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.fillText(col, x2 + 10, y + 15);

        x2 += 20;
      }
      y += 20;
    }
  }
}
