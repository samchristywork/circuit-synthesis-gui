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
]
