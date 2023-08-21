const travelData = [
    {
      "name": "Monday, September 18",
      "date": "2023-09-18",
      "locations": [
        {
          "type": "Travel Day",
          "details": "Denver - fly out",
          "cost": 1275
        }
      ]
    },
    {
      "name": "Tuesday, September 19",
      "date": "2023-09-19",
      "locations": [
        {
          "type": "Travel Day",
          "details": "Denver - fly out",
          "cost": 1275
        },
        {
          "type": "Accommodation",
          "details": "Air B and B- Via Osteria del Guanto\nFlorence, Tuscany",
          "address": "Via Osteria del Guanto, Florence, Tuscany",
          "bookingType": "Airbnb",
          "cost": 437.4
        }
      ],
      "activities": [
        {
          "type": "Tour Reservation",
          "booked": true,
          "name": "Winery Tour",
          "details": "2:30 pm - 7:30 pm",
          "cost": "chase points"
        }
      ]
    },
    {
      "name": "Wednesday, September 20",
      "date": "2023-09-20",
      "locations": [
        {
          "type": "Accommodation",
          "details": "Florence"
        }
      ],
      "activities": [
        {
          "type": "Meal Reservation",
          "booked": false
        },
        {
          "type": "Meal Reservation",
          "booked": false
        }
      ],
      "travelDepartures": [
        {
          "type": "Train",
          "time": "10:28 AM",
          "address": "Firenze Santa Maria Novella - Pisa Centrale",
          "details": "September 22, 2023 - 11:28 CET",
          "cost": 55.66
        }
      ]
    },
    {
      "name": "Thursday, September 21",
      "date": "2023-09-21",
      "locations": [
        {
          "type": "Accommodation",
          "details": "Florence"
        }
      ],
      "activities": [
        {
          "type": "Self guided walking tour",
          "details": "Walk #1: San Niccolò – Giardino delle Rose - Via Erta Canina (vecchia) – San Miniato – Piazzale Michelangelo – Via dei Bastioni – Piazza Poggi (5 km – 1 hour walking time)",
          "links": {
            "interactiveMap": "http://bit.ly/2qAaoTk"
          }
        },
        {
          "type": "Walk around The Boboli Gardens",
          "details": "Need tickets - $13 each"
        }
      ]
    },
    {
      "name": "Friday, September 22",
      "date": "2023-09-22",
      "locations": [
        {
          "type": "Travel Day",
          "details": "Check out of florence at 11:00 AM"
        },
        {
          "type": "Accommodation",
          "details": "Cinque Terra - Riomaggiore"
        },
        {
          "type": "Travel Departure",
          "departureType": "Train",
          "time": "10:28 AM",
          "address": "Firenze Santa Maria Novella - Pisa Centrale",
          "details": "September 22, 2023 - 11:28 CET",
          "cost": 55.66
        }
      ],
      "activities": [
        {
          "type": "Meal options",
          "details": "Cinque terra dinner options - rio bistro, Dau Cila, or Pizzeria Kepris; must eat fish cone"
        }
      ]
    },
    {
      "name": "Saturday, September 23",
      "date": "2023-09-23",
      "locations": [
        {
          "type": "Accommodation",
          "details": "Cinque Terra - Riomaggiore"
        }
      ],
      "activities": [
        {
          "type": "Hiking trail Riomaggiore- Manarola",
          "details": "8:00 AM - Coffee and breakfast"
        },
        {
          "type": "Pesto Class",
          "details": "10:30 AM - 1 PM",
          "location": "Località Punta Bonfiglio, 19017, Manarola",
          "additionalInfo": "Lunch and wine included"
        },
        {
          "type": "Explore villages"
        }
      ]
    },
    {
      "name": "Sunday, September 24",
      "date": "2023-09-24",
      "locations": [
        {
          "type": "Accommodation",
          "details": "Cinque Terra - Riomaggiore"
        }
      ],
      "activities": [
        {
          "type": "Hiking trail Riomaggiore- Manarola",
          "details": "8:00 AM - Coffee and breakfast"
        },
        {
          "type": "Train to Monterosso",
          "details": "Beach Day - rent chairs at Beach Bar Stella Marina Monterosso Al Mare"
        },
        {
          "type": "Explore other villages"
        }
      ]
    },
    {
      "name": "Monday, September 25",
      "date": "2023-09-25",
      "locations": [
        {
          "type": "Accommodation",
          "details": "Cinque Terre - Riomaggiore"
        }
      ],
      "travelDepartures": [
        {
          "type": "Train",
          "time": "09:57 AM",
          "address": "Cinque Terre - Riomaggiore",
          "details": "September 25, 2023 - 09:57 CET"
        },
        {
          "type": "Train",
          "time": "10:02 AM",
          "address": "Cinque Terre - Riomaggiore",
          "details": "September 25, 2023 - 10:02 CET"
        }
      ],
      "activities": [
        {
          "type": "Check into Air B and B",
          "details": "3:00 PM - Via Antonio Gramsci, 179, Riomaggiore, Liguria Italy"
        },
        {
          "type": "Hike up to Santuario di Nostra Signora di Montenero",
          "details": "1.25 mile walk"
        },
        {
          "type": "Stop for drinks at Bar Il Sole a 180 Gradi"
        },
        {
          "type": "Dinner options",
          "details": "Dinner at PIZZERIA KEPRIS (take away by train station) or Dine in rio bistro or Enoteca Dau Cila (dress up)"
        }
      ]
    },
    {
      "name": "Tuesday, September 26",
      "date": "2023-09-26",
      "locations": [
        {
          "type": "Accommodation",
          "details": "Rome"
        }
      ],
      "activities": [
        {
          "type": "Explore Rome",
          "details": "Walk around market Campo de Fiori - opens at 8:00 AM\nCoffee and breakfast around market"
        },
        {
          "type": "Tour of Colosseum",
          "details": "10:30 AM - Via delle Terme di Tito, 72\nYour guide will be holding a Walks sign."
        },
        {
          "type": "Sightseeing",
          "name": "Colosseum, Pantheon, Trevi Fountain, Basilica of Saint Mary Major"
        },
        {
          "type": "Lunch options",
          "details": "Lunch options - Prosciutteria Cantine Dei papi- Trevi – Erica Rec opens at 11:30 AM or La Salumeria or I Pizzicaroli piazza Navona"
        },
        {
          "type": "Dinner options",
          "details": "Dinner at Osteria da Fortunata - Pellegrino (need to make reservations)"
        },
        {
          "type": "Out in Traverse Neighborhood or dinner around place"
        }
      ]
    },
    {
      "name": "Wednesday, September 27",
      "date": "2023-09-27",
      "locations": [
        {
          "type": "Accommodation",
          "details": "Rome"
        }
      ],
      "activities": [
        {
          "type": "Coffee",
          "details": "8:00 AM - Coffee at market or Barnum Roma"
        },
        {
          "type": "Cooking Masterclass",
          "details": "11:00 AM - 2:00 PM",
          "location": "Circonvallazione Gianicolense, 414"
        },
        {
          "type": "Out in Traverse Neighborhood or dinner around place"
        },
        {
          "type": "Wine at Vinaietto- Old Winery",
          "details": "6:00 PM"
        },
        {
          "type": "Dinner options",
          "details": "Dinner options Cantina e Cucina"
        }
      ]
    },
    {
      "name": "Thursday, September 28",
      "date": "2023-09-28",
      "locations": [
        {
          "type": "Travel Day",
          "details": "Check out of air b and b"
        },
        {
          "type": "Travel",
          "details": "Take train\nTake bus or ferry to Positano"
        },
        {
          "type": "Accommodation",
          "details": "Positano"
        }
      ],
      "activities": [
        {
          "type": "Lunch at Latteria Mini Market",
          "details": "If in early enough"
        }
      ]
    },
    {
      "name": "Friday, September 29",
      "date": "2023-09-29",
      "locations": [
        {
          "type": "Accommodation",
          "details": "Positano"
        }
      ],
      "activities": [
        {
          "type": "Coffee and pastry",
          "details": "9:00 AM - Coffee and pastry at Bar Buca di Bacco"
        },
        {
          "type": "Amalfi Coast Boat Trip",
          "details": "10:00 AM - 5:00 PM"
        }
      ]
    },
    {
      "name": "Saturday, September 30",
      "date": "2023-09-30",
      "locations": [
        {
          "type": "Accommodation",
          "details": "Positano"
        }
      ],
      "activities": [
        {
          "type": "Pastry",
          "details": "7:30 AM - pastry at Collina Positano Bakery - coffee somewhere else"
        },
        {
          "type": "Hike",
          "details": "8:00 AM - Hike Path of the Gods - Start in Bomerano and end in Nocelle, the town highest above Positano."
        },
        {
          "type": "Visit",
          "details": "Take a quick visit to the Church of Santa Maria Assunta"
        }
      ]
    },
    {
      "name": "Sunday, October 1",
      "date": "2023-10-01",
      "locations": [
        {
          "type": "Accommodation",
          "details": "Positano"
        }
      ],
      "activities": [
        {
          "type": "Check out of Air b and b",
          "details": "10:00 AM"
        },
        {
          "type": "Couples massage",
          "details": "10:30 AM - Hotel Positano"
        },
        {
          "type": "Spa Day/pool day",
          "details": "leave bags at hotel"
        },
        {
          "type": "Ferry from Positano - Naples",
          "details": "4:30 pm ferry from Positano - Naples"
        },
        {
          "type": "Check in to hotel",
          "details": "Check in to hotel - find hotel close to airport"
        }
      ]
    },
    {
      "name": "Monday, October 2",
      "date": "2023-10-02",
      "locations": [
        {
          "type": "Travel Day",
          "details": "Taxi to hotel or hotel shuttle - 6:10 AM Fly out of Naples"
        }
      ]
    }
  ]


export default travelData