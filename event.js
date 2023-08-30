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
