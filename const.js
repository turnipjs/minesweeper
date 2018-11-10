CONST = {
  "defaults": {
    "difficulty": "hard",
    "custom": {
      "height": 16,
      "width": 30,
      "mines": 99
    }
  },
  "difficulties": {
    "easy": {
      "height": 9,
      "width": 9,
      "mines": 10
    },
    "medium": {
      "height": 16,
      "width": 16,
      "mines": 40
    },
    "hard": {
      "height": 16,
      "width": 30,
      "mines": 99
    },
    "extreme": {
      "height": 30,
      "width": 30,
      "mines": "TODO"
    },
    "ultimate": {
      "height": 50,
      "width": 50,
      "mines": "TODO"
    },
  },
  "make2DArr": function(height, width) {
    let arr = new Array(height);
    for (var i = 0; i < height; i++) {
      arr[i] = new Array(width);
    }
  },
}
