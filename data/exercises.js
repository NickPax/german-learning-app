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
          translation: "I would like a bottle of water.",
          level: 1,
          vocabularyIds: ["wasser"]
        },
        {
          type: "missing-word",
          sentence: "Kann ich bitte ein ___ haben?",
          options: ["Brot", "Auto", "Haus", "Stuhl"],
          correct: 0,
          explanation: "'Brot' means bread - a staple food in German cuisine.",
          translation: "Can I please have a bread?",
          level: 1,
          vocabularyIds: ["brot"]
        },
        {
          type: "missing-word",
          sentence: "Ich trinke gerne ___.", 
          options: ["Wasser", "Auto", "Haus", "Stuhl"],
          correct: 0,
          explanation: "'Wasser' means water - a common drink.",
          translation: "I like to drink water.",
          level: 1,
          vocabularyIds: ["wasser"]
        },
        {
          type: "tts",
          audioText: "Was möchtest du essen?",
          translation: "What would you like to eat?",
          topics: ["Making a request", "Asking for information", "Expressing preferences", "Talking about daily routines"],
          correct: 0,
          explanation: "The speaker is asking what someone would like to eat.",
          level: 1,
          vocabularyIds: ["essen"]
        },
        {
          type: "missing-word",
          sentence: "Das Essen schmeckt sehr ___.", 
          options: ["gut", "schlecht", "groß", "klein"],
          correct: 0,
          explanation: "'gut' means good - used to describe tasty food.",
          translation: "The food tastes very good.",
          level: 1,
          vocabularyIds: ["gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["esse", "gehe", "komme", "mache"],
          correct: 0,
          explanation: "'esse' means I eat - basic food verb.",
          translation: "I like to eat.",
          level: 1,
          vocabularyIds: ["essen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Wasser.",
          options: ["trinke", "gehe", "komme", "mache"],
          correct: 0,
          explanation: "'trinke' means I drink - used with beverages.",
          translation: "I like to drink water.",
          level: 1,
          vocabularyIds: ["trinken", "wasser"]
        },
        {
          type: "missing-word",
          sentence: "Das ___ ist gut.",
          options: ["Essen", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Essen' means food - what you eat.",
          translation: "The food is good.",
          level: 1,
          vocabularyIds: ["essen"]
        },
        {
          type: "tts",
          audioText: "Ich habe Hunger. Lass uns etwas essen gehen.",
          translation: "I am hungry. Let's go eat something.",
          topics: ["Making a suggestion", "Expressing a need", "Talking about family", "Describing feelings"],
          correct: 0,
          explanation: "The speaker is saying they're hungry and suggesting to go eat.",
          level: 1,
          vocabularyIds: ["hunger", "essen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe ___.",
          options: ["Hunger", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hunger' means hunger - feeling hungry.",
          translation: "I am hungry.",
          level: 1,
          vocabularyIds: ["hunger"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Brot.",
          options: ["esse", "gehe", "komme", "mache"],
          correct: 0,
          explanation: "'esse' means I eat - consuming food.",
          translation: "I eat bread.",
          level: 1,
          vocabularyIds: ["essen", "brot"]
        },
        {
          type: "missing-word",
          sentence: "Das Essen ist ___.",
          options: ["gut", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'gut' means good - describing food quality.",
          translation: "The food is good.",
          level: 1,
          vocabularyIds: ["gut", "essen"]
        },
        {
          type: "tts",
          audioText: "Das Essen schmeckt sehr gut!",
          translation: "The food tastes very good!",
          topics: ["Expressing satisfaction", "Giving a compliment", "Describing experiences", "Talking about quality"],
          correct: 1,
          explanation: "The speaker is praising the food.",
          level: 1,
          vocabularyIds: ["essen", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Essen.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to eat.",
          translation: "I go to eat.",
          level: 1,
          vocabularyIds: ["gehen", "essen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ ein Restaurant.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - noticing a restaurant.",
          translation: "I see a restaurant.",
          level: 1,
          vocabularyIds: ["sehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute Abend.",
          options: ["esse", "gehe", "komme", "mache"],
          correct: 0,
          explanation: "'esse' means I eat - eating in the evening.",
          translation: "I eat tonight.",
          level: 1,
          vocabularyIds: ["essen"]
        },
        {
          type: "tts",
          audioText: "Kann ich bitte die Speisekarte haben?",
          translation: "Can I please have the menu?",
          topics: ["Making a polite request", "Asking for information", "Expressing a need", "Talking about services"],
          correct: 0,
          explanation: "The speaker is asking for the menu.",
          level: 1,
          vocabularyIds: ["essen"]
        },
        {
          type: "missing-word",
          sentence: "Das ___ ist lecker.",
          options: ["Essen", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Essen' means food - something delicious.",
          translation: "The food is delicious.",
          level: 1,
          vocabularyIds: ["essen"]
        },
        {
          type: "tts",
          audioText: "Ich möchte bitte ein Brot und eine Flasche Wasser.",
          translation: "I would like a bread and a bottle of water, please.",
          topics: ["Making a polite request", "Expressing preferences", "Asking for information", "Talking about needs"],
          correct: 0,
          explanation: "The speaker is ordering bread and water.",
          level: 1,
          vocabularyIds: ["brot", "wasser"]
        },
        {
          type: "tts",
          audioText: "Ich trinke gerne Kaffee am Morgen.",
          translation: "I like to drink coffee in the morning.",
          topics: ["Talking about daily routines", "Expressing preferences", "Describing habits", "Talking about hobbies"],
          correct: 0,
          explanation: "The speaker is talking about drinking coffee in the morning.",
          level: 1,
          vocabularyIds: ["trinken"]
        },
        {
          type: "tts",
          audioText: "Das Restaurant ist sehr gut.",
          translation: "The restaurant is very good.",
          topics: ["Giving a compliment", "Expressing satisfaction", "Describing experiences", "Talking about quality"],
          correct: 1,
          explanation: "The speaker is praising the restaurant.",
          level: 1,
          vocabularyIds: ["essen", "gut"]
        },
        {
          type: "tts",
          audioText: "Ich esse gerne Obst und Gemüse.",
          translation: "I like to eat fruit and vegetables.",
          topics: ["Expressing preferences", "Talking about health", "Describing habits", "Talking about lifestyle"],
          correct: 0,
          explanation: "The speaker is talking about eating healthy food.",
          level: 1,
          vocabularyIds: ["essen"]
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
          translation: "I like to eat meat.",
          level: 2,
          vocabularyIds: ["fleisch"]
        },
        {
          type: "missing-word",
          sentence: "Möchten Sie ein ___ oder Tee?",
          options: ["Bier", "Kaffee", "Wasser", "Milch"],
          correct: 1,
          explanation: "'Kaffee' means coffee - a common alternative to tea.",
          translation: "Would you like a coffee or tea?",
          level: 2,
          vocabularyIds: ["kaffee", "tee"]
        },
        {
          type: "missing-word",
          sentence: "Ich trinke gerne ___.", 
          options: ["Kaffee", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Kaffee' means coffee - a popular beverage.",
          translation: "I like to drink coffee.",
          level: 2,
          vocabularyIds: ["kaffee"]
        },
        {
          type: "tts",
          audioText: "Ich hätte gerne ein Stück Kuchen zum Nachtisch.",
          translation: "I would like a piece of cake for dessert.",
          topics: ["Making a polite request", "Expressing preferences", "Talking about needs", "Describing experiences"],
          correct: 0,
          explanation: "The speaker is ordering cake for dessert.",
          level: 2,
          vocabularyIds: ["essen"]
        },
        {
          type: "missing-word",
          sentence: "Ich esse gerne ___.", 
          options: ["Obst", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Obst' means fruit - healthy food choice.",
          translation: "I like to eat fruit.",
          level: 2,
          vocabularyIds: ["obst"]
        },
        {
          type: "missing-word",
          sentence: "Ich trinke ___.",
          options: ["Milch", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Milch' means milk - a common drink.",
          translation: "I drink milk.",
          level: 2,
          vocabularyIds: ["milch"]
        },
        {
          type: "missing-word",
          sentence: "Ich esse gerne ___.", 
          options: ["Gemüse", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Gemüse' means vegetables - healthy food.",
          translation: "I like to eat vegetables.",
          level: 2,
          vocabularyIds: ["gemüse"]
        },
        {
          type: "tts",
          audioText: "Dieses Restaurant serviert sehr gutes italienisches Essen.",
          translation: "This restaurant serves very good Italian food.",
          topics: ["Giving a compliment", "Expressing satisfaction", "Describing experiences", "Talking about quality"],
          correct: 0,
          explanation: "The speaker is praising the Italian food at the restaurant.",
          level: 2,
          vocabularyIds: ["essen", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich trinke ein ___ Bier.",
          options: ["kaltes", "großes", "kleines", "neues"],
          correct: 0,
          explanation: "'kaltes' means cold - describing beer temperature.",
          translation: "I drink a cold beer.",
          level: 2,
          vocabularyIds: ["bier"]
        },
        {
          type: "missing-word",
          sentence: "Das ___ schmeckt gut.",
          options: ["Getränk", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Getränk' means drink - beverage.",
          translation: "The drink tastes good.",
          level: 2,
          vocabularyIds: ["getränk"]
        },
        {
          type: "missing-word",
          sentence: "Ich esse einen ___.", 
          options: ["Apfel", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Apfel' means apple - a fruit.",
          translation: "I eat an apple.",
          level: 2,
          vocabularyIds: ["apfel"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir bitte die Rechnung bringen?",
          translation: "Can you please bring me the bill?",
          topics: ["Making a polite request", "Asking for information", "Expressing a need", "Talking about services"],
          correct: 0,
          explanation: "The speaker is asking for the bill at a restaurant.",
          level: 2,
          vocabularyIds: ["essen"]
        },
        {
          type: "missing-word",
          sentence: "Ich trinke eine Tasse ___.", 
          options: ["Tee", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Tee' means tea - a hot beverage.",
          translation: "I drink a cup of tea.",
          level: 2,
          vocabularyIds: ["tee"]
        },
        {
          type: "missing-word",
          sentence: "Ich esse gerne ___.", 
          options: ["Fisch", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Fisch' means fish - seafood.",
          translation: "I like to eat fish.",
          level: 2,
          vocabularyIds: ["fisch"]
        },
        {
          type: "missing-word",
          sentence: "Ich trinke ein Glas ___.", 
          options: ["Wein", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Wein' means wine - an alcoholic beverage.",
          translation: "I drink a glass of wine.",
          level: 2,
          vocabularyIds: ["wein"]
        },
        {
          type: "missing-word",
          sentence: "Ich esse ein Stück ___.", 
          options: ["Käse", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Käse' means cheese - dairy product.",
          translation: "I eat a piece of cheese.",
          level: 2,
          vocabularyIds: ["käse"]
        },
        {
          type: "tts",
          audioText: "Das Essen war sehr lecker! Können wir bitte die Rechnung haben?",
          translation: "The food was very delicious! Can we please have the bill?",
          topics: ["Complaining about food", "Praising food", "Asking for directions", "Ordering clothes"],
          correct: 1,
          explanation: "The speaker is praising the food ('lecker' means delicious) and asking for the bill.",
          level: 2,
          vocabularyIds: ["essen", "gut"]
        },
        {
          type: "tts",
          audioText: "Ich hätte gerne ein Stück Kuchen und eine Tasse Kaffee, bitte.",
          translation: "I would like a piece of cake and a cup of coffee, please.",
          topics: ["Making a polite request", "Asking for information", "Expressing a need", "Talking about services"],
          correct: 0,
          explanation: "The speaker is ordering a piece of cake and a cup of coffee.",
          level: 2,
          vocabularyIds: ["kaffee", "essen"]
        },
        {
          type: "tts",
          audioText: "Ich bevorzuge vegetarisches Essen.",
          translation: "I prefer vegetarian food.",
          topics: ["Expressing preferences", "Talking about health", "Describing habits", "Talking about lifestyle"],
          correct: 0,
          explanation: "The speaker is expressing a preference for vegetarian food.",
          level: 2,
          vocabularyIds: ["essen"]
        },
        {
          type: "tts",
          audioText: "Könnten Sie mir bitte die Speisekarte zeigen?",
          translation: "Could you please show me the menu?",
          topics: ["Making a polite request", "Asking for information", "Expressing a need", "Talking about services"],
          correct: 0,
          explanation: "The speaker is politely asking to see the menu.",
          level: 2,
          vocabularyIds: ["essen"]
        },
        {
          type: "tts",
          audioText: "Das Frühstück war köstlich!",
          translation: "The breakfast was delicious!",
          topics: ["Giving a compliment", "Expressing satisfaction", "Describing experiences", "Talking about quality"],
          correct: 0,
          explanation: "The speaker is praising the breakfast.",
          level: 2,
          vocabularyIds: ["essen"]
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
          translation: "Where is the train station?",
          level: 1,
          vocabularyIds: ["bahnhof"]
        },
        {
          type: "missing-word",
          sentence: "Ich fahre mit dem ___ nach Berlin.",
          options: ["Zug", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Zug' means train - a common mode of transportation.",
          translation: "I travel by train to Berlin.",
          level: 1,
          vocabularyIds: ["zug", "fahren"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit dem Auto.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I drive/travel - used with vehicles.",
          translation: "I drive by car.",
          level: 1,
          vocabularyIds: ["fahren", "auto"]
        },
        {
          type: "missing-word",
          sentence: "Wo ___ ich hin?",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - asking where to go.",
          translation: "Where do I go?",
          level: 1,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ nach Hause.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going home.",
          translation: "I go home.",
          level: 1,
          vocabularyIds: ["gehen", "haus"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit dem Bus.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I travel - using the bus.",
          translation: "I travel by bus.",
          level: 1,
          vocabularyIds: ["fahren", "bus"]
        },
        {
          type: "tts",
          audioText: "Wo ist der nächste Bahnhof?",
          translation: "Where is the nearest train station?",
          topics: ["Asking for directions", "Asking for information", "Expressing a need", "Talking about locations"],
          correct: 0,
          explanation: "The speaker is asking for directions to the train station.",
          level: 1,
          vocabularyIds: ["bahnhof"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Bahnhof.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to the station.",
          translation: "I go to the train station.",
          level: 1,
          vocabularyIds: ["gehen", "bahnhof"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ fährt ab.",
          options: ["Zug", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Zug' means train - departing train.",
          translation: "The train departs.",
          level: 1,
          vocabularyIds: ["zug"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit dem Zug.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I travel - by train.",
          translation: "I travel by train.",
          level: 1,
          vocabularyIds: ["fahren", "zug"]
        },
        {
          type: "tts",
          audioText: "Ich fahre morgen nach München.",
          translation: "I'm traveling to Munich tomorrow.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing future activities"],
          correct: 0,
          explanation: "The speaker is talking about traveling to Munich tomorrow.",
          level: 1,
          vocabularyIds: ["fahren"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute.",
          options: ["reise", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'reise' means I travel - traveling today.",
          translation: "I travel today.",
          level: 1,
          vocabularyIds: ["reisen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in eine andere Stadt.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I travel - to another city.",
          translation: "I travel to another city.",
          level: 1,
          vocabularyIds: ["fahren", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Wo ___ der Zug?",
          options: ["ist", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'ist' means is - asking where the train is.",
          translation: "Where is the train?",
          level: 1,
          vocabularyIds: ["sein", "zug"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Flughafen.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to the airport.",
          translation: "I go to the airport.",
          level: 1,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ kommt an.",
          options: ["Zug", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Zug' means train - arriving train.",
          translation: "The train arrives.",
          level: 1,
          vocabularyIds: ["zug", "kommen"]
        },
        {
          type: "tts",
          audioText: "Wo ist der nächste Bahnhof?",
          translation: "Where is the nearest train station?",
          topics: ["Asking for directions", "Asking for information", "Expressing a need", "Talking about locations"],
          correct: 0,
          explanation: "The speaker is asking where the nearest train station is.",
          level: 1,
          vocabularyIds: ["bahnhof"]
        },
        {
          type: "tts",
          audioText: "Ich muss zum Flughafen. Wie komme ich dorthin?",
          translation: "I need to go to the airport. How do I get there?",
          topics: ["Asking for directions", "Travel", "Shopping", "Ordering food"],
          correct: 0,
          explanation: "The speaker is asking for directions to the airport.",
          level: 1,
          vocabularyIds: ["flughafen"]
        },
        {
          type: "tts",
          audioText: "Der Zug fährt in fünf Minuten ab.",
          translation: "The train departs in five minutes.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is informing about train departure time.",
          level: 1,
          vocabularyIds: ["zug", "fahren"]
        },
        {
          type: "tts",
          audioText: "Ich reise gerne mit dem Zug.",
          translation: "I like to travel by train.",
          topics: ["Expressing preferences", "Talking about transportation", "Making plans", "Describing daily routines"],
          correct: 1,
          explanation: "The speaker is expressing a preference for train travel.",
          level: 1,
          vocabularyIds: ["reisen", "zug"]
        },
        {
          type: "tts",
          audioText: "Wann kommt der nächste Bus?",
          translation: "When does the next bus come?",
          topics: ["Asking for directions", "Travel", "Shopping", "Ordering food"],
          correct: 0,
          explanation: "The speaker is asking about bus schedule.",
          level: 1,
          vocabularyIds: ["bus", "kommen"]
        },
        {
          type: "tts",
          audioText: "Ich fahre mit dem Auto nach Hause.",
          translation: "I'm driving home by car.",
          topics: ["Talking about transportation", "Describing activities", "Talking about family", "Expressing intentions"],
          correct: 0,
          explanation: "The speaker is talking about driving home.",
          level: 1,
          vocabularyIds: ["fahren", "auto", "haus"]
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
          translation: "My plane lands at the airport.",
          level: 2,
          vocabularyIds: ["flughafen", "flugzeug"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe einen ___ gebucht.",
          options: ["Urlaub", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Urlaub' means vacation - something you book for travel.",
          translation: "I have booked a vacation.",
          level: 2,
          vocabularyIds: ["urlaub", "buchen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit dem Flugzeug.",
          options: ["fliege", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fliege' means I fly - traveling by plane.",
          translation: "I fly by plane.",
          level: 2,
          vocabularyIds: ["fliegen", "flugzeug"]
        },
        {
          type: "tts",
          audioText: "Ich fliege nächste Woche nach Paris.",
          translation: "I'm flying to Paris next week.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is talking about flying to Paris next week.",
          level: 2,
          vocabularyIds: ["fliegen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Karte.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - purchasing a ticket.",
          translation: "I buy a ticket.",
          level: 2,
          vocabularyIds: ["kaufen", "karte"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit dem Fahrrad.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I ride - using a bicycle.",
          translation: "I ride a bicycle.",
          level: 2,
          vocabularyIds: ["fahren", "fahrrad"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Reise.",
          options: ["plane", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'plane' means I plan - planning a trip.",
          translation: "I plan a trip.",
          level: 2,
          vocabularyIds: ["planen", "reise"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ im Hotel.",
          options: ["wohne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'wohne' means I stay - staying at a hotel.",
          translation: "I stay at the hotel.",
          level: 2,
          vocabularyIds: ["wohnen", "hotel"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ am Bahnhof an.",
          options: ["komme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'komme' means I arrive - arriving at the station.",
          translation: "I arrive at the train station.",
          level: 2,
          vocabularyIds: ["kommen", "bahnhof"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ vom Flughafen ab.",
          options: ["fahre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fahre' means I depart - leaving the airport.",
          translation: "I depart from the airport.",
          level: 2,
          vocabularyIds: ["fahren", "flughafen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in den Zug ein.",
          options: ["steige", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'steige' means I board - getting on the train.",
          translation: "I board the train.",
          level: 2,
          vocabularyIds: ["einsteigen", "zug"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ aus dem Bus aus.",
          options: ["steige", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'steige' means I get off - exiting the bus.",
          translation: "I get off the bus.",
          level: 2,
          vocabularyIds: ["aussteigen", "bus"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ ein Hotel.",
          options: ["reserviere", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'reserviere' means I reserve - booking a hotel.",
          translation: "I reserve a hotel.",
          level: 2,
          vocabularyIds: ["reservieren", "hotel"]
        },
        {
          type: "tts",
          audioText: "Ich habe ein Hotelzimmer für drei Nächte reserviert.",
          translation: "I have reserved a hotel room for three nights.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is talking about a hotel reservation.",
          level: 2,
          vocabularyIds: ["hotel"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Reise.",
          options: ["buche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'buche' means I book - booking a trip.",
          translation: "I book a trip.",
          level: 2,
          vocabularyIds: ["buchen", "reise"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir bitte den Weg zum Flughafen zeigen?",
          translation: "Can you please show me the way to the airport?",
          topics: ["Asking for directions", "Travel", "Shopping", "Ordering food"],
          correct: 0,
          explanation: "The speaker is asking for directions to the airport.",
          level: 2,
          vocabularyIds: ["flughafen"]
        },
        {
          type: "tts",
          audioText: "Der Zug hat Verspätung. Wann kommt der nächste?",
          translation: "The train is delayed. When does the next one come?",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is asking about train delays and the next train.",
          level: 2,
          vocabularyIds: ["zug"]
        },
        {
          type: "tts",
          audioText: "Ich reise gerne in verschiedene Länder.",
          translation: "I like to travel to different countries.",
          topics: ["Expressing preferences", "Talking about transportation", "Describing activities", "Talking about hobbies"],
          correct: 0,
          explanation: "The speaker is expressing enjoyment of traveling to different countries.",
          level: 2,
          vocabularyIds: ["reisen"]
        },
        {
          type: "tts",
          audioText: "Wo kann ich eine Fahrkarte kaufen?",
          translation: "Where can I buy a ticket?",
          topics: ["Asking for directions", "Travel", "Shopping", "Ordering food"],
          correct: 0,
          explanation: "The speaker is asking where to buy a ticket.",
          level: 2,
          vocabularyIds: ["kaufen", "karte"]
        },
        {
          type: "tts",
          audioText: "Entschuldigung, wie komme ich zum Hauptbahnhof?",
          translation: "Excuse me, how do I get to the main train station?",
          topics: ["Asking for directions", "Ordering food", "Shopping", "Complaining"],
          correct: 0,
          explanation: "The speaker is asking for directions to the main train station.",
          level: 2,
          vocabularyIds: ["bahnhof", "kommen"]
        },
        {
          type: "tts",
          audioText: "Ich muss morgen früh zum Flughafen fahren.",
          translation: "I need to drive to the airport early tomorrow.",
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
          translation: "My family is very nice.",
          level: 1,
          vocabularyIds: ["familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Familie.",
          options: ["liebe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'liebe' means I love - expressing affection for family.",
          translation: "I love my family.",
          level: 1,
          vocabularyIds: ["lieben", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Familie sehr.",
          options: ["liebe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'liebe' means I love - strong family bond.",
          translation: "I love my family very much.",
          level: 1,
          vocabularyIds: ["lieben", "familie"]
        },
        {
          type: "tts",
          audioText: "Ich liebe meine Familie sehr.",
          translation: "I love my family very much.",
          topics: ["Talking about family", "Ordering food", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is expressing love for their family.",
          level: 1,
          vocabularyIds: ["lieben", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist groß.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - describing family size.",
          translation: "My family is large.",
          level: 1,
          vocabularyIds: ["familie", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meiner Familie.",
          options: ["wohne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'wohne' means I live - living with family.",
          translation: "I live with my family.",
          level: 1,
          vocabularyIds: ["wohnen", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Familie jeden Tag.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - seeing family daily.",
          translation: "I see my family every day.",
          level: 1,
          vocabularyIds: ["sehen", "familie"]
        },
        {
          type: "tts",
          audioText: "Meine Familie ist sehr wichtig für mich.",
          translation: "My family is very important to me.",
          topics: ["Talking about family", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is expressing the importance of family.",
          level: 1,
          vocabularyIds: ["familie", "wichtig"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist wichtig.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - family is important.",
          translation: "My family is important.",
          level: 1,
          vocabularyIds: ["familie", "wichtig"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zu meiner Familie.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to family.",
          translation: "I go to my family.",
          level: 1,
          vocabularyIds: ["gehen", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ von meiner Familie.",
          options: ["komme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'komme' means I come - coming from family.",
          translation: "I come from my family.",
          level: 1,
          vocabularyIds: ["kommen", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist schön.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - beautiful family.",
          translation: "My family is beautiful.",
          level: 1,
          vocabularyIds: ["familie", "schön"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meiner Familie.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being with family.",
          translation: "I am with my family.",
          level: 1,
          vocabularyIds: ["sein", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Familie gern.",
          options: ["habe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'habe' means I have - having family.",
          translation: "I have my family gladly.",
          level: 1,
          vocabularyIds: ["haben", "familie"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist gut.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - good family.",
          translation: "My family is good.",
          level: 1,
          vocabularyIds: ["familie", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zu meiner Familie nach Hause.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going home to family.",
          translation: "I go home to my family.",
          level: 1,
          vocabularyIds: ["gehen", "familie", "haus"]
        },
        {
          type: "tts",
          audioText: "Ich liebe meine Familie sehr.",
          translation: "I love my family very much.",
          topics: ["Talking about family", "Ordering food", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is expressing love for their family.",
          level: 1,
          vocabularyIds: ["lieben", "familie"]
        },
        {
          type: "tts",
          audioText: "Ich wohne mit meiner Familie zusammen.",
          translation: "I live together with my family.",
          topics: ["Talking about family", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about living with family.",
          level: 1,
          vocabularyIds: ["wohnen", "familie"]
        },
        {
          type: "tts",
          audioText: "Meine Familie ist sehr groß und nett.",
          translation: "My family is very large and nice.",
          topics: ["Talking about family", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is describing their family.",
          level: 1,
          vocabularyIds: ["familie"]
        },
        {
          type: "tts",
          audioText: "Ich sehe meine Familie jeden Sonntag.",
          translation: "I see my family every Sunday.",
          topics: ["Talking about family", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about seeing family regularly.",
          level: 1,
          vocabularyIds: ["sehen", "familie"]
        },
        {
          type: "tts",
          audioText: "Ich gehe heute zu meiner Familie.",
          translation: "I'm going to my family today.",
          topics: ["Talking about family", "Travel", "Shopping", "Ordering food"],
          correct: 0,
          explanation: "The speaker is going to visit family.",
          level: 1,
          vocabularyIds: ["gehen", "familie"]
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
          translation: "My father works as a teacher.",
          level: 2,
          vocabularyIds: ["vater", "lehrer"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe einen ___ und eine Schwester.",
          options: ["Bruder", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Bruder' means brother - a sibling.",
          translation: "I have a brother and a sister.",
          level: 2,
          vocabularyIds: ["bruder", "schwester"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist meine beste Freundin.",
          options: ["Tochter", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Tochter' means daughter - a family member.",
          translation: "My daughter is my best friend.",
          level: 2,
          vocabularyIds: ["tochter", "freundin"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ kocht sehr gut.",
          options: ["Mutter", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Mutter' means mother - family member who cooks.",
          translation: "My mother cooks very well.",
          level: 2,
          vocabularyIds: ["mutter", "kochen"]
        },
        {
          type: "tts",
          audioText: "Meine Mutter kocht heute Abend für die ganze Familie.",
          translation: "My mother is cooking for the whole family tonight.",
          topics: ["Talking about family", "Ordering food", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their mother cooking for the family.",
          level: 2,
          vocabularyIds: ["mutter", "familie", "kochen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe einen ___.",
          options: ["Sohn", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Sohn' means son - a family member.",
          translation: "I have a son.",
          level: 2,
          vocabularyIds: ["sohn"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist sehr nett.",
          options: ["Vater", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Vater' means father - nice father.",
          translation: "My father is very nice.",
          level: 2,
          vocabularyIds: ["vater"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe eine ___.",
          options: ["Schwester", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schwester' means sister - a sibling.",
          translation: "I have a sister.",
          level: 2,
          vocabularyIds: ["schwester"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist mein bester Freund.",
          options: ["Bruder", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Bruder' means brother - best friend.",
          translation: "My brother is my best friend.",
          level: 2,
          vocabularyIds: ["bruder", "freund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Mutter.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting mother.",
          translation: "I visit my mother.",
          level: 2,
          vocabularyIds: ["besuchen", "mutter"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist sehr freundlich.",
          options: ["Familie", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Familie' means family - friendly family.",
          translation: "My family is very friendly.",
          level: 2,
          vocabularyIds: ["familie"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meinem Vater.",
          options: ["spreche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spreche' means I speak - talking with father.",
          translation: "I speak with my father.",
          level: 2,
          vocabularyIds: ["sprechen", "vater"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ hilft mir immer.",
          options: ["Mutter", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Mutter' means mother - always helping.",
          translation: "My mother always helps me.",
          level: 2,
          vocabularyIds: ["mutter", "helfen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meine Schwester sehr.",
          options: ["liebe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'liebe' means I love - loving sister.",
          translation: "I love my sister very much.",
          level: 2,
          vocabularyIds: ["lieben", "schwester"]
        },
        {
          type: "tts",
          audioText: "Meine Mutter kocht heute Abend für die ganze Familie.",
          translation: "My mother is cooking for the whole family tonight.",
          topics: ["Talking about family", "Ordering food", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their mother cooking for the family.",
          level: 2,
          vocabularyIds: ["mutter", "familie", "kochen"]
        },
        {
          type: "tts",
          audioText: "Mein Vater arbeitet von Montag bis Freitag im Büro.",
          translation: "My father works Monday to Friday in the office.",
          topics: ["Talking about family", "Talking about work", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their father working Monday to Friday in the office.",
          level: 2,
          vocabularyIds: ["vater", "arbeiten"]
        },
        {
          type: "tts",
          audioText: "Ich habe zwei Geschwister: einen Bruder und eine Schwester.",
          translation: "I have two siblings: a brother and a sister.",
          topics: ["Talking about family", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about their siblings.",
          level: 2,
          vocabularyIds: ["bruder", "schwester"]
        },
        {
          type: "tts",
          audioText: "Mein Bruder ist mein bester Freund.",
          translation: "My brother is my best friend.",
          topics: ["Talking about family", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about their close relationship with their brother.",
          level: 2,
          vocabularyIds: ["bruder", "freund"]
        },
        {
          type: "tts",
          audioText: "Ich besuche meine Großeltern am Wochenende.",
          translation: "I visit my grandparents on the weekend.",
          topics: ["Talking about family", "Travel", "Shopping", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about visiting grandparents.",
          level: 2,
          vocabularyIds: ["besuchen"]
        },
        {
          type: "tts",
          audioText: "Meine Tochter geht zur Schule.",
          translation: "My daughter goes to school.",
          topics: ["Talking about family", "Talking about school", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their daughter going to school.",
          level: 2,
          vocabularyIds: ["tochter", "schule"]
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
          translation: "I go shopping in the store.",
          level: 1,
          vocabularyIds: ["laden", "kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ ein Buch.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - the action of shopping.",
          translation: "I buy a book.",
          level: 1,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Laden.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to the shop.",
          translation: "I go to the store.",
          level: 1,
          vocabularyIds: ["gehen", "laden"]
        },
        {
          type: "tts",
          audioText: "Ich gehe heute einkaufen.",
          translation: "I'm going shopping today.",
          topics: ["Making plans", "Describing activities", "Talking about daily routines", "Expressing intentions"],
          correct: 0,
          explanation: "The speaker is saying they're going shopping today.",
          level: 1,
          vocabularyIds: ["gehen", "kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ etwas.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - buying something.",
          translation: "I buy something.",
          level: 1,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ im Laden.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being in the shop.",
          translation: "I am in the store.",
          level: 1,
          vocabularyIds: ["sein", "laden"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ den Laden.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - seeing the shop.",
          translation: "I see the store.",
          level: 1,
          vocabularyIds: ["sehen", "laden"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - enjoying shopping.",
          translation: "I like to buy.",
          level: 1,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ ist groß.",
          options: ["Laden", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Laden' means shop - large shop.",
          translation: "The store is large.",
          level: 1,
          vocabularyIds: ["laden", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute einkaufen.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going shopping today.",
          translation: "I go shopping today.",
          level: 1,
          vocabularyIds: ["gehen", "kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ viel.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - buying a lot.",
          translation: "I buy a lot.",
          level: 1,
          vocabularyIds: ["kaufen", "viel"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ ist gut.",
          options: ["Laden", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Laden' means shop - good shop.",
          translation: "The store is good.",
          level: 1,
          vocabularyIds: ["laden", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Einkaufen.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going shopping.",
          translation: "I go shopping.",
          level: 1,
          vocabularyIds: ["gehen", "kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ im Laden.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - in the shop.",
          translation: "I am in the store.",
          level: 1,
          vocabularyIds: ["sein", "laden"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ etwas Neues.",
          options: ["kaufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kaufe' means I buy - buying something new.",
          translation: "I buy something new.",
          level: 1,
          vocabularyIds: ["kaufen", "neu"]
        },
        {
          type: "tts",
          audioText: "Ich gehe heute einkaufen.",
          translation: "I'm going shopping today.",
          topics: ["Making plans", "Describing activities", "Talking about daily routines", "Expressing intentions"],
          correct: 0,
          explanation: "The speaker is saying they're going shopping today.",
          level: 1,
          vocabularyIds: ["gehen", "kaufen"]
        },
        {
          type: "tts",
          audioText: "Wie viel kostet das?",
          translation: "How much does that cost?",
          topics: ["Making plans", "Describing activities", "Talking about daily routines", "Expressing intentions"],
          correct: 0,
          explanation: "The speaker is asking about the price of something.",
          level: 1,
          vocabularyIds: ["kosten"]
        },
        {
          type: "tts",
          audioText: "Ich kaufe gerne neue Kleidung.",
          translation: "I like to buy new clothes.",
          topics: ["Expressing preferences", "Talking about hobbies", "Describing activities", "Talking about lifestyle"],
          correct: 0,
          explanation: "The speaker is talking about shopping for clothes.",
          level: 1,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "tts",
          audioText: "Der Laden ist sehr groß und hat viele Sachen.",
          translation: "The store is very large and has many things.",
          topics: ["Making plans", "Describing activities", "Talking about daily routines", "Expressing intentions"],
          correct: 0,
          explanation: "The speaker is describing a large store.",
          level: 1,
          vocabularyIds: ["laden", "groß"]
        },
        {
          type: "tts",
          audioText: "Ich muss noch einkaufen gehen.",
          translation: "I still need to go shopping.",
          topics: ["Making plans", "Describing activities", "Talking about daily routines", "Expressing intentions"],
          correct: 0,
          explanation: "The speaker is saying they need to go shopping.",
          level: 1,
          vocabularyIds: ["gehen", "kaufen"]
        },
        {
          type: "tts",
          audioText: "Kann ich das bitte kaufen?",
          translation: "Can I please buy that?",
          topics: ["Making a request", "Expressing preferences", "Asking for information", "Talking about needs"],
          correct: 0,
          explanation: "The speaker is asking to buy something.",
          level: 1,
          vocabularyIds: ["kaufen"]
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
          translation: "How much does that cost? What is the price?",
          level: 2,
          vocabularyIds: ["preis", "geld"]
        },
        {
          type: "missing-word",
          sentence: "Ich muss mit ___ bezahlen.",
          options: ["Geld", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Geld' means money - used for payment.",
          translation: "I have to pay with money.",
          level: 2,
          vocabularyIds: ["geld", "bezahlen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ den Preis.",
          options: ["frage", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'frage' means I ask - asking about price.",
          translation: "I ask about the price.",
          level: 2,
          vocabularyIds: ["fragen", "preis"]
        },
        {
          type: "tts",
          audioText: "Wie viel kostet dieses Hemd?",
          translation: "How much does this shirt cost?",
          topics: ["Making plans", "Describing activities", "Talking about daily routines", "Expressing intentions"],
          correct: 0,
          explanation: "The speaker is asking how much this shirt costs.",
          level: 2,
          vocabularyIds: ["preis", "kosten"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ im Restaurant.",
          options: ["bezahle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bezahle' means I pay - paying at restaurant.",
          translation: "I pay at the restaurant.",
          level: 2,
          vocabularyIds: ["bezahlen"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ ist hoch.",
          options: ["Preis", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Preis' means price - high price.",
          translation: "The price is high.",
          level: 2,
          vocabularyIds: ["preis"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe kein ___.",
          options: ["Geld", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Geld' means money - no money.",
          translation: "I have no money.",
          level: 2,
          vocabularyIds: ["geld"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ viel Geld.",
          options: ["habe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'habe' means I have - having money.",
          translation: "I have a lot of money.",
          level: 2,
          vocabularyIds: ["haben", "geld"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ den Preis nicht.",
          options: ["kenne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kenne' means I know - not knowing the price.",
          translation: "I don't know the price.",
          level: 2,
          vocabularyIds: ["wissen", "preis"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ ist billig.",
          options: ["Preis", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Preis' means price - cheap price.",
          translation: "The price is cheap.",
          level: 2,
          vocabularyIds: ["preis", "billig"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit Karte.",
          options: ["bezahle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bezahle' means I pay - paying with card.",
          translation: "I pay with card.",
          level: 2,
          vocabularyIds: ["bezahlen", "karte"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ den Laden.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting the shop.",
          translation: "I visit the store.",
          level: 2,
          vocabularyIds: ["besuchen", "laden"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ nach dem Preis.",
          options: ["frage", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'frage' means I ask - asking for price.",
          translation: "I ask about the price.",
          level: 2,
          vocabularyIds: ["fragen", "preis"]
        },
        {
          type: "missing-word",
          sentence: "Das ___ zu viel.",
          options: ["kostet", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kostet' means costs - too expensive.",
          translation: "That costs too much.",
          level: 2,
          vocabularyIds: ["kosten"]
        },
        {
          type: "tts",
          audioText: "Entschuldigung, wo kann ich diese Schuhe anprobieren?",
          translation: "Excuse me, where can I try on these shoes?",
          topics: ["Making plans", "Describing activities", "Talking about daily routines", "Expressing intentions"],
          correct: 0,
          explanation: "The speaker is asking where they can try on shoes while shopping.",
          level: 2,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "tts",
          audioText: "Wie viel kostet dieses Hemd?",
          translation: "How much does this shirt cost?",
          topics: ["Making plans", "Describing activities", "Talking about daily routines", "Expressing intentions"],
          correct: 0,
          explanation: "The speaker is asking how much this shirt costs.",
          level: 2,
          vocabularyIds: ["preis", "kosten"]
        },
        {
          type: "tts",
          audioText: "Ich bezahle mit Kreditkarte.",
          translation: "I'm paying with credit card.",
          topics: ["Making a request", "Expressing preferences", "Asking for information", "Talking about needs"],
          correct: 0,
          explanation: "The speaker is saying they're paying with a credit card.",
          level: 2,
          vocabularyIds: ["bezahlen", "karte"]
        },
        {
          type: "tts",
          audioText: "Der Preis ist zu hoch für mich.",
          translation: "The price is too high for me.",
          topics: ["Making plans", "Describing activities", "Talking about daily routines", "Expressing intentions"],
          correct: 0,
          explanation: "The speaker is saying the price is too expensive.",
          level: 2,
          vocabularyIds: ["preis"]
        },
        {
          type: "tts",
          audioText: "Haben Sie das in einer anderen Größe?",
          translation: "Do you have that in a different size?",
          topics: ["Making plans", "Describing activities", "Talking about daily routines", "Expressing intentions"],
          correct: 0,
          explanation: "The speaker is asking about different sizes while shopping.",
          level: 2,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "tts",
          audioText: "Ich suche nach einem Geschenk für meine Mutter.",
          translation: "I'm looking for a gift for my mother.",
          topics: ["Making plans", "Talking about family", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is shopping for a gift for their mother.",
          level: 2,
          vocabularyIds: ["kaufen", "mutter"]
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
          translation: "I like to play soccer.",
          level: 1,
          vocabularyIds: ["spielen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Musik.",
          options: ["höre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'höre' means I listen - used for music.",
          translation: "I like to listen to music.",
          level: 1,
          vocabularyIds: ["hören"]
        },
        {
          type: "tts",
          audioText: "Ich spiele gerne Fußball in meiner Freizeit.",
          translation: "I like to play soccer in my free time.",
          topics: ["Talking about hobbies", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about playing soccer as a hobby.",
          level: 1,
          vocabularyIds: ["spielen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["lese", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lese' means I read - a common hobby.",
          translation: "I like to read.",
          level: 1,
          vocabularyIds: ["lesen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - enjoying games.",
          translation: "I like to play.",
          level: 1,
          vocabularyIds: ["spielen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["höre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'höre' means I listen - listening to music.",
          translation: "I like to listen.",
          level: 1,
          vocabularyIds: ["hören"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ jeden Tag.",
          options: ["lese", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lese' means I read - reading daily.",
          translation: "I read every day.",
          level: 1,
          vocabularyIds: ["lesen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Sport.",
          options: ["mache", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'mache' means I do - doing sports.",
          translation: "I like to do sports.",
          level: 1,
          vocabularyIds: ["machen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["tanze", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'tanze' means I dance - dancing hobby.",
          translation: "I like to dance.",
          level: 1,
          vocabularyIds: ["tanzen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["singe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'singe' means I sing - singing hobby.",
          translation: "I like to sing.",
          level: 1,
          vocabularyIds: ["singen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne im Park.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to the park.",
          translation: "I like to go to the park.",
          level: 1,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Filme.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I watch - watching movies.",
          translation: "I like to watch movies.",
          level: 1,
          vocabularyIds: ["sehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["laufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'laufe' means I run/walk - running hobby.",
          translation: "I like to run.",
          level: 1,
          vocabularyIds: ["laufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Musik.",
          options: ["höre", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'höre' means I listen - listening hobby.",
          translation: "I like to listen to music.",
          level: 1,
          vocabularyIds: ["hören"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Spiele.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - playing games.",
          translation: "I like to play games.",
          level: 1,
          vocabularyIds: ["spielen"]
        },
        {
          type: "tts",
          audioText: "Mein Hobby ist Lesen. Ich lese gerne Bücher.",
          translation: "My hobby is reading. I like to read books.",
          topics: ["Talking about hobbies", "Shopping", "Travel", "Work"],
          correct: 0,
          explanation: "The speaker is talking about their hobby of reading books.",
          level: 1,
          vocabularyIds: ["hobby", "lesen"]
        },
        {
          type: "tts",
          audioText: "Ich höre gerne Musik, wenn ich entspanne.",
          translation: "I like to listen to music when I relax.",
          topics: ["Talking about hobbies", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about listening to music as a hobby.",
          level: 1,
          vocabularyIds: ["hören"]
        },
        {
          type: "tts",
          audioText: "Ich sehe gerne Filme am Wochenende.",
          translation: "I like to watch movies on the weekend.",
          topics: ["Talking about hobbies", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about watching movies as a hobby.",
          level: 1,
          vocabularyIds: ["sehen"]
        },
        {
          type: "tts",
          audioText: "Ich mache gerne Sport, um fit zu bleiben.",
          translation: "I like to do sports to stay fit.",
          topics: ["Talking about hobbies", "Talking about health", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about doing sports as a hobby.",
          level: 1,
          vocabularyIds: ["machen", "sport"]
        },
        {
          type: "tts",
          audioText: "Meine Freizeit verbringe ich gerne mit Lesen.",
          translation: "I like to spend my free time reading.",
          topics: ["Talking about hobbies", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about spending free time reading.",
          level: 1,
          vocabularyIds: ["lesen"]
        },
        {
          type: "tts",
          audioText: "Ich spiele gerne Fußball mit meinen Freunden.",
          translation: "I like to play soccer with my friends.",
          topics: ["Talking about hobbies", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about playing soccer with friends.",
          level: 1,
          vocabularyIds: ["spielen"]
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
          translation: "On the weekend I read a good book.",
          level: 2,
          vocabularyIds: ["buch", "lesen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne im Park.",
          options: ["laufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'laufe' means I run/walk - a common hobby.",
          translation: "I like to run in the park.",
          level: 2,
          vocabularyIds: ["laufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne schwimmen.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going swimming.",
          translation: "I like to go swimming.",
          level: 2,
          vocabularyIds: ["gehen", "schwimmen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Gitarre.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - playing guitar.",
          translation: "I like to play guitar.",
          level: 2,
          vocabularyIds: ["spielen"]
        },
        {
          type: "tts",
          audioText: "Ich spiele gerne Gitarre in meiner Freizeit.",
          translation: "I like to play guitar in my free time.",
          topics: ["Talking about hobbies", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about playing guitar as a hobby.",
          level: 2,
          vocabularyIds: ["spielen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne im Fitnessstudio.",
          options: ["trainiere", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'trainiere' means I train - training at gym.",
          translation: "I like to train at the gym.",
          level: 2,
          vocabularyIds: ["trainieren"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Videospiele.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - playing video games.",
          translation: "I like to play video games.",
          level: 2,
          vocabularyIds: ["spielen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne wandern.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going hiking.",
          translation: "I like to go hiking.",
          level: 2,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne kochen.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning to cook.",
          translation: "I like to learn to cook.",
          level: 2,
          vocabularyIds: ["lernen", "kochen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne malen.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning to paint.",
          translation: "I like to learn to paint.",
          level: 2,
          vocabularyIds: ["lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Rad fahren.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going cycling.",
          translation: "I like to go cycling.",
          level: 2,
          vocabularyIds: ["gehen", "fahrrad"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne ins Kino.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to cinema.",
          translation: "I like to go to the cinema.",
          level: 2,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Theater.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting theater.",
          translation: "I like to visit the theater.",
          level: 2,
          vocabularyIds: ["besuchen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Konzerte.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting concerts.",
          translation: "I like to visit concerts.",
          level: 2,
          vocabularyIds: ["besuchen"]
        },
        {
          type: "tts",
          audioText: "Mein Hobby ist Fotografie. Ich fotografiere gerne Landschaften.",
          translation: "My hobby is photography. I like to photograph landscapes.",
          topics: ["Talking about hobbies", "Shopping", "Travel", "Work"],
          correct: 0,
          explanation: "The speaker is talking about their hobby of photography.",
          level: 2,
          vocabularyIds: ["hobby"]
        },
        {
          type: "tts",
          audioText: "Am Wochenende spiele ich gerne Fußball mit meinen Freunden.",
          translation: "On weekends I like to play soccer with my friends.",
          topics: ["Talking about hobbies", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about playing football with friends on weekends.",
          level: 2,
          vocabularyIds: ["spielen", "wochenende"]
        },
        {
          type: "tts",
          audioText: "Ich gehe gerne wandern in den Bergen.",
          translation: "I like to go hiking in the mountains.",
          topics: ["Talking about hobbies", "Travel", "Shopping", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about hiking as a hobby.",
          level: 2,
          vocabularyIds: ["gehen"]
        },
        {
          type: "tts",
          audioText: "Ich trainiere regelmäßig im Fitnessstudio.",
          translation: "I train regularly at the gym.",
          topics: ["Talking about hobbies", "Talking about health", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about regular gym training.",
          level: 2,
          vocabularyIds: ["trainieren"]
        },
        {
          type: "tts",
          audioText: "Meine Hobbys sind Lesen und Musik hören.",
          translation: "My hobbies are reading and listening to music.",
          topics: ["Talking about hobbies", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about their hobbies.",
          level: 2,
          vocabularyIds: ["hobby", "lesen", "hören"]
        },
        {
          type: "tts",
          audioText: "Ich besuche gerne Konzerte und Theateraufführungen.",
          translation: "I like to visit concerts and theater performances.",
          topics: ["Talking about hobbies", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about visiting cultural events.",
          level: 2,
          vocabularyIds: ["besuchen"]
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
          translation: "My dog is called Max.",
          level: 1,
          vocabularyIds: ["hund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - observing your pet.",
          translation: "I see my dog.",
          level: 1,
          vocabularyIds: ["sehen", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund sehr.",
          options: ["liebe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'liebe' means I love - loving your pet.",
          translation: "I love my dog very much.",
          level: 1,
          vocabularyIds: ["lieben", "hund"]
        },
        {
          type: "tts",
          audioText: "Mein Hund heißt Max und ist sehr freundlich.",
          translation: "My dog is called Max and is very friendly.",
          topics: ["Talking about animals", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their dog.",
          level: 1,
          vocabularyIds: ["hund"]
        },
        {
          type: "tts",
          audioText: "Ich liebe meinen Hund sehr. Er ist mein bester Freund.",
          translation: "I love my dog very much. He is my best friend.",
          topics: ["Talking about animals", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is expressing love for their dog.",
          level: 1,
          vocabularyIds: ["lieben", "hund"]
        },
        {
          type: "tts",
          audioText: "Mein Hund läuft gerne im Park.",
          translation: "My dog likes to run in the park.",
          topics: ["Talking about animals", "Talking about hobbies", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their dog running in the park.",
          level: 1,
          vocabularyIds: ["hund", "laufen"]
        },
        {
          type: "tts",
          audioText: "Ich füttere meinen Hund jeden Tag.",
          translation: "I feed my dog every day.",
          topics: ["Talking about animals", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about feeding their dog.",
          level: 1,
          vocabularyIds: ["füttern", "hund"]
        },
        {
          type: "tts",
          audioText: "Mein Hund ist sehr groß und braun.",
          translation: "My dog is very large and brown.",
          topics: ["Talking about animals", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is describing their dog.",
          level: 1,
          vocabularyIds: ["hund", "groß"]
        },
        {
          type: "tts",
          audioText: "Ich habe einen Hund und eine Katze.",
          translation: "I have a dog and a cat.",
          topics: ["Talking about animals", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their pets.",
          level: 1,
          vocabularyIds: ["hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist groß.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - large dog.",
          translation: "My dog is large.",
          level: 1,
          vocabularyIds: ["hund", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund jeden Tag.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - seeing dog daily.",
          translation: "I see my dog every day.",
          level: 1,
          vocabularyIds: ["sehen", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist klein.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - small dog.",
          translation: "My dog is small.",
          level: 1,
          vocabularyIds: ["hund", "klein"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meinem Hund.",
          options: ["spiele", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spiele' means I play - playing with dog.",
          translation: "I play with my dog.",
          level: 1,
          vocabularyIds: ["spielen", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist gut.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - good dog.",
          translation: "My dog is good.",
          level: 1,
          vocabularyIds: ["hund", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund.",
          options: ["habe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'habe' means I have - having a dog.",
          translation: "I have my dog.",
          level: 1,
          vocabularyIds: ["haben", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist schön.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - beautiful dog.",
          translation: "My dog is beautiful.",
          level: 1,
          vocabularyIds: ["hund", "schön"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund gern.",
          options: ["habe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'habe' means I have - having dog gladly.",
          translation: "I have my dog gladly.",
          level: 1,
          vocabularyIds: ["haben", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist nett.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - nice dog.",
          translation: "My dog is nice.",
          level: 1,
          vocabularyIds: ["hund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meinen Hund.",
          options: ["füttere", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'füttere' means I feed - feeding dog.",
          translation: "I feed my dog.",
          level: 1,
          vocabularyIds: ["füttern", "hund"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ läuft schnell.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - fast running dog.",
          translation: "My dog runs fast.",
          level: 1,
          vocabularyIds: ["hund", "laufen"]
        },
        {
          type: "tts",
          audioText: "Mein Hund heißt Max und ist sehr freundlich.",
          translation: "My dog is called Max and is very friendly.",
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
          translation: "The cat sits on the windowsill.",
          level: 2,
          vocabularyIds: ["katze"]
        },
        {
          type: "missing-word",
          sentence: "Im Zoo sehe ich viele ___.", 
          options: ["Tiere", "Häuser", "Autos", "Stühle"],
          correct: 0,
          explanation: "'Tiere' means animals - what you see at the zoo.",
          translation: "At the zoo I see many animals.",
          level: 2,
          vocabularyIds: ["tier"]
        },
        {
          type: "tts",
          audioText: "Ich gehe gerne in den Zoo, um die Tiere zu sehen.",
          translation: "I like to go to the zoo to see the animals.",
          topics: ["Talking about animals", "Talking about hobbies", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about visiting the zoo.",
          level: 2,
          vocabularyIds: ["tier", "sehen"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ fliegt durch die Luft.",
          options: ["Vogel", "Hund", "Katze", "Fisch"],
          correct: 0,
          explanation: "'Vogel' means bird - an animal that flies.",
          translation: "The bird flies through the air.",
          level: 2,
          vocabularyIds: ["vogel"]
        },
        {
          type: "missing-word",
          sentence: "Ich sehe ein ___ im Zoo.",
          options: ["Pferd", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Pferd' means horse - zoo animal.",
          translation: "I see a horse at the zoo.",
          level: 2,
          vocabularyIds: ["pferd"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ gibt Milch.",
          options: ["Kuh", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Kuh' means cow - farm animal.",
          translation: "The cow gives milk.",
          level: 2,
          vocabularyIds: ["kuh"]
        },
        {
          type: "missing-word",
          sentence: "Ich sehe einen ___ im Wald.",
          options: ["Vogel", "Hund", "Katze", "Fisch"],
          correct: 0,
          explanation: "'Vogel' means bird - forest animal.",
          translation: "I see a bird in the forest.",
          level: 2,
          vocabularyIds: ["vogel"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist sehr süß.",
          options: ["Katze", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Katze' means cat - sweet cat.",
          translation: "My cat is very sweet.",
          level: 2,
          vocabularyIds: ["katze"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ viele Tiere im Zoo.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - seeing animals at zoo.",
          translation: "I see many animals at the zoo.",
          level: 2,
          vocabularyIds: ["sehen", "tier"]
        },
        {
          type: "missing-word",
          sentence: "Der ___ schwimmt im Wasser.",
          options: ["Fisch", "Hund", "Katze", "Vogel"],
          correct: 0,
          explanation: "'Fisch' means fish - water animal.",
          translation: "The fish swims in the water.",
          level: 2,
          vocabularyIds: ["fisch"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne Tiere.",
          options: ["beobachte", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'beobachte' means I observe - observing animals.",
          translation: "I like to observe animals.",
          level: 2,
          vocabularyIds: ["beobachten", "tier"]
        },
        {
          type: "missing-word",
          sentence: "Das ___ ist sehr groß.",
          options: ["Tier", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Tier' means animal - large animal.",
          translation: "The animal is very large.",
          level: 2,
          vocabularyIds: ["tier", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ meiner Katze.",
          options: ["helfe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'helfe' means I help - helping cat.",
          translation: "I help my cat.",
          level: 2,
          vocabularyIds: ["helfen", "katze"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist sehr klug.",
          options: ["Hund", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Hund' means dog - smart dog.",
          translation: "My dog is very smart.",
          level: 2,
          vocabularyIds: ["hund"]
        },
        {
          type: "tts",
          audioText: "Meine Katze schläft gerne auf dem Sofa.",
          translation: "My cat likes to sleep on the sofa.",
          topics: ["Talking about animals", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their cat's sleeping habits.",
          level: 2,
          vocabularyIds: ["katze"]
        },
        {
          type: "tts",
          audioText: "Ich beobachte gerne Vögel im Park.",
          translation: "I like to observe birds in the park.",
          topics: ["Talking about animals", "Talking about hobbies", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about bird watching.",
          level: 2,
          vocabularyIds: ["vogel", "beobachten"]
        },
        {
          type: "tts",
          audioText: "Der Zoo hat viele verschiedene Tiere aus aller Welt.",
          translation: "The zoo has many different animals from all over the world.",
          topics: ["Talking about animals", "Travel", "Shopping", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about the variety of animals at the zoo.",
          level: 2,
          vocabularyIds: ["tier"]
        },
        {
          type: "tts",
          audioText: "Mein Hund ist sehr gut trainiert und folgt allen Befehlen.",
          translation: "My dog is very well trained and follows all commands.",
          topics: ["Talking about animals", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their well-trained dog.",
          level: 2,
          vocabularyIds: ["hund"]
        },
        {
          type: "tts",
          audioText: "Ich füttere die Vögel jeden Morgen im Garten.",
          translation: "I feed the birds every morning in the garden.",
          topics: ["Talking about animals", "Talking about hobbies", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about feeding birds.",
          level: 2,
          vocabularyIds: ["vogel", "füttern"]
        },
        {
          type: "tts",
          audioText: "Gestern war ich im Zoo und habe Elefanten, Löwen und Giraffen gesehen.",
          translation: "Yesterday I was at the zoo and saw elephants, lions, and giraffes.",
          topics: ["Talking about animals", "Travel", "Shopping", "Family"],
          correct: 0,
          explanation: "The speaker is talking about seeing animals at the zoo.",
          level: 2,
          vocabularyIds: ["tier", "sehen"]
        },
        {
          type: "tts",
          audioText: "Meine Katze schläft gerne auf dem Sofa.",
          translation: "My cat likes to sleep on the sofa.",
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
          translation: "I work from Monday to Friday.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist wichtig.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work/job - your occupation.",
          translation: "My work is important.",
          level: 1,
          vocabularyIds: ["arbeit", "wichtig"]
        },
        {
          type: "tts",
          audioText: "Ich arbeite von Montag bis Freitag im Büro.",
          translation: "I work Monday to Friday in the office.",
          topics: ["Talking about work", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about their work schedule.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ jeden Tag.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - daily work routine.",
          translation: "I work every day.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - working today.",
          translation: "I work today.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist gut.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - good work.",
          translation: "My work is good.",
          level: 1,
          vocabularyIds: ["arbeit", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - enjoying work.",
          translation: "I like to work.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ viel.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - working a lot.",
          translation: "I work a lot.",
          level: 1,
          vocabularyIds: ["arbeiten", "viel"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist interessant.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - interesting work.",
          translation: "My work is interesting.",
          level: 1,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ morgen.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - working tomorrow.",
          translation: "I work tomorrow.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zur Arbeit.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to work.",
          translation: "I go to work.",
          level: 1,
          vocabularyIds: ["gehen", "arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist neu.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - new job.",
          translation: "My work is new.",
          level: 1,
          vocabularyIds: ["arbeit", "neu"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ von der Arbeit.",
          options: ["komme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'komme' means I come - coming from work.",
          translation: "I come from work.",
          level: 1,
          vocabularyIds: ["kommen", "arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ bei der Arbeit.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being at work.",
          translation: "I am at work.",
          level: 1,
          vocabularyIds: ["sein", "arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ macht Spaß.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - fun work.",
          translation: "My work is fun.",
          level: 1,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich arbeite von Montag bis Freitag im Büro.",
          translation: "I work Monday to Friday in the office.",
          topics: ["Talking about work", "Family", "Travel", "Shopping"],
          correct: 0,
          explanation: "The speaker is talking about working Monday to Friday in the office.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "tts",
          audioText: "Meine Arbeit ist sehr interessant und macht mir Spaß.",
          translation: "My work is very interesting and I enjoy it.",
          topics: ["Talking about work", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about enjoying their work.",
          level: 1,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich gehe jeden Morgen zur Arbeit.",
          translation: "I go to work every morning.",
          topics: ["Talking about work", "Travel", "Shopping", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about their daily commute to work.",
          level: 1,
          vocabularyIds: ["gehen", "arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich komme um fünf Uhr von der Arbeit nach Hause.",
          translation: "I come home from work at five o'clock.",
          topics: ["Talking about work", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their work schedule.",
          level: 1,
          vocabularyIds: ["kommen", "arbeit", "haus"]
        },
        {
          type: "tts",
          audioText: "Meine Arbeit beginnt um acht Uhr morgens.",
          translation: "My work starts at eight o'clock in the morning.",
          topics: ["Talking about work", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about their work start time.",
          level: 1,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich arbeite gerne mit meinen Kollegen zusammen.",
          translation: "I like to work together with my colleagues.",
          topics: ["Talking about work", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about working with colleagues.",
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
          translation: "I have a lot of work to do today.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ ins Büro.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to office.",
          translation: "I go to the office.",
          level: 2,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meinen Kollegen.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - working with colleagues.",
          translation: "I work with my colleagues.",
          level: 2,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "tts",
          audioText: "Ich arbeite als Lehrerin an einer Grundschule.",
          translation: "I work as a teacher at an elementary school.",
          topics: ["Talking about work", "Talking about school", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their job as a teacher.",
          level: 2,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist sehr interessant.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - very interesting work.",
          translation: "My work is very interesting.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ einen neuen Job.",
          options: ["habe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'habe' means I have - having a new job.",
          translation: "I have a new job.",
          level: 2,
          vocabularyIds: ["haben", "arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ um neun Uhr.",
          options: ["beginne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'beginne' means I start - starting work at 9.",
          translation: "I start at nine o'clock.",
          level: 2,
          vocabularyIds: ["beginnen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ um fünf Uhr.",
          options: ["ende", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'ende' means I end - ending work at 5.",
          translation: "I finish at five o'clock.",
          level: 2,
          vocabularyIds: ["enden"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Pause.",
          options: ["mache", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'mache' means I take - taking a break.",
          translation: "I take a break.",
          level: 2,
          vocabularyIds: ["machen"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist sehr nett.",
          options: ["Chef", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Chef' means boss - nice boss.",
          translation: "My boss is very nice.",
          level: 2,
          vocabularyIds: ["chef"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meinem Chef.",
          options: ["spreche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spreche' means I speak - talking with boss.",
          translation: "I speak with my boss.",
          level: 2,
          vocabularyIds: ["sprechen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Projekte.",
          options: ["plane", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'plane' means I plan - planning projects.",
          translation: "I plan projects.",
          level: 2,
          vocabularyIds: ["planen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Aufgaben.",
          options: ["erledige", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'erledige' means I complete - completing tasks.",
          translation: "I complete tasks.",
          level: 2,
          vocabularyIds: ["erledigen"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist anspruchsvoll.",
          options: ["Arbeit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arbeit' means work - demanding work.",
          translation: "My work is demanding.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich muss morgen früh ins Büro. Mein Chef hat ein wichtiges Meeting.",
          translation: "I have to go to the office early tomorrow. My boss has an important meeting.",
          topics: ["Talking about work", "Family", "Travel", "Shopping"],
          correct: 0,
          explanation: "The speaker is talking about going to the office and a meeting with their boss.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich arbeite gerne mit meinen Kollegen zusammen.",
          translation: "I like to work together with my colleagues.",
          topics: ["Talking about work", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is saying they enjoy working with their colleagues.",
          level: 2,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "tts",
          audioText: "Mein Beruf ist sehr erfüllend und macht mir viel Freude.",
          translation: "My profession is very fulfilling and brings me a lot of joy.",
          topics: ["Talking about work", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about their fulfilling career.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich habe heute viele wichtige Aufgaben zu erledigen.",
          translation: "I have many important tasks to complete today.",
          topics: ["Talking about work", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about having many tasks at work.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich mache um zwölf Uhr Mittagspause.",
          translation: "I take a lunch break at twelve o'clock.",
          topics: ["Talking about work", "Ordering food", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their lunch break schedule.",
          level: 2,
          vocabularyIds: ["machen"]
        },
        {
          type: "tts",
          audioText: "Mein Arbeitsplatz ist sehr modern und gut ausgestattet.",
          translation: "My workplace is very modern and well-equipped.",
          topics: ["Talking about work", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is describing their workplace.",
          level: 2,
          vocabularyIds: ["arbeit"]
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
          translation: "I don't feel well. I am sick.",
          level: 1,
          vocabularyIds: ["krank"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin ___.",
          options: ["gesund", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'gesund' means healthy - feeling well.",
          translation: "I am healthy.",
          level: 1,
          vocabularyIds: ["gesund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gut.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - describing how you feel.",
          translation: "I feel good.",
          level: 1,
          vocabularyIds: ["fühle"]
        },
        {
          type: "tts",
          audioText: "Ich fühle mich heute nicht gut. Ich sollte zum Arzt gehen.",
          translation: "I don't feel well today. I should go to the doctor.",
          topics: ["Talking about health", "Asking for directions", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about feeling unwell and needing to see a doctor.",
          level: 1,
          vocabularyIds: ["fühle", "krank"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mich nicht gut.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - not feeling well.",
          translation: "I don't feel well.",
          level: 1,
          vocabularyIds: ["fühle"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin ___.",
          options: ["krank", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'krank' means sick - being ill.",
          translation: "I am sick.",
          level: 1,
          vocabularyIds: ["krank"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gesund.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being healthy.",
          translation: "I am healthy.",
          level: 1,
          vocabularyIds: ["sein", "gesund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mich gut.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - feeling good.",
          translation: "I feel good.",
          level: 1,
          vocabularyIds: ["fühle"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin nicht ___.",
          options: ["krank", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'krank' means sick - not being sick.",
          translation: "I am not sick.",
          level: 1,
          vocabularyIds: ["krank"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - feeling today.",
          translation: "I feel today.",
          level: 1,
          vocabularyIds: ["fühle"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin sehr ___.",
          options: ["gesund", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'gesund' means healthy - very healthy.",
          translation: "I am very healthy.",
          level: 1,
          vocabularyIds: ["gesund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mich besser.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - feeling better.",
          translation: "I feel better.",
          level: 1,
          vocabularyIds: ["fühle"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin nicht ___.",
          options: ["gesund", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'gesund' means healthy - not healthy.",
          translation: "I am not healthy.",
          level: 1,
          vocabularyIds: ["gesund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mich schlecht.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - feeling bad.",
          translation: "I feel bad.",
          level: 1,
          vocabularyIds: ["fühle", "schlecht"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin ___ geworden.",
          options: ["krank", "groß", "klein", "neu"],
          correct: 0,
          explanation: "'krank' means sick - became sick.",
          translation: "I became sick.",
          level: 1,
          vocabularyIds: ["krank"]
        },
        {
          type: "tts",
          audioText: "Ich fühle mich nicht gut. Ich bin krank.",
          translation: "I don't feel well. I am sick.",
          topics: ["Talking about health", "Shopping", "Travel", "Work"],
          correct: 0,
          explanation: "The speaker is saying they don't feel well and are sick.",
          level: 1,
          vocabularyIds: ["fühle", "krank"]
        },
        {
          type: "tts",
          audioText: "Ich bin gesund und fühle mich sehr gut.",
          translation: "I am healthy and feel very good.",
          topics: ["Talking about health", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about being healthy.",
          level: 1,
          vocabularyIds: ["gesund", "fühle"]
        },
        {
          type: "tts",
          audioText: "Ich sollte mehr Sport treiben, um gesund zu bleiben.",
          translation: "I should do more sports to stay healthy.",
          topics: ["Talking about health", "Talking about hobbies", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about staying healthy through exercise.",
          level: 1,
          vocabularyIds: ["gesund"]
        },
        {
          type: "tts",
          audioText: "Ich gehe zum Arzt, weil ich mich krank fühle.",
          translation: "I'm going to the doctor because I feel sick.",
          topics: ["Talking about health", "Asking for directions", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about going to the doctor.",
          level: 1,
          vocabularyIds: ["krank", "fühle"]
        },
        {
          type: "tts",
          audioText: "Gesundes Essen ist wichtig für meinen Körper.",
          translation: "Healthy food is important for my body.",
          topics: ["Talking about health", "Ordering food", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about the importance of healthy eating.",
          level: 1,
          vocabularyIds: ["gesund", "essen"]
        },
        {
          type: "tts",
          audioText: "Ich schlafe genug, um gesund zu bleiben.",
          translation: "I sleep enough to stay healthy.",
          topics: ["Talking about health", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about getting enough sleep for health.",
          level: 1,
          vocabularyIds: ["gesund", "schlafen"]
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
          translation: "I have to go to the doctor.",
          level: 2,
          vocabularyIds: ["arzt"]
        },
        {
          type: "missing-word",
          sentence: "Ich nehme ___ gegen die Kopfschmerzen.",
          options: ["Medizin", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Medizin' means medicine - what you take when sick.",
          translation: "I take medicine for the headache.",
          level: 2,
          vocabularyIds: ["medizin", "schmerz"]
        },
        {
          type: "missing-word",
          sentence: "Sport ist gut für die ___.", 
          options: ["Gesundheit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Gesundheit' means health - your physical well-being.",
          translation: "Sports are good for your health.",
          level: 2,
          vocabularyIds: ["gesundheit", "gesund"]
        },
        {
          type: "tts",
          audioText: "Ich gehe regelmäßig zum Arzt für Vorsorgeuntersuchungen.",
          translation: "I go to the doctor regularly for preventive check-ups.",
          topics: ["Talking about health", "Asking for directions", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about regular doctor visits.",
          level: 2,
          vocabularyIds: ["arzt", "gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zum Arzt.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to doctor.",
          translation: "I go to the doctor.",
          level: 2,
          vocabularyIds: ["gehen", "arzt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Medizin.",
          options: ["nehme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'nehme' means I take - taking medicine.",
          translation: "I take medicine.",
          level: 2,
          vocabularyIds: ["nehmen", "medizin"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe ___.",
          options: ["Schmerz", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schmerz' means pain - having pain.",
          translation: "I have pain.",
          level: 2,
          vocabularyIds: ["schmerz"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ ins Krankenhaus.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to hospital.",
          translation: "I go to the hospital.",
          level: 2,
          vocabularyIds: ["gehen", "krankenhaus"]
        },
        {
          type: "missing-word",
          sentence: "Meine ___ ist gut.",
          options: ["Gesundheit", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Gesundheit' means health - good health.",
          translation: "My health is good.",
          level: 2,
          vocabularyIds: ["gesundheit", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ den Arzt.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting doctor.",
          translation: "I visit the doctor.",
          level: 2,
          vocabularyIds: ["besuchen", "arzt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ krank.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being sick.",
          translation: "I am sick.",
          level: 2,
          vocabularyIds: ["sein", "krank"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gesund.",
          options: ["bleibe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bleibe' means I stay - staying healthy.",
          translation: "I stay healthy.",
          level: 2,
          vocabularyIds: ["bleiben", "gesund"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Sport für meine Gesundheit.",
          options: ["mache", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'mache' means I do - doing sports for health.",
          translation: "I do sports for my health.",
          level: 2,
          vocabularyIds: ["machen", "gesundheit"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mich besser.",
          options: ["fühle", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'fühle' means I feel - feeling better.",
          translation: "I feel better.",
          level: 2,
          vocabularyIds: ["fühle"]
        },
        {
          type: "tts",
          audioText: "Ich habe starke Kopfschmerzen und muss ins Krankenhaus.",
          translation: "I have a severe headache and need to go to the hospital.",
          topics: ["Talking about health", "Shopping", "Travel", "Work"],
          correct: 0,
          explanation: "The speaker is talking about having a headache and needing to go to the hospital.",
          level: 2,
          vocabularyIds: ["krankenhaus", "schmerz", "krank"]
        },
        {
          type: "tts",
          audioText: "Ich fühle mich heute viel besser. Die Medizin hat geholfen.",
          translation: "I feel much better today. The medicine helped.",
          topics: ["Talking about health", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is saying they feel much better today and the medicine helped.",
          level: 2,
          vocabularyIds: ["fühle", "medizin"]
        },
        {
          type: "tts",
          audioText: "Regelmäßiger Sport ist wichtig für eine gute Gesundheit.",
          translation: "Regular exercise is important for good health.",
          topics: ["Talking about health", "Talking about hobbies", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about the importance of regular exercise.",
          level: 2,
          vocabularyIds: ["gesundheit", "sport"]
        },
        {
          type: "tts",
          audioText: "Ich nehme täglich Vitamine, um gesund zu bleiben.",
          translation: "I take vitamins daily to stay healthy.",
          topics: ["Talking about health", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about taking vitamins for health.",
          level: 2,
          vocabularyIds: ["gesund", "medizin"]
        },
        {
          type: "tts",
          audioText: "Mein Arzt hat mir geraten, mehr Wasser zu trinken.",
          translation: "My doctor advised me to drink more water.",
          topics: ["Talking about health", "Ordering food", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about doctor's advice.",
          level: 2,
          vocabularyIds: ["arzt"]
        },
        {
          type: "tts",
          audioText: "Ich achte darauf, genug Schlaf zu bekommen.",
          translation: "I make sure to get enough sleep.",
          topics: ["Talking about health", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about getting enough sleep for health.",
          level: 2,
          vocabularyIds: ["schlafen", "gesund"]
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
          translation: "I go to school.",
          level: 1,
          vocabularyIds: ["schule"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Schule.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn/study - what you do at school.",
          translation: "I learn at school.",
          level: 1,
          vocabularyIds: ["lernen", "schule"]
        },
        {
          type: "tts",
          audioText: "Ich gehe jeden Tag zur Schule und lerne viele neue Dinge.",
          translation: "I go to school every day and learn many new things.",
          topics: ["Talking about school", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about going to school and learning.",
          level: 1,
          vocabularyIds: ["gehen", "schule", "lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ jeden Tag.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn/study - daily learning.",
          translation: "I learn every day.",
          level: 1,
          vocabularyIds: ["lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zur Schule.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to school.",
          translation: "I go to school.",
          level: 1,
          vocabularyIds: ["gehen", "schule"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist groß.",
          options: ["Schule", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schule' means school - large school.",
          translation: "The school is large.",
          level: 1,
          vocabularyIds: ["schule", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - enjoying learning.",
          translation: "I like to learn.",
          level: 1,
          vocabularyIds: ["lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Schule.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being at school.",
          translation: "I am at school.",
          level: 1,
          vocabularyIds: ["sein", "schule"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ von der Schule.",
          options: ["komme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'komme' means I come - coming from school.",
          translation: "I come from school.",
          level: 1,
          vocabularyIds: ["kommen", "schule"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist gut.",
          options: ["Schule", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schule' means school - good school.",
          translation: "The school is good.",
          level: 1,
          vocabularyIds: ["schule", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ viel.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning a lot.",
          translation: "I learn a lot.",
          level: 1,
          vocabularyIds: ["lernen", "viel"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ heute.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning today.",
          translation: "I learn today.",
          level: 1,
          vocabularyIds: ["lernen"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist wichtig.",
          options: ["Schule", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schule' means school - important school.",
          translation: "The school is important.",
          level: 1,
          vocabularyIds: ["schule", "wichtig"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zur Schule.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to school.",
          translation: "I go to school.",
          level: 1,
          vocabularyIds: ["gehen", "schule"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Schule.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning at school.",
          translation: "I learn at school.",
          level: 1,
          vocabularyIds: ["lernen", "schule"]
        },
        {
          type: "tts",
          audioText: "Ich gehe jeden Tag zur Schule und lerne viel.",
          translation: "I go to school every day and learn a lot.",
          topics: ["Talking about school", "Work", "Family", "Hobbies"],
          correct: 0,
          explanation: "The speaker is saying they go to school every day and learn a lot.",
          level: 1,
          vocabularyIds: ["gehen", "schule", "lernen"]
        },
        {
          type: "tts",
          audioText: "Meine Schule ist sehr groß und hat viele Schüler.",
          translation: "My school is very large and has many students.",
          topics: ["Talking about school", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is describing their school.",
          level: 1,
          vocabularyIds: ["schule", "groß"]
        },
        {
          type: "tts",
          audioText: "Ich lerne gerne neue Sprachen in der Schule.",
          translation: "I like to learn new languages at school.",
          topics: ["Talking about school", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about learning languages at school.",
          level: 1,
          vocabularyIds: ["lernen", "schule"]
        },
        {
          type: "tts",
          audioText: "Ich komme um drei Uhr von der Schule nach Hause.",
          translation: "I come home from school at three o'clock.",
          topics: ["Talking about school", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their school schedule.",
          level: 1,
          vocabularyIds: ["kommen", "schule", "haus"]
        },
        {
          type: "tts",
          audioText: "Die Schule beginnt um acht Uhr morgens.",
          translation: "School starts at eight o'clock in the morning.",
          topics: ["Talking about school", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about school start time.",
          level: 1,
          vocabularyIds: ["schule"]
        },
        {
          type: "tts",
          audioText: "Ich habe viele Freunde in der Schule.",
          translation: "I have many friends at school.",
          topics: ["Talking about school", "Talking about family", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about friends at school.",
          level: 1,
          vocabularyIds: ["schule"]
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
          translation: "My teacher explains mathematics very well.",
          level: 2,
          vocabularyIds: ["lehrer"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ jeden Tag für meine Prüfungen.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn/study - what students do.",
          translation: "I study every day for my exams.",
          level: 2,
          vocabularyIds: ["lernen"]
        },
        {
          type: "tts",
          audioText: "Mein Lehrer erklärt den Unterricht sehr gut und hilft mir beim Lernen.",
          translation: "My teacher explains the lesson very well and helps me with learning.",
          topics: ["Talking about school", "Talking about work", "Shopping", "Travel"],
          correct: 0,
          explanation: "The speaker is talking about their helpful teacher.",
          level: 2,
          vocabularyIds: ["lehrer", "lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich schreibe mit einem ___.", 
          options: ["Stift", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stift' means pen/pencil - used for writing in school.",
          translation: "I write with a pen.",
          level: 2,
          vocabularyIds: ["stift", "schreiben"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ ein Buch.",
          options: ["lese", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lese' means I read - reading a book.",
          translation: "I read a book.",
          level: 2,
          vocabularyIds: ["lesen", "buch"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ Hausaufgaben.",
          options: ["mache", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'mache' means I do - doing homework.",
          translation: "I do homework.",
          level: 2,
          vocabularyIds: ["machen"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ ist sehr nett.",
          options: ["Lehrer", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Lehrer' means teacher - nice teacher.",
          translation: "My teacher is very nice.",
          level: 2,
          vocabularyIds: ["lehrer"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ mit meinem Lehrer.",
          options: ["spreche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'spreche' means I speak - talking with teacher.",
          translation: "I speak with my teacher.",
          level: 2,
          vocabularyIds: ["sprechen", "lehrer"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Prüfung.",
          options: ["schreibe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'schreibe' means I write - writing an exam.",
          translation: "I write an exam.",
          level: 2,
          vocabularyIds: ["schreiben"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Bibliothek.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - studying in library.",
          translation: "I study in the library.",
          level: 2,
          vocabularyIds: ["lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ zur Universität.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to university.",
          translation: "I go to the university.",
          level: 2,
          vocabularyIds: ["gehen", "universität"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ neue Dinge.",
          options: ["lerne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'lerne' means I learn - learning new things.",
          translation: "I learn new things.",
          level: 2,
          vocabularyIds: ["lernen", "neu"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___ hilft mir.",
          options: ["Lehrer", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Lehrer' means teacher - helping teacher.",
          translation: "My teacher helps me.",
          level: 2,
          vocabularyIds: ["lehrer", "helfen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne zur Schule.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - enjoying going to school.",
          translation: "I like to go to school.",
          level: 2,
          vocabularyIds: ["gehen", "schule"]
        },
        {
          type: "tts",
          audioText: "Ich habe heute drei Stunden Unterricht und muss danach noch Hausaufgaben machen.",
          translation: "I have three hours of classes today and then I still need to do homework.",
          topics: ["Talking about school", "Work", "Family", "Hobbies"],
          correct: 0,
          explanation: "The speaker is talking about having classes and homework.",
          level: 2,
          vocabularyIds: ["schule", "lernen"]
        },
        {
          type: "tts",
          audioText: "Mein Lehrer erklärt die Mathematik sehr gut. Ich verstehe alles.",
          translation: "My teacher explains mathematics very well. I understand everything.",
          topics: ["Talking about school", "Talking about work", "Family", "Hobbies"],
          correct: 0,
          explanation: "The speaker is saying their teacher explains math very well and they understand everything.",
          level: 2,
          vocabularyIds: ["lehrer", "verstehen"]
        },
        {
          type: "tts",
          audioText: "Ich studiere an der Universität und lerne viele interessante Fächer.",
          translation: "I study at the university and learn many interesting subjects.",
          topics: ["Talking about school", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about studying at university.",
          level: 2,
          vocabularyIds: ["universität", "lernen"]
        },
        {
          type: "tts",
          audioText: "Ich verbringe viel Zeit in der Bibliothek, um für meine Prüfungen zu lernen.",
          translation: "I spend a lot of time in the library to study for my exams.",
          topics: ["Talking about school", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about studying in the library.",
          level: 2,
          vocabularyIds: ["lernen"]
        },
        {
          type: "tts",
          audioText: "Meine Hausaufgaben sind sehr wichtig für meine Noten.",
          translation: "My homework is very important for my grades.",
          topics: ["Talking about school", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about the importance of homework.",
          level: 2,
          vocabularyIds: ["schule"]
        },
        {
          type: "tts",
          audioText: "Ich schreibe nächste Woche eine wichtige Prüfung in Deutsch.",
          translation: "I'm writing an important exam in German next week.",
          topics: ["Talking about school", "Shopping", "Travel", "Ordering food"],
          correct: 0,
          explanation: "The speaker is talking about an upcoming exam.",
          level: 2,
          vocabularyIds: ["schreiben"]
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
          translation: "Berlin is a large city.",
          level: 1,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich wohne in einer ruhigen ___.", 
          options: ["Straße", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Straße' means street - where you live in a city.",
          translation: "I live on a quiet street.",
          level: 1,
          vocabularyIds: ["straße"]
        },
        {
          type: "missing-word",
          sentence: "Der Marktplatz ist ein schöner ___.", 
          options: ["Platz", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Platz' means place/square - a public area in cities.",
          translation: "The market square is a beautiful place.",
          level: 1,
          vocabularyIds: ["platz"]
        },
        {
          type: "tts",
          audioText: "Berlin ist eine sehr große und interessante Stadt.",
          translation: "Berlin is a very large and interesting city.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is talking about Berlin as a city.",
          level: 1,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "In welchem ___ wohnen Sie?", 
          options: ["Land", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Land' means country - asking where someone lives.",
          translation: "In which country do you live?",
          level: 1,
          vocabularyIds: ["land"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in einer Stadt.",
          options: ["wohne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'wohne' means I live - living in a city.",
          translation: "I live in a city.",
          level: 1,
          vocabularyIds: ["wohnen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist groß.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - large city.",
          translation: "The city is large.",
          level: 1,
          vocabularyIds: ["stadt", "groß"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ eine Stadt.",
          options: ["sehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'sehe' means I see - seeing a city.",
          translation: "I see a city.",
          level: 1,
          vocabularyIds: ["sehen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist schön.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - beautiful city.",
          translation: "The city is beautiful.",
          level: 1,
          vocabularyIds: ["stadt", "schön"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in die Stadt.",
          options: ["gehe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'gehe' means I go - going to the city.",
          translation: "I go to the city.",
          level: 1,
          vocabularyIds: ["gehen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist gut.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - good city.",
          translation: "The city is good.",
          level: 1,
          vocabularyIds: ["stadt", "gut"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ von der Stadt.",
          options: ["komme", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'komme' means I come - coming from the city.",
          translation: "I come from the city.",
          level: 1,
          vocabularyIds: ["kommen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist wichtig.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - important city.",
          translation: "The city is important.",
          level: 1,
          vocabularyIds: ["stadt", "wichtig"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Stadt.",
          options: ["bin", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'bin' means I am - being in the city.",
          translation: "I am in the city.",
          level: 1,
          vocabularyIds: ["sein", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist neu.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - new city.",
          translation: "The city is new.",
          level: 1,
          vocabularyIds: ["stadt", "neu"]
        },
        {
          type: "tts",
          audioText: "Ich wohne in einer großen Stadt.",
          translation: "I live in a large city.",
          topics: ["Talking about cities", "Travel", "Shopping", "Hobbies"],
          correct: 0,
          explanation: "The speaker is saying they live in a large city.",
          level: 1,
          vocabularyIds: ["wohnen", "stadt"]
        },
        {
          type: "tts",
          audioText: "München ist eine sehr schöne Stadt in Bayern.",
          translation: "Munich is a very beautiful city in Bavaria.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is talking about Munich as a beautiful city.",
          level: 1,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Ich gehe gerne in die Stadt, um einzukaufen.",
          translation: "I like to go to the city to go shopping.",
          topics: ["Expressing preferences", "Describing activities", "Talking about daily routines", "Making plans"],
          correct: 1,
          explanation: "The speaker is talking about going to the city for shopping.",
          level: 1,
          vocabularyIds: ["gehen", "stadt"]
        },
        {
          type: "tts",
          audioText: "Die Stadt hat viele interessante Sehenswürdigkeiten.",
          translation: "The city has many interesting sights.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is talking about city attractions.",
          level: 1,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Ich komme aus einer kleinen Stadt im Norden.",
          translation: "I come from a small city in the north.",
          topics: ["Talking about origins", "Describing locations", "Talking about family", "Giving information"],
          correct: 0,
          explanation: "The speaker is talking about their hometown.",
          level: 1,
          vocabularyIds: ["kommen", "stadt"]
        },
        {
          type: "tts",
          audioText: "Die Straßen in der Stadt sind sehr belebt.",
          translation: "The streets in the city are very busy.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is talking about busy city streets.",
          level: 1,
          vocabularyIds: ["straße", "stadt"]
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
          translation: "I love this city very much.",
          level: 2,
          vocabularyIds: ["lieben", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ hat viele Sehenswürdigkeiten.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - city with many sights.",
          translation: "The city has many sights.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Hamburg ist eine wunderschöne Hafenstadt im Norden Deutschlands.",
          translation: "Hamburg is a beautiful port city in the north of Germany.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is talking about Hamburg as a port city.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ die Stadt.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - visiting the city.",
          translation: "I visit the city.",
          level: 2,
          vocabularyIds: ["besuchen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist sehr lebendig.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - very lively city.",
          translation: "The city is very lively.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ durch die Stadt.",
          options: ["laufe", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'laufe' means I walk - walking through the city.",
          translation: "I walk through the city.",
          level: 2,
          vocabularyIds: ["laufen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist historisch.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - historical city.",
          translation: "The city is historical.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ die Stadt gut.",
          options: ["kenne", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'kenne' means I know - knowing the city well.",
          translation: "I know the city well.",
          level: 2,
          vocabularyIds: ["wissen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist modern.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - modern city.",
          translation: "The city is modern.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ in der Stadt.",
          options: ["arbeite", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'arbeite' means I work - working in the city.",
          translation: "I work in the city.",
          level: 2,
          vocabularyIds: ["arbeiten", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ hat viele Restaurants.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - city with many restaurants.",
          translation: "The city has many restaurants.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ die Stadt gerne.",
          options: ["besuche", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'besuche' means I visit - enjoying visiting the city.",
          translation: "I like to visit the city.",
          level: 2,
          vocabularyIds: ["besuchen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist berühmt.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city - famous city.",
          translation: "The city is famous.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ die Stadt.",
          options: ["mag", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'mag' means I like - liking the city.",
          translation: "I like the city.",
          level: 2,
          vocabularyIds: ["mögen", "stadt"]
        },
        {
          type: "tts",
          audioText: "Ich liebe diese Stadt! Es gibt so viele interessante Museen und Restaurants.",
          translation: "I love this city! There are so many interesting museums and restaurants.",
          topics: ["Talking about cities", "Travel", "Shopping", "Hobbies"],
          correct: 0,
          explanation: "The speaker is expressing love for a city and mentioning museums and restaurants.",
          level: 2,
          vocabularyIds: ["stadt", "lieben"]
        },
        {
          type: "tts",
          audioText: "Köln ist bekannt für seinen Dom und die Karnevalsfeiern.",
          translation: "Cologne is known for its cathedral and carnival celebrations.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is talking about Cologne's famous landmarks.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Ich erkunde gerne neue Städte und entdecke ihre Kultur.",
          translation: "I like to explore new cities and discover their culture.",
          topics: ["Expressing preferences", "Talking about transportation", "Describing activities", "Talking about hobbies"],
          correct: 0,
          explanation: "The speaker is talking about exploring cities.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Die Altstadt ist der schönste Teil der Stadt mit vielen historischen Gebäuden.",
          translation: "The old town is the most beautiful part of the city with many historical buildings.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is talking about the old town area.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Ich plane eine Reise nach Frankfurt, um die Stadt zu besichtigen.",
          translation: "I'm planning a trip to Frankfurt to visit the city.",
          topics: ["Making plans", "Talking about transportation", "Expressing intentions", "Describing activities"],
          correct: 0,
          explanation: "The speaker is talking about planning a city visit.",
          level: 2,
          vocabularyIds: ["stadt", "reisen"]
        },
        {
          type: "tts",
          audioText: "Die Stadt bietet viele kulturelle Veranstaltungen und Festivals.",
          translation: "The city offers many cultural events and festivals.",
          topics: ["Expressing preferences", "Talking about transportation", "Describing activities", "Talking about hobbies"],
          correct: 0,
          explanation: "The speaker is talking about city cultural offerings.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Diese Stadt ist sehr schön. Ich möchte hier bleiben.",
          translation: "This city is very beautiful. I want to stay here.",
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
