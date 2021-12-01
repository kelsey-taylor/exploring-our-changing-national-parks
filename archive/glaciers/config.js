var config = {
  style: "mapbox://styles/kelseyetaylor/ck9hezfiq274q1iqckof9nrs4",
  accessToken:
    "pk.eyJ1Ijoia2Vsc2V5ZXRheWxvciIsImEiOiJjanhzYWFwN2QwaHBsM2huNW0yZmplcmJlIn0.37SBNBO6Nldswe4RchbmtA",
  showMarkers: false,
  alignment: "left",
  theme: "dark",
  chapters: [
    {
      id: "park-1850",
      image: "GLAC.svg",
      description: "Glaciers in Glacier National Park in 1850",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: []
    },
    {
      id: "blackfoot-1850",
      description: "1850",
      location: {
        center: [-113.69731, 48.6014],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers",
          opacity: 1.0
        },
        {
          layer: "glacier-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "blackfoot-1850-1966",
      description: "1966",
      location: {
        center: [-113.69731, 48.6014],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers",
          opacity: 1.0
        },
        {
          layer: "glacier-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers",
          opacity: 0
        },
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "blackfoot-1966-1998",
      description: "1998",
      location: {
        center: [-113.69731, 48.6014],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 0
        },
        {
          layer: "1998-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "blackfoot-1998-2005",
      description: "2005",
      location: {
        center: [-113.69731, 48.6014],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers",
          opacity: 0
        },
        {
          layer: "2005-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "blackfoot-2005-2015",
      description: "2015",
      location: {
        center: [-113.69731, 48.6014],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers",
          opacity: 0
        },
        {
          layer: "2015-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "agassiz-1850",
      description: "1850",
      location: {
        center: [-114.1083, 48.9259],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers",
          opacity: 1.0
        },
        {
          layer: "glacier-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "agassiz-1850-1966",
      description: "1966",
      location: {
        center: [-114.1083, 48.9259],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers",
          opacity: 1.0
        },
        {
          layer: "glacier-labels",
          opacity: 1.0,
          filter: ["match", ["get", "GLACNAME"], "Harrison Glacier"]
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers",
          opacity: 0
        },
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "agassiz-1966-1998",
      description: "1998",
      location: {
        center: [-114.1083, 48.9259],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 0
        },
        {
          layer: "1998-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "agassiz-1998-2005",
      description: "2005",
      location: {
        center: [-114.1083, 48.9259],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers",
          opacity: 0
        },
        {
          layer: "2005-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "agassiz-2005-2015",
      description: "2015",
      location: {
        center: [-114.1083, 48.9259],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers",
          opacity: 0
        },
        {
          layer: "2015-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "oldsun-1850",
      title: "Old Sun",
      description: "1850",
      location: {
        center: [-113.8116, 48.8921],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers",
          opacity: 1.0
        },
        {
          layer: "glacier-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "oldsun-1850-1966",
      description: "1966",
      location: {
        center: [-113.8116, 48.8921],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers",
          opacity: 1.0
        },
        {
          layer: "glacier-labels",
          opacity: 1.0,
          filter: ["match", ["get", "GLACNAME"], "Harrison Glacier"]
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers",
          opacity: 0
        },
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "oldsun-1966-1998",
      description: "1998",
      location: {
        center: [-113.8116, 48.8921],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 0
        },
        {
          layer: "1998-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "oldsun-1998-2005",
      description: "2005",
      location: {
        center: [-113.8116, 48.8921],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers",
          opacity: 0
        },
        {
          layer: "2005-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "oldsun-2005-2015",
      description: "2015",
      location: {
        center: [-113.8116, 48.8921],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers",
          opacity: 0
        },
        {
          layer: "2015-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "grinnell-1850",
      title: "Grinnell",
      description: "1850",
        location: {
          center: [-113.7023, 48.7455],
          zoom: 11,
          pitch: 0,
          bearing: 0,
          speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers",
          opacity: 1.0
        },
        {
          layer: "glacier-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "grinnell-1850-1966",
      description: "1966",
      location: {
        center: [-113.7023, 48.7455],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers",
          opacity: 1.0
        },
        {
          layer: "glacier-labels",
          opacity: 1.0,
          filter: ["match", ["get", "GLACNAME"], "Harrison Glacier"]
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers",
          opacity: 0
        },
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "grinnell-1966-1998",
      description: "1998",
      location: {
        center: [-113.7023, 48.7455],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers",
          opacity: 0
        },
        {
          layer: "1998-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "grinnell-1998-2005",
      description: "2005",
      location: {
        center: [-113.7023, 48.7455],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers",
          opacity: 0
        },
        {
          layer: "2005-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "grinnell-2005-2015",
      description: "2015",
      location: {
        center: [-113.7023, 48.7455],
        zoom: 11,
        pitch: 0,
        bearing: 0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2005-glaciers",
          opacity: 0
        },
        {
          layer: "2015-glaciers",
          opacity: 1.0
        }
      ]
    },
    {
      id: "reset",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0
        },
        {
          layer: "2005-glaciers-gone",
          opacity: 0
        },
        {
          layer: "2005-glaciers",
          opacity: 0
        },
        {
          layer: "2015-glaciers",
          opacity: 0
        },
        {
          layer: "glacier-labels",
          opacity: 0
        }
      ],
      onChapterExit: []
    },
    {
      id: "all-1850-2015",
      description: "All glaciers, 1850-2015",
      image: "GLAC.svg",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2015-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
      ]
    }
  ]
};
