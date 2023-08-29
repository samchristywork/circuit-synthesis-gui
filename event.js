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
  } else if (e.keyCode >= 49 && e.keyCode <= 57) { // 1-9
    selectedSubassembly = e.keyCode - 49;
  } else {
    console.log(e.keyCode);
  }

  render();
});
