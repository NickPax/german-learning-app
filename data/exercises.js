// TODO: Replace with German exercises
// Structure follows the same pattern as Polish exercises:
// Each topic has 'sets' array containing arrays of exercises
// Each exercise has: type, sentence/audioText, options/topics, correct, explanation, level, vocabularyIds

export const exercises = {
  food: {
    sets: [
      [
        // Level 1 exercises
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
          options: ["Wasser", "Auto", "Haus", "Stuhl"],
          correct: 0,
          explanation: "'Wasser' means water - a common drink.",
          level: 1,
          vocabularyIds: ["wasser"]
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
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["esse", "gehe", "komme", "mache"],
          correct: 0,
          explanation: "'esse' means I eat - basic food verb.",
          level: 1,
          vocabularyIds: ["essen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Wasser.",
          options: ["trinke", "gehe", "komme", "mache"],
          correct: 0,
          explanation: "'trinke' means I drink - used with beverages.",
          level: 1,
          vocabularyIds: ["trinken", "wasser"]
        },
        {
          type: "missing-word",
          sentence: "Das ___ ist gut.",
          options: ["Essen", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Essen' means food - what you eat.",
          level: 1,
          vocabularyIds: ["essen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe ___.",
          options: ["Hunger", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hunger' means hunger - feeling hungry.",
          level: 1,
          vocabularyIds: ["hunger"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Brot.",
          options: ["esse", "gehe", "komme", "mache"],
          correct: 0,
          explanation: "'esse' means I eat - consuming food.",
          level: 1,
          vocabularyIds: ["essen", "brot"]
        },
        {
          type: "missing-word",
          sentence: "Das Essen ist ___.",
          options: ["gut", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'gut' means good - describing food quality.",
          level: 1,
          vocabularyIds: ["gut", "essen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Essen.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to eat.",
          level: 1,
          vocabularyIds: ["gehen", "essen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ ein Restaurant.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - noticing a restaurant.",
          level: 1,
          vocabularyIds: ["sehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute Abend.",
          options: ["esse", "gehe", "komme", "mache"],
          correct: 0,
          explanation: "'esse' means I eat - eating in the evening.",
          level: 1,
          vocabularyIds: ["essen"]
        },
        {
          type: "missing-word",
          sentence: "Das ___ ist lecker.",
          options: ["Essen", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Essen' means food - something delicious.",
          level: 1,
          vocabularyIds: ["essen"]
        },
        {
          type: "tts",
          audioText: "Ich möchte bitte ein Brot und eine Flasche Wasser.",
          topics: ["Ordering food", "Asking for directions", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is ordering bread and water.",
          level: 1,
          vocabularyIds: ["brot", "wasser"]
        }
      ],
      [
        // Level 2 exercises
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
          type: "missing-word",
          sentence: "Ich trinke gerne ___.", 
          options: ["Kaffee", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Kaffee' means coffee - a popular beverage.",
          level: 2,
          vocabularyIds: ["kaffee"]
        },
        {
          type: "missing-word",
          sentence: "Ich esse gerne ___.", 
          options: ["Obst", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Obst' means fruit - healthy food choice.",
          level: 2,
          vocabularyIds: ["obst"]
        },
        {
          type: "missing-word",
          sentence: "Ich trinke ___.",
          options: ["Milch", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Milch' means milk - a common drink.",
          level: 2,
          vocabularyIds: ["milch"]
        },
        {
          type: "missing-word",
          sentence: "Ich esse gerne ___.", 
          options: ["Gemüse", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Gemüse' means vegetables - healthy food.",
          level: 2,
          vocabularyIds: ["gemüse"]
        },
        {
          type: "missing-word",
          sentence: "Ich trinke ein ___ Bier.",
          options: ["kaltes", "großes", "kleines", "neues"],
          correct: 0,
          explanation: "'kaltes' means cold - describing beer temperature.",
          level: 2,
          vocabularyIds: ["bier"]
        },
        {
          type: "missing-word",
          sentence: "Das ___ schmeckt gut.",
          options: ["Getränk", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Getränk' means drink - beverage.",
          level: 2,
          vocabularyIds: ["getränk"]
        },
        {
          type: "missing-word",
          sentence: "Ich esse einen ___.", 
          options: ["Apfel", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Apfel' means apple - a fruit.",
          level: 2,
          vocabularyIds: ["apfel"]
        },
        {
          type: "missing-word",
          sentence: "Ich trinke eine Tasse ___.", 
          options: ["Tee", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Tee' means tea - a hot beverage.",
          level: 2,
          vocabularyIds: ["tee"]
        },
        {
          type: "missing-word",
          sentence: "Ich esse gerne ___.", 
          options: ["Fisch", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Fisch' means fish - seafood.",
          level: 2,
          vocabularyIds: ["fisch"]
        },
        {
          type: "missing-word",
          sentence: "Ich trinke ein Glas ___.", 
          options: ["Wein", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Wein' means wine - an alcoholic beverage.",
          level: 2,
          vocabularyIds: ["wein"]
        },
        {
          type: "missing-word",
          sentence: "Ich esse ein Stück ___.", 
          options: ["Käse", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Käse' means cheese - dairy product.",
          level: 2,
          vocabularyIds: ["käse"]
        },
        {
          type: "tts",
          audioText: "Das Essen war sehr lecker! Können wir bitte die Rechnung haben?",
          topics: ["Complaining about food", "Praising food", "Asking for directions", "Ordering clothes"],
          correct: 1,
          explanation: "The speaker is praising the food ('lecker' means delicious) and asking for the bill.",
          level: 2,
          vocabularyIds: ["essen", "gut"]
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
        // Level 1 exercises
        {
          type: "missing-word",
          sentence: "Wo ist der ___?",
          options: ["Bahnhof", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Bahnhof' means train station - essential for travel.",
          level: 1,
          vocabularyIds: ["bahnhof"]
        },
        {
          type: "missing-word",
          sentence: "Ich fahre mit dem ___ nach Berlin.",
          options: ["Zug", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Zug' means train - a common mode of transportation.",
          level: 1,
          vocabularyIds: ["zug", "fahren"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit dem Auto.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I drive/travel - used with vehicles.",
          level: 1,
          vocabularyIds: ["fahren", "auto"]
        },
        {
          type: "missing-word",
          sentence: "Wo ___ ich hin?",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - asking where to go.",
          level: 1,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ nach Hause.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going home.",
          level: 1,
          vocabularyIds: ["gehen", "haus"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit dem Bus.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I travel - using the bus.",
          level: 1,
          vocabularyIds: ["fahren", "bus"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Bahnhof.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to the station.",
          level: 1,
          vocabularyIds: ["gehen", "bahnhof"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ fährt ab.",
          options: ["Zug", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Zug' means train - departing train.",
          level: 1,
          vocabularyIds: ["zug"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit dem Zug.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I travel - by train.",
          level: 1,
          vocabularyIds: ["fahren", "zug"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute.",
          options: ["reise", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'reise' means I travel - traveling today.",
          level: 1,
          vocabularyIds: ["reisen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in eine andere Stadt.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I travel - to another city.",
          level: 1,
          vocabularyIds: ["fahren", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Wo ___ der Zug?",
          options: ["ist", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'ist' means is - asking where the train is.",
          level: 1,
          vocabularyIds: ["sein", "zug"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Flughafen.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to the airport.",
          level: 1,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ kommt an.",
          options: ["Zug", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Zug' means train - arriving train.",
          level: 1,
          vocabularyIds: ["zug", "kommen"]
        },
        {
          type: "tts",
          audioText: "Wo ist der nächste Bahnhof?",
          topics: ["Asking for directions", "Ordering food", "Shopping", "Complaining"],
          correct: 0,
          explanation: "The speaker is asking where the nearest train station is.",
          level: 1,
          vocabularyIds: ["bahnhof"]
        }
      ],
      [
        // Level 2 exercises
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
          type: "missing-word",
          sentence: "Ich habe einen ___ gebucht.",
          options: ["Urlaub", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Urlaub' means vacation - something you book for travel.",
          level: 2,
          vocabularyIds: ["urlaub", "buchen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit dem Flugzeug.",
          options: ["fliege", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fliege' means I fly - traveling by plane.",
          level: 2,
          vocabularyIds: ["fliegen", "flugzeug"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Karte.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - purchasing a ticket.",
          level: 2,
          vocabularyIds: ["kaufen", "karte"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit dem Fahrrad.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I ride - using a bicycle.",
          level: 2,
          vocabularyIds: ["fahren", "fahrrad"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Reise.",
          options: ["plane", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'plane' means I plan - planning a trip.",
          level: 2,
          vocabularyIds: ["planen", "reise"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ im Hotel.",
          options: ["wohne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'wohne' means I stay - staying at a hotel.",
          level: 2,
          vocabularyIds: ["wohnen", "hotel"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ am Bahnhof an.",
          options: ["komme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'komme' means I arrive - arriving at the station.",
          level: 2,
          vocabularyIds: ["kommen", "bahnhof"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ vom Flughafen ab.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I depart - leaving the airport.",
          level: 2,
          vocabularyIds: ["fahren", "flughafen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in den Zug ein.",
          options: ["steige", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'steige' means I board - getting on the train.",
          level: 2,
          vocabularyIds: ["einsteigen", "zug"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ aus dem Bus aus.",
          options: ["steige", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'steige' means I get off - exiting the bus.",
          level: 2,
          vocabularyIds: ["aussteigen", "bus"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ ein Hotel.",
          options: ["reserviere", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'reserviere' means I reserve - booking a hotel.",
          level: 2,
          vocabularyIds: ["reservieren", "hotel"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Reise.",
          options: ["buche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'buche' means I book - booking a trip.",
          level: 2,
          vocabularyIds: ["buchen", "reise"]
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
          type: "tts",
          audioText: "Ich muss morgen früh zum Flughafen fahren.",
          topics: ["Talking about travel", "Ordering food", "Shopping", "Family"],
          correct: 0,
          explanation: "The speaker is saying they need to drive to the airport early tomorrow.",
          level: 2,
          vocabularyIds: ["flughafen", "fahren"]
        }
      ]
    ]
  },
  family: {
    sets: [
      [
        // Level 1 exercises
        {
          type: "missing-word",
          sentence: "Meine ___ ist sehr nett.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - the people you're related to.",
          level: 1,
          vocabularyIds: ["familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Familie.",
          options: ["liebe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'liebe' means I love - expressing affection for family.",
          level: 1,
          vocabularyIds: ["lieben", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Familie sehr.",
          options: ["liebe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'liebe' means I love - strong family bond.",
          level: 1,
          vocabularyIds: ["lieben", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist groß.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - describing family size.",
          level: 1,
          vocabularyIds: ["familie", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meiner Familie.",
          options: ["wohne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'wohne' means I live - living with family.",
          level: 1,
          vocabularyIds: ["wohnen", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Familie jeden Tag.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - seeing family daily.",
          level: 1,
          vocabularyIds: ["sehen", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist wichtig.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - family is important.",
          level: 1,
          vocabularyIds: ["familie", "wichtig"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zu meiner Familie.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to family.",
          level: 1,
          vocabularyIds: ["gehen", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ von meiner Familie.",
          options: ["komme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'komme' means I come - coming from family.",
          level: 1,
          vocabularyIds: ["kommen", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist schön.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - beautiful family.",
          level: 1,
          vocabularyIds: ["familie", "schön"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meiner Familie.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being with family.",
          level: 1,
          vocabularyIds: ["sein", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Familie gern.",
          options: ["habe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'habe' means I have - having family.",
          level: 1,
          vocabularyIds: ["haben", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist gut.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - good family.",
          level: 1,
          vocabularyIds: ["familie", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zu meiner Familie nach Hause.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going home to family.",
          level: 1,
          vocabularyIds: ["gehen", "familie", "haus"]
        },
        {
          type: "tts",
          audioText: "Ich liebe meine Familie sehr.",
          topics: ["Talking about family", "Ordering food", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is expressing love for their family.",
          level: 1,
          vocabularyIds: ["lieben", "familie"]
        }
      ],
      [
        // Level 2 exercises
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
          type: "missing-word",
          sentence: "Meine ___ ist meine beste Freundin.",
          options: ["Tochter", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Tochter' means daughter - a family member.",
          level: 2,
          vocabularyIds: ["tochter", "freundin"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ kocht sehr gut.",
          options: ["Mutter", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Mutter' means mother - family member who cooks.",
          level: 2,
          vocabularyIds: ["mutter", "kochen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe einen ___.",
          options: ["Sohn", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Sohn' means son - a family member.",
          level: 2,
          vocabularyIds: ["sohn"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist sehr nett.",
          options: ["Vater", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Vater' means father - nice father.",
          level: 2,
          vocabularyIds: ["vater"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe eine ___.",
          options: ["Schwester", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schwester' means sister - a sibling.",
          level: 2,
          vocabularyIds: ["schwester"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist mein bester Freund.",
          options: ["Bruder", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Bruder' means brother - best friend.",
          level: 2,
          vocabularyIds: ["bruder", "freund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Mutter.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting mother.",
          level: 2,
          vocabularyIds: ["besuchen", "mutter"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist sehr freundlich.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - friendly family.",
          level: 2,
          vocabularyIds: ["familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meinem Vater.",
          options: ["spreche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spreche' means I speak - talking with father.",
          level: 2,
          vocabularyIds: ["sprechen", "vater"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ hilft mir immer.",
          options: ["Mutter", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Mutter' means mother - always helping.",
          level: 2,
          vocabularyIds: ["mutter", "helfen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Schwester sehr.",
          options: ["liebe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'liebe' means I love - loving sister.",
          level: 2,
          vocabularyIds: ["lieben", "schwester"]
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
          type: "tts",
          audioText: "Mein Vater arbeitet von Montag bis Freitag im Büro.",
          topics: ["Talking about family", "Talking about work", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their father working Monday to Friday in the office.",
          level: 2,
          vocabularyIds: ["vater", "arbeiten"]
        }
      ]
    ]
  },
  shopping: {
    sets: [
      [
        // Level 1 exercises
        {
          type: "missing-word",
          sentence: "Ich gehe in den ___ einkaufen.",
          options: ["Laden", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Laden' means shop/store - where you go shopping.",
          level: 1,
          vocabularyIds: ["laden", "kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ ein Buch.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - the action of shopping.",
          level: 1,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Laden.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to the shop.",
          level: 1,
          vocabularyIds: ["gehen", "laden"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ etwas.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - buying something.",
          level: 1,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ im Laden.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being in the shop.",
          level: 1,
          vocabularyIds: ["sein", "laden"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ den Laden.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - seeing the shop.",
          level: 1,
          vocabularyIds: ["sehen", "laden"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - enjoying shopping.",
          level: 1,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ ist groß.",
          options: ["Laden", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Laden' means shop - large shop.",
          level: 1,
          vocabularyIds: ["laden", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute einkaufen.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going shopping today.",
          level: 1,
          vocabularyIds: ["gehen", "kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ viel.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - buying a lot.",
          level: 1,
          vocabularyIds: ["kaufen", "viel"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ ist gut.",
          options: ["Laden", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Laden' means shop - good shop.",
          level: 1,
          vocabularyIds: ["laden", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Einkaufen.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going shopping.",
          level: 1,
          vocabularyIds: ["gehen", "kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ im Laden.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - in the shop.",
          level: 1,
          vocabularyIds: ["sein", "laden"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ etwas Neues.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - buying something new.",
          level: 1,
          vocabularyIds: ["kaufen", "neu"]
        },
        {
          type: "tts",
          audioText: "Ich gehe heute einkaufen.",
          topics: ["Shopping", "Asking for directions", "Ordering food", "Travel"],
          correct: 0,
          explanation: "The speaker is saying they're going shopping today.",
          level: 1,
          vocabularyIds: ["gehen", "kaufen"]
        }
      ],
      [
        // Level 2 exercises
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
          type: "missing-word",
          sentence: "Ich ___ den Preis.",
          options: ["frage", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'frage' means I ask - asking about price.",
          level: 2,
          vocabularyIds: ["fragen", "preis"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ im Restaurant.",
          options: ["bezahle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bezahle' means I pay - paying at restaurant.",
          level: 2,
          vocabularyIds: ["bezahlen"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ ist hoch.",
          options: ["Preis", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Preis' means price - high price.",
          level: 2,
          vocabularyIds: ["preis"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe kein ___.",
          options: ["Geld", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Geld' means money - no money.",
          level: 2,
          vocabularyIds: ["geld"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ viel Geld.",
          options: ["habe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'habe' means I have - having money.",
          level: 2,
          vocabularyIds: ["haben", "geld"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ den Preis nicht.",
          options: ["kenne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kenne' means I know - not knowing the price.",
          level: 2,
          vocabularyIds: ["wissen", "preis"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ ist billig.",
          options: ["Preis", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Preis' means price - cheap price.",
          level: 2,
          vocabularyIds: ["preis", "billig"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit Karte.",
          options: ["bezahle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bezahle' means I pay - paying with card.",
          level: 2,
          vocabularyIds: ["bezahlen", "karte"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ den Laden.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting the shop.",
          level: 2,
          vocabularyIds: ["besuchen", "laden"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ nach dem Preis.",
          options: ["frage", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'frage' means I ask - asking for price.",
          level: 2,
          vocabularyIds: ["fragen", "preis"]
        },
        {
          type: "missing-word",
          sentence: "Das ___ zu viel.",
          options: ["kostet", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kostet' means costs - too expensive.",
          level: 2,
          vocabularyIds: ["kosten"]
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
          type: "tts",
          audioText: "Wie viel kostet dieses Hemd?",
          topics: ["Shopping", "Asking for directions", "Ordering food", "Travel"],
          correct: 0,
          explanation: "The speaker is asking how much this shirt costs.",
          level: 2,
          vocabularyIds: ["preis", "kosten"]
        }
      ]
    ]
  },
  hobbies: {
    sets: [
      [
        // Level 1 exercises
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Fußball.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - used for sports and games.",
          level: 1,
          vocabularyIds: ["spielen"]
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
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["lese", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lese' means I read - a common hobby.",
          level: 1,
          vocabularyIds: ["lesen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - enjoying games.",
          level: 1,
          vocabularyIds: ["spielen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["höre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'höre' means I listen - listening to music.",
          level: 1,
          vocabularyIds: ["hören"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ jeden Tag.",
          options: ["lese", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lese' means I read - reading daily.",
          level: 1,
          vocabularyIds: ["lesen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Sport.",
          options: ["mache", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'mache' means I do - doing sports.",
          level: 1,
          vocabularyIds: ["machen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["tanze", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'tanze' means I dance - dancing hobby.",
          level: 1,
          vocabularyIds: ["tanzen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["singe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'singe' means I sing - singing hobby.",
          level: 1,
          vocabularyIds: ["singen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne im Park.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to the park.",
          level: 1,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Filme.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I watch - watching movies.",
          level: 1,
          vocabularyIds: ["sehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["laufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'laufe' means I run/walk - running hobby.",
          level: 1,
          vocabularyIds: ["laufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Musik.",
          options: ["höre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'höre' means I listen - listening hobby.",
          level: 1,
          vocabularyIds: ["hören"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Spiele.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - playing games.",
          level: 1,
          vocabularyIds: ["spielen"]
        },
        {
          type: "tts",
          audioText: "Mein Hobby ist Lesen. Ich lese gerne Bücher.",
          topics: ["Talking about hobbies", "Shopping", "Travel", "Work"],
          correct: 0,
          explanation: "The speaker is talking about their hobby of reading books.",
          level: 1,
          vocabularyIds: ["hobby", "lesen"]
        }
      ],
      [
        // Level 2 exercises
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
          sentence: "Ich ___ gerne im Park.",
          options: ["laufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'laufe' means I run/walk - a common hobby.",
          level: 2,
          vocabularyIds: ["laufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne schwimmen.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going swimming.",
          level: 2,
          vocabularyIds: ["gehen", "schwimmen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Gitarre.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - playing guitar.",
          level: 2,
          vocabularyIds: ["spielen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne im Fitnessstudio.",
          options: ["trainiere", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'trainiere' means I train - training at gym.",
          level: 2,
          vocabularyIds: ["trainieren"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Videospiele.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - playing video games.",
          level: 2,
          vocabularyIds: ["spielen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne wandern.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going hiking.",
          level: 2,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne kochen.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning to cook.",
          level: 2,
          vocabularyIds: ["lernen", "kochen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne malen.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning to paint.",
          level: 2,
          vocabularyIds: ["lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Rad fahren.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going cycling.",
          level: 2,
          vocabularyIds: ["gehen", "fahrrad"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne ins Kino.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to cinema.",
          level: 2,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Theater.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting theater.",
          level: 2,
          vocabularyIds: ["besuchen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Konzerte.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting concerts.",
          level: 2,
          vocabularyIds: ["besuchen"]
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
          type: "tts",
          audioText: "Am Wochenende spiele ich gerne Fußball mit meinen Freunden.",
          topics: ["Talking about hobbies", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about playing football with friends on weekends.",
          level: 2,
          vocabularyIds: ["spielen", "wochenende"]
        }
      ]
    ]
  },
  animals: {
    sets: [
      [
        // Level 1 exercises
        {
          type: "missing-word",
          sentence: "Mein ___ heißt Max.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - a common pet.",
          level: 1,
          vocabularyIds: ["hund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - observing your pet.",
          level: 1,
          vocabularyIds: ["sehen", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund sehr.",
          options: ["liebe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'liebe' means I love - loving your pet.",
          level: 1,
          vocabularyIds: ["lieben", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist groß.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - large dog.",
          level: 1,
          vocabularyIds: ["hund", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund jeden Tag.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - seeing dog daily.",
          level: 1,
          vocabularyIds: ["sehen", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist klein.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - small dog.",
          level: 1,
          vocabularyIds: ["hund", "klein"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meinem Hund.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - playing with dog.",
          level: 1,
          vocabularyIds: ["spielen", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist gut.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - good dog.",
          level: 1,
          vocabularyIds: ["hund", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund.",
          options: ["habe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'habe' means I have - having a dog.",
          level: 1,
          vocabularyIds: ["haben", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist schön.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - beautiful dog.",
          level: 1,
          vocabularyIds: ["hund", "schön"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund gern.",
          options: ["habe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'habe' means I have - having dog gladly.",
          level: 1,
          vocabularyIds: ["haben", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist nett.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - nice dog.",
          level: 1,
          vocabularyIds: ["hund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund.",
          options: ["füttere", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'füttere' means I feed - feeding dog.",
          level: 1,
          vocabularyIds: ["füttern", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ läuft schnell.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - fast running dog.",
          level: 1,
          vocabularyIds: ["hund", "laufen"]
        },
        {
          type: "tts",
          audioText: "Mein Hund heißt Max und ist sehr freundlich.",
          topics: ["Talking about animals", "Travel", "Shopping", "Family"],
          correct: 0,
          explanation: "The speaker is talking about their friendly dog named Max.",
          level: 1,
          vocabularyIds: ["hund"]
        }
      ],
      [
        // Level 2 exercises
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
          type: "missing-word",
          sentence: "Der ___ fliegt durch die Luft.",
          options: ["Vogel", "Hund", "Katze", "Fisch"],
          correct: 0,
          explanation: "'Vogel' means bird - an animal that flies.",
          level: 2,
          vocabularyIds: ["vogel"]
        },
        {
          type: "missing-word",
          sentence: "Ich sehe ein ___ im Zoo.",
          options: ["Pferd", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Pferd' means horse - zoo animal.",
          level: 2,
          vocabularyIds: ["pferd"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ gibt Milch.",
          options: ["Kuh", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Kuh' means cow - farm animal.",
          level: 2,
          vocabularyIds: ["kuh"]
        },
        {
          type: "missing-word",
          sentence: "Ich sehe einen ___ im Wald.",
          options: ["Vogel", "Hund", "Katze", "Fisch"],
          correct: 0,
          explanation: "'Vogel' means bird - forest animal.",
          level: 2,
          vocabularyIds: ["vogel"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist sehr süß.",
          options: ["Katze", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Katze' means cat - sweet cat.",
          level: 2,
          vocabularyIds: ["katze"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ viele Tiere im Zoo.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - seeing animals at zoo.",
          level: 2,
          vocabularyIds: ["sehen", "tier"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ schwimmt im Wasser.",
          options: ["Fisch", "Hund", "Katze", "Vogel"],
          correct: 0,
          explanation: "'Fisch' means fish - water animal.",
          level: 2,
          vocabularyIds: ["fisch"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Tiere.",
          options: ["beobachte", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'beobachte' means I observe - observing animals.",
          level: 2,
          vocabularyIds: ["beobachten", "tier"]
        },
        {
          type: "missing-word",
          sentence: "Das ___ ist sehr groß.",
          options: ["Tier", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Tier' means animal - large animal.",
          level: 2,
          vocabularyIds: ["tier", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meiner Katze.",
          options: ["helfe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'helfe' means I help - helping cat.",
          level: 2,
          vocabularyIds: ["helfen", "katze"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist sehr klug.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - smart dog.",
          level: 2,
          vocabularyIds: ["hund"]
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
          type: "tts",
          audioText: "Meine Katze schläft gerne auf dem Sofa.",
          topics: ["Talking about animals", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their cat liking to sleep on the sofa.",
          level: 2,
          vocabularyIds: ["katze", "schlafen"]
        }
      ]
    ]
  },
  work: {
    sets: [
      [
        // Level 1 exercises
        {
          type: "missing-word",
          sentence: "Ich ___ von Montag bis Freitag.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - what you do at a job.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist wichtig.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work/job - your occupation.",
          level: 1,
          vocabularyIds: ["arbeit", "wichtig"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ jeden Tag.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - daily work routine.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - working today.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist gut.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - good work.",
          level: 1,
          vocabularyIds: ["arbeit", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - enjoying work.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ viel.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - working a lot.",
          level: 1,
          vocabularyIds: ["arbeiten", "viel"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist interessant.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - interesting work.",
          level: 1,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ morgen.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - working tomorrow.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zur Arbeit.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to work.",
          level: 1,
          vocabularyIds: ["gehen", "arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist neu.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - new job.",
          level: 1,
          vocabularyIds: ["arbeit", "neu"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ von der Arbeit.",
          options: ["komme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'komme' means I come - coming from work.",
          level: 1,
          vocabularyIds: ["kommen", "arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ bei der Arbeit.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being at work.",
          level: 1,
          vocabularyIds: ["sein", "arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ macht Spaß.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - fun work.",
          level: 1,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich arbeite von Montag bis Freitag im Büro.",
          topics: ["Talking about work", "Family", "Travel", "Shopping"],
          correct: 0,
          explanation: "The speaker is talking about working Monday to Friday in the office.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        }
      ],
      [
        // Level 2 exercises
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
          type: "missing-word",
          sentence: "Ich ___ ins Büro.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to office.",
          level: 2,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meinen Kollegen.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - working with colleagues.",
          level: 2,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist sehr interessant.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - very interesting work.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ einen neuen Job.",
          options: ["habe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'habe' means I have - having a new job.",
          level: 2,
          vocabularyIds: ["haben", "arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ um neun Uhr.",
          options: ["beginne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'beginne' means I start - starting work at 9.",
          level: 2,
          vocabularyIds: ["beginnen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ um fünf Uhr.",
          options: ["ende", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'ende' means I end - ending work at 5.",
          level: 2,
          vocabularyIds: ["enden"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Pause.",
          options: ["mache", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'mache' means I take - taking a break.",
          level: 2,
          vocabularyIds: ["machen"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist sehr nett.",
          options: ["Chef", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Chef' means boss - nice boss.",
          level: 2,
          vocabularyIds: ["chef"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meinem Chef.",
          options: ["spreche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spreche' means I speak - talking with boss.",
          level: 2,
          vocabularyIds: ["sprechen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Projekte.",
          options: ["plane", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'plane' means I plan - planning projects.",
          level: 2,
          vocabularyIds: ["planen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Aufgaben.",
          options: ["erledige", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'erledige' means I complete - completing tasks.",
          level: 2,
          vocabularyIds: ["erledigen"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist anspruchsvoll.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - demanding work.",
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
          type: "tts",
          audioText: "Ich arbeite gerne mit meinen Kollegen zusammen.",
          topics: ["Talking about work", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is saying they enjoy working with their colleagues.",
          level: 2,
          vocabularyIds: ["arbeiten"]
        }
      ]
    ]
  },
  health: {
    sets: [
      [
        // Level 1 exercises
        {
          type: "missing-word",
          sentence: "Ich fühle mich nicht gut. Ich bin ___.", 
          options: ["krank", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'krank' means sick/ill - when you don't feel well.",
          level: 1,
          vocabularyIds: ["krank"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin ___.",
          options: ["gesund", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'gesund' means healthy - feeling well.",
          level: 1,
          vocabularyIds: ["gesund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gut.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - describing how you feel.",
          level: 1,
          vocabularyIds: ["fühle"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mich nicht gut.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - not feeling well.",
          level: 1,
          vocabularyIds: ["fühle"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin ___.",
          options: ["krank", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'krank' means sick - being ill.",
          level: 1,
          vocabularyIds: ["krank"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gesund.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being healthy.",
          level: 1,
          vocabularyIds: ["sein", "gesund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mich gut.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - feeling good.",
          level: 1,
          vocabularyIds: ["fühle"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin nicht ___.",
          options: ["krank", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'krank' means sick - not being sick.",
          level: 1,
          vocabularyIds: ["krank"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - feeling today.",
          level: 1,
          vocabularyIds: ["fühle"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin sehr ___.",
          options: ["gesund", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'gesund' means healthy - very healthy.",
          level: 1,
          vocabularyIds: ["gesund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mich besser.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - feeling better.",
          level: 1,
          vocabularyIds: ["fühle"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin nicht ___.",
          options: ["gesund", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'gesund' means healthy - not healthy.",
          level: 1,
          vocabularyIds: ["gesund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mich schlecht.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - feeling bad.",
          level: 1,
          vocabularyIds: ["fühle", "schlecht"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin ___ geworden.",
          options: ["krank", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'krank' means sick - became sick.",
          level: 1,
          vocabularyIds: ["krank"]
        },
        {
          type: "tts",
          audioText: "Ich fühle mich nicht gut. Ich bin krank.",
          topics: ["Talking about health", "Shopping", "Travel", "Work"],
          correct: 0,
          explanation: "The speaker is saying they don't feel well and are sick.",
          level: 1,
          vocabularyIds: ["fühle", "krank"]
        }
      ],
      [
        // Level 2 exercises
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
          type: "missing-word",
          sentence: "Sport ist gut für die ___.", 
          options: ["Gesundheit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Gesundheit' means health - your physical well-being.",
          level: 2,
          vocabularyIds: ["gesundheit", "gesund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Arzt.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to doctor.",
          level: 2,
          vocabularyIds: ["gehen", "arzt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Medizin.",
          options: ["nehme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'nehme' means I take - taking medicine.",
          level: 2,
          vocabularyIds: ["nehmen", "medizin"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe ___.",
          options: ["Schmerz", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schmerz' means pain - having pain.",
          level: 2,
          vocabularyIds: ["schmerz"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ ins Krankenhaus.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to hospital.",
          level: 2,
          vocabularyIds: ["gehen", "krankenhaus"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist gut.",
          options: ["Gesundheit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Gesundheit' means health - good health.",
          level: 2,
          vocabularyIds: ["gesundheit", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ den Arzt.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting doctor.",
          level: 2,
          vocabularyIds: ["besuchen", "arzt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ krank.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being sick.",
          level: 2,
          vocabularyIds: ["sein", "krank"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gesund.",
          options: ["bleibe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bleibe' means I stay - staying healthy.",
          level: 2,
          vocabularyIds: ["bleiben", "gesund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Sport für meine Gesundheit.",
          options: ["mache", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'mache' means I do - doing sports for health.",
          level: 2,
          vocabularyIds: ["machen", "gesundheit"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mich besser.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - feeling better.",
          level: 2,
          vocabularyIds: ["fühle"]
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
          type: "tts",
          audioText: "Ich fühle mich heute viel besser. Die Medizin hat geholfen.",
          topics: ["Talking about health", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is saying they feel much better today and the medicine helped.",
          level: 2,
          vocabularyIds: ["fühle", "medizin"]
        }
      ]
    ]
  },
  school: {
    sets: [
      [
        // Level 1 exercises
        {
          type: "missing-word",
          sentence: "Ich gehe zur ___.", 
          options: ["Schule", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schule' means school - where students learn.",
          level: 1,
          vocabularyIds: ["schule"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Schule.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn/study - what you do at school.",
          level: 1,
          vocabularyIds: ["lernen", "schule"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ jeden Tag.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn/study - daily learning.",
          level: 1,
          vocabularyIds: ["lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zur Schule.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to school.",
          level: 1,
          vocabularyIds: ["gehen", "schule"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist groß.",
          options: ["Schule", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schule' means school - large school.",
          level: 1,
          vocabularyIds: ["schule", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - enjoying learning.",
          level: 1,
          vocabularyIds: ["lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Schule.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being at school.",
          level: 1,
          vocabularyIds: ["sein", "schule"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ von der Schule.",
          options: ["komme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'komme' means I come - coming from school.",
          level: 1,
          vocabularyIds: ["kommen", "schule"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist gut.",
          options: ["Schule", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schule' means school - good school.",
          level: 1,
          vocabularyIds: ["schule", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ viel.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning a lot.",
          level: 1,
          vocabularyIds: ["lernen", "viel"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning today.",
          level: 1,
          vocabularyIds: ["lernen"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist wichtig.",
          options: ["Schule", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schule' means school - important school.",
          level: 1,
          vocabularyIds: ["schule", "wichtig"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zur Schule.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to school.",
          level: 1,
          vocabularyIds: ["gehen", "schule"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Schule.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning at school.",
          level: 1,
          vocabularyIds: ["lernen", "schule"]
        },
        {
          type: "tts",
          audioText: "Ich gehe jeden Tag zur Schule und lerne viel.",
          topics: ["Talking about school", "Work", "Family", "Hobbies"],
          correct: 0,
          explanation: "The speaker is saying they go to school every day and learn a lot.",
          level: 1,
          vocabularyIds: ["gehen", "schule", "lernen"]
        }
      ],
      [
        // Level 2 exercises
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
          type: "missing-word",
          sentence: "Ich schreibe mit einem ___.", 
          options: ["Stift", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stift' means pen/pencil - used for writing in school.",
          level: 2,
          vocabularyIds: ["stift", "schreiben"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ ein Buch.",
          options: ["lese", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lese' means I read - reading a book.",
          level: 2,
          vocabularyIds: ["lesen", "buch"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Hausaufgaben.",
          options: ["mache", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'mache' means I do - doing homework.",
          level: 2,
          vocabularyIds: ["machen"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist sehr nett.",
          options: ["Lehrer", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Lehrer' means teacher - nice teacher.",
          level: 2,
          vocabularyIds: ["lehrer"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meinem Lehrer.",
          options: ["spreche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spreche' means I speak - talking with teacher.",
          level: 2,
          vocabularyIds: ["sprechen", "lehrer"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Prüfung.",
          options: ["schreibe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'schreibe' means I write - writing an exam.",
          level: 2,
          vocabularyIds: ["schreiben"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Bibliothek.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - studying in library.",
          level: 2,
          vocabularyIds: ["lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zur Universität.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to university.",
          level: 2,
          vocabularyIds: ["gehen", "universität"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ neue Dinge.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning new things.",
          level: 2,
          vocabularyIds: ["lernen", "neu"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ hilft mir.",
          options: ["Lehrer", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Lehrer' means teacher - helping teacher.",
          level: 2,
          vocabularyIds: ["lehrer", "helfen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne zur Schule.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - enjoying going to school.",
          level: 2,
          vocabularyIds: ["gehen", "schule"]
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
          type: "tts",
          audioText: "Mein Lehrer erklärt die Mathematik sehr gut. Ich verstehe alles.",
          topics: ["Talking about school", "Talking about work", "Family", "Hobbies"],
          correct: 0,
          explanation: "The speaker is saying their teacher explains math very well and they understand everything.",
          level: 2,
          vocabularyIds: ["lehrer", "verstehen"]
        }
      ]
    ]
  },
  cities: {
    sets: [
      [
        // Level 1 exercises
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
          type: "missing-word",
          sentence: "In welchem ___ wohnen Sie?", 
          options: ["Land", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Land' means country - asking where someone lives.",
          level: 1,
          vocabularyIds: ["land"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in einer Stadt.",
          options: ["wohne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'wohne' means I live - living in a city.",
          level: 1,
          vocabularyIds: ["wohnen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist groß.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - large city.",
          level: 1,
          vocabularyIds: ["stadt", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Stadt.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - seeing a city.",
          level: 1,
          vocabularyIds: ["sehen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist schön.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - beautiful city.",
          level: 1,
          vocabularyIds: ["stadt", "schön"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in die Stadt.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to the city.",
          level: 1,
          vocabularyIds: ["gehen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist gut.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - good city.",
          level: 1,
          vocabularyIds: ["stadt", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ von der Stadt.",
          options: ["komme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'komme' means I come - coming from the city.",
          level: 1,
          vocabularyIds: ["kommen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist wichtig.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - important city.",
          level: 1,
          vocabularyIds: ["stadt", "wichtig"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Stadt.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being in the city.",
          level: 1,
          vocabularyIds: ["sein", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist neu.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - new city.",
          level: 1,
          vocabularyIds: ["stadt", "neu"]
        },
        {
          type: "tts",
          audioText: "Ich wohne in einer großen Stadt.",
          topics: ["Talking about cities", "Travel", "Shopping", "Hobbies"],
          correct: 0,
          explanation: "The speaker is saying they live in a large city.",
          level: 1,
          vocabularyIds: ["wohnen", "stadt"]
        }
      ],
      [
        // Level 2 exercises
        {
          type: "missing-word",
          sentence: "Ich ___ diese Stadt sehr.",
          options: ["liebe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'liebe' means I love - loving this city.",
          level: 2,
          vocabularyIds: ["lieben", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ hat viele Sehenswürdigkeiten.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - city with many sights.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ die Stadt.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting the city.",
          level: 2,
          vocabularyIds: ["besuchen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist sehr lebendig.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - very lively city.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ durch die Stadt.",
          options: ["laufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'laufe' means I walk - walking through the city.",
          level: 2,
          vocabularyIds: ["laufen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist historisch.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - historical city.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ die Stadt gut.",
          options: ["kenne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kenne' means I know - knowing the city well.",
          level: 2,
          vocabularyIds: ["wissen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist modern.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - modern city.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Stadt.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - working in the city.",
          level: 2,
          vocabularyIds: ["arbeiten", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ hat viele Restaurants.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - city with many restaurants.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ die Stadt gerne.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - enjoying visiting the city.",
          level: 2,
          vocabularyIds: ["besuchen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist berühmt.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - famous city.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ die Stadt.",
          options: ["mag", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'mag' means I like - liking the city.",
          level: 2,
          vocabularyIds: ["mögen", "stadt"]
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
          type: "tts",
          audioText: "Diese Stadt ist sehr schön. Ich möchte hier bleiben.",
          topics: ["Talking about cities", "Talking about travel", "Shopping", "Hobbies"],
          correct: 0,
          explanation: "The speaker is saying the city is very beautiful and they want to stay here.",
          level: 2,
          vocabularyIds: ["stadt", "schön"]
        }
      ]
    ]
  }
};
