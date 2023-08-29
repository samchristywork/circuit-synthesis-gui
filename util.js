function getInputs(c) {
  if (c.type == "input") {
    return [];
  } else if (c.type == "output") {
    return [c.id];
  }

  var inputs = [];
  for (let s of c.subassembly) {
    if (s[1] == "input") {
      inputs.push(s[0]);
    }
  }

  return inputs;
}

function getOutputs(c) {
  if (c.type == "output") {
    return [];
  } else if (c.type == "input") {
    return [c.id];
  }

  var outputs = [];
  for (let s of c.subassembly) {
    if (s[1] == "output") {
      outputs.push(s[0]);
    }
  }

  return outputs;
}

function findComponent(type) {
  for (let i = 0; i < components.length; i++) {
    if (components[i].type == type) {
      return i;
    }
  }
}
