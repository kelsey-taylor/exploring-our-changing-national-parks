var config = {
  style: "mapbox://styles/kelseyetaylor/ckwmy8umq07tr16nol9wltpf2",
  accessToken:
    "pk.eyJ1Ijoia2Vsc2V5ZXRheWxvciIsImEiOiJjanhzYWFwN2QwaHBsM2huNW0yZmplcmJlIn0.37SBNBO6Nldswe4RchbmtA",
  showMarkers: false,
  alignment: "left",
  theme: "dark",
  title: "Exploring Our Changing National Parks",
  byline: "Kelsey Taylor",
  footer: "Glacier data available from U.S. Geological Survey (USGS) and GLIMS database. Historic wildfire data available from the National Park Service (NPS) and USGS. Historical tropical cyclone data available via HURDAT2 from the National Hurricane Center (NHC) and National Oceanic and Atmospheric Administration (NOAA). Park boundary and name data available from NPS. The <a href='https://nationalparktypeface.com/'>National Park Typeface</a> is available for free use from the Design Outside Studio.<br><br> Funding for this project provided by The National Geographic Society",
  chapters: [
    {
      id: "summary",
      description: "Follow impacts of our changing climate in U.S. National Parks across time, space, and landscape. Wildfires, receding glaciers, hurricanes, rainfall, and temperature changes from 1850 to the present illustrate the rapid, intense changes in our climate over the past 150 years.",
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
          opacity: 0
        },
        {
          layer: "fires-1950-2000",
          opacity: 0
        },
        {
          layer: "fires-since-2000",
          opacity: 0
        }
      ],
      onChapterExit: []
    },
    {
      id: "fires-title",
      title: "Exploring Wildfires in Our Changing National Parks",
      description: "Wildfires in the U.S. have increased dramatically in size and frequency since data was first tracked in the mid-19th century. In U.S. national parks, they are one very visible impact of our changing climate.",
      image: "./content/scrollytelling/img/glac-12.jpeg",
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
          layer: "fires-1950-2000",
          opacity: 0.5
        },
        {
          layer: "fires-since-2000",
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: "fires-before-1950",
          opacity: 0
        },
        {
          layer: "fires-1950-2000",
          opacity: 0
        },
        {
          layer: "fires-since-2000",
          opacity: 0
        }
      ]
    },
    {
      id: "glacier-before-1950",
      title: "Glacier National Park:\n 1840 - 1950",
      description: "Glacier National Park in Montana has been a hotbed of wildfire activity since before its designation as a national park in 1910. <br><br> Wildfires have been prominent in Glacier's landscape for so long that many of its species have adapted to fiery conditions, needing it to survive.",
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
        },
        {
          layer: "fires-1950-2000",
          opacity: 0
        },
        {
          layer: "fires-since-2000",
          opacity: 0
        }
      ],
      onChapterExit: []
    },
    {
      id: "yellowstone-before-1950",
      title: "Yellowstone & Grand Teton National Parks:\n 1840 - 1950",
      description: "Yellowstone National Park, located mostly in Wyoming with small sections in Idaho and Montana, has seen wildfires as long as it has existed as a national park. What has changed since its early days, however, are the number and size of fires within the park's boundaries.",
      location: {
        center: [-110.847, 44.34],
        zoom: 7.62,
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
      title: "Yellowstone & Grand Teton National Parks:\n 1950 - 2000",
      description: "As temperatures increased, droughts hit, and resources were scarce, wildfires ravaged the landscape of Yellowstone during the latter half of the 20th century. Many large-scale wildfires have left a noticeable mark on the park - most notably the fires of 1988, which burned 36% of the park's total area.",
      location: {
        center: [-110.847, 44.34],
        zoom: 7.62,
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
      title: "Yellowstone & Grand Teton National Parks:\n 2000 - 2018",
      description: "One result of such widespread burning was that there was not much left to burn in the subsequent years, making the 21st century relatively quiet in Yellowstone - so far.",
      image: "./content/scrollytelling/img/grte-03.jpeg",
      location: {
        center: [-110.847, 44.34],
        zoom: 7.62,
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
      image: "./content/scrollytelling/img/yose-02.jpeg",
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
      description: "As Glacier has become a more popular destination and wildfires have grown in size and frequency, the National Park Service at Glacier has learned how to manage fire instead of fighting it.",
      image: "./content/scrollytelling/img/glac-11.jpeg",
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
      id: "glacier-fire-to-glaciers",
      title: "Exploring Glaciers in Our Changing National Parks",
      description: "Glaciers in national parks have changed dramatically since 1850 in large part due to changes in climate conditions. Glacier National Park still has some glaciers within its boundaries, but they are rapidly receding, with estimates that they will disappear by 2030.",
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
      id: "glacier-fire-to-glaciers-title",
      title: "Glaciers in Glacier National Park",
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
      title: "1850",
      description: "Glacial extent estimate in 1850 for the Blackfoot Glacier complex and surrounding glaciers",
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
          layer: "1998-glaciers",
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
          opacity: 1.0
        },
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
          layer: "2015-glaciers-gone",
          opacity: 0
        }
      ],
      onChapterExit: []
    },
    // done
    {
      id: "blackfoot-1850-1966",
      title: "1966",
      description: "Glacial extent in 1966 for the Blackfoot Glacier complex and surrounding glaciers, with the estimated extent in 1850 visible. <br><br> In just over than 100 years, approximately half of this glacier complex has receded.",
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
          opacity: 0
        },
        {
          layer: "glacier-labels",
          opacity: 1.0
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        },
        {
          layer: "1850-glaciers",
          opacity: 0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0
        },
        {
          layer: "glacier-labels",
          opacity: 1.0
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        },
        {
          layer: "1850-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "blackfoot-1966-1998",
      title: "1998",
      description: "Glacial extent in 1998 for the Blackfoot Glacier complex and surrounding glaciers, with the estimated extent in 1850 and 1966 visible.",
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
          layer: "glacier-labels",
          opacity: 1.0
        },
        {
          layer: "1998-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: []
    },
    {
      id: "blackfoot-1998-2005",
      title: "2005",
      description: "Glacial extent in 2005 for the Blackfoot Glacier complex and surrounding glaciers, with the estimated extent in 1850, 1966, and 1998 visible.",
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
          layer: "glacier-labels",
          opacity: 1.0
        },
        {
          layer: "1998-glaciers",
          opacity: 0
        },
        {
          layer: "2005-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: []
    },
    {
      id: "blackfoot-2005-2015",
      title: "2015",
      description: "Glacial extent in 2015 for the Blackfoot Glacier complex and surrounding glaciers, with the estimated extent in 1850, 1966, 1998, and 2005 visible. <br><br> Beyond the dramatic initial recession from 1850 to 1966, much more of the glacier complex has disappeared in the last 50 years.",
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
          layer: "2005-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2015-glaciers",
          opacity: 1
        }
      ],
      onChapterExit: []
    },
    {
      id: "agassiz-1850",
      title: "1850",
      description: "Glacial extent estimate in 1850 for the Agassiz Glacier complex and surrounding glaciers.",
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
          layer: "2015-glaciers",
          opacity: 0
        },
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
          layer: "glacier-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "agassiz-1850-1966",
      title: "1966",
      description: "Glacial extent in 1966 for the Agassiz Glacier complex and surrounding glaciers, with the estimated extent in 1850 visible.",
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
          layer: "glacier-labels",
          opacity: 1.0
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1966-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "agassiz-1850-1966",
      title: "1998",
      description: "Glacial extent in 1998 for the Agassiz Glacier complex and surrounding glaciers, with the estimated extent in 1850 and 1966 visible.",
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
          layer: "glacier-labels",
          opacity: 1.0
        },
        {
          layer: "1998-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0
        },
        {
          layer: "1998-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "agassiz-1998-2005",
      title: "2005",
      description: "Glacial extent in 2005 for the Agassiz Glacier complex and surrounding glaciers, with the estimated extent in 1850, 1966, and 2005 visible.",
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
          layer: "glacier-labels",
          opacity: 1.0
        },
        {
          layer: "2005-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
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
          layer: "2005-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "agassiz-2005-2015",
      title: "2015",
      description: "Glacial extent in 2015 for the Agassiz Glacier complex and surrounding glaciers, with the estimated extent in 1850, 1966, 1998, and 2005 visible.  <br><br> Glacier recession is even more dramatic here than in the Blackfoot area, with close to 70% of the glacier surface area here having receded between 1850 and 2015.",
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
          layer: "2005-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2015-glaciers",
          opacity: 1
        }
      ],
      onChapterExit: [
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
          layer: "2015-glaciers",
          opacity: 0
        }
      ]
    },
    // {
    //   id: "oldsun-1850",
    //   title: "Old Sun Glacier area: 1850",
    //   description: "lorem ipsum",
    //   location: {
    //     center: [-113.8116, 48.8921],
    //     zoom: 11,
    //     pitch: 0,
    //     bearing: 0,
    //     speed: 0.7
    //   },
    //   onChapterEnter: [
    //     {
    //       layer: "1850-glaciers",
    //       opacity: 1.0
    //     },
    //     {
    //       layer: "glacier-labels",
    //       opacity: 1.0
    //     }
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: "1850-glaciers",
    //       opacity: 0
    //     },
    //     {
    //       layer: "glacier-labels",
    //       opacity: 0
    //     }
    //   ]
    // },
    // {
    //   id: "oldsun-1850-1966",
    //   title: "Old Sun Glacier area: 1850 - 1966",
    //   description: "lorem ipsum",
    //   location: {
    //     center: [-113.8116, 48.8921],
    //     zoom: 11,
    //     pitch: 0,
    //     bearing: 0,
    //     speed: 0.7
    //   },
    //   onChapterEnter: [
    //     {
    //       layer: "1850-glaciers-gone",
    //       opacity: 0.5
    //     },
    //     {
    //       layer: "glacier-labels",
    //       opacity: 1.0
    //     },
    //     {
    //       layer: "1966-glaciers",
    //       opacity: 1.0
    //     }
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: "1850-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "1966-glaciers",
    //       opacity: 0
    //     }
    //   ]
    // },
    // {
    //   id: "oldsun-1966-1998",
    //   title: "Old Sun Glacier area: 1966 - 1998",
    //   description: "lorem ipsum",
    //   location: {
    //     center: [-113.8116, 48.8921],
    //     zoom: 11,
    //     pitch: 0,
    //     bearing: 0,
    //     speed: 0.7
    //   },
    //   onChapterEnter: [
    //     {
    //       layer: "1850-glaciers-gone",
    //       opacity: 0.5
    //     },
    //     {
    //       layer: "1966-glaciers-gone",
    //       opacity: 0.5
    //     },
    //     {
    //       layer: "glacier-labels",
    //       opacity: 1.0
    //     },
    //     {
    //       layer: "1998-glaciers",
    //       opacity: 1.0
    //     }
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: "1850-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "1966-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "1998-glaciers",
    //       opacity: 0
    //     }
    //   ]
    // },
    // {
    //   id: "oldsun-1998-2005",
    //   title: "Old Sun Glacier area: 1998 - 2005",
    //   description: "lorem ipsum",
    //   location: {
    //     center: [-113.8116, 48.8921],
    //     zoom: 11,
    //     pitch: 0,
    //     bearing: 0,
    //     speed: 0.7
    //   },
    //   onChapterEnter: [
    //     {
    //       layer: "1850-glaciers-gone",
    //       opacity: 0.5
    //     },
    //     {
    //       layer: "1966-glaciers-gone",
    //       opacity: 0.5
    //     },
    //     {
    //       layer: "1998-glaciers-gone",
    //       opacity: 0.5
    //     },
    //     {
    //       layer: "glacier-labels",
    //       opacity: 1.0
    //     },
    //     {
    //       layer: "2005-glaciers",
    //       opacity: 1.0
    //     }
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: "1850-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "1966-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "1998-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "2005-glaciers",
    //       opacity: 0
    //     }
    //   ]
    // },
    // {
    //   id: "oldsun-2005-2015",
    //   title: "Old Sun Glacier area: 2005 - 2015",
    //   description: "lorem ipsum",
    //   location: {
    //     center: [-113.8116, 48.8921],
    //     zoom: 11,
    //     pitch: 0,
    //     bearing: 0,
    //     speed: 0.7
    //   },
    //   onChapterEnter: [
    //     {
    //       layer: "1850-glaciers-gone",
    //       opacity: 0.5
    //     },
    //     {
    //       layer: "1966-glaciers-gone",
    //       opacity: 0.5
    //     },
    //     {
    //       layer: "1998-glaciers-gone",
    //       opacity: 0.5
    //     },
    //     {
    //       layer: "2005-glaciers-gone",
    //       opacity: 0.5
    //     },
    //     {
    //       layer: "2015-glaciers",
    //       opacity: 1
    //     }
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: "1850-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "1966-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "1998-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "2005-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "2015-glaciers",
    //       opacity: 0
    //     }
    //   ]
    // },
    {
      id: "grinnell-1850",
      title: "1850",
      description: "Glacial extent estimate in 1850 for the Agassiz Glacier complex and surrounding glaciers. <br><br> Grinnell, named for one of the park's founders, is one of the most popular hiking destinations in the park. It is also one of the largest glaciers in the park and has been a very visible example of glacial retreat for visitors to the park.",
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
        },
        {
          layer: "glacier-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "grinnell-1850-1966",
      title: "1966",
      description: "Glacial extent in 1966 for the Grinnell Glacier complex and surrounding glaciers, with the estimated extent in 1850 visible.",
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
          layer: "glacier-labels",
          opacity: 1.0
        },
        {
          layer: "1966-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0
        },
        {
          layer: "1966-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "grinnell-1966-1998",
      title: "1998",
      description: "Glacial extent in 1998 for the Grinnell Glacier complex and surrounding glaciers, with the estimated extent in 1850 and 1966 visible.  <br><br> This area features many glacial lakes, known as tarns, which form when glaciers melt over time.",
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
          layer: "glacier-labels",
          opacity: 1.0
        },
        {
          layer: "1998-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
        {
          layer: "1850-glaciers-gone",
          opacity: 0
        },
        {
          layer: "1966-glaciers-gone",
          opacity: 0
        },
        {
          layer: "1998-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "grinnell-1998-2005",
      title: "2005",
      description: "Glacial extent in 2005 for the Grinnell Glacier complex and surrounding glaciers, with the estimated extent in 1850, 1966, and 1998 visible.",
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
          layer: "glacier-labels",
          opacity: 1.0
        },
        {
          layer: "2005-glaciers",
          opacity: 1.0
        }
      ],
      onChapterExit: [
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
          layer: "2005-glaciers",
          opacity: 0
        }
      ]
    },
    {
      id: "grinnell-2005-2015",
      title: "2015",
      description: "Glacial extent in 2015 for the Grinnell Glacier complex and surrounding glaciers, with the estimated extent in 1850, 1966, 1998, and 2005 visible.",
      image: "./content/scrollytelling/img/glac-07.jpeg",
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
          layer: "2005-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2015-glaciers",
          opacity: 1
        }
      ],
      onChapterExit: [
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
          layer: "2015-glaciers",
          opacity: 0
        }
      ]
    },
    // {
    //   id: "all-1850-2015",
    //   title: "Glacier recession, 1850 - 2015",
    //   description: "1850",
    //   location: {
    //     center: [-114.0944, 48.6343],
    //     zoom: 8.47,
    //     pitch: 0.0,
    //     bearing: 0.0,
    //     speed: 0.7
    //   },
    //   onChapterEnter: [
    //     {
    //       layer: "1850-glaciers-gone",
    //       opacity: 0.5
    //     },
    //     {
    //       layer: "2015-glaciers",
    //       opacity: 1
    //     }
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: "1850-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "1966-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "1998-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "2005-glaciers-gone",
    //       opacity: 0
    //     },
    //     {
    //       layer: "2015-glaciers",
    //       opacity: 0
    //     }
    //   ]
    // },
    {
      id: "olympic-reset",
      title: "Glaciers in Olympic National Park",
      description: "Olympic National Park in Washington includes several large glaciers in its center, atop the Olympic Mountains.",
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
        },
        {
          layer: "glacier-labels",
          opacity: 0
        },
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
      title: "1998",
      description: "Glacial extent in 1998 for the primary glacier complex and smaller surrounding glaciers.",
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
        },
        {
          layer: "glacier-labels",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "glacier-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "olympic-1998-2015",
      title: "2015",
      description: "Glacial extent in 2015 for the primary glacier complex and smaller surrounding glaciers, with the estimated extent in 1998 visible. <br><br> There has been considerable recession, especially given this data reflects less than 20 years of activity. Many smaller glaciers surrouding the primary complex have been downgraded to snowfields.",
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
          opacity: 0
        },
        {
          layer: "1998-glaciers-gone",
          opacity: 0.5
        },
        {
          layer: "2015-glaciers",
          opacity: 1
        },
        {
          layer: "glacier-labels",
          opacity: 1
        }
      ],
      onChapterExit: [
        {
          layer: "2015-glaciers",
          opacity: 0
        },
        {
          layer: "1998-glaciers",
          opacity: 0
        },
        {
          layer: "glacier-labels",
          opacity: 0
        }
      ]
    },
    {
      id: "east-coast-hurricanes-title",
      title: "Exploring Tropical Cyclones in Our Changing National Parks",
      description: "For national parks in the eastern and southern U.S., the threat of hurricanes and other tropical weather has expanded to include many more months of the year than before. Tropical cyclones bring torrential rain and extremely high winds, which routinely cause flooding and storm surge in parks ill equipped to handle such conditions.",
      location: {
        center: [-81.61, 27.49],
        zoom: 4.13,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "hurricanes-before-1900",
          opacity: 0.2
        },
        {
          layer: "hurricanes-1900-1950",
          opacity: 0.2
        },
        {
          layer: "hurricanes-1950-2000",
          opacity: 0.2
        },
        {
          layer: "hurricanes-since-2000",
          opacity: 0.2
        }
      ],
      onChapterExit: [
        {
          layer: "hurricanes-before-1900",
          opacity: 0
        },
        {
          layer: "hurricanes-1900-1950",
          opacity: 0
        },
        {
          layer: "hurricanes-1950-2000",
          opacity: 0
        },
        {
          layer: "hurricanes-since-2000",
          opacity: 0
        }
      ]
    },
    {
      id: "east-coast-hurricanes-before-1900",
      title: "Tropical cyclones: before 1900",
      description: "The Everglades has been a hotspot for tropical cyclones, including hurricanes, tropical storms, and other less powerful storms, for hundreds of years. <br><br> On this map, color indicates the month of the storm, with purple earlier in the year (February) and yellow later in the year (November). Storm track widths represent the intensity of the storm - more severe storms are wider than less intense storms.",
      location: {
        center: [-81.61, 27.49],
        zoom: 4.13,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "hurricanes-before-1900",
          opacity: 0.6
        }
      ],
      onChapterExit: [
        {
          layer: "hurricanes-before-1900",
          opacity: 0
        }
      ]
    },
    {
      id: "east-coast-hurricanes-1900-1950",
      title: "Tropical cyclones: 1900 - 1950",
      description: "As air and sea temperatures increased in the early 20th century, so did the frequency and intensity of tropical cyclones in the Atlantic Ocean. The Everglades weatherd two historic hurricanes during this period - the 1926 Miami Hurricane and the 1928 Okeechobee Hurricane.",
      location: {
        center: [-81.61, 27.49],
        zoom: 4.13,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "hurricanes-1900-1950",
          opacity: 0.6
        }
      ],
      onChapterExit: [
        {
          layer: "hurricanes-1900-1950",
          opacity: 0
        }
      ]
    },
    {
      id: "east-coast-hurricanes-1950-2000",
      title: "Tropical cyclones: 1950 - 2000",
      description: "Adding to the worrying trend of more intense storms later in the 20th century, storm paths became more erratic, veering further west and north than in previous years.",
      image: "./content/scrollytelling/img/ever-01.jpeg",
      location: {
        center: [-81.61, 27.49],
        zoom: 4.13,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "hurricanes-1950-2000",
          opacity: 0.6
        }
      ],
      onChapterExit: [
        {
          layer: "hurricanes-1950-2000",
          opacity: 0
        }
      ]
    },
    {
      id: "east-coast-hurricanes-since-2000",
      title: "Tropical cyclones: 2000 - 2018",
      description: "In the 21st century, tropical cyclones are consistently intense and occur later in the season in this part of the world. Because of its ecological makeup, the Everglades is able to withstand historic storms like Hurricane Katrina without much damage to the landscape, but its manmade structures suffer.",
      location: {
        center: [-81.61, 27.49],
        zoom: 4.13,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
        {
          layer: "hurricanes-since-2000",
          opacity: 0.6
        }
      ],
      onChapterExit: [
        {
          layer: "hurricanes-since-2000",
          opacity: 0
        }
      ]
    },
    {
      id: "parks-all",
      title: "Exploring Our Changing National Parks",
      description: "The best way to make a difference and help stop the impacts of climate change now is to reduce your carbon footprint. It takes contributions from everyone to tackle a global problem like the climate crisis.<br><br> Explore each park and dataset, plus temperature and precipitation data since 1895 for all project parks <a href='../interactive/prototype.html'>here</a>.",
      location: {
        center: [-96.62, 37.98],
        zoom: 3.24,
        pitch: 0.0,
        bearing: 0.0,
        speed: 0.7
      },
      onChapterEnter: [
      ]
    }
  ]
};
