var config = {
  style: "mapbox://styles/kelseyetaylor/ckwlm0bnn44ha14p3rsr33ahn",
  accessToken:
    "pk.eyJ1Ijoia2Vsc2V5ZXRheWxvciIsImEiOiJjanhzYWFwN2QwaHBsM2huNW0yZmplcmJlIn0.37SBNBO6Nldswe4RchbmtA",
  showMarkers: false,
  alignment: "left",
  theme: "dark",
  chapters: [
    {
      id: "glacier-before-1950",
      title: "Glacier National Park:\n 1840 - 1950",
      description: "Lorem ipsum dolor blah blah text",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "fires-before-1950",
          opacity: 0.5
        },
        {
          layer: "fires-before-1950-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "fires-before-1950",
          opacity: 0
        },
        {
          layer: "fires-before-1950-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "olympic-before-1950",
      title: "Olympic National Park:\n 1840 - 1950",
      description: "lorem ipsum",
      location: {
        center: [-124.094, 47.827],
        zoom: 8,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "fires-before-1950",
          opacity: 0.5
        },
        {
          layer: "fires-before-1950-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "fires-before-1950",
          opacity: 0
        },
        {
          layer: "fires-before-1950-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "yosemite-before-1950",
      title: "Yosemite National Park:\n 1840 - 1950",
      description: "lorem ipsum",
      location: {
        center: [-119.7632, 37.8141],
        zoom: 8.63,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "fires-before-1950",
          opacity: 0.5
        },
        {
          layer: "fires-before-1950-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "fires-before-1950",
          opacity: 0
        },
        {
          layer: "fires-before-1950-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "yellowstone-before-1950",
      title: "Yellowstone National Park:\n 1840 - 1950",
      description: "Yellowstone National Park, located mostly in Wyoming with small sections in Idaho and Montana, has seen wildfires as long as it has existed as a national park. What has changed since its early days, however, are the number and size of fires within the park's boundaries.",
      location: {
        center: [-110.423, 44.591],
        zoom: 7.94,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "fires-before-1950",
          opacity: 0.5
        },
        {
          layer: "fires-before-1950-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "fires-before-1950",
          opacity: 0
        },
        {
          layer: "fires-before-1950-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "yellowstone-1950-2000",
      title: "Yellowstone National Park:\n 1950 - 2000",
      description: "As temperatures increased, droughts hit, and resources were scarce, wildfires ravaged the landscape of Yellowstone during the latter half of the 20th century. Many large-scale wildfires have left a noticeable mark on the park - most notably the fires of 1988, which burned 36% of the park's total area.",
      location: {
        center: [-110.423, 44.591],
        zoom: 7.94,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "fires-1950-2000",
          opacity: 0.5
        },
        {
          layer: "fires-1950-2000-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "fires-1950-2000",
          opacity: 0
        },
        {
          layer: "fires-1950-2000-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "yellowstone-since-2000",
      title: "Yellowstone National Park:\n 2000 - 2018",
      description: "One result of such widespread burning was that there was not much left to burn in the subsequent years, making the 21st century relatively quiet in Yellowstone - so far.",
      location: {
        center: [-110.423, 44.591],
        zoom: 7.94,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "fires-since-2000",
          opacity: 0.5
        },
        {
          layer: "fires-since-2000-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "fires-since-2000",
          opacity: 0
        },
        {
          layer: "fires-since-2000-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "yosemite-seki-since-2000",
      title: "Yosemite, Sequoia, & Kings Canyon National Parks:\n 2000 - 2018",
      description: "Three national parks in Central California have had more wildfire activity in the last 20 years, with hard-to-contain fires becoming routine every year.",
      location: {
        center: [-119.314, 37.209],
        zoom: 7.48,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "fires-since-2000",
          opacity: 0.5
        },
        {
          layer: "fires-since-2000-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "fires-since-2000",
          opacity: 0
        },
        {
          layer: "fires-since-2000-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "everglades-since-2000",
      title: "Everglades National Park:\n 1950 - 2018",
      description: "Another preserved area hit hard by myriad natural disasters is Everglades National Park in south Florida, just outside Miami. While wildfires are often associated with the Western United States, they have grown increasingly common in this region over the last several decades.",
      location: {
        center: [-81.137, 25.385],
        zoom: 8.29,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "fires-since-2000",
          opacity: 0.5
        },
        {
          layer: "fires-since-2000-labels",
          opacity: 1.0
        },
        {
          layer: "fires-1950-2000",
          opacity: 0.5
        },
        {
          layer: "fires-1950-2000-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "fires-since-2000",
          opacity: 0
        },
        {
          layer: "fires-since-2000-labels",
          opacity: 0
        },
        {
          layer: "fires-1950-2000",
          opacity: 0
        },
        {
          layer: "fires-1950-2000-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "glacier-since-2000",
      title: "Glacier National Park:\n 2000 - 2018",
      description: "Glacier National Park has experienced large wildfires as long as it has existed. Over time, the National Park Service at Glacier has learned how to manage fire instead of fighting it. Like in many parks, fire is an essential part of the park's ecology, as many species depend on it to survive.",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "fires-since-2000",
          opacity: 0.5
        },
        {
          layer: "fires-since-2000-labels",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "fires-since-2000",
          opacity: 0
        },
        {
          layer: "fires-since-2000-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "glacier-fire-to-glaciers-reset",
      title: "Exploring Glaciers in Our Changing National Parks",
      description: "1850",
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
      onChapterExit: [
        {
          layer: "1850-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "blackfoot-1850",
      title: "Blackfoot Glacier area: 1850",
      description: "lorem ipsum",
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
      title: "Blackfoot Glacier area: 1966",
      description: "lorem ipsum",
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
      title: "Blackfoot Glacier area: 1998",
      description: "lorem ipsum",
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
      title: "Blackfoot Glacier area: 2005",
      description: "lorem ipsum",
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
      title: "Blackfoot Glacier area: 2015",
      description: "lorem ipsum",
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
      title: "Agassiz Glacier area: 1850",
      description: "lorem ipsum",
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
      title: "Agassiz Glacier area: 1966",
      description: "lorem ipsum",
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
      title: "Agassiz Glacier area: 1998",
      description: "lorem ipsum",
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
      title: "Agassiz Glacier area: 2005",
      description: "lorem ipsum",
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
      title: "Agassiz Glacier area: 2015",
      description: "lorem ipsum",
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
      title: "Old Sun Glacier area: 1850",
      description: "lorem ipsum",
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
      title: "Old Sun Glacier area: 1966",
      description: "lorem ipsum",
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
      title: "Old Sun Glacier area: 1998",
      description: "lorem ipsum",
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
      title: "Old Sun Glacier area: 2005",
      description: "lorem ipsum",
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
      title: "Old Sun Glacier area: 2015",
      description: "lorem ipsum",
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
      title: "Grinnell Glacier area: 1850",
      description: "lorem ipsum",
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
      title: "Grinnell Glacier area: 1966",
      description: "lorem ipsum",
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
      title: "Grinnell Glacier area: 1998",
      description: "lorem ipsum",
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
      title: "Grinnell Glacier area: 2005",
      description: "lorem ipsum",
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
      title: "Grinnell Glacier area: 2015",
      description: "lorem ipsum",
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
        },
        {
          layer: "glacier-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "all-1850-2015",
      title: "Glacier recession, 1850 - 2015",
      description: "1850",
      location: {
        center: [-114.0944, 48.6343],
        zoom: 8.47,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1850-glaciers",
          opacity: 0.5
        }
      ]
    },
    {
      id: "all-1850-2015",
      title: "Glacier recession, 1850 - 2015",
      description: "2015",
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
          layer: "2015-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "2015-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "olympic-reset",
      title: "Olympic National Park",
      description: "lorem ipsum",
      location: {
        center: [-124.094, 47.827],
        zoom: 8,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1998-glaciers",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "1998-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "olympic-1998",
      title: "Olympic National Park",
      description: "1998",
      location: {
        center: [-123.671, 47.797],
        zoom: 11,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1998-glaciers",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "1998-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "olympic-1998-2015",
      title: "Olympic National Park",
      description: "2015",
      location: {
        center: [-123.671, 47.797],
        zoom: 11,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "1998-glaciers-gone",
          opacity: 1
        },
        {
          layer: "2015-glaciers",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "2015-glaciers",
          opacity: 0
        }
      ]
    }
  ]
};
