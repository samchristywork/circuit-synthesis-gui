var ex = {
  "type": "full adder",
  "subassembly": [
    ["cin", "input", 0, 0],
    ["a", "input", 0, 200],
    ["b", "input", 0, 400],
    ["ha-top", "half adder", 400, 100],
    ["ha-bot", "half adder", 200, 300],
    ["or", "or", 600, 300],
    ["sum", "output", 800, 100],
    ["cout", "output", 800, 300]
  ],
  "links": [
    ["cin", 0, "ha-top", 0],
    ["a", 0, "ha-bot", 0],
    ["b", 0, "ha-bot", 1],
    ["ha-bot", 0, "ha-top", 1],
    ["ha-bot", 1, "or", 1],
    ["ha-top", 1, "or", 0],
    ["ha-top", 0, "sum", 0],
    ["or", 0, "cout", 0]
  ]
}

var components = [
  {
    "type": "or",
    "subassembly": [
      [
        "a",
        "input",
        0,
        0
      ],
      [
        "b",
        "input",
        0,
        200
      ],
      [
        "o",
        "output",
        400,
        100
      ]
    ],
    "links": [],
    "physical": [
      {
        "x": 0,
        "y": 0,
        "blocks": [
          "a|A",
          " b"
        ]
      }
    ]
  },
  {
    "type": "xor",
    "subassembly": [
      [
        "a",
        "input",
        0,
        0
      ],
      [
        "b",
        "input",
        0,
        200
      ],
      [
        "o",
        "output",
        400,
        100
      ]
    ],
    "links": [],
    "physical": [
      {
        "x": 0,
        "y": 0,
        "blocks": [
          "a^A",
          " b"
        ]
      }
    ]
  },
  {
    "type": "and",
    "subassembly": [
      [
        "a",
        "input",
        0,
        0
      ],
      [
        "b",
        "input",
        0,
        200
      ],
      [
        "o",
        "output",
        400,
        100
      ]
    ],
    "links": [],
    "physical": [
      {
        "x": 0,
        "y": 0,
        "blocks": [
          "a&A",
          " b"
        ]
      }
    ]
  },
  {
    "type": "input",
    "x": 0,
    "y": 200,
    "id": "b",
    "subassembly": [],
    "links": [],
    "physical": [
      {
        "x": 0,
        "y": 0,
        "blocks": [
          "A",
        ]
      }
    ]
  },
  {
    "type": "output",
    "x": 400,
    "y": 100,
    "id": "o",
    "subassembly": [],
    "links": [],
    "physical": [
      {
        "x": 0,
        "y": 0,
        "blocks": [
          "a",
        ]
      }
    ]
  },
  {
    "type": "half adder",
    "subassembly": [
      [
        "xor",
        "xor",
        200,
        0
      ],
      [
        "and",
        "and",
        200,
        200
      ],
      [
        "a",
        "input",
        0,
        0
      ],
      [
        "b",
        "input",
        0,
        200
      ],
      [
        "s",
        "output",
        400,
        0
      ],
      [
        "c",
        "output",
        400,
        200
      ]
    ],
    "links": [
      [
        "a",
        0,
        "xor",
        0
      ],
      [
        "a",
        0,
        "and",
        0
      ],
      [
        "b",
        0,
        "xor",
        1
      ],
      [
        "b",
        0,
        "and",
        1
      ],
      [
        "xor",
        0,
        "s",
        0
      ],
      [
        "and",
        0,
        "c",
        0
      ]
    ],
    "physical": [
      {
        "x": 0,
        "y": 0,
        "blocks": [
        ],
        "foo": [
          {
            "x": 0,
            "y": 100,
            "type": "xor",
          },
          {
            "x": 100,
            "y": 0,
            "type": "and",
          }
        ]
      }
    ]
  },
  {
    "type": "full adder",
    "subassembly": [
      [
        "cin",
        "input",
        0,
        0
      ],
      [
        "a",
        "input",
        0,
        200
      ],
      [
        "b",
        "input",
        0,
        400
      ],
      [
        "ha-top",
        "half adder",
        400,
        100
      ],
      [
        "ha-bot",
        "half adder",
        200,
        300
      ],
      [
        "or",
        "or",
        600,
        300
      ],
      [
        "sum",
        "output",
        800,
        100
      ],
      [
        "cout",
        "output",
        800,
        300
      ]
    ],
    "links": [
      [
        "cin",
        0,
        "ha-top",
        0
      ],
      [
        "a",
        0,
        "ha-bot",
        0
      ],
      [
        "b",
        0,
        "ha-bot",
        1
      ],
      [
        "ha-bot",
        0,
        "ha-top",
        1
      ],
      [
        "ha-bot",
        1,
        "or",
        1
      ],
      [
        "ha-top",
        1,
        "or",
        0
      ],
      [
        "ha-top",
        0,
        "sum",
        0
      ],
      [
        "or",
        0,
        "cout",
        0
      ]
    ]
  },
]
