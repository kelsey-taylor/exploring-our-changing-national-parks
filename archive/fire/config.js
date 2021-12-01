var config = {
  style: "mapbox://styles/kelseyetaylor/ck9hezfiq274q1iqckof9nrs4",
  accessToken:
    "pk.eyJ1Ijoia2Vsc2V5ZXRheWxvciIsImEiOiJjanhzYWFwN2QwaHBsM2huNW0yZmplcmJlIn0.37SBNBO6Nldswe4RchbmtA",
  showMarkers: false,
  alignment: "left",
  theme: "dark",
  chapters: [
    {
      id: "fires-1910",
      description: "Glacier National Park: 1910-1919",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1910-fires",
          opacity: 0.5
        },
        {
          layer: "1910-fire-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1910-fires",
          opacity: 0
        },
        {
          layer: "1910-fire-labels",
          opacity: 0
        },
        {
          layer: "1920-fires",
          opacity: 0.1
        }
      ]
    },
    {
      id: "fires-1920",
      description: "Glacier National Park: 1920-1929",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1920-fires",
          opacity: 0.5
        },
        {
          layer: "1920-fire-labels",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "1920-fires",
          opacity: 0
        },
        {
          layer: "1920-fire-labels",
          opacity: 0
        },
        {
          layer: "1930-fires",
          opacity: 0.1
        }
      ]
    },
    {
      id: "fires-1930",
      description: "Glacier National Park: 1930-1939",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1930-fires",
          opacity: 0.5
        },
        {
          layer: "1930-fire-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1930-fires",
          opacity: 0
        },
        {
          layer: "1930-fire-labels",
          opacity: 0
        },
        {
          layer: "1940-1950-fires",
          opacity: 0.1
        }
      ]
    },
    {
      id: "fires-1940-1950",
      description: "Glacier National Park: 1940-1959",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1940-1950-fires",
          opacity: 0.5
        },
        {
          layer: "1940-1950-fire-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1940-1950-fires",
          opacity: 0
        },
        {
          layer: "1940-1950-fire-labels",
          opacity: 0
        },
        {
          layer: "1960-fires",
          opacity: 0.1
        }
      ]
    },
    {
      id: "fires-1960",
      description: "Glacier National Park: 1960-1969",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1960-fires",
          opacity: 0.5
        },
        {
          layer: "1960-fire-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1960-fires",
          opacity: 0
        },
        {
          layer: "1960-fire-labels",
          opacity: 0
        },
        {
          layer: "1960-fires",
          opacity: 0.1
        }
      ]
    },
    {
      id: "fires-1970",
      description: "Glacier National Park: 1970-1979",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1970-fires",
          opacity: 0.5
        },
        {
          layer: "1970-fire-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1970-fires",
          opacity: 0
        },
        {
          layer: "1970-fire-labels",
          opacity: 0
        },
        {
          layer: "1970-fires",
          opacity: 0.1
        }
      ]
    },
    {
      id: "fires-1980",
      description: "Glacier National Park: 1980-1989",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1980-fires",
          opacity: 0.5
        },
        {
          layer: "1980-fire-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1980-fires",
          opacity: 0
        },
        {
          layer: "1980-fire-labels",
          opacity: 0
        },
        {
          layer: "1990-fires",
          opacity: 0.1
        }
      ]
    },
    {
      id: "fires-1990",
      description: "Glacier National Park: 1990-1999",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1990-fires",
          opacity: 0.5
        },
        {
          layer: "1990-fire-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1990-fires",
          opacity: 0
        },
        {
          layer: "1990-fire-labels",
          opacity: 0
        },
        {
          layer: "2000-fires",
          opacity: 0.1
        }
      ]
    },
    {
      id: "fires-2000",
      description: "Glacier National Park: 2000-2009",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "2000-fires",
          opacity: 0.5
        },
        {
          layer: "2000-fire-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "2000-fires",
          opacity: 0
        },
        {
          layer: "2000-fire-labels",
          opacity: 0
        },
        {
          layer: "2010-fires",
          opacity: 0.1
        }
      ]
    },
    {
      id: "fires-2010",
      description: "Glacier National Park: 2010-2018",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "2010-fires",
          opacity: 0.5
        },
        {
          layer: "2010-fire-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "2010-fires",
          opacity: 0
        },
        {
          layer: "2010-fire-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "fires-all",
      description: "Glacier National Park: all recorded wildfires, 1910-2018",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1910-fires",
          opacity: 0.4
        },
        {
          layer: "1920-fires",
          opacity: 0.4
        },
        {
          layer: "1930-fires",
          opacity: 0.4
        },
        {
          layer: "1940-1950-fires",
          opacity: 0.4
        },
        {
          layer: "1960-fires",
          opacity: 0.4
        },
        {
          layer: "1970-fires",
          opacity: 0.4
        },
        {
          layer: "1980-fires",
          opacity: 0.4
        },
        {
          layer: "1990-fires",
          opacity: 0.4
        },
        {
          layer: "2000-fires",
          opacity: 0.4
        },
        {
          layer: "2010-fires",
          opacity: 0.4
        }
      ],
      onChapterExit: [
        {
          layer: "1910-fires",
          opacity: 0
        },
        {
          layer: "1920-fires",
          opacity: 0
        },
        {
          layer: "1930-fires",
          opacity: 0
        },
        {
          layer: "1940-1950-fires",
          opacity: 0
        },
        {
          layer: "1960-fires",
          opacity: 0
        },
        {
          layer: "1970-fires",
          opacity: 0
        },
        {
          layer: "1980-fires",
          opacity: 0
        },
        {
          layer: "1990-fires",
          opacity: 0
        },
        {
          layer: "2000-fires",
          opacity: 0
        },
        {
          layer: "2010-fires",
          opacity: 0
        }
      ]
    }
  ]
};
