/**
 * Catálogo comercial Duarte_TecCell (gerado a partir de estoque_completo_modelos_e_precos.txt)
 *
 * - Bateria, conector de carga, tela (Samsung A51/A70/A71/A72) e câmera frontal (iPhone 7 Plus/6S Plus):
 *   faixa calculada sobre o custo da peça do estoque (campo costs = menor custo de bateria).
 * - Demais serviços/modelos: estimados por modelo semelhante (lista "est" em cada modelo).
 * - Revise as faixas e mude demoMode para false antes de divulgar.
 */
window.DUARTE_CATALOG = {
  demoMode: true,
  brands: {
    "iphone": "Apple / iPhone",
    "samsung": "Samsung Galaxy",
    "motorola": "Motorola",
    "xiaomi": "Xiaomi / Redmi",
    "realme": "Realme",
    "lg": "LG",
    "asus": "Asus Zenfone",
    "lenovo": "Lenovo"
  },
  services: [
    {
      "id": "screen",
      "label": "Troca de tela"
    },
    {
      "id": "battery",
      "label": "Troca de bateria"
    },
    {
      "id": "back-cover",
      "label": "Troca de tampa traseira"
    },
    {
      "id": "charging-port",
      "label": "Conector de carga"
    },
    {
      "id": "camera",
      "label": "Troca de câmera"
    },
    {
      "id": "cleaning",
      "label": "Limpeza interna"
    },
    {
      "id": "oxidation",
      "label": "Recuperação de oxidação"
    },
    {
      "id": "microsoldering",
      "label": "Micro solda / reparo em placa"
    },
    {
      "id": "diagnostics",
      "label": "Diagnóstico e reparos gerais"
    }
  ],
  models: [
    {
      "id": "iphone-iphone-11",
      "brand": "iphone",
      "name": "iPhone 11",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 550
        },
        "battery": {
          "min": 90,
          "max": 170
        },
        "back-cover": {
          "min": 180,
          "max": 280
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "iphone-iphone-11-pro",
      "brand": "iphone",
      "name": "iPhone 11 Pro",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 390,
          "max": 605
        },
        "battery": {
          "min": 80,
          "max": 150
        },
        "back-cover": {
          "min": 200,
          "max": 310
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 165,
          "max": 275
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 115,
          "max": 200
        },
        "microsoldering": {
          "min": 165,
          "max": 330
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "iphone-iphone-11-pro-max",
      "brand": "iphone",
      "name": "iPhone 11 Pro Max",
      "costs": {
        "battery": 60.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 405,
          "max": 635
        },
        "battery": {
          "min": 95,
          "max": 180
        },
        "back-cover": {
          "min": 210,
          "max": 325
        },
        "charging-port": {
          "min": 140,
          "max": 210
        },
        "camera": {
          "min": 175,
          "max": 290
        },
        "cleaning": {
          "min": 60,
          "max": 105
        },
        "oxidation": {
          "min": 115,
          "max": 210
        },
        "microsoldering": {
          "min": 175,
          "max": 345
        },
        "diagnostics": {
          "min": 50,
          "max": 95
        }
      }
    },
    {
      "id": "iphone-iphone-12",
      "brand": "iphone",
      "name": "iPhone 12",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 780
        },
        "battery": {
          "min": 100,
          "max": 180
        },
        "back-cover": {
          "min": 200,
          "max": 320
        },
        "charging-port": {
          "min": 130,
          "max": 200
        },
        "camera": {
          "min": 180,
          "max": 280
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 200
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "iphone-iphone-12-pro",
      "brand": "iphone",
      "name": "iPhone 12 Pro",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 500,
          "max": 860
        },
        "battery": {
          "min": 100,
          "max": 180
        },
        "back-cover": {
          "min": 225,
          "max": 355
        },
        "charging-port": {
          "min": 140,
          "max": 210
        },
        "camera": {
          "min": 200,
          "max": 310
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 135,
          "max": 225
        },
        "microsoldering": {
          "min": 200,
          "max": 390
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "iphone-iphone-12-pro-max",
      "brand": "iphone",
      "name": "iPhone 12 Pro Max",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 520,
          "max": 900
        },
        "battery": {
          "min": 100,
          "max": 180
        },
        "back-cover": {
          "min": 230,
          "max": 370
        },
        "charging-port": {
          "min": 140,
          "max": 210
        },
        "camera": {
          "min": 210,
          "max": 325
        },
        "cleaning": {
          "min": 60,
          "max": 105
        },
        "oxidation": {
          "min": 140,
          "max": 230
        },
        "microsoldering": {
          "min": 210,
          "max": 405
        },
        "diagnostics": {
          "min": 50,
          "max": 95
        }
      }
    },
    {
      "id": "iphone-iphone-13",
      "brand": "iphone",
      "name": "iPhone 13",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 600,
          "max": 950
        },
        "battery": {
          "min": 90,
          "max": 170
        },
        "back-cover": {
          "min": 250,
          "max": 380
        },
        "charging-port": {
          "min": 130,
          "max": 200
        },
        "camera": {
          "min": 220,
          "max": 350
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 150,
          "max": 250
        },
        "microsoldering": {
          "min": 200,
          "max": 400
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "iphone-iphone-13-mini",
      "brand": "iphone",
      "name": "iPhone 13 Mini",
      "costs": {
        "battery": 80.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 600,
          "max": 950
        },
        "battery": {
          "min": 115,
          "max": 160
        },
        "back-cover": {
          "min": 250,
          "max": 380
        },
        "charging-port": {
          "min": 180,
          "max": 280
        },
        "camera": {
          "min": 220,
          "max": 350
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 150,
          "max": 250
        },
        "microsoldering": {
          "min": 200,
          "max": 400
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "iphone-iphone-13-pro",
      "brand": "iphone",
      "name": "iPhone 13 Pro",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 660,
          "max": 1045
        },
        "battery": {
          "min": 90,
          "max": 170
        },
        "back-cover": {
          "min": 275,
          "max": 420
        },
        "charging-port": {
          "min": 140,
          "max": 210
        },
        "camera": {
          "min": 245,
          "max": 390
        },
        "cleaning": {
          "min": 70,
          "max": 115
        },
        "oxidation": {
          "min": 165,
          "max": 275
        },
        "microsoldering": {
          "min": 225,
          "max": 445
        },
        "diagnostics": {
          "min": 60,
          "max": 100
        }
      }
    },
    {
      "id": "iphone-iphone-13-pro-max",
      "brand": "iphone",
      "name": "iPhone 13 Pro Max",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 690,
          "max": 1095
        },
        "battery": {
          "min": 90,
          "max": 170
        },
        "back-cover": {
          "min": 290,
          "max": 440
        },
        "charging-port": {
          "min": 140,
          "max": 210
        },
        "camera": {
          "min": 255,
          "max": 405
        },
        "cleaning": {
          "min": 70,
          "max": 115
        },
        "oxidation": {
          "min": 175,
          "max": 290
        },
        "microsoldering": {
          "min": 230,
          "max": 460
        },
        "diagnostics": {
          "min": 60,
          "max": 105
        }
      }
    },
    {
      "id": "iphone-iphone-14",
      "brand": "iphone",
      "name": "iPhone 14",
      "costs": {
        "battery": 92.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 750,
          "max": 1200
        },
        "battery": {
          "min": 130,
          "max": 240
        },
        "back-cover": {
          "min": 280,
          "max": 420
        },
        "charging-port": {
          "min": 130,
          "max": 200
        },
        "camera": {
          "min": 250,
          "max": 400
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 160,
          "max": 280
        },
        "microsoldering": {
          "min": 220,
          "max": 450
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "iphone-iphone-14-pro",
      "brand": "iphone",
      "name": "iPhone 14 Pro",
      "costs": {
        "battery": 138.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 830,
          "max": 1320
        },
        "battery": {
          "min": 175,
          "max": 240
        },
        "back-cover": {
          "min": 310,
          "max": 465
        },
        "charging-port": {
          "min": 160,
          "max": 230
        },
        "camera": {
          "min": 275,
          "max": 445
        },
        "cleaning": {
          "min": 70,
          "max": 115
        },
        "oxidation": {
          "min": 180,
          "max": 310
        },
        "microsoldering": {
          "min": 245,
          "max": 500
        },
        "diagnostics": {
          "min": 60,
          "max": 115
        }
      }
    },
    {
      "id": "iphone-iphone-14-pro-max",
      "brand": "iphone",
      "name": "iPhone 14 Pro Max",
      "costs": {
        "battery": 105.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 865,
          "max": 1380
        },
        "battery": {
          "min": 140,
          "max": 260
        },
        "back-cover": {
          "min": 325,
          "max": 485
        },
        "charging-port": {
          "min": 140,
          "max": 210
        },
        "camera": {
          "min": 290,
          "max": 460
        },
        "cleaning": {
          "min": 70,
          "max": 115
        },
        "oxidation": {
          "min": 185,
          "max": 325
        },
        "microsoldering": {
          "min": 255,
          "max": 520
        },
        "diagnostics": {
          "min": 60,
          "max": 115
        }
      }
    },
    {
      "id": "iphone-iphone-15",
      "brand": "iphone",
      "name": "iPhone 15",
      "costs": {
        "battery": 100.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 950,
          "max": 1500
        },
        "battery": {
          "min": 135,
          "max": 250
        },
        "back-cover": {
          "min": 320,
          "max": 500
        },
        "charging-port": {
          "min": 140,
          "max": 210
        },
        "camera": {
          "min": 300,
          "max": 480
        },
        "cleaning": {
          "min": 70,
          "max": 110
        },
        "oxidation": {
          "min": 180,
          "max": 300
        },
        "microsoldering": {
          "min": 250,
          "max": 500
        },
        "diagnostics": {
          "min": 60,
          "max": 100
        }
      }
    },
    {
      "id": "iphone-iphone-15-pro",
      "brand": "iphone",
      "name": "iPhone 15 Pro",
      "costs": {
        "battery": 118.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 1045,
          "max": 1655
        },
        "battery": {
          "min": 155,
          "max": 280
        },
        "back-cover": {
          "min": 355,
          "max": 550
        },
        "charging-port": {
          "min": 275,
          "max": 420
        },
        "camera": {
          "min": 330,
          "max": 530
        },
        "cleaning": {
          "min": 80,
          "max": 125
        },
        "oxidation": {
          "min": 200,
          "max": 330
        },
        "microsoldering": {
          "min": 275,
          "max": 550
        },
        "diagnostics": {
          "min": 70,
          "max": 115
        }
      }
    },
    {
      "id": "iphone-iphone-15-pro-max",
      "brand": "iphone",
      "name": "iPhone 15 Pro Max",
      "costs": {
        "battery": 125.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 1095,
          "max": 1725
        },
        "battery": {
          "min": 160,
          "max": 290
        },
        "back-cover": {
          "min": 370,
          "max": 575
        },
        "charging-port": {
          "min": 160,
          "max": 230
        },
        "camera": {
          "min": 345,
          "max": 555
        },
        "cleaning": {
          "min": 85,
          "max": 130
        },
        "oxidation": {
          "min": 210,
          "max": 345
        },
        "microsoldering": {
          "min": 290,
          "max": 575
        },
        "diagnostics": {
          "min": 70,
          "max": 115
        }
      }
    },
    {
      "id": "iphone-iphone-16",
      "brand": "iphone",
      "name": "iPhone 16",
      "costs": {
        "battery": 125.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 1190,
          "max": 1875
        },
        "battery": {
          "min": 160,
          "max": 220
        },
        "back-cover": {
          "min": 400,
          "max": 625
        },
        "charging-port": {
          "min": 315,
          "max": 475
        },
        "camera": {
          "min": 375,
          "max": 600
        },
        "cleaning": {
          "min": 90,
          "max": 140
        },
        "oxidation": {
          "min": 225,
          "max": 375
        },
        "microsoldering": {
          "min": 315,
          "max": 625
        },
        "diagnostics": {
          "min": 75,
          "max": 125
        }
      }
    },
    {
      "id": "iphone-iphone-16-pro-max",
      "brand": "iphone",
      "name": "iPhone 16 Pro Max",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 1370,
          "max": 2160
        },
        "battery": {
          "min": 190,
          "max": 260
        },
        "back-cover": {
          "min": 460,
          "max": 720
        },
        "charging-port": {
          "min": 140,
          "max": 210
        },
        "camera": {
          "min": 435,
          "max": 690
        },
        "cleaning": {
          "min": 105,
          "max": 160
        },
        "oxidation": {
          "min": 260,
          "max": 435
        },
        "microsoldering": {
          "min": 360,
          "max": 720
        },
        "diagnostics": {
          "min": 90,
          "max": 145
        }
      }
    },
    {
      "id": "iphone-iphone-5",
      "brand": "iphone",
      "name": "iPhone 5",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 85,
          "max": 130
        },
        "camera": {
          "min": 100,
          "max": 165
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "iphone-iphone-5c",
      "brand": "iphone",
      "name": "iPhone 5C",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 85,
          "max": 130
        },
        "camera": {
          "min": 100,
          "max": 165
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "iphone-iphone-5s",
      "brand": "iphone",
      "name": "iPhone 5S",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 85,
          "max": 130
        },
        "camera": {
          "min": 100,
          "max": 165
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "iphone-iphone-5se",
      "brand": "iphone",
      "name": "iPhone 5SE",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 85,
          "max": 130
        },
        "camera": {
          "min": 100,
          "max": 165
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "iphone-iphone-6",
      "brand": "iphone",
      "name": "iPhone 6",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 85,
          "max": 130
        },
        "camera": {
          "min": 100,
          "max": 165
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "iphone-iphone-6-plus",
      "brand": "iphone",
      "name": "iPhone 6 Plus",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 60,
          "max": 100
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 85,
          "max": 130
        },
        "camera": {
          "min": 100,
          "max": 165
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "iphone-iphone-6s",
      "brand": "iphone",
      "name": "iPhone 6S",
      "costs": {
        "battery": 30.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 65,
          "max": 120
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 85,
          "max": 130
        },
        "camera": {
          "min": 100,
          "max": 165
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "iphone-iphone-6s-plus",
      "brand": "iphone",
      "name": "iPhone 6S Plus",
      "costs": {
        "battery": 30.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 65,
          "max": 120
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 85,
          "max": 130
        },
        "camera": {
          "min": 110,
          "max": 170
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "iphone-iphone-7",
      "brand": "iphone",
      "name": "iPhone 7",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 60,
          "max": 110
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 85,
          "max": 130
        },
        "camera": {
          "min": 100,
          "max": 165
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "iphone-iphone-7-plus",
      "brand": "iphone",
      "name": "iPhone 7 Plus",
      "costs": {
        "battery": 35.0
      },
      "est": [
        "screen",
        "back-cover",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 70,
          "max": 130
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 170
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "iphone-iphone-8",
      "brand": "iphone",
      "name": "iPhone 8",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 60,
          "max": 110
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 85,
          "max": 130
        },
        "camera": {
          "min": 100,
          "max": 165
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "iphone-iphone-8-plus",
      "brand": "iphone",
      "name": "iPhone 8 Plus",
      "costs": {
        "battery": 35.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 360
        },
        "battery": {
          "min": 70,
          "max": 130
        },
        "back-cover": {
          "min": 120,
          "max": 185
        },
        "charging-port": {
          "min": 85,
          "max": 130
        },
        "camera": {
          "min": 100,
          "max": 165
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 195
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a01",
      "brand": "samsung",
      "name": "Galaxy A01",
      "costs": {
        "battery": 40.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 75,
          "max": 130
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a01-core",
      "brand": "samsung",
      "name": "Galaxy A01 Core",
      "costs": {
        "battery": 60.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 95,
          "max": 130
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a02",
      "brand": "samsung",
      "name": "Galaxy A02",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a02s",
      "brand": "samsung",
      "name": "Galaxy A02S",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 80,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a03",
      "brand": "samsung",
      "name": "Galaxy A03",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 80,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a03-core",
      "brand": "samsung",
      "name": "Galaxy A03 Core",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 80,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a03s",
      "brand": "samsung",
      "name": "Galaxy A03S",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 80,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a04",
      "brand": "samsung",
      "name": "Galaxy A04",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 80,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a04-core",
      "brand": "samsung",
      "name": "Galaxy A04 Core",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a04e",
      "brand": "samsung",
      "name": "Galaxy A04E",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 80,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a04s",
      "brand": "samsung",
      "name": "Galaxy A04S",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a05",
      "brand": "samsung",
      "name": "Galaxy A05",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a05s",
      "brand": "samsung",
      "name": "Galaxy A05S",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a06",
      "brand": "samsung",
      "name": "Galaxy A06",
      "costs": {
        "battery": 60.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 95,
          "max": 130
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a06-4g",
      "brand": "samsung",
      "name": "Galaxy A06 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a06-5g",
      "brand": "samsung",
      "name": "Galaxy A06 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a07",
      "brand": "samsung",
      "name": "Galaxy A07",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a10",
      "brand": "samsung",
      "name": "Galaxy A10",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a10s",
      "brand": "samsung",
      "name": "Galaxy A10S",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a11",
      "brand": "samsung",
      "name": "Galaxy A11",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a12",
      "brand": "samsung",
      "name": "Galaxy A12",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a13-4g",
      "brand": "samsung",
      "name": "Galaxy A13 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a13-5g",
      "brand": "samsung",
      "name": "Galaxy A13 5G",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a14",
      "brand": "samsung",
      "name": "Galaxy A14",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 80,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a14-4g",
      "brand": "samsung",
      "name": "Galaxy A14 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a14-5g",
      "brand": "samsung",
      "name": "Galaxy A14 5G",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a15",
      "brand": "samsung",
      "name": "Galaxy A15",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 90,
          "max": 130
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a15-4g",
      "brand": "samsung",
      "name": "Galaxy A15 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a15-5g",
      "brand": "samsung",
      "name": "Galaxy A15 5G",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 80,
          "max": 110
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a16",
      "brand": "samsung",
      "name": "Galaxy A16",
      "costs": {
        "battery": 68.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a16-4g",
      "brand": "samsung",
      "name": "Galaxy A16 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a16-5g",
      "brand": "samsung",
      "name": "Galaxy A16 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a17-4g",
      "brand": "samsung",
      "name": "Galaxy A17 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a17-5g",
      "brand": "samsung",
      "name": "Galaxy A17 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a20",
      "brand": "samsung",
      "name": "Galaxy A20",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a20s",
      "brand": "samsung",
      "name": "Galaxy A20S",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a21",
      "brand": "samsung",
      "name": "Galaxy A21",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a21s",
      "brand": "samsung",
      "name": "Galaxy A21S",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a22",
      "brand": "samsung",
      "name": "Galaxy A22",
      "costs": {
        "battery": 50.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 85,
          "max": 130
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a22-4g",
      "brand": "samsung",
      "name": "Galaxy A22 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a22-5g",
      "brand": "samsung",
      "name": "Galaxy A22 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a23",
      "brand": "samsung",
      "name": "Galaxy A23",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a23-4g",
      "brand": "samsung",
      "name": "Galaxy A23 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a23-5g",
      "brand": "samsung",
      "name": "Galaxy A23 5G",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a24",
      "brand": "samsung",
      "name": "Galaxy A24",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a25-5g",
      "brand": "samsung",
      "name": "Galaxy A25 5G",
      "costs": {
        "battery": 72.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-a30",
      "brand": "samsung",
      "name": "Galaxy A30",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a30s",
      "brand": "samsung",
      "name": "Galaxy A30S",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a31",
      "brand": "samsung",
      "name": "Galaxy A31",
      "costs": {
        "battery": 50.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 85,
          "max": 130
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a31s",
      "brand": "samsung",
      "name": "Galaxy A31S",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a32",
      "brand": "samsung",
      "name": "Galaxy A32",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 120,
          "max": 200
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a32-4g",
      "brand": "samsung",
      "name": "Galaxy A32 4G",
      "costs": {
        "battery": 50.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 85,
          "max": 130
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a32-5g",
      "brand": "samsung",
      "name": "Galaxy A32 5G",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 80,
          "max": 110
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a33-4g",
      "brand": "samsung",
      "name": "Galaxy A33 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a33-5g",
      "brand": "samsung",
      "name": "Galaxy A33 5G",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "galaxy-a34",
      "brand": "samsung",
      "name": "Galaxy A34",
      "costs": {
        "battery": 72
      },
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 120,
          "max": 200
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ]
    },
    {
      "id": "samsung-galaxy-a34-4g",
      "brand": "samsung",
      "name": "Galaxy A34 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a34-5g",
      "brand": "samsung",
      "name": "Galaxy A34 5G",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a35",
      "brand": "samsung",
      "name": "Galaxy A35",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 120,
          "max": 200
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a35-5g",
      "brand": "samsung",
      "name": "Galaxy A35 5G",
      "costs": {
        "battery": 68.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a42",
      "brand": "samsung",
      "name": "Galaxy A42",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 80,
          "max": 110
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 120,
          "max": 200
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-a5",
      "brand": "samsung",
      "name": "Galaxy A5",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a5-2017",
      "brand": "samsung",
      "name": "Galaxy A5 2017",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a50",
      "brand": "samsung",
      "name": "Galaxy A50",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-a50s",
      "brand": "samsung",
      "name": "Galaxy A50S",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-a51",
      "brand": "samsung",
      "name": "Galaxy A51",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 440,
          "max": 710
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-a510",
      "brand": "samsung",
      "name": "Galaxy A510",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 530,
          "max": 905
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 155,
          "max": 245
        },
        "charging-port": {
          "min": 145,
          "max": 245
        },
        "camera": {
          "min": 165,
          "max": 275
        },
        "cleaning": {
          "min": 60,
          "max": 90
        },
        "oxidation": {
          "min": 125,
          "max": 210
        },
        "microsoldering": {
          "min": 165,
          "max": 330
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-a52",
      "brand": "samsung",
      "name": "Galaxy A52",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-a52s",
      "brand": "samsung",
      "name": "Galaxy A52S",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-a53",
      "brand": "samsung",
      "name": "Galaxy A53",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-a53-5g",
      "brand": "samsung",
      "name": "Galaxy A53 5G",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 130,
          "max": 220
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "galaxy-a54",
      "brand": "samsung",
      "name": "Galaxy A54",
      "costs": {
        "battery": 72
      },
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 130,
          "max": 220
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ]
    },
    {
      "id": "samsung-galaxy-a54-5g",
      "brand": "samsung",
      "name": "Galaxy A54 5G",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-a55",
      "brand": "samsung",
      "name": "Galaxy A55",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 130,
          "max": 220
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-a55-5g",
      "brand": "samsung",
      "name": "Galaxy A55 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-a56",
      "brand": "samsung",
      "name": "Galaxy A56",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-a7",
      "brand": "samsung",
      "name": "Galaxy A7",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a70",
      "brand": "samsung",
      "name": "Galaxy A70",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 870
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 155,
          "max": 245
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 165,
          "max": 275
        },
        "cleaning": {
          "min": 60,
          "max": 90
        },
        "oxidation": {
          "min": 125,
          "max": 210
        },
        "microsoldering": {
          "min": 165,
          "max": 330
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-a71",
      "brand": "samsung",
      "name": "Galaxy A71",
      "costs": {
        "battery": 57.0
      },
      "est": [
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 720
        },
        "battery": {
          "min": 95,
          "max": 130
        },
        "back-cover": {
          "min": 155,
          "max": 245
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 165,
          "max": 275
        },
        "cleaning": {
          "min": 60,
          "max": 90
        },
        "oxidation": {
          "min": 125,
          "max": 210
        },
        "microsoldering": {
          "min": 165,
          "max": 330
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-a710",
      "brand": "samsung",
      "name": "Galaxy A710",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 530,
          "max": 905
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 155,
          "max": 245
        },
        "charging-port": {
          "min": 145,
          "max": 245
        },
        "camera": {
          "min": 165,
          "max": 275
        },
        "cleaning": {
          "min": 60,
          "max": 90
        },
        "oxidation": {
          "min": 125,
          "max": 210
        },
        "microsoldering": {
          "min": 165,
          "max": 330
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-a72",
      "brand": "samsung",
      "name": "Galaxy A72",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 510,
          "max": 820
        },
        "battery": {
          "min": 80,
          "max": 110
        },
        "back-cover": {
          "min": 155,
          "max": 245
        },
        "charging-port": {
          "min": 140,
          "max": 210
        },
        "camera": {
          "min": 165,
          "max": 275
        },
        "cleaning": {
          "min": 60,
          "max": 90
        },
        "oxidation": {
          "min": 125,
          "max": 210
        },
        "microsoldering": {
          "min": 165,
          "max": 330
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-a720",
      "brand": "samsung",
      "name": "Galaxy A720",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 530,
          "max": 905
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 155,
          "max": 245
        },
        "charging-port": {
          "min": 145,
          "max": 245
        },
        "camera": {
          "min": 165,
          "max": 275
        },
        "cleaning": {
          "min": 60,
          "max": 90
        },
        "oxidation": {
          "min": 125,
          "max": 210
        },
        "microsoldering": {
          "min": 165,
          "max": 330
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-a73",
      "brand": "samsung",
      "name": "Galaxy A73",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 530,
          "max": 905
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 155,
          "max": 245
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 165,
          "max": 275
        },
        "cleaning": {
          "min": 60,
          "max": 90
        },
        "oxidation": {
          "min": 125,
          "max": 210
        },
        "microsoldering": {
          "min": 165,
          "max": 330
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-a730",
      "brand": "samsung",
      "name": "Galaxy A730",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 530,
          "max": 905
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 155,
          "max": 245
        },
        "charging-port": {
          "min": 145,
          "max": 245
        },
        "camera": {
          "min": 165,
          "max": 275
        },
        "cleaning": {
          "min": 60,
          "max": 90
        },
        "oxidation": {
          "min": 125,
          "max": 210
        },
        "microsoldering": {
          "min": 165,
          "max": 330
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-a750",
      "brand": "samsung",
      "name": "Galaxy A750",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 530,
          "max": 905
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 155,
          "max": 245
        },
        "charging-port": {
          "min": 145,
          "max": 245
        },
        "camera": {
          "min": 165,
          "max": 275
        },
        "cleaning": {
          "min": 60,
          "max": 90
        },
        "oxidation": {
          "min": 125,
          "max": 210
        },
        "microsoldering": {
          "min": 165,
          "max": 330
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-a8",
      "brand": "samsung",
      "name": "Galaxy A8+",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 360
        },
        "battery": {
          "min": 55,
          "max": 90
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "samsung-galaxy-a80",
      "brand": "samsung",
      "name": "Galaxy A80",
      "costs": {
        "battery": 30.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 530,
          "max": 905
        },
        "battery": {
          "min": 65,
          "max": 90
        },
        "back-cover": {
          "min": 155,
          "max": 245
        },
        "charging-port": {
          "min": 145,
          "max": 245
        },
        "camera": {
          "min": 165,
          "max": 275
        },
        "cleaning": {
          "min": 60,
          "max": 90
        },
        "oxidation": {
          "min": 125,
          "max": 210
        },
        "microsoldering": {
          "min": 165,
          "max": 330
        },
        "diagnostics": {
          "min": 45,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-j1",
      "brand": "samsung",
      "name": "Galaxy J1",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j1-2016",
      "brand": "samsung",
      "name": "Galaxy J1 2016",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j1-ace",
      "brand": "samsung",
      "name": "Galaxy J1 Ace",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j100",
      "brand": "samsung",
      "name": "Galaxy J100",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j105",
      "brand": "samsung",
      "name": "Galaxy J105",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j110",
      "brand": "samsung",
      "name": "Galaxy J110",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j120",
      "brand": "samsung",
      "name": "Galaxy J120",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j2",
      "brand": "samsung",
      "name": "Galaxy J2",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j200",
      "brand": "samsung",
      "name": "Galaxy J200",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j250",
      "brand": "samsung",
      "name": "Galaxy J250",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 90
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j260",
      "brand": "samsung",
      "name": "Galaxy J260",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 90
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j320",
      "brand": "samsung",
      "name": "Galaxy J320",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 90
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j4",
      "brand": "samsung",
      "name": "Galaxy J4",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 90
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j4-plus",
      "brand": "samsung",
      "name": "Galaxy J4 Plus",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j5-metal",
      "brand": "samsung",
      "name": "Galaxy J5 Metal",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j5-prime",
      "brand": "samsung",
      "name": "Galaxy J5 Prime",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j5-pro",
      "brand": "samsung",
      "name": "Galaxy J5 Pro",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j500",
      "brand": "samsung",
      "name": "Galaxy J500",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 90
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j510",
      "brand": "samsung",
      "name": "Galaxy J510",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j530",
      "brand": "samsung",
      "name": "Galaxy J530",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j6",
      "brand": "samsung",
      "name": "Galaxy J6",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j6-plus",
      "brand": "samsung",
      "name": "Galaxy J6 Plus",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j7",
      "brand": "samsung",
      "name": "Galaxy J7",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 90
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j7-metal",
      "brand": "samsung",
      "name": "Galaxy J7 Metal",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j7-neo",
      "brand": "samsung",
      "name": "Galaxy J7 Neo",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 50,
          "max": 90
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j7-prime",
      "brand": "samsung",
      "name": "Galaxy J7 Prime",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j7-pro",
      "brand": "samsung",
      "name": "Galaxy J7 Pro",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j710",
      "brand": "samsung",
      "name": "Galaxy J710",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j730",
      "brand": "samsung",
      "name": "Galaxy J730",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j8",
      "brand": "samsung",
      "name": "Galaxy J8+",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j800",
      "brand": "samsung",
      "name": "Galaxy J800",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-j810",
      "brand": "samsung",
      "name": "Galaxy J810",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 185,
          "max": 340
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "samsung-galaxy-m10",
      "brand": "samsung",
      "name": "Galaxy M10",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-m12",
      "brand": "samsung",
      "name": "Galaxy M12",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-m13",
      "brand": "samsung",
      "name": "Galaxy M13",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-m14-5g",
      "brand": "samsung",
      "name": "Galaxy M14 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-m20",
      "brand": "samsung",
      "name": "Galaxy M20",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-m21",
      "brand": "samsung",
      "name": "Galaxy M21",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-m22",
      "brand": "samsung",
      "name": "Galaxy M22",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-m23",
      "brand": "samsung",
      "name": "Galaxy M23",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 230,
          "max": 420
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "samsung-galaxy-m30",
      "brand": "samsung",
      "name": "Galaxy M30",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-m30s",
      "brand": "samsung",
      "name": "Galaxy M30S",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-m31",
      "brand": "samsung",
      "name": "Galaxy M31",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-m31s",
      "brand": "samsung",
      "name": "Galaxy M31S",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-m32",
      "brand": "samsung",
      "name": "Galaxy M32",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-m33",
      "brand": "samsung",
      "name": "Galaxy M33",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 120,
          "max": 200
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-m34-5g",
      "brand": "samsung",
      "name": "Galaxy M34 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 380,
          "max": 680
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 200
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "samsung-galaxy-m52",
      "brand": "samsung",
      "name": "Galaxy M52",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-m53",
      "brand": "samsung",
      "name": "Galaxy M53",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 130,
          "max": 220
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-m53-5g",
      "brand": "samsung",
      "name": "Galaxy M53 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-m54-5g",
      "brand": "samsung",
      "name": "Galaxy M54 5G",
      "costs": {
        "battery": 68.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 130,
          "max": 220
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-m62",
      "brand": "samsung",
      "name": "Galaxy M62",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 480,
          "max": 820
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 140,
          "max": 220
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 150,
          "max": 250
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 110,
          "max": 190
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "samsung-galaxy-s20-fe",
      "brand": "samsung",
      "name": "Galaxy S20 FE",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 250
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s20-fe-4g",
      "brand": "samsung",
      "name": "Galaxy S20 FE 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s20-fe-5g",
      "brand": "samsung",
      "name": "Galaxy S20 FE 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s20-ultra",
      "brand": "samsung",
      "name": "Galaxy S20 Ultra",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 815,
          "max": 1440
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 190,
          "max": 315
        },
        "charging-port": {
          "min": 190,
          "max": 315
        },
        "camera": {
          "min": 225,
          "max": 375
        },
        "cleaning": {
          "min": 65,
          "max": 115
        },
        "oxidation": {
          "min": 150,
          "max": 275
        },
        "microsoldering": {
          "min": 225,
          "max": 440
        },
        "diagnostics": {
          "min": 65,
          "max": 115
        }
      }
    },
    {
      "id": "samsung-galaxy-s21-fe",
      "brand": "samsung",
      "name": "Galaxy S21 FE",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 250
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s22",
      "brand": "samsung",
      "name": "Galaxy S22",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 750,
          "max": 1350
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 180,
          "max": 280
        },
        "charging-port": {
          "min": 170,
          "max": 270
        },
        "camera": {
          "min": 200,
          "max": 330
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 130,
          "max": 230
        },
        "microsoldering": {
          "min": 200,
          "max": 380
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s22-ultra",
      "brand": "samsung",
      "name": "Galaxy S22 Ultra",
      "costs": {
        "battery": 75.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 940,
          "max": 1690
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 225,
          "max": 350
        },
        "charging-port": {
          "min": 215,
          "max": 340
        },
        "camera": {
          "min": 250,
          "max": 415
        },
        "cleaning": {
          "min": 65,
          "max": 115
        },
        "oxidation": {
          "min": 165,
          "max": 290
        },
        "microsoldering": {
          "min": 250,
          "max": 475
        },
        "diagnostics": {
          "min": 65,
          "max": 115
        }
      }
    },
    {
      "id": "samsung-galaxy-s23",
      "brand": "samsung",
      "name": "Galaxy S23",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 850,
          "max": 1500
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 200,
          "max": 320
        },
        "charging-port": {
          "min": 180,
          "max": 300
        },
        "camera": {
          "min": 220,
          "max": 380
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 150,
          "max": 250
        },
        "microsoldering": {
          "min": 220,
          "max": 420
        },
        "diagnostics": {
          "min": 60,
          "max": 100
        }
      }
    },
    {
      "id": "samsung-galaxy-s4",
      "brand": "samsung",
      "name": "Galaxy S4",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 250
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s5",
      "brand": "samsung",
      "name": "Galaxy S5",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 250
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s5-mini",
      "brand": "samsung",
      "name": "Galaxy S5 Mini",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 250
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s6",
      "brand": "samsung",
      "name": "Galaxy S6",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 250
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s6-edge",
      "brand": "samsung",
      "name": "Galaxy S6 Edge",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 250
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s7",
      "brand": "samsung",
      "name": "Galaxy S7",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 250
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s7-edge",
      "brand": "samsung",
      "name": "Galaxy S7 Edge",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 250
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s8",
      "brand": "samsung",
      "name": "Galaxy S8+",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 250
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "samsung-galaxy-s9",
      "brand": "samsung",
      "name": "Galaxy S9+",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 650,
          "max": 1150
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 250
        },
        "camera": {
          "min": 180,
          "max": 300
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 350
        },
        "diagnostics": {
          "min": 50,
          "max": 90
        }
      }
    },
    {
      "id": "motorola-edge-20-lite",
      "brand": "motorola",
      "name": "Edge 20 Lite",
      "costs": {
        "battery": 75.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 550,
          "max": 950
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 240
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 200
        },
        "microsoldering": {
          "min": 160,
          "max": 320
        },
        "diagnostics": {
          "min": 50,
          "max": 80
        }
      }
    },
    {
      "id": "motorola-edge-20-pro",
      "brand": "motorola",
      "name": "Edge 20 Pro",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 550,
          "max": 950
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 240
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 200
        },
        "microsoldering": {
          "min": 160,
          "max": 320
        },
        "diagnostics": {
          "min": 50,
          "max": 80
        }
      }
    },
    {
      "id": "motorola-edge-30",
      "brand": "motorola",
      "name": "Edge 30",
      "costs": {
        "battery": 62.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 550,
          "max": 950
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 240
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 200
        },
        "microsoldering": {
          "min": 160,
          "max": 320
        },
        "diagnostics": {
          "min": 50,
          "max": 80
        }
      }
    },
    {
      "id": "motorola-edge-40",
      "brand": "motorola",
      "name": "Edge 40",
      "costs": {
        "battery": 62
      },
      "prices": {
        "screen": {
          "min": 550,
          "max": 950
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 150,
          "max": 250
        },
        "charging-port": {
          "min": 150,
          "max": 240
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 50,
          "max": 90
        },
        "oxidation": {
          "min": 120,
          "max": 200
        },
        "microsoldering": {
          "min": 160,
          "max": 320
        },
        "diagnostics": {
          "min": 50,
          "max": 80
        }
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ]
    },
    {
      "id": "motorola-moto-e1",
      "brand": "motorola",
      "name": "Moto E1",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e13",
      "brand": "motorola",
      "name": "Moto E13",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 60,
          "max": 110
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e14",
      "brand": "motorola",
      "name": "Moto E14",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 80,
          "max": 115
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e15",
      "brand": "motorola",
      "name": "Moto E15",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 80,
          "max": 115
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e2",
      "brand": "motorola",
      "name": "Moto E2",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 50,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e20",
      "brand": "motorola",
      "name": "Moto E20",
      "costs": {
        "battery": 40.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 75,
          "max": 130
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e22",
      "brand": "motorola",
      "name": "Moto E22",
      "costs": {
        "battery": 62.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e3-power",
      "brand": "motorola",
      "name": "Moto E3 Power",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e32",
      "brand": "motorola",
      "name": "Moto E32",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 60,
          "max": 110
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e32s",
      "brand": "motorola",
      "name": "Moto E32S",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e4",
      "brand": "motorola",
      "name": "Moto E4",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 60,
          "max": 110
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e4-plus",
      "brand": "motorola",
      "name": "Moto E4 Plus",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 60,
          "max": 110
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e40",
      "brand": "motorola",
      "name": "Moto E40",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e5",
      "brand": "motorola",
      "name": "Moto E5",
      "costs": {
        "battery": 40.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 75,
          "max": 130
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e5-play",
      "brand": "motorola",
      "name": "Moto E5 Play",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e5-plus",
      "brand": "motorola",
      "name": "Moto E5 Plus",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 60,
          "max": 110
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e6-play",
      "brand": "motorola",
      "name": "Moto E6 Play",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e6-plus",
      "brand": "motorola",
      "name": "Moto E6 Plus",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e6i",
      "brand": "motorola",
      "name": "Moto E6I",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e6s",
      "brand": "motorola",
      "name": "Moto E6S",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e7",
      "brand": "motorola",
      "name": "Moto E7",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e7-plus",
      "brand": "motorola",
      "name": "Moto E7 Plus",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-e7-power",
      "brand": "motorola",
      "name": "Moto E7 Power",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 80,
          "max": 140
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-g-5g",
      "brand": "motorola",
      "name": "Moto G 5G",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g-5g-plus",
      "brand": "motorola",
      "name": "Moto G 5G Plus",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g04",
      "brand": "motorola",
      "name": "Moto G04",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g04s",
      "brand": "motorola",
      "name": "Moto G04S",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g05",
      "brand": "motorola",
      "name": "Moto G05",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g1",
      "brand": "motorola",
      "name": "Moto G1",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g1-prime",
      "brand": "motorola",
      "name": "Moto G1 Prime",
      "costs": {
        "battery": 35.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 70,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g10",
      "brand": "motorola",
      "name": "Moto G10",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g13",
      "brand": "motorola",
      "name": "Moto G13",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g14",
      "brand": "motorola",
      "name": "Moto G14",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g15",
      "brand": "motorola",
      "name": "Moto G15",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g2",
      "brand": "motorola",
      "name": "Moto G2",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g20",
      "brand": "motorola",
      "name": "Moto G20",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g200",
      "brand": "motorola",
      "name": "Moto G200",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g200-5g",
      "brand": "motorola",
      "name": "Moto G200 5G",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g22",
      "brand": "motorola",
      "name": "Moto G22",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 60,
          "max": 110
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g23",
      "brand": "motorola",
      "name": "Moto G23",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g24",
      "brand": "motorola",
      "name": "Moto G24",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g3",
      "brand": "motorola",
      "name": "Moto G3",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g30",
      "brand": "motorola",
      "name": "Moto G30",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g31",
      "brand": "motorola",
      "name": "Moto G31",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 80,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g32",
      "brand": "motorola",
      "name": "Moto G32",
      "costs": {
        "battery": 35.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 70,
          "max": 130
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g34",
      "brand": "motorola",
      "name": "Moto G34",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g4",
      "brand": "motorola",
      "name": "Moto G4",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 50,
          "max": 90
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g4-play",
      "brand": "motorola",
      "name": "Moto G4 Play",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 60,
          "max": 110
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g4-plus",
      "brand": "motorola",
      "name": "Moto G4 Plus",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 50,
          "max": 90
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g41",
      "brand": "motorola",
      "name": "Moto G41",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 80,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g42",
      "brand": "motorola",
      "name": "Moto G42",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 80,
          "max": 110
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g5",
      "brand": "motorola",
      "name": "Moto G5",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 60,
          "max": 110
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g5-plus",
      "brand": "motorola",
      "name": "Moto G5 Plus",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g50",
      "brand": "motorola",
      "name": "Moto G50",
      "costs": {
        "battery": 69.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g50-4g",
      "brand": "motorola",
      "name": "Moto G50 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g50-5g",
      "brand": "motorola",
      "name": "Moto G50 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g51",
      "brand": "motorola",
      "name": "Moto G51",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g51-5g",
      "brand": "motorola",
      "name": "Moto G51 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g52",
      "brand": "motorola",
      "name": "Moto G52",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g52-5g",
      "brand": "motorola",
      "name": "Moto G52 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g53",
      "brand": "motorola",
      "name": "Moto G53",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 80,
          "max": 150
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g53-prime",
      "brand": "motorola",
      "name": "Moto G53 Prime",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g54",
      "brand": "motorola",
      "name": "Moto G54",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g56",
      "brand": "motorola",
      "name": "Moto G56",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 250,
          "max": 480
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 90,
          "max": 150
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 100,
          "max": 180
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 80,
          "max": 150
        },
        "microsoldering": {
          "min": 120,
          "max": 250
        },
        "diagnostics": {
          "min": 30,
          "max": 60
        }
      }
    },
    {
      "id": "motorola-moto-g5s",
      "brand": "motorola",
      "name": "Moto G5S",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g5s-plus",
      "brand": "motorola",
      "name": "Moto G5S Plus",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g6",
      "brand": "motorola",
      "name": "Moto G6",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g6-play",
      "brand": "motorola",
      "name": "Moto G6 Play",
      "costs": {
        "battery": 40.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 75,
          "max": 130
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g6-plus",
      "brand": "motorola",
      "name": "Moto G6 Plus",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g60",
      "brand": "motorola",
      "name": "Moto G60",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g60s",
      "brand": "motorola",
      "name": "Moto G60S",
      "costs": {
        "battery": 40.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 75,
          "max": 110
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g62",
      "brand": "motorola",
      "name": "Moto G62",
      "costs": {
        "battery": 45.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 80,
          "max": 110
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g7",
      "brand": "motorola",
      "name": "Moto G7",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g7-play",
      "brand": "motorola",
      "name": "Moto G7 Play",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g7-plus",
      "brand": "motorola",
      "name": "Moto G7 Plus",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g7-power",
      "brand": "motorola",
      "name": "Moto G7 Power",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g71",
      "brand": "motorola",
      "name": "Moto G71",
      "costs": {
        "battery": 40.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 75,
          "max": 110
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g72-4g",
      "brand": "motorola",
      "name": "Moto G72 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g73",
      "brand": "motorola",
      "name": "Moto G73",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g73-5g",
      "brand": "motorola",
      "name": "Moto G73 5G",
      "costs": {
        "battery": 68.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g8",
      "brand": "motorola",
      "name": "Moto G8",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g8-play",
      "brand": "motorola",
      "name": "Moto G8 Play",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g8-plus",
      "brand": "motorola",
      "name": "Moto G8 Plus",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 60,
          "max": 110
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g8-power",
      "brand": "motorola",
      "name": "Moto G8 Power",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g8-power-lite",
      "brand": "motorola",
      "name": "Moto G8 Power Lite",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g82",
      "brand": "motorola",
      "name": "Moto G82",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g84",
      "brand": "motorola",
      "name": "Moto G84",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g85",
      "brand": "motorola",
      "name": "Moto G85",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 110,
          "max": 180
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 120,
          "max": 200
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 270
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "motorola-moto-g9-play",
      "brand": "motorola",
      "name": "Moto G9 Play",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g9-plus",
      "brand": "motorola",
      "name": "Moto G9 Plus",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-g9-power",
      "brand": "motorola",
      "name": "Moto G9 Power",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "motorola-moto-x2",
      "brand": "motorola",
      "name": "Moto X2",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-x4",
      "brand": "motorola",
      "name": "Moto X4",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-z2-force",
      "brand": "motorola",
      "name": "Moto Z2 Force",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-z2-play",
      "brand": "motorola",
      "name": "Moto Z2 Play",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "motorola-moto-z3-play",
      "brand": "motorola",
      "name": "Moto Z3 Play",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 200,
          "max": 385
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 75,
          "max": 120
        },
        "charging-port": {
          "min": 80,
          "max": 140
        },
        "camera": {
          "min": 80,
          "max": 145
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 65,
          "max": 120
        },
        "microsoldering": {
          "min": 100,
          "max": 200
        },
        "diagnostics": {
          "min": 25,
          "max": 50
        }
      }
    },
    {
      "id": "xiaomi-mi-10a",
      "brand": "xiaomi",
      "name": "Mi 10A",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 145,
          "max": 205
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-11-lite",
      "brand": "xiaomi",
      "name": "Mi 11 Lite",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-11t",
      "brand": "xiaomi",
      "name": "Mi 11T",
      "costs": {
        "battery": 75.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 160,
          "max": 255
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-11t-pro",
      "brand": "xiaomi",
      "name": "Mi 11T Pro",
      "costs": {
        "battery": 115.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 150,
          "max": 210
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 160,
          "max": 255
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-12",
      "brand": "xiaomi",
      "name": "Mi 12",
      "costs": {
        "battery": 85.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 160,
          "max": 255
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-12-lite",
      "brand": "xiaomi",
      "name": "Mi 12 Lite",
      "costs": {
        "battery": 75.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 160,
          "max": 255
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-7a",
      "brand": "xiaomi",
      "name": "Mi 7A",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 145,
          "max": 205
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-8",
      "brand": "xiaomi",
      "name": "Mi 8",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 160,
          "max": 255
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-8-lite",
      "brand": "xiaomi",
      "name": "Mi 8 Lite",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-8-pro",
      "brand": "xiaomi",
      "name": "Mi 8 Pro",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 160,
          "max": 255
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-9-lite",
      "brand": "xiaomi",
      "name": "Mi 9 Lite",
      "costs": {
        "battery": 62.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 160,
          "max": 255
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-9t",
      "brand": "xiaomi",
      "name": "Mi 9T",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 145,
          "max": 205
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-9t-pro",
      "brand": "xiaomi",
      "name": "Mi 9T Pro",
      "costs": {
        "battery": 60.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 540,
          "max": 1020
        },
        "battery": {
          "min": 95,
          "max": 130
        },
        "back-cover": {
          "min": 160,
          "max": 255
        },
        "charging-port": {
          "min": 160,
          "max": 255
        },
        "camera": {
          "min": 170,
          "max": 280
        },
        "cleaning": {
          "min": 60,
          "max": 100
        },
        "oxidation": {
          "min": 120,
          "max": 220
        },
        "microsoldering": {
          "min": 180,
          "max": 360
        },
        "diagnostics": {
          "min": 50,
          "max": 100
        }
      }
    },
    {
      "id": "xiaomi-mi-a3",
      "brand": "xiaomi",
      "name": "Mi A3",
      "costs": {
        "battery": 62.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 280,
          "max": 520
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 140
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 90,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 75,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 210
        },
        "diagnostics": {
          "min": 35,
          "max": 60
        }
      }
    },
    {
      "id": "xiaomi-mi-note-10",
      "brand": "xiaomi",
      "name": "Mi Note 10",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-mi-note-10-lite",
      "brand": "xiaomi",
      "name": "Mi Note 10 Lite",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-mi-note-10-pro",
      "brand": "xiaomi",
      "name": "Mi Note 10 Pro",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-mi-note-3",
      "brand": "xiaomi",
      "name": "Mi Note 3",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 90,
          "max": 130
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-poco-c55",
      "brand": "xiaomi",
      "name": "Poco C55",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 90,
          "max": 130
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 130,
          "max": 210
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-c65",
      "brand": "xiaomi",
      "name": "Poco C65",
      "costs": {
        "battery": 60.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 95,
          "max": 130
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-c75",
      "brand": "xiaomi",
      "name": "Poco C75",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 130,
          "max": 210
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-f3",
      "brand": "xiaomi",
      "name": "Poco F3",
      "costs": {
        "battery": 72.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-f4",
      "brand": "xiaomi",
      "name": "Poco F4",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-f5-5g",
      "brand": "xiaomi",
      "name": "Poco F5 5G",
      "costs": {
        "battery": 85.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 130,
          "max": 210
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-m3",
      "brand": "xiaomi",
      "name": "Poco M3",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-m4-pro",
      "brand": "xiaomi",
      "name": "Poco M4 Pro",
      "costs": {
        "battery": 72.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 130,
          "max": 210
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-m4-pro-5g",
      "brand": "xiaomi",
      "name": "Poco M4 Pro 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-x3",
      "brand": "xiaomi",
      "name": "Poco X3",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-x3-gt",
      "brand": "xiaomi",
      "name": "Poco X3 GT",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 90,
          "max": 130
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 130,
          "max": 210
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-x4",
      "brand": "xiaomi",
      "name": "Poco X4",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-x4-pro",
      "brand": "xiaomi",
      "name": "Poco X4 Pro",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-x4-pro-5g",
      "brand": "xiaomi",
      "name": "Poco X4 Pro 5G",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 90,
          "max": 130
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 130,
          "max": 210
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-x5",
      "brand": "xiaomi",
      "name": "Poco X5",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-x5-pro-4g",
      "brand": "xiaomi",
      "name": "Poco X5 Pro 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-poco-x5-pro-5g",
      "brand": "xiaomi",
      "name": "Poco X5 Pro 5G",
      "costs": {
        "battery": 85.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-pocophone-f1",
      "brand": "xiaomi",
      "name": "Pocophone F1",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 450,
          "max": 850
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 130,
          "max": 210
        },
        "charging-port": {
          "min": 130,
          "max": 210
        },
        "camera": {
          "min": 140,
          "max": 230
        },
        "cleaning": {
          "min": 50,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 180
        },
        "microsoldering": {
          "min": 150,
          "max": 300
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-redmi-10",
      "brand": "xiaomi",
      "name": "Redmi 10",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 280,
          "max": 520
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 80,
          "max": 140
        },
        "charging-port": {
          "min": 90,
          "max": 145
        },
        "camera": {
          "min": 90,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 75,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 210
        },
        "diagnostics": {
          "min": 35,
          "max": 60
        }
      }
    },
    {
      "id": "xiaomi-redmi-12c",
      "brand": "xiaomi",
      "name": "Redmi 12C",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 280,
          "max": 520
        },
        "battery": {
          "min": 90,
          "max": 130
        },
        "back-cover": {
          "min": 80,
          "max": 140
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 90,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 75,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 210
        },
        "diagnostics": {
          "min": 35,
          "max": 60
        }
      }
    },
    {
      "id": "xiaomi-redmi-13c",
      "brand": "xiaomi",
      "name": "Redmi 13C",
      "costs": {
        "battery": 60.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 340,
          "max": 600
        },
        "battery": {
          "min": 95,
          "max": 130
        },
        "back-cover": {
          "min": 100,
          "max": 155
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 105,
          "max": 180
        },
        "cleaning": {
          "min": 35,
          "max": 65
        },
        "oxidation": {
          "min": 80,
          "max": 140
        },
        "microsoldering": {
          "min": 115,
          "max": 225
        },
        "diagnostics": {
          "min": 35,
          "max": 65
        }
      }
    },
    {
      "id": "xiaomi-redmi-14c",
      "brand": "xiaomi",
      "name": "Redmi 14C",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 340,
          "max": 600
        },
        "battery": {
          "min": 90,
          "max": 150
        },
        "back-cover": {
          "min": 100,
          "max": 155
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 105,
          "max": 180
        },
        "cleaning": {
          "min": 35,
          "max": 65
        },
        "oxidation": {
          "min": 80,
          "max": 140
        },
        "microsoldering": {
          "min": 115,
          "max": 225
        },
        "diagnostics": {
          "min": 35,
          "max": 65
        }
      }
    },
    {
      "id": "xiaomi-redmi-15c",
      "brand": "xiaomi",
      "name": "Redmi 15C",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 340,
          "max": 600
        },
        "battery": {
          "min": 90,
          "max": 120
        },
        "back-cover": {
          "min": 100,
          "max": 155
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 105,
          "max": 180
        },
        "cleaning": {
          "min": 35,
          "max": 65
        },
        "oxidation": {
          "min": 80,
          "max": 140
        },
        "microsoldering": {
          "min": 115,
          "max": 225
        },
        "diagnostics": {
          "min": 35,
          "max": 65
        }
      }
    },
    {
      "id": "xiaomi-redmi-8",
      "brand": "xiaomi",
      "name": "Redmi 8",
      "costs": {
        "battery": 67.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 280,
          "max": 520
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 80,
          "max": 140
        },
        "charging-port": {
          "min": 90,
          "max": 145
        },
        "camera": {
          "min": 90,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 75,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 210
        },
        "diagnostics": {
          "min": 35,
          "max": 60
        }
      }
    },
    {
      "id": "xiaomi-redmi-8a",
      "brand": "xiaomi",
      "name": "Redmi 8A",
      "costs": {
        "battery": 67.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 280,
          "max": 520
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 80,
          "max": 140
        },
        "charging-port": {
          "min": 90,
          "max": 145
        },
        "camera": {
          "min": 90,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 75,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 210
        },
        "diagnostics": {
          "min": 35,
          "max": 60
        }
      }
    },
    {
      "id": "xiaomi-redmi-9",
      "brand": "xiaomi",
      "name": "Redmi 9",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 280,
          "max": 520
        },
        "battery": {
          "min": 100,
          "max": 150
        },
        "back-cover": {
          "min": 80,
          "max": 140
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 90,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 75,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 210
        },
        "diagnostics": {
          "min": 35,
          "max": 60
        }
      }
    },
    {
      "id": "xiaomi-redmi-9-lite",
      "brand": "xiaomi",
      "name": "Redmi 9 Lite",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 280,
          "max": 520
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 140
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 90,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 75,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 210
        },
        "diagnostics": {
          "min": 35,
          "max": 60
        }
      }
    },
    {
      "id": "xiaomi-redmi-9a",
      "brand": "xiaomi",
      "name": "Redmi 9A",
      "costs": {
        "battery": 68.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 280,
          "max": 520
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 80,
          "max": 140
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 90,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 75,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 210
        },
        "diagnostics": {
          "min": 35,
          "max": 60
        }
      }
    },
    {
      "id": "xiaomi-redmi-9c",
      "brand": "xiaomi",
      "name": "Redmi 9C",
      "costs": {
        "battery": 68.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 280,
          "max": 520
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 80,
          "max": 140
        },
        "charging-port": {
          "min": 90,
          "max": 145
        },
        "camera": {
          "min": 90,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 75,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 210
        },
        "diagnostics": {
          "min": 35,
          "max": 60
        }
      }
    },
    {
      "id": "xiaomi-redmi-9t",
      "brand": "xiaomi",
      "name": "Redmi 9T",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 280,
          "max": 520
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 80,
          "max": 140
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 90,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 75,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 210
        },
        "diagnostics": {
          "min": 35,
          "max": 60
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-10-4g",
      "brand": "xiaomi",
      "name": "Redmi Note 10 4G",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-10-5g",
      "brand": "xiaomi",
      "name": "Redmi Note 10 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-10-pro",
      "brand": "xiaomi",
      "name": "Redmi Note 10 Pro",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 90,
          "max": 130
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-10s-4g",
      "brand": "xiaomi",
      "name": "Redmi Note 10S 4G",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-11-4g",
      "brand": "xiaomi",
      "name": "Redmi Note 11 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-11-5g",
      "brand": "xiaomi",
      "name": "Redmi Note 11 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-11-pro",
      "brand": "xiaomi",
      "name": "Redmi Note 11 Pro",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-11-pro-5g",
      "brand": "xiaomi",
      "name": "Redmi Note 11 Pro 5G",
      "costs": {
        "battery": 55.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 90,
          "max": 130
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-11s",
      "brand": "xiaomi",
      "name": "Redmi Note 11S",
      "costs": {
        "battery": 72.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "redmi-note-12",
      "brand": "xiaomi",
      "name": "Redmi Note 12",
      "costs": {
        "battery": 85
      },
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ]
    },
    {
      "id": "xiaomi-redmi-note-12-4g",
      "brand": "xiaomi",
      "name": "Redmi Note 12 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-12-5g",
      "brand": "xiaomi",
      "name": "Redmi Note 12 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-12-pro",
      "brand": "xiaomi",
      "name": "Redmi Note 12 Pro",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 130,
          "max": 200
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-12-pro-5g",
      "brand": "xiaomi",
      "name": "Redmi Note 12 Pro 5G",
      "costs": {
        "battery": 85.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-12t",
      "brand": "xiaomi",
      "name": "Redmi Note 12T",
      "costs": {
        "battery": 85.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "redmi-note-13",
      "brand": "xiaomi",
      "name": "Redmi Note 13",
      "costs": {
        "battery": 70
      },
      "prices": {
        "screen": {
          "min": 420,
          "max": 750
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 190
        },
        "charging-port": {
          "min": 120,
          "max": 200
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ]
    },
    {
      "id": "xiaomi-redmi-note-13-4g",
      "brand": "xiaomi",
      "name": "Redmi Note 13 4G",
      "costs": {
        "battery": 70.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 420,
          "max": 750
        },
        "battery": {
          "min": 105,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 190
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-13-5g",
      "brand": "xiaomi",
      "name": "Redmi Note 13 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 420,
          "max": 750
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 190
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-14-4g",
      "brand": "xiaomi",
      "name": "Redmi Note 14 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 420,
          "max": 750
        },
        "battery": {
          "min": 110,
          "max": 150
        },
        "back-cover": {
          "min": 120,
          "max": 190
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 130,
          "max": 220
        },
        "cleaning": {
          "min": 40,
          "max": 80
        },
        "oxidation": {
          "min": 100,
          "max": 170
        },
        "microsoldering": {
          "min": 140,
          "max": 280
        },
        "diagnostics": {
          "min": 40,
          "max": 80
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-6",
      "brand": "xiaomi",
      "name": "Redmi Note 6",
      "costs": {
        "battery": 50.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-7",
      "brand": "xiaomi",
      "name": "Redmi Note 7",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-7-pro",
      "brand": "xiaomi",
      "name": "Redmi Note 7 Pro",
      "costs": {
        "battery": 40.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 75,
          "max": 110
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-8",
      "brand": "xiaomi",
      "name": "Redmi Note 8",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-8-pro",
      "brand": "xiaomi",
      "name": "Redmi Note 8 Pro",
      "costs": {
        "battery": 50.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 85,
          "max": 130
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-8t",
      "brand": "xiaomi",
      "name": "Redmi Note 8T",
      "costs": {
        "battery": 50.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-9",
      "brand": "xiaomi",
      "name": "Redmi Note 9",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-9-pro",
      "brand": "xiaomi",
      "name": "Redmi Note 9 Pro",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 100,
          "max": 150
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-9-pro-4g",
      "brand": "xiaomi",
      "name": "Redmi Note 9 Pro 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 120,
          "max": 170
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "xiaomi-redmi-note-9s",
      "brand": "xiaomi",
      "name": "Redmi Note 9S",
      "costs": {
        "battery": 65.0
      },
      "est": [
        "screen",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 350,
          "max": 650
        },
        "battery": {
          "min": 100,
          "max": 140
        },
        "back-cover": {
          "min": 100,
          "max": 170
        },
        "charging-port": {
          "min": 100,
          "max": 170
        },
        "camera": {
          "min": 110,
          "max": 190
        },
        "cleaning": {
          "min": 40,
          "max": 70
        },
        "oxidation": {
          "min": 90,
          "max": 160
        },
        "microsoldering": {
          "min": 130,
          "max": 260
        },
        "diagnostics": {
          "min": 40,
          "max": 70
        }
      }
    },
    {
      "id": "realme-realme-12-5g",
      "brand": "realme",
      "name": "Realme 12 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "realme-realme-c55",
      "brand": "realme",
      "name": "Realme C55",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "realme-realme-c61",
      "brand": "realme",
      "name": "Realme C61",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "realme-realme-c71",
      "brand": "realme",
      "name": "Realme C71",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "realme-realme-c85-5g",
      "brand": "realme",
      "name": "Realme C85 5G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "realme-realme-c85-pro",
      "brand": "realme",
      "name": "Realme C85 Pro",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 120,
          "max": 190
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "realme-realme-note-50-4g",
      "brand": "realme",
      "name": "Realme Note 50 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "realme-realme-note-60-4g",
      "brand": "realme",
      "name": "Realme Note 60 4G",
      "est": [
        "screen",
        "battery",
        "back-cover",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 85,
          "max": 120
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 110,
          "max": 180
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k10",
      "brand": "lg",
      "name": "LG K10",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k10-2017",
      "brand": "lg",
      "name": "LG K10 2017",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 100
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k10-power",
      "brand": "lg",
      "name": "LG K10 Power",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 90
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k10-pro",
      "brand": "lg",
      "name": "LG K10 Pro",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k11",
      "brand": "lg",
      "name": "LG K11",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k12",
      "brand": "lg",
      "name": "LG K12",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k22",
      "brand": "lg",
      "name": "LG K22",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k22-plus",
      "brand": "lg",
      "name": "LG K22 Plus",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k220",
      "brand": "lg",
      "name": "LG K220",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k4",
      "brand": "lg",
      "name": "LG K4",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k50s",
      "brand": "lg",
      "name": "LG K50S",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k580",
      "brand": "lg",
      "name": "LG K580",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k8",
      "brand": "lg",
      "name": "LG K8",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-k9",
      "brand": "lg",
      "name": "LG K9",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-q6",
      "brand": "lg",
      "name": "LG Q6+",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-q7",
      "brand": "lg",
      "name": "LG Q7",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lg-lg-q7-plus",
      "brand": "lg",
      "name": "LG Q7 Plus",
      "costs": {
        "battery": 25.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 60,
          "max": 90
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "asus-zenfone-2",
      "brand": "asus",
      "name": "Zenfone 2",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "asus-zenfone-3-maxx",
      "brand": "asus",
      "name": "Zenfone 3 Maxx",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "asus-zenfone-4-max",
      "brand": "asus",
      "name": "Zenfone 4 Max",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "asus-zenfone-5",
      "brand": "asus",
      "name": "Zenfone 5",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lenovo-lenovo-a7010",
      "brand": "lenovo",
      "name": "Lenovo A7010",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lenovo-lenovo-e5",
      "brand": "lenovo",
      "name": "Lenovo E5",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lenovo-lenovo-g6-play",
      "brand": "lenovo",
      "name": "Lenovo G6 Play",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lenovo-lenovo-k10",
      "brand": "lenovo",
      "name": "Lenovo K10",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lenovo-lenovo-k5",
      "brand": "lenovo",
      "name": "Lenovo K5",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lenovo-lenovo-k6",
      "brand": "lenovo",
      "name": "Lenovo K6",
      "costs": {
        "battery": 15.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 50,
          "max": 70
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    },
    {
      "id": "lenovo-lenovo-k6-plus",
      "brand": "lenovo",
      "name": "Lenovo K6 Plus",
      "costs": {
        "battery": 20.0
      },
      "est": [
        "screen",
        "back-cover",
        "charging-port",
        "camera",
        "cleaning",
        "oxidation",
        "microsoldering",
        "diagnostics"
      ],
      "prices": {
        "screen": {
          "min": 215,
          "max": 410
        },
        "battery": {
          "min": 55,
          "max": 80
        },
        "back-cover": {
          "min": 80,
          "max": 130
        },
        "charging-port": {
          "min": 85,
          "max": 145
        },
        "camera": {
          "min": 85,
          "max": 155
        },
        "cleaning": {
          "min": 35,
          "max": 60
        },
        "oxidation": {
          "min": 70,
          "max": 130
        },
        "microsoldering": {
          "min": 105,
          "max": 215
        },
        "diagnostics": {
          "min": 30,
          "max": 55
        }
      }
    }
  ],
};
