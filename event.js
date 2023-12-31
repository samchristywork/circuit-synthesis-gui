canvas.addEventListener("mousedown", function(e) {
  selectedSubassembly = null;
  render();
});

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 27) {
    selectedSubassembly = null;
  } else if (e.keyCode == 39) { // right
    if (selectedSubassembly == null) {
      selectedSubassembly = 0;
    } else {
      selectedSubassembly++;
    }
  } else if (e.keyCode == 37) { // left
    if (selectedSubassembly == null) {
      selectedSubassembly = 0;
    } else {
      selectedSubassembly--;
    }
  } else if (e.keyCode == 67) { // c
    var type = prompt("type", "");

    if (type != null) {
      components.push({
        type: type,
        subassembly: [],
        links: [],
      });
      currentComponent = type;
    }
  } else if (e.keyCode == 78) { // n
    var name = prompt("name", "");
    if (name != null) {
      var type = prompt("type", "");
      if (type != null) {
        var i = findComponent(currentComponent);
        components[i].subassembly.push([name, type, 0, 0]);
        selectedSubassembly = components[i].subassembly.length - 1;
      }
    }
  } else if (e.keyCode >= 49 && e.keyCode <= 57) { // 1-9
    selectedSubassembly = e.keyCode - 49;
  } else {
    console.log(e.keyCode);
  }

  render();
});

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
