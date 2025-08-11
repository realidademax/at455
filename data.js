var APP_DATA = {
  "scenes": [
    {
      "id": "0-garagem",
      "name": "GARAGEM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 816,
      "initialViewParameters": {
        "yaw": -0.869400147955588,
        "pitch": 0.17899262096350554,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -0.7256634351902989,
          "pitch": 0.35784071485820235,
          "rotation": 0.7853981633974483,
          "target": "2-cozinha"
        },
        {
          "yaw": 2.8130028341801907,
          "pitch": 0.447851289290508,
          "rotation": 0.7853981633974483,
          "target": "1-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 3.055043467124934,
        "pitch": -0.03735375530100349,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -3.024016916237791,
          "pitch": 0.26014164518309535,
          "rotation": 11.780972450961727,
          "target": "0-garagem"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cozinha",
      "name": "COZINHA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 816,
      "initialViewParameters": {
        "yaw": -2.892137027425342,
        "pitch": 0.460024448590854,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -1.7611456129921628,
          "pitch": 0.640473667970479,
          "rotation": 5.497787143782138,
          "target": "0-garagem"
        },
        {
          "yaw": -0.8477511273709233,
          "pitch": 0.5129546867731491,
          "rotation": 0.7853981633974483,
          "target": "3-corredor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-corredor",
      "name": "CORREDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 816,
      "initialViewParameters": {
        "yaw": -0.8093834707654128,
        "pitch": 0.35414940758091973,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 1.4841139066825288,
          "pitch": 0.3959726534245238,
          "rotation": 5.497787143782138,
          "target": "2-cozinha"
        },
        {
          "yaw": 1.4809722640435456,
          "pitch": 0.06629691306902252,
          "rotation": 10.210176124166829,
          "target": "0-garagem"
        },
        {
          "yaw": -0.573319645770642,
          "pitch": 0.8211019577939638,
          "rotation": 0.7853981633974483,
          "target": "5-banheiro_social"
        },
        {
          "yaw": -1.5439409928690164,
          "pitch": 0.6408936554542635,
          "rotation": 6.283185307179586,
          "target": "6-suite"
        },
        {
          "yaw": 0.753432415008298,
          "pitch": 0.9319458019381592,
          "rotation": 6.283185307179586,
          "target": "4-quarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-quarto",
      "name": "QUARTO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 816,
      "initialViewParameters": {
        "yaw": 1.7959959089918858,
        "pitch": 0.40220344644355777,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -1.6075117406079151,
          "pitch": 0.49506165132626734,
          "rotation": 5.497787143782138,
          "target": "3-corredor"
        },
        {
          "yaw": -1.389208510579362,
          "pitch": 0.5554951212126547,
          "rotation": 7.0685834705770345,
          "target": "5-banheiro_social"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-banheiro_social",
      "name": "BANHEIRO_SOCIAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 816,
      "initialViewParameters": {
        "yaw": -2.179760651503374,
        "pitch": 0.509708121373178,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -1.4666077490108336,
          "pitch": 0.5367742914004943,
          "rotation": 5.497787143782138,
          "target": "3-corredor"
        },
        {
          "yaw": -1.2194145624722346,
          "pitch": 0.544266026163374,
          "rotation": 0.7853981633974483,
          "target": "6-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-suite",
      "name": "SUITE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 816,
      "initialViewParameters": {
        "yaw": 0.9101076638193089,
        "pitch": 0.3755959532304374,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": 1.3135104807126137,
          "pitch": 0.49918560522584876,
          "rotation": 5.497787143782138,
          "target": "7-banheiro_suite"
        },
        {
          "yaw": -2.880038458322092,
          "pitch": 0.3846379584430455,
          "rotation": 6.283185307179586,
          "target": "3-corredor"
        },
        {
          "yaw": 0.020744264856190853,
          "pitch": 0.7311523838823923,
          "rotation": 0,
          "target": "8-varanda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-banheiro_suite",
      "name": "BANHEIRO_SUITE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 816,
      "initialViewParameters": {
        "yaw": 2.5267834067696695,
        "pitch": 0.6391388993089038,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -2.0868867122733015,
          "pitch": 0.8858477007763206,
          "rotation": 1.5707963267948966,
          "target": "6-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-varanda",
      "name": "VARANDA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 816,
      "initialViewParameters": {
        "yaw": -0.6930249266222592,
        "pitch": 0.5063992981659879,
        "fov": 1.3474042771833745
      },
      "linkHotspots": [
        {
          "yaw": -3.131830320615375,
          "pitch": 0.7437355094162577,
          "rotation": 6.283185307179586,
          "target": "6-suite"
        },
        {
          "yaw": -2.823021688096423,
          "pitch": 0.18911482224736176,
          "rotation": 0,
          "target": "3-corredor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "vps_at455",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
