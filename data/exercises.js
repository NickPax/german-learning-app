// TODO: Replace with German exercises
// Structure follows the same pattern as Polish exercises:
// Each topic has 'sets' array containing arrays of exercises
// Each exercise has: type, sentence/audioText, options/topics, correct, explanation, level, vocabularyIds

export const exercises = {
  food: {
    sets: [
      [
        {
          type: "missing-word",
          sentence: "Ich möchte eine Flasche ___.", 
          options: ["Wasser", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Wasser' means water - a common drink order in German.",
          level: 1,
          vocabularyIds: ["wasser"]
        },
        {
          type: "missing-word",
          sentence: "Kann ich bitte ein ___ haben?",
          options: ["Brot", "Auto", "Haus", "Stuhl"],
          correct: 0,
          explanation: "'Brot' means bread - a staple food in German cuisine.",
          level: 1,
          vocabularyIds: ["brot"]
        },
        {
          type: "missing-word",
          sentence: "Ich trinke gerne ___.", 
          options: ["Kaffee", "Auto", "Haus", "Stuhl"],
          correct: 0,
          explanation: "'Kaffee' means coffee - a popular beverage in Germany.",
          level: 2,
          vocabularyIds: ["kaffee"]
        },
        {
          type: "missing-word",
          sentence: "Das Essen schmeckt sehr ___.", 
          options: ["gut", "schlecht", "groß", "klein"],
          correct: 0,
          explanation: "'gut' means good - used to describe tasty food.",
          level: 1,
          vocabularyIds: ["gut"]
        },
        {
          type: "tts",
          audioText: "Das Essen war sehr lecker! Können wir bitte die Rechnung haben?",
          topics: ["Complaining about food", "Praising food", "Asking for directions", "Ordering clothes"],
          correct: 1,
          explanation: "The speaker is praising the food ('lecker' means delicious) and asking for the bill.",
          level: 2,
          vocabularyIds: ["essen", "gut"]
        }
      ],
      [
        {
          type: "missing-word",
          sentence: "Ich esse gerne ___.", 
          options: ["Fleisch", "Auto", "Haus", "Stuhl"],
          correct: 0,
          explanation: "'Fleisch' means meat - a common food item.",
          level: 2,
          vocabularyIds: ["fleisch"]
        },
        {
          type: "missing-word",
          sentence: "Möchten Sie ein ___ oder Tee?",
          options: ["Bier", "Kaffee", "Wasser", "Milch"],
          correct: 1,
          explanation: "'Kaffee' means coffee - a common alternative to tea.",
          level: 2,
          vocabularyIds: ["kaffee", "tee"]
        },
        {
          type: "tts",
          audioText: "Ich hätte gerne ein Stück Kuchen und eine Tasse Kaffee, bitte.",
          topics: ["Ordering food", "Asking for directions", "Complaining", "Shopping"],
          correct: 0,
          explanation: "The speaker is ordering a piece of cake and a cup of coffee.",
          level: 2,
          vocabularyIds: ["kaffee", "essen"]
        }
      ]
    ]
  },
  travel: {
    sets: [
      [
        {
          type: "missing-word",
          sentence: "Wo ist der ___?",
          options: ["Bahnhof", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Bahnhof' means train station - essential for travel.",
          level: 2,
          vocabularyIds: ["bahnhof"]
        },
        {
          type: "missing-word",
          sentence: "Ich fahre mit dem ___ nach Berlin.",
          options: ["Zug", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Zug' means train - a common mode of transportation.",
          level: 2,
          vocabularyIds: ["zug", "fahren"]
        },
        {
          type: "missing-word",
          sentence: "Mein Flugzeug landet am ___.", 
          options: ["Flughafen", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Flughafen' means airport - where planes land.",
          level: 2,
          vocabularyIds: ["flughafen", "flugzeug"]
        },
        {
          type: "tts",
          audioText: "Entschuldigung, wie komme ich zum Hauptbahnhof?",
          topics: ["Asking for directions", "Ordering food", "Shopping", "Complaining"],
          correct: 0,
          explanation: "The speaker is asking for directions to the main train station.",
          level: 2,
          vocabularyIds: ["bahnhof", "kommen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe einen ___ gebucht.",
          options: ["Urlaub", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Urlaub' means vacation - something you book for travel.",
          level: 2,
          vocabularyIds: ["urlaub", "buchen"]
        }
      ]
    ]
  },
  family: {
    sets: [
      [
        {
          type: "missing-word",
          sentence: "Meine ___ ist sehr nett.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - the people you're related to.",
          level: 2,
          vocabularyIds: ["familie"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ arbeitet als Lehrer.",
          options: ["Vater", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Vater' means father - a family member.",
          level: 2,
          vocabularyIds: ["vater", "lehrer"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe einen ___ und eine Schwester.",
          options: ["Bruder", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Bruder' means brother - a sibling.",
          level: 2,
          vocabularyIds: ["bruder", "schwester"]
        },
        {
          type: "tts",
          audioText: "Meine Mutter kocht heute Abend für die ganze Familie.",
          topics: ["Talking about family", "Ordering food", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their mother cooking for the family.",
          level: 2,
          vocabularyIds: ["mutter", "familie", "kochen"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist meine beste Freundin.",
          options: ["Tochter", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Tochter' means daughter - a family member.",
          level: 2,
          vocabularyIds: ["tochter", "freundin"]
        }
      ]
    ]
  },
  shopping: {
    sets: [
      [
        {
          type: "missing-word",
          sentence: "Ich gehe in den ___ einkaufen.",
          options: ["Laden", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Laden' means shop/store - where you go shopping.",
          level: 2,
          vocabularyIds: ["laden", "kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Wie viel kostet das? Was ist der ___?",
          options: ["Preis", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Preis' means price - what something costs.",
          level: 2,
          vocabularyIds: ["preis", "geld"]
        },
        {
          type: "missing-word",
          sentence: "Ich muss mit ___ bezahlen.",
          options: ["Geld", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Geld' means money - used for payment.",
          level: 2,
          vocabularyIds: ["geld", "bezahlen"]
        },
        {
          type: "tts",
          audioText: "Entschuldigung, wo kann ich diese Schuhe anprobieren?",
          topics: ["Shopping", "Asking for directions", "Ordering food", "Travel"],
          correct: 0,
          explanation: "The speaker is asking where they can try on shoes while shopping.",
          level: 2,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Das ist zu ___. Ich suche etwas Billigeres.",
          options: ["teuer", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'teuer' means expensive - too costly to buy.",
          level: 3,
          vocabularyIds: ["teuer", "billig"]
        }
      ]
    ]
  },
  hobbies: {
    sets: [
      [
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Fußball.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - used for sports and games.",
          level: 2,
          vocabularyIds: ["spielen"]
        },
        {
          type: "missing-word",
          sentence: "Am Wochenende lese ich ein gutes ___.",
          options: ["Buch", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Buch' means book - something you read as a hobby.",
          level: 2,
          vocabularyIds: ["buch", "lesen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Musik.",
          options: ["höre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'höre' means I listen - used for music.",
          level: 1,
          vocabularyIds: ["hören"]
        },
        {
          type: "tts",
          audioText: "Mein Hobby ist Fotografie. Ich fotografiere gerne Landschaften.",
          topics: ["Talking about hobbies", "Shopping", "Travel", "Work"],
          correct: 0,
          explanation: "The speaker is talking about their hobby of photography.",
          level: 2,
          vocabularyIds: ["hobby"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne im Park.",
          options: ["laufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'laufe' means I run/walk - a common hobby.",
          level: 2,
          vocabularyIds: ["laufen"]
        }
      ]
    ]
  },
  animals: {
    sets: [
      [
        {
          type: "missing-word",
          sentence: "Mein ___ heißt Max.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - a common pet.",
          level: 2,
          vocabularyIds: ["hund"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ sitzt auf dem Fensterbrett.",
          options: ["Katze", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Katze' means cat - another common pet.",
          level: 2,
          vocabularyIds: ["katze"]
        },
        {
          type: "missing-word",
          sentence: "Im Zoo sehe ich viele ___.", 
          options: ["Tiere", "Häuser", "Autos", "Stühle"],
          correct: 0,
          explanation: "'Tiere' means animals - what you see at the zoo.",
          level: 2,
          vocabularyIds: ["tier"]
        },
        {
          type: "tts",
          audioText: "Gestern war ich im Zoo und habe Elefanten, Löwen und Giraffen gesehen.",
          topics: ["Talking about animals", "Travel", "Shopping", "Family"],
          correct: 0,
          explanation: "The speaker is talking about seeing animals at the zoo.",
          level: 2,
          vocabularyIds: ["tier", "sehen"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ fliegt durch die Luft.",
          options: ["Vogel", "Hund", "Katze", "Fisch"],
          correct: 0,
          explanation: "'Vogel' means bird - an animal that flies.",
          level: 2,
          vocabularyIds: ["vogel"]
        }
      ]
    ]
  },
  work: {
    sets: [
      [
        {
          type: "missing-word",
          sentence: "Ich ___ von Montag bis Freitag.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - what you do at a job.",
          level: 2,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist sehr interessant.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work/job - your occupation.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe heute viel ___ zu erledigen.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' can also mean tasks or work to be done.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich muss morgen früh ins Büro. Mein Chef hat ein wichtiges Meeting.",
          topics: ["Talking about work", "Family", "Travel", "Shopping"],
          correct: 0,
          explanation: "The speaker is talking about going to the office and a meeting with their boss.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist sehr freundlich.",
          options: ["Kollege", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Kollege' means colleague - someone you work with.",
          level: 3,
          vocabularyIds: ["kollege"]
        }
      ]
    ]
  },
  health: {
    sets: [
      [
        {
          type: "missing-word",
          sentence: "Ich fühle mich nicht gut. Ich bin ___.", 
          options: ["krank", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'krank' means sick/ill - when you don't feel well.",
          level: 2,
          vocabularyIds: ["krank"]
        },
        {
          type: "missing-word",
          sentence: "Ich muss zum ___ gehen.",
          options: ["Arzt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arzt' means doctor - who you visit when sick.",
          level: 2,
          vocabularyIds: ["arzt"]
        },
        {
          type: "missing-word",
          sentence: "Ich nehme ___ gegen die Kopfschmerzen.",
          options: ["Medizin", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Medizin' means medicine - what you take when sick.",
          level: 2,
          vocabularyIds: ["medizin", "schmerz"]
        },
        {
          type: "tts",
          audioText: "Ich habe starke Kopfschmerzen und muss ins Krankenhaus.",
          topics: ["Talking about health", "Shopping", "Travel", "Work"],
          correct: 0,
          explanation: "The speaker is talking about having a headache and needing to go to the hospital.",
          level: 2,
          vocabularyIds: ["krankenhaus", "schmerz", "krank"]
        },
        {
          type: "missing-word",
          sentence: "Sport ist gut für die ___.", 
          options: ["Gesundheit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Gesundheit' means health - your physical well-being.",
          level: 2,
          vocabularyIds: ["gesundheit", "gesund"]
        }
      ]
    ]
  },
  school: {
    sets: [
      [
        {
          type: "missing-word",
          sentence: "Ich gehe zur ___.", 
          options: ["Schule", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schule' means school - where students learn.",
          level: 2,
          vocabularyIds: ["schule"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ erklärt die Mathematik sehr gut.",
          options: ["Lehrer", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Lehrer' means teacher - who teaches at school.",
          level: 2,
          vocabularyIds: ["lehrer"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ jeden Tag für meine Prüfungen.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn/study - what students do.",
          level: 2,
          vocabularyIds: ["lernen"]
        },
        {
          type: "tts",
          audioText: "Ich habe heute drei Stunden Unterricht und muss danach noch Hausaufgaben machen.",
          topics: ["Talking about school", "Work", "Family", "Hobbies"],
          correct: 0,
          explanation: "The speaker is talking about having classes and homework.",
          level: 2,
          vocabularyIds: ["schule", "lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich schreibe mit einem ___.", 
          options: ["Stift", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stift' means pen/pencil - used for writing in school.",
          level: 2,
          vocabularyIds: ["stift", "schreiben"]
        }
      ]
    ]
  },
  cities: {
    sets: [
      [
        {
          type: "missing-word",
          sentence: "Berlin ist eine große ___.", 
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - a large urban area.",
          level: 1,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich wohne in einer ruhigen ___.", 
          options: ["Straße", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Straße' means street - where you live in a city.",
          level: 1,
          vocabularyIds: ["straße"]
        },
        {
          type: "missing-word",
          sentence: "Der Marktplatz ist ein schöner ___.", 
          options: ["Platz", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Platz' means place/square - a public area in cities.",
          level: 1,
          vocabularyIds: ["platz"]
        },
        {
          type: "tts",
          audioText: "Ich liebe diese Stadt! Es gibt so viele interessante Museen und Restaurants.",
          topics: ["Talking about cities", "Travel", "Shopping", "Hobbies"],
          correct: 0,
          explanation: "The speaker is expressing love for a city and mentioning museums and restaurants.",
          level: 2,
          vocabularyIds: ["stadt", "lieben"]
        },
        {
          type: "missing-word",
          sentence: "In welchem ___ wohnen Sie?", 
          options: ["Land", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Land' means country - asking where someone lives.",
          level: 1,
          vocabularyIds: ["land"]
        }
      ]
    ]
  }
};
