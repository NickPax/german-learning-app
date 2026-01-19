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
          topics: ["Asking about food preferences", "Placing an order", "Starting a meal", "Making dinner plans"],
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
          topics: ["Expressing hunger", "Suggesting a meal", "Making dinner plans", "Describing feelings"],
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
          topics: ["Giving a compliment", "Expressing satisfaction", "Reviewing food", "Thanking the cook"],
          correct: 0,
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
          topics: ["Requesting the menu", "Placing an order", "Asking about dishes", "Making a reservation"],
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
          topics: ["Describing morning routine", "Expressing a preference", "Ordering a drink", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about drinking coffee in the morning.",
          level: 1,
          vocabularyIds: ["trinken"]
        },
        {
          type: "tts",
          audioText: "Das Restaurant ist sehr gut.",
          translation: "The restaurant is very good.",
          topics: ["Giving a recommendation", "Reviewing a place", "Expressing satisfaction", "Making a suggestion"],
          correct: 0,
          explanation: "The speaker is praising the restaurant.",
          level: 1,
          vocabularyIds: ["essen", "gut"]
        },
        {
          type: "tts",
          audioText: "Ich esse gerne Obst und Gemüse.",
          translation: "I like to eat fruit and vegetables.",
          topics: ["Describing eating habits", "Expressing preferences", "Discussing nutrition", "Making healthy choices"],
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
          sentence: "Gestern habe ich ___ gegessen.", 
          options: ["Fleisch", "Auto", "Haus", "Stuhl"],
          correct: 0,
          explanation: "'Fleisch' means meat - yesterday I ate meat. This uses past tense (habe gegessen).",
          translation: "Yesterday I ate meat.",
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
          sentence: "Ich habe gestern ___ getrunken.", 
          options: ["Kaffee", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Kaffee' means coffee - I drank coffee yesterday. This uses past tense (habe getrunken).",
          translation: "I drank coffee yesterday.",
          level: 2,
          vocabularyIds: ["kaffee"]
        },
        {
          type: "tts",
          audioText: "Gestern habe ich ein sehr leckeres Abendessen gegessen, weil ich Geburtstag hatte.",
          translation: "Yesterday I ate a very delicious dinner because I had a birthday.",
          topics: ["Describing a past meal", "Sharing a celebration", "Expressing satisfaction", "Talking about special occasions"],
          correct: 0,
          explanation: "The speaker is describing a past dinner using past tense and a subordinate clause (weil).",
          level: 2,
          vocabularyIds: ["essen"]
        },
        {
          type: "missing-word",
          sentence: "Ich esse gerne Obst, ___ es gesund ist.", 
          options: ["weil", "und", "oder", "aber"],
          correct: 0,
          explanation: "'weil' means because - I like to eat fruit because it's healthy. This uses a subordinate clause.",
          translation: "I like to eat fruit because it's healthy.",
          level: 2,
          vocabularyIds: ["obst"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe heute Morgen ___ getrunken.",
          options: ["Milch", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Milch' means milk - I drank milk this morning. This uses past tense (habe getrunken).",
          translation: "I drank milk this morning.",
          level: 2,
          vocabularyIds: ["milch"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne ein Glas Wein zum Abendessen trinken.", 
          options: ["möchte", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'möchte' means would like - I would like to drink a glass of wine with dinner. This uses a modal verb with a longer sentence.",
          translation: "I would like to drink a glass of wine with dinner.",
          level: 2,
          vocabularyIds: ["wein"]
        },
        {
          type: "tts",
          audioText: "Dieses Restaurant serviert sehr gutes italienisches Essen, das ich gestern probiert habe.",
          translation: "This restaurant serves very good Italian food that I tried yesterday.",
          topics: ["Recommending a restaurant", "Describing past experience", "Giving praise", "Sharing food experiences"],
          correct: 0,
          explanation: "The speaker is recommending a restaurant and describing a past experience using a relative clause (das).",
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
          sentence: "Das Getränk, ___ ich gestern bestellt habe, schmeckt sehr gut.",
          options: ["das", "und", "oder", "aber"],
          correct: 0,
          explanation: "'das' means that/which - The drink that I ordered yesterday tastes very good. This uses a relative clause.",
          translation: "The drink that I ordered yesterday tastes very good.",
          level: 2,
          vocabularyIds: ["getränk"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne einen Apfel essen, wenn ich Hunger habe.",
          options: ["möchte", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'möchte' means would like - I would like to eat an apple when I'm hungry. This uses a modal verb and subordinate clause (wenn).",
          translation: "I would like to eat an apple when I'm hungry.",
          level: 2,
          vocabularyIds: ["apfel"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir bitte die Rechnung bringen?",
          translation: "Can you please bring me the bill?",
          topics: ["Requesting the bill", "Ending a meal", "Making a payment", "Expressing satisfaction"],
          correct: 0,
          explanation: "The speaker is asking for the bill at a restaurant.",
          level: 2,
          vocabularyIds: ["essen"]
        },
        {
          type: "missing-word",
          sentence: "Gestern habe ich eine Tasse ___ getrunken, die sehr lecker war.",
          options: ["Tee", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Tee' means tea - yesterday I drank a cup of tea that was very delicious. This uses past tense and relative clause (die).",
          translation: "Yesterday I drank a cup of tea that was very delicious.",
          level: 2,
          vocabularyIds: ["tee"]
        },
        {
          type: "missing-word",
          sentence: "Letzte Woche habe ich ___ gegessen.", 
          options: ["Fisch", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Fisch' means fish - last week I ate fish. This uses past tense (habe gegessen).",
          translation: "Last week I ate fish.",
          level: 2,
          vocabularyIds: ["fisch"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne ein Glas Wein trinken, wenn ich im Restaurant bin.",
          options: ["möchte", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'möchte' means would like - I would like to drink a glass of wine when I'm at a restaurant. This uses a modal verb and subordinate clause (wenn).",
          translation: "I would like to drink a glass of wine when I'm at a restaurant.",
          level: 2,
          vocabularyIds: ["wein"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern ein Stück ___ gegessen.", 
          options: ["Käse", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Käse' means cheese - yesterday I ate a piece of cheese. This uses past tense (habe gegessen).",
          translation: "Yesterday I ate a piece of cheese.",
          level: 2,
          vocabularyIds: ["käse"]
        },
        {
          type: "tts",
          audioText: "Das Essen war sehr lecker! Können wir bitte die Rechnung haben?",
          translation: "The food was very delicious! Can we please have the bill?",
          topics: ["Giving a compliment", "Expressing satisfaction", "Thanking the chef", "Ending a meal"],
          correct: 0,
          explanation: "The speaker is praising the food ('lecker' means delicious) and asking for the bill.",
          level: 2,
          vocabularyIds: ["essen", "gut"]
        },
        {
          type: "tts",
          audioText: "Gestern habe ich ein Stück Kuchen gegessen, das sehr lecker war.",
          translation: "Yesterday I ate a piece of cake that was very delicious.",
          topics: ["Describing a past experience", "Expressing satisfaction", "Sharing food memories", "Talking about desserts"],
          correct: 0,
          explanation: "The speaker is describing a past experience using past tense and a relative clause (das).",
          level: 2,
          vocabularyIds: ["essen"]
        },
        {
          type: "tts",
          audioText: "Ich bevorzuge vegetarisches Essen, weil es gesünder ist.",
          translation: "I prefer vegetarian food because it's healthier.",
          topics: ["Expressing dietary preferences", "Giving reasons", "Discussing health choices", "Explaining preferences"],
          correct: 0,
          explanation: "The speaker is expressing a preference with a reason using a subordinate clause (weil).",
          level: 2,
          vocabularyIds: ["essen"]
        },
        {
          type: "tts",
          audioText: "Könnten Sie mir bitte die Speisekarte zeigen, die ich gestern gesehen habe?",
          translation: "Could you please show me the menu that I saw yesterday?",
          topics: ["Requesting something specific", "Referring to past experience", "Asking politely", "Making a request"],
          correct: 0,
          explanation: "The speaker is requesting a specific menu using a relative clause (die) and past tense.",
          level: 2,
          vocabularyIds: ["essen"]
        },
        {
          type: "tts",
          audioText: "Das Frühstück, das ich gestern gegessen habe, war sehr köstlich!",
          translation: "The breakfast that I ate yesterday was very delicious!",
          topics: ["Describing a past meal", "Expressing satisfaction", "Sharing food experiences", "Giving praise"],
          correct: 0,
          explanation: "The speaker is describing a past breakfast using a relative clause (das) and past tense.",
          level: 2,
          vocabularyIds: ["essen"]
        }
      ],
      [
        // Level 3 exercises
        {
          type: "missing-word",
          sentence: "Können Sie mir die Speisekarte ___?",
          options: ["empfehlen", "essen", "trinken", "schlafen"],
          correct: 0,
          explanation: "'empfehlen' means to recommend - asking for menu recommendations.",
          translation: "Can you recommend something from the menu?",
          level: 3,
          vocabularyIds: ["empfehlen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe vergessen, was ich ___ wollte.",
          options: ["bestellen", "essen", "trinken", "schlafen"],
          correct: 0,
          explanation: "'bestellen' means to order - I forgot what I wanted to order.",
          translation: "I forgot what I wanted to order.",
          level: 3,
          vocabularyIds: ["vergessen", "bestellen"]
        },
        {
          type: "missing-word",
          sentence: "Können Sie mir ___?",
          options: ["erklären", "essen", "trinken", "schlafen"],
          correct: 0,
          explanation: "'erklären' means to explain - asking for an explanation.",
          translation: "Can you explain to me?",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "missing-word",
          sentence: "Ich verstehe die Speisekarte nicht. Können Sie ___?",
          options: ["erklären", "essen", "trinken", "schlafen"],
          correct: 0,
          explanation: "'erklären' means to explain - asking for explanation of the menu.",
          translation: "I don't understand the menu. Can you explain?",
          level: 3,
          vocabularyIds: ["verstehen", "erklären"]
        },
        {
          type: "missing-word",
          sentence: "Wir müssen ___ treffen, was wir essen möchten.",
          options: ["entscheiden", "essen", "trinken", "schlafen"],
          correct: 0,
          explanation: "'entscheiden' means to decide - we need to decide what we want to eat.",
          translation: "We need to decide what we want to eat.",
          level: 3,
          vocabularyIds: ["entscheiden"]
        },
        {
          type: "missing-word",
          sentence: "Ich kann mich nicht ___ an den Namen des Gerichts.",
          options: ["erinnern", "essen", "trinken", "schlafen"],
          correct: 0,
          explanation: "'erinnern' means to remember - I can't remember the name of the dish.",
          translation: "I can't remember the name of the dish.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "missing-word",
          sentence: "Das Essen ist zu ___ für meinen Geschmack.",
          options: ["kompliziert", "gut", "schlecht", "einfach"],
          correct: 0,
          explanation: "'kompliziert' means complicated - the food is too complicated for my taste.",
          translation: "The food is too complicated for my taste.",
          level: 3,
          vocabularyIds: ["kompliziert"]
        },
        {
          type: "missing-word",
          sentence: "Ich bevorzuge ___ Gerichte.",
          options: ["einfache", "teure", "billige", "komplizierte"],
          correct: 0,
          explanation: "'einfache' means simple - I prefer simple dishes.",
          translation: "I prefer simple dishes.",
          level: 3,
          vocabularyIds: ["einfach"]
        },
        {
          type: "missing-word",
          sentence: "Das Restaurant ist sehr ___.",
          options: ["berühmt", "gut", "schlecht", "klein"],
          correct: 0,
          explanation: "'berühmt' means famous - the restaurant is very famous.",
          translation: "The restaurant is very famous.",
          level: 3,
          vocabularyIds: ["berühmt"]
        },
        {
          type: "missing-word",
          sentence: "Die Speisekarte ist sehr ___.",
          options: ["interessant", "gut", "schlecht", "klein"],
          correct: 0,
          explanation: "'interessant' means interesting - the menu is very interesting.",
          translation: "The menu is very interesting.",
          level: 3,
          vocabularyIds: ["interessant"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir ein Gericht empfehlen, das nicht zu kompliziert ist?",
          translation: "Can you recommend a dish that is not too complicated?",
          topics: ["Asking for recommendations", "Expressing preferences", "Requesting simple options", "Seeking guidance"],
          correct: 0,
          explanation: "The speaker is asking for a simple dish recommendation.",
          level: 3,
          vocabularyIds: ["empfehlen", "kompliziert"]
        },
        {
          type: "tts",
          audioText: "Ich habe vergessen, was ich bestellen wollte. Können Sie mir helfen?",
          translation: "I forgot what I wanted to order. Can you help me?",
          topics: ["Admitting a memory lapse", "Asking for help", "Requesting assistance", "Expressing uncertainty"],
          correct: 0,
          explanation: "The speaker forgot their order and is asking for help.",
          level: 3,
          vocabularyIds: ["vergessen", "bestellen"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir erklären, was in diesem Gericht enthalten ist?",
          translation: "Can you explain to me what is included in this dish?",
          topics: ["Asking for information", "Requesting details", "Seeking clarification", "Understanding ingredients"],
          correct: 0,
          explanation: "The speaker is asking for an explanation of dish ingredients.",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "tts",
          audioText: "Wir müssen uns noch entscheiden, was wir zum Abendessen bestellen möchten.",
          translation: "We still need to decide what we want to order for dinner.",
          topics: ["Making a decision", "Planning a meal", "Discussing options", "Coordinating choices"],
          correct: 0,
          explanation: "The speaker is discussing the need to decide on dinner orders.",
          level: 3,
          vocabularyIds: ["entscheiden", "bestellen"]
        },
        {
          type: "tts",
          audioText: "Ich erinnere mich nicht mehr an den Namen des Restaurants, das Sie empfohlen haben.",
          translation: "I don't remember the name of the restaurant you recommended anymore.",
          topics: ["Admitting forgetfulness", "Asking for repetition", "Seeking clarification", "Requesting help"],
          correct: 0,
          explanation: "The speaker forgot the restaurant name and is asking for it again.",
          level: 3,
          vocabularyIds: ["erinnern", "empfehlen"]
        },
        {
          type: "tts",
          audioText: "Dieses Restaurant ist sehr berühmt für seine traditionelle Küche.",
          translation: "This restaurant is very famous for its traditional cuisine.",
          topics: ["Describing restaurant reputation", "Sharing information", "Recommending a place", "Discussing cuisine"],
          correct: 0,
          explanation: "The speaker is describing the restaurant's fame for traditional food.",
          level: 3,
          vocabularyIds: ["berühmt", "traditionell"]
        },
        {
          type: "tts",
          audioText: "Die Speisekarte ist sehr interessant, aber ich verstehe einige Begriffe nicht.",
          translation: "The menu is very interesting, but I don't understand some terms.",
          topics: ["Expressing confusion", "Asking for help", "Admitting lack of understanding", "Seeking explanation"],
          correct: 0,
          explanation: "The speaker finds the menu interesting but needs help understanding some terms.",
          level: 3,
          vocabularyIds: ["interessant", "verstehen"]
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
          topics: ["Sharing travel plans", "Announcing a trip", "Making arrangements", "Expressing excitement"],
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
          topics: ["Asking for directions", "Making transport plans", "Expressing urgency", "Requesting help"],
          correct: 0,
          explanation: "The speaker is asking for directions to the airport.",
          level: 1,
          vocabularyIds: ["flughafen"]
        },
        {
          type: "tts",
          audioText: "Der Zug fährt in fünf Minuten ab.",
          translation: "The train departs in five minutes.",
          topics: ["Giving departure information", "Hurrying someone", "Checking the schedule", "Warning about time"],
          correct: 0,
          explanation: "The speaker is informing about train departure time.",
          level: 1,
          vocabularyIds: ["zug", "fahren"]
        },
        {
          type: "tts",
          audioText: "Ich reise gerne mit dem Zug.",
          translation: "I like to travel by train.",
          topics: ["Expressing a travel preference", "Comparing transport options", "Discussing travel", "Making small talk"],
          correct: 0,
          explanation: "The speaker is expressing a preference for train travel.",
          level: 1,
          vocabularyIds: ["reisen", "zug"]
        },
        {
          type: "tts",
          audioText: "Wann kommt der nächste Bus?",
          translation: "When does the next bus come?",
          topics: ["Asking about schedules", "Waiting for transport", "Planning a journey", "Seeking information"],
          correct: 0,
          explanation: "The speaker is asking about bus schedule.",
          level: 1,
          vocabularyIds: ["bus", "kommen"]
        },
        {
          type: "tts",
          audioText: "Ich fahre mit dem Auto nach Hause.",
          translation: "I'm driving home by car.",
          topics: ["Describing commute", "Ending the day", "Making transport plans", "Saying goodbye"],
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
          sentence: "Letztes Jahr bin ich mit dem Flugzeug nach Berlin ___.",
          options: ["geflogen", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'geflogen' means flew - last year I flew to Berlin by plane. This uses past tense (bin geflogen).",
          translation: "Last year I flew to Berlin by plane.",
          level: 2,
          vocabularyIds: ["fliegen", "flugzeug"]
        },
        {
          type: "tts",
          audioText: "Letztes Jahr bin ich nach Paris geflogen, weil ich die Stadt besuchen wollte.",
          translation: "Last year I flew to Paris because I wanted to visit the city.",
          topics: ["Describing a past trip", "Explaining travel reasons", "Sharing travel experiences", "Talking about destinations"],
          correct: 0,
          explanation: "The speaker is describing a past trip using past tense and a subordinate clause (weil).",
          level: 2,
          vocabularyIds: ["fliegen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern eine ___ gekauft.",
          options: ["Karte", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Karte' means ticket - yesterday I bought a ticket. This uses past tense (habe gekauft).",
          translation: "Yesterday I bought a ticket.",
          level: 2,
          vocabularyIds: ["kaufen", "karte"]
        },
        {
          type: "missing-word",
          sentence: "Gestern bin ich mit dem Fahrrad zur Arbeit ___.",
          options: ["gefahren", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'gefahren' means rode - yesterday I rode my bicycle to work. This uses past tense (bin gefahren).",
          translation: "Yesterday I rode my bicycle to work.",
          level: 2,
          vocabularyIds: ["fahren", "fahrrad"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne eine Reise planen, wenn ich Zeit habe.",
          options: ["möchte", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'möchte' means would like - I would like to plan a trip when I have time. This uses a modal verb and subordinate clause (wenn).",
          translation: "I would like to plan a trip when I have time.",
          level: 2,
          vocabularyIds: ["planen", "reise"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe letzte Woche im Hotel ___, weil ich auf Geschäftsreise war.",
          options: ["gewohnt", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'gewohnt' means stayed - last week I stayed at a hotel because I was on a business trip. This uses past tense and subordinate clause (weil).",
          translation: "Last week I stayed at a hotel because I was on a business trip.",
          level: 2,
          vocabularyIds: ["wohnen", "hotel"]
        },
        {
          type: "missing-word",
          sentence: "Gestern bin ich am Bahnhof ___, als der Zug ankam.",
          options: ["angekommen", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'angekommen' means arrived - yesterday I arrived at the station when the train came. This uses past tense and subordinate clause (als).",
          translation: "Yesterday I arrived at the station when the train came.",
          level: 2,
          vocabularyIds: ["kommen", "bahnhof"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin gestern vom Flughafen ___, um nach Hause zu fahren.",
          options: ["abgefahren", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'abgefahren' means departed - yesterday I departed from the airport to go home. This uses past tense and infinitive clause (um...zu).",
          translation: "Yesterday I departed from the airport to go home.",
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
          topics: ["Confirming a reservation", "Making travel arrangements", "Preparing for a trip", "Checking details"],
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
          topics: ["Asking for directions", "Requesting help", "Finding a location", "Approaching a stranger"],
          correct: 0,
          explanation: "The speaker is asking for directions to the airport.",
          level: 2,
          vocabularyIds: ["flughafen"]
        },
        {
          type: "tts",
          audioText: "Der Zug hat Verspätung. Wann kommt der nächste?",
          translation: "The train is delayed. When does the next one come?",
          topics: ["Reporting a delay", "Asking about schedules", "Expressing frustration", "Seeking information"],
          correct: 0,
          explanation: "The speaker is asking about train delays and the next train.",
          level: 2,
          vocabularyIds: ["zug"]
        },
        {
          type: "tts",
          audioText: "Ich reise gerne in verschiedene Länder.",
          translation: "I like to travel to different countries.",
          topics: ["Describing travel interests", "Sharing hobbies", "Making small talk", "Expressing wanderlust"],
          correct: 0,
          explanation: "The speaker is expressing enjoyment of traveling to different countries.",
          level: 2,
          vocabularyIds: ["reisen"]
        },
        {
          type: "tts",
          audioText: "Wo kann ich eine Fahrkarte kaufen?",
          translation: "Where can I buy a ticket?",
          topics: ["Buying tickets", "Asking for directions", "Using public transport", "Seeking information"],
          correct: 0,
          explanation: "The speaker is asking where to buy a ticket.",
          level: 2,
          vocabularyIds: ["kaufen", "karte"]
        },
        {
          type: "tts",
          audioText: "Entschuldigung, wie komme ich zum Hauptbahnhof?",
          translation: "Excuse me, how do I get to the main train station?",
          topics: ["Asking for directions", "Finding a location", "Using public transport", "Approaching a stranger"],
          correct: 0,
          explanation: "The speaker is asking for directions to the main train station.",
          level: 2,
          vocabularyIds: ["bahnhof", "kommen"]
        },
        {
          type: "tts",
          audioText: "Ich muss morgen früh zum Flughafen fahren.",
          translation: "I need to drive to the airport early tomorrow.",
          topics: ["Discussing travel plans", "Setting an alarm", "Making arrangements", "Expressing obligation"],
          correct: 0,
          explanation: "The speaker is saying they need to drive to the airport early tomorrow.",
          level: 2,
          vocabularyIds: ["flughafen", "fahren"]
        }
      ],
      [
        // Level 3 exercises
        {
          type: "missing-word",
          sentence: "Können Sie mir bitte ___?",
          options: ["erklären", "fahren", "kommen", "gehen"],
          correct: 0,
          explanation: "'erklären' means to explain - asking for directions explanation.",
          translation: "Can you please explain to me?",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe vergessen, mein Ticket zu ___.",
          options: ["buchen", "fahren", "kommen", "gehen"],
          correct: 0,
          explanation: "'buchen' means to book - I forgot to book my ticket.",
          translation: "I forgot to book my ticket.",
          level: 3,
          vocabularyIds: ["vergessen", "buchen"]
        },
        {
          type: "missing-word",
          sentence: "Wir müssen ___ treffen, welches Hotel wir wählen.",
          options: ["entscheiden", "fahren", "kommen", "gehen"],
          correct: 0,
          explanation: "'entscheiden' means to decide - we need to decide which hotel to choose.",
          translation: "We need to decide which hotel to choose.",
          level: 3,
          vocabularyIds: ["entscheiden", "wählen"]
        },
        {
          type: "missing-word",
          sentence: "Der Zug wird in zehn Minuten ___.",
          options: ["abfahren", "fahren", "kommen", "gehen"],
          correct: 0,
          explanation: "'abfahren' means to depart - the train will depart in ten minutes.",
          translation: "The train will depart in ten minutes.",
          level: 3,
          vocabularyIds: ["abfahren"]
        },
        {
          type: "missing-word",
          sentence: "Wann werden wir am Flughafen ___?",
          options: ["ankommen", "fahren", "kommen", "gehen"],
          correct: 0,
          explanation: "'ankommen' means to arrive - when will we arrive at the airport?",
          translation: "When will we arrive at the airport?",
          level: 3,
          vocabularyIds: ["ankommen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe ein Hotelzimmer ___.",
          options: ["reserviert", "fahren", "kommen", "gehen"],
          correct: 0,
          explanation: "'reserviert' means reserved - I reserved a hotel room.",
          translation: "I reserved a hotel room.",
          level: 3,
          vocabularyIds: ["reservieren"]
        },
        {
          type: "missing-word",
          sentence: "Können Sie mir ein gutes Restaurant ___?",
          options: ["empfehlen", "fahren", "kommen", "gehen"],
          correct: 0,
          explanation: "'empfehlen' means to recommend - can you recommend a good restaurant?",
          translation: "Can you recommend a good restaurant?",
          level: 3,
          vocabularyIds: ["empfehlen"]
        },
        {
          type: "missing-word",
          sentence: "Ich muss den Zug ___.",
          options: ["verlassen", "fahren", "kommen", "gehen"],
          correct: 0,
          explanation: "'verlassen' means to leave - I need to leave the train.",
          translation: "I need to leave the train.",
          level: 3,
          vocabularyIds: ["verlassen"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir bitte erklären, wie ich zum Flughafen komme?",
          translation: "Can you please explain to me how to get to the airport?",
          topics: ["Requesting directions", "Asking for help", "Seeking information", "Getting assistance"],
          correct: 0,
          explanation: "The speaker is asking for directions to the airport.",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "tts",
          audioText: "Ich habe vergessen, mein Ticket zu buchen. Was soll ich tun?",
          translation: "I forgot to book my ticket. What should I do?",
          topics: ["Expressing a mistake", "Reporting a problem", "Asking for advice", "Seeking help"],
          correct: 0,
          explanation: "The speaker forgot to book their ticket and is asking for help.",
          level: 3,
          vocabularyIds: ["vergessen", "buchen"]
        },
        {
          type: "tts",
          audioText: "Wir müssen uns entscheiden, welches Hotel wir buchen möchten.",
          translation: "We need to decide which hotel we want to book.",
          topics: ["Making a decision", "Planning a trip", "Discussing options", "Coordinating plans"],
          correct: 0,
          explanation: "The speaker is discussing the need to make a decision about hotel booking.",
          level: 3,
          vocabularyIds: ["entscheiden", "buchen"]
        },
        {
          type: "tts",
          audioText: "Der Zug wird in fünf Minuten abfahren. Wir müssen schnell einsteigen.",
          translation: "The train will depart in five minutes. We need to board quickly.",
          topics: ["Urging someone to hurry", "Giving departure information", "Warning about time", "Instructing to board"],
          correct: 0,
          explanation: "The speaker is informing about departure time and urging to board.",
          level: 3,
          vocabularyIds: ["abfahren", "einsteigen"]
        },
        {
          type: "tts",
          audioText: "Ich erinnere mich nicht an den Namen der Station, wo wir aussteigen müssen.",
          translation: "I don't remember the name of the station where we need to get off.",
          topics: ["Expressing uncertainty", "Admitting a memory lapse", "Asking for help", "Seeking clarification"],
          correct: 0,
          explanation: "The speaker is saying they don't remember the station name.",
          level: 3,
          vocabularyIds: ["erinnern", "aussteigen"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir raten, welche Sehenswürdigkeiten ich besuchen sollte?",
          translation: "Can you advise me which sights I should visit?",
          topics: ["Asking for travel advice", "Seeking recommendations", "Planning sightseeing", "Requesting guidance"],
          correct: 0,
          explanation: "The speaker is asking for advice about which sights to visit.",
          level: 3,
          vocabularyIds: ["raten", "besuchen"]
        },
        {
          type: "tts",
          audioText: "Ich verstehe die Anweisungen nicht. Können Sie sie mir erklären?",
          translation: "I don't understand the instructions. Can you explain them to me?",
          topics: ["Expressing confusion", "Asking for clarification", "Requesting help", "Seeking explanation"],
          correct: 0,
          explanation: "The speaker doesn't understand instructions and is asking for explanation.",
          level: 3,
          vocabularyIds: ["verstehen", "erklären"]
        },
        {
          type: "tts",
          audioText: "Wir haben erfolgreich unser Hotelzimmer reserviert.",
          translation: "We successfully reserved our hotel room.",
          topics: ["Confirming a reservation", "Reporting success", "Sharing good news", "Completing a task"],
          correct: 0,
          explanation: "The speaker is confirming they successfully made a hotel reservation.",
          level: 3,
          vocabularyIds: ["erfolgreich", "reservieren"]
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
          topics: ["Expressing affection", "Describing relationships", "Sharing personal feelings", "Discussing family bonds"],
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
          topics: ["Expressing values", "Describing priorities", "Sharing personal beliefs", "Discussing what matters"],
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
          topics: ["Expressing affection", "Describing relationships", "Sharing personal feelings", "Discussing family bonds"],
          correct: 0,
          explanation: "The speaker is expressing love for their family.",
          level: 1,
          vocabularyIds: ["lieben", "familie"]
        },
        {
          type: "tts",
          audioText: "Ich wohne mit meiner Familie zusammen.",
          translation: "I live together with my family.",
          topics: ["Describing living situation", "Sharing personal details", "Making small talk", "Answering about home"],
          correct: 0,
          explanation: "The speaker is talking about living with family.",
          level: 1,
          vocabularyIds: ["wohnen", "familie"]
        },
        {
          type: "tts",
          audioText: "Meine Familie ist sehr groß und nett.",
          translation: "My family is very large and nice.",
          topics: ["Describing family size", "Sharing personal details", "Making small talk", "Answering about family"],
          correct: 0,
          explanation: "The speaker is describing their family.",
          level: 1,
          vocabularyIds: ["familie"]
        },
        {
          type: "tts",
          audioText: "Ich sehe meine Familie jeden Sonntag.",
          translation: "I see my family every Sunday.",
          topics: ["Describing family routine", "Sharing personal habits", "Making weekend plans", "Discussing visits"],
          correct: 0,
          explanation: "The speaker is talking about seeing family regularly.",
          level: 1,
          vocabularyIds: ["sehen", "familie"]
        },
        {
          type: "tts",
          audioText: "Ich gehe heute zu meiner Familie.",
          translation: "I'm going to my family today.",
          topics: ["Announcing a visit", "Sharing plans", "Discussing family time", "Making arrangements"],
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
          sentence: "Mein Vater, ___ als Lehrer arbeitet, ist sehr geduldig.",
          options: ["der", "und", "oder", "aber"],
          correct: 0,
          explanation: "'der' means who/that - My father, who works as a teacher, is very patient. This uses a relative clause.",
          translation: "My father, who works as a teacher, is very patient.",
          level: 2,
          vocabularyIds: ["vater", "lehrer"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern meinen ___ besucht, der in einer anderen Stadt wohnt.",
          options: ["Bruder", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Bruder' means brother - yesterday I visited my brother who lives in another city. This uses past tense and relative clause (der).",
          translation: "Yesterday I visited my brother who lives in another city.",
          level: 2,
          vocabularyIds: ["bruder", "besuchen"]
        },
        {
          type: "missing-word",
          sentence: "Meine Tochter, ___ meine beste Freundin ist, wohnt jetzt in Berlin.",
          options: ["die", "und", "oder", "aber"],
          correct: 0,
          explanation: "'die' means who - My daughter, who is my best friend, now lives in Berlin. This uses a relative clause.",
          translation: "My daughter, who is my best friend, now lives in Berlin.",
          level: 2,
          vocabularyIds: ["tochter", "freundin"]
        },
        {
          type: "missing-word",
          sentence: "Gestern hat meine ___ sehr gut gekocht, weil wir Gäste hatten.",
          options: ["Mutter", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Mutter' means mother - yesterday my mother cooked very well because we had guests. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday my mother cooked very well because we had guests.",
          level: 2,
          vocabularyIds: ["mutter", "kochen"]
        },
        {
          type: "tts",
          audioText: "Meine Mutter, die sehr gut kocht, hat gestern für die ganze Familie gekocht.",
          translation: "My mother, who cooks very well, cooked for the whole family yesterday.",
          topics: ["Describing a past family event", "Praising family members", "Sharing family memories", "Talking about cooking"],
          correct: 0,
          explanation: "The speaker is describing a past event using a relative clause (die) and past tense.",
          level: 2,
          vocabularyIds: ["mutter", "familie", "kochen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe einen ___, der in Berlin studiert.",
          options: ["Sohn", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Sohn' means son - I have a son who studies in Berlin. This uses a relative clause (der).",
          translation: "I have a son who studies in Berlin.",
          level: 2,
          vocabularyIds: ["sohn"]
        },
        {
          type: "missing-word",
          sentence: "Mein ___, der als Lehrer arbeitet, ist sehr nett.",
          options: ["Vater", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Vater' means father - My father, who works as a teacher, is very nice. This uses a relative clause (der).",
          translation: "My father, who works as a teacher, is very nice.",
          level: 2,
          vocabularyIds: ["vater"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe eine ___, die in München wohnt.",
          options: ["Schwester", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Schwester' means sister - I have a sister who lives in Munich. This uses a relative clause (die).",
          translation: "I have a sister who lives in Munich.",
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
          topics: ["Describing family activities", "Discussing dinner plans", "Expressing anticipation", "Sharing family news"],
          correct: 0,
          explanation: "The speaker is talking about their mother cooking for the family.",
          level: 2,
          vocabularyIds: ["mutter", "familie", "kochen"]
        },
        {
          type: "tts",
          audioText: "Mein Vater arbeitet von Montag bis Freitag im Büro.",
          translation: "My father works Monday to Friday in the office.",
          topics: ["Describing family members", "Discussing work schedules", "Sharing personal details", "Answering questions"],
          correct: 0,
          explanation: "The speaker is talking about their father working Monday to Friday in the office.",
          level: 2,
          vocabularyIds: ["vater", "arbeiten"]
        },
        {
          type: "tts",
          audioText: "Ich habe zwei Geschwister: einen Bruder und eine Schwester.",
          translation: "I have two siblings: a brother and a sister.",
          topics: ["Introducing family members", "Describing family structure", "Sharing personal details", "Answering questions"],
          correct: 0,
          explanation: "The speaker is talking about their siblings.",
          level: 2,
          vocabularyIds: ["bruder", "schwester"]
        },
        {
          type: "tts",
          audioText: "Mein Bruder ist mein bester Freund.",
          translation: "My brother is my best friend.",
          topics: ["Describing a close relationship", "Expressing bond with sibling", "Sharing personal feelings", "Discussing family"],
          correct: 0,
          explanation: "The speaker is talking about their close relationship with their brother.",
          level: 2,
          vocabularyIds: ["bruder", "freund"]
        },
        {
          type: "tts",
          audioText: "Ich besuche meine Großeltern am Wochenende.",
          translation: "I visit my grandparents on the weekend.",
          topics: ["Discussing family visits", "Sharing weekend plans", "Expressing affection", "Describing traditions"],
          correct: 0,
          explanation: "The speaker is talking about visiting grandparents.",
          level: 2,
          vocabularyIds: ["besuchen"]
        },
        {
          type: "tts",
          audioText: "Meine Tochter geht zur Schule.",
          translation: "My daughter goes to school.",
          topics: ["Describing family life", "Discussing children", "Sharing personal details", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about their daughter going to school.",
          level: 2,
          vocabularyIds: ["tochter", "schule"]
        }
      ],
      [
        // Level 3 exercises
        {
          type: "missing-word",
          sentence: "Ich kann mich nicht ___ an den Namen meines Onkels.",
          options: ["erinnern", "besuchen", "treffen", "verlassen"],
          correct: 0,
          explanation: "'erinnern' means to remember - I can't remember my uncle's name.",
          translation: "I can't remember my uncle's name.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "missing-word",
          sentence: "Wir müssen ___ treffen, ob wir unsere Großeltern besuchen sollen.",
          options: ["entscheiden", "besuchen", "treffen", "verlassen"],
          correct: 0,
          explanation: "'entscheiden' means to decide - we need to decide whether to visit our grandparents.",
          translation: "We need to decide whether to visit our grandparents.",
          level: 3,
          vocabularyIds: ["entscheiden", "besuchen"]
        },
        {
          type: "missing-word",
          sentence: "Meine Schwester hat ___ vergessen, dass wir heute zusammen essen wollten.",
          options: ["vergessen", "besuchen", "treffen", "verlassen"],
          correct: 0,
          explanation: "'vergessen' means to forget - my sister forgot that we wanted to eat together today.",
          translation: "My sister forgot that we wanted to eat together today.",
          level: 3,
          vocabularyIds: ["vergessen"]
        },
        {
          type: "missing-word",
          sentence: "Ich verstehe nicht, warum mein Bruder mich ___ hat.",
          options: ["verlassen", "besuchen", "treffen", "erinnern"],
          correct: 0,
          explanation: "'verlassen' means to leave/abandon - I don't understand why my brother left me.",
          translation: "I don't understand why my brother left me.",
          level: 3,
          vocabularyIds: ["verstehen", "verlassen"]
        },
        {
          type: "missing-word",
          sentence: "Können Sie mir ___ erklären, wie ich meine Familie besser verstehen kann?",
          options: ["erklären", "besuchen", "treffen", "verlassen"],
          correct: 0,
          explanation: "'erklären' means to explain - can you explain to me how I can better understand my family?",
          translation: "Can you explain to me how I can better understand my family?",
          level: 3,
          vocabularyIds: ["erklären", "verstehen"]
        },
        {
          type: "tts",
          audioText: "Ich kann mich nicht daran erinnern, wann ich meine Großmutter das letzte Mal besucht habe.",
          translation: "I can't remember when I last visited my grandmother.",
          topics: ["Expressing uncertainty", "Admitting a memory lapse", "Talking about family visits", "Reflecting on relationships"],
          correct: 0,
          explanation: "The speaker is saying they can't remember when they last visited their grandmother.",
          level: 3,
          vocabularyIds: ["erinnern", "besuchen"]
        },
        {
          type: "tts",
          audioText: "Wir müssen uns entscheiden, ob wir dieses Jahr zu Weihnachten zu meiner Familie fahren sollen.",
          translation: "We need to decide whether we should drive to my family this year for Christmas.",
          topics: ["Making a family decision", "Planning holiday visits", "Discussing travel plans", "Coordinating family time"],
          correct: 0,
          explanation: "The speaker is discussing the need to make a decision about visiting family for Christmas.",
          level: 3,
          vocabularyIds: ["entscheiden"]
        },
        {
          type: "tts",
          audioText: "Ich habe vergessen, meiner Mutter zum Geburtstag zu gratulieren.",
          translation: "I forgot to congratulate my mother on her birthday.",
          topics: ["Expressing regret", "Admitting a mistake", "Talking about family obligations", "Feeling guilty"],
          correct: 0,
          explanation: "The speaker forgot to congratulate their mother on her birthday.",
          level: 3,
          vocabularyIds: ["vergessen"]
        },
        {
          type: "tts",
          audioText: "Mein Vater hat die Familie verlassen, als ich noch klein war.",
          translation: "My father left the family when I was still small.",
          topics: ["Sharing difficult family history", "Talking about past events", "Expressing emotions", "Discussing family structure"],
          correct: 0,
          explanation: "The speaker is sharing a difficult family history.",
          level: 3,
          vocabularyIds: ["verlassen"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir erklären, wie ich meine Geschwister besser verstehen kann?",
          translation: "Can you explain to me how I can better understand my siblings?",
          topics: ["Asking for advice", "Seeking family relationship help", "Expressing confusion", "Requesting guidance"],
          correct: 0,
          explanation: "The speaker is asking for advice on understanding their siblings better.",
          level: 3,
          vocabularyIds: ["erklären", "verstehen"]
        },
        {
          type: "tts",
          audioText: "Ich verstehe nicht, warum meine Schwester so wütend auf mich ist.",
          translation: "I don't understand why my sister is so angry with me.",
          topics: ["Expressing confusion", "Trying to understand emotions", "Discussing family conflicts", "Seeking clarification"],
          correct: 0,
          explanation: "The speaker doesn't understand why their sister is angry.",
          level: 3,
          vocabularyIds: ["verstehen"]
        },
        {
          type: "tts",
          audioText: "Wir haben erfolgreich eine Familienfeier organisiert, obwohl es schwierig war, alle zu versammeln.",
          translation: "We successfully organized a family celebration, although it was difficult to gather everyone.",
          topics: ["Reporting success", "Describing challenges", "Organizing family events", "Expressing satisfaction"],
          correct: 0,
          explanation: "The speaker is reporting successful organization of a family event despite challenges.",
          level: 3,
          vocabularyIds: ["erfolgreich", "organisieren"]
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
          topics: ["Announcing shopping plans", "Discussing errands", "Expressing intention", "Inviting someone along"],
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
          topics: ["Announcing shopping plans", "Discussing errands", "Expressing intention", "Inviting someone along"],
          correct: 0,
          explanation: "The speaker is saying they're going shopping today.",
          level: 1,
          vocabularyIds: ["gehen", "kaufen"]
        },
        {
          type: "tts",
          audioText: "Wie viel kostet das?",
          translation: "How much does that cost?",
          topics: ["Asking about prices", "Shopping for items", "Comparing options", "Making a purchase decision"],
          correct: 0,
          explanation: "The speaker is asking about the price of something.",
          level: 1,
          vocabularyIds: ["kosten"]
        },
        {
          type: "tts",
          audioText: "Ich kaufe gerne neue Kleidung.",
          translation: "I like to buy new clothes.",
          topics: ["Describing shopping habits", "Discussing hobbies", "Making small talk", "Sharing preferences"],
          correct: 0,
          explanation: "The speaker is talking about shopping for clothes.",
          level: 1,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "tts",
          audioText: "Der Laden ist sehr groß und hat viele Sachen.",
          translation: "The store is very large and has many things.",
          topics: ["Describing a store", "Discussing shopping options", "Sharing impressions", "Recommending a place"],
          correct: 0,
          explanation: "The speaker is describing a large store.",
          level: 1,
          vocabularyIds: ["laden", "groß"]
        },
        {
          type: "tts",
          audioText: "Ich muss noch einkaufen gehen.",
          translation: "I still need to go shopping.",
          topics: ["Discussing errands", "Making shopping plans", "Expressing obligation", "Leaving for store"],
          correct: 0,
          explanation: "The speaker is saying they need to go shopping.",
          level: 1,
          vocabularyIds: ["gehen", "kaufen"]
        },
        {
          type: "tts",
          audioText: "Kann ich das bitte kaufen?",
          translation: "Can I please buy that?",
          topics: ["Making a purchase", "Requesting permission", "Asking politely", "Completing a transaction"],
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
          sentence: "Ich habe gestern nach dem ___ gefragt, weil ich es kaufen wollte.",
          options: ["Preis", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Preis' means price - yesterday I asked about the price because I wanted to buy it. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I asked about the price because I wanted to buy it.",
          level: 2,
          vocabularyIds: ["fragen", "preis"]
        },
        {
          type: "tts",
          audioText: "Wie viel kostet dieses Hemd?",
          translation: "How much does this shirt cost?",
          topics: ["Asking about prices", "Shopping for clothes", "Making a purchase decision", "Comparing items"],
          correct: 0,
          explanation: "The speaker is asking how much this shirt costs.",
          level: 2,
          vocabularyIds: ["preis", "kosten"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern im Restaurant ___, nachdem ich gegessen hatte.",
          options: ["bezahlt", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'bezahlt' means paid - yesterday I paid at the restaurant after I had eaten. This uses past tense and subordinate clause (nachdem).",
          translation: "Yesterday I paid at the restaurant after I had eaten.",
          level: 2,
          vocabularyIds: ["bezahlen"]
        },
        {
          type: "missing-word",
          sentence: "Der Preis, ___ ich gestern gesehen habe, ist zu hoch für mich.",
          options: ["den", "und", "oder", "aber"],
          correct: 0,
          explanation: "'den' means which/that - The price that I saw yesterday is too high for me. This uses a relative clause and past tense.",
          translation: "The price that I saw yesterday is too high for me.",
          level: 2,
          vocabularyIds: ["preis"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern kein ___ gehabt, weil ich alles ausgegeben hatte.",
          options: ["Geld", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Geld' means money - yesterday I had no money because I had spent everything. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I had no money because I had spent everything.",
          level: 2,
          vocabularyIds: ["geld"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern viel ___ gehabt, weil ich gearbeitet hatte.",
          options: ["Geld", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Geld' means money - yesterday I had a lot of money because I had worked. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I had a lot of money because I had worked.",
          level: 2,
          vocabularyIds: ["haben", "geld"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe den Preis nicht ___, weil niemand mir gesagt hat.",
          options: ["gewusst", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'gewusst' means known - I didn't know the price because nobody told me. This uses past tense and subordinate clause (weil).",
          translation: "I didn't know the price because nobody told me.",
          level: 2,
          vocabularyIds: ["wissen", "preis"]
        },
        {
          type: "missing-word",
          sentence: "Der Preis, ___ ich gestern gesehen habe, ist sehr billig.",
          options: ["den", "und", "oder", "aber"],
          correct: 0,
          explanation: "'den' means which/that - The price that I saw yesterday is very cheap. This uses a relative clause and past tense.",
          translation: "The price that I saw yesterday is very cheap.",
          level: 2,
          vocabularyIds: ["preis", "billig"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern mit Karte ___, weil ich kein Bargeld hatte.",
          options: ["bezahlt", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'bezahlt' means paid - yesterday I paid with card because I had no cash. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I paid with card because I had no cash.",
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
          topics: ["Asking to try on items", "Shopping for shoes", "Requesting assistance", "Finding the fitting room"],
          correct: 0,
          explanation: "The speaker is asking where they can try on shoes while shopping.",
          level: 2,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "tts",
          audioText: "Wie viel kostet dieses Hemd?",
          translation: "How much does this shirt cost?",
          topics: ["Asking about prices", "Shopping for clothes", "Making a purchase decision", "Comparing items"],
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
          topics: ["Expressing price concern", "Negotiating", "Declining a purchase", "Comparing prices"],
          correct: 0,
          explanation: "The speaker is saying the price is too expensive.",
          level: 2,
          vocabularyIds: ["preis"]
        },
        {
          type: "tts",
          audioText: "Haben Sie das in einer anderen Größe?",
          translation: "Do you have that in a different size?",
          topics: ["Asking about sizes", "Requesting alternatives", "Shopping for fit", "Getting help"],
          correct: 0,
          explanation: "The speaker is asking about different sizes while shopping.",
          level: 2,
          vocabularyIds: ["kaufen"]
        },
        {
          type: "tts",
          audioText: "Ich suche nach einem Geschenk für meine Mutter.",
          translation: "I'm looking for a gift for my mother.",
          topics: ["Shopping for a gift", "Requesting recommendations", "Describing a search", "Asking for help"],
          correct: 0,
          explanation: "The speaker is shopping for a gift for their mother.",
          level: 2,
          vocabularyIds: ["kaufen", "mutter"]
        }
      ],
      [
        // Level 3 exercises
        {
          type: "missing-word",
          sentence: "Können Sie mir ___ erklären, warum dieser Artikel so teuer ist?",
          options: ["erklären", "kaufen", "bezahlen", "fragen"],
          correct: 0,
          explanation: "'erklären' means to explain - can you explain to me why this item is so expensive?",
          translation: "Can you explain to me why this item is so expensive?",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe vergessen, was ich ___ wollte.",
          options: ["kaufen", "erklären", "verstehen", "entscheiden"],
          correct: 0,
          explanation: "'kaufen' means to buy - I forgot what I wanted to buy.",
          translation: "I forgot what I wanted to buy.",
          level: 3,
          vocabularyIds: ["vergessen", "kaufen"]
        },
        {
          type: "missing-word",
          sentence: "Wir müssen ___ treffen, welches Produkt wir wählen sollen.",
          options: ["entscheiden", "kaufen", "bezahlen", "fragen"],
          correct: 0,
          explanation: "'entscheiden' means to decide - we need to decide which product we should choose.",
          translation: "We need to decide which product we should choose.",
          level: 3,
          vocabularyIds: ["entscheiden", "wählen"]
        },
        {
          type: "missing-word",
          sentence: "Ich kann mich nicht ___ an den Preis, den ich gestern gesehen habe.",
          options: ["erinnern", "kaufen", "bezahlen", "fragen"],
          correct: 0,
          explanation: "'erinnern' means to remember - I can't remember the price I saw yesterday.",
          translation: "I can't remember the price I saw yesterday.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "missing-word",
          sentence: "Ich verstehe nicht, warum dieser Artikel so ___ ist.",
          options: ["teuer", "billig", "gut", "schlecht"],
          correct: 0,
          explanation: "'teuer' means expensive - I don't understand why this item is so expensive.",
          translation: "I don't understand why this item is so expensive.",
          level: 3,
          vocabularyIds: ["verstehen", "teuer"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir bitte erklären, was der Unterschied zwischen diesen beiden Produkten ist?",
          translation: "Can you please explain to me what the difference is between these two products?",
          topics: ["Asking for product comparison", "Seeking detailed information", "Making a purchase decision", "Requesting clarification"],
          correct: 0,
          explanation: "The speaker is asking for an explanation of the difference between two products.",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "tts",
          audioText: "Ich habe vergessen, was ich eigentlich kaufen wollte. Können Sie mir helfen?",
          translation: "I forgot what I actually wanted to buy. Can you help me?",
          topics: ["Expressing a memory lapse", "Asking for help", "Admitting confusion", "Seeking assistance"],
          correct: 0,
          explanation: "The speaker forgot what they wanted to buy and is asking for help.",
          level: 3,
          vocabularyIds: ["vergessen", "kaufen"]
        },
        {
          type: "tts",
          audioText: "Wir müssen uns entscheiden, welches Geschenk wir für unsere Mutter wählen sollen.",
          translation: "We need to decide which gift we should choose for our mother.",
          topics: ["Making a purchase decision", "Discussing gift options", "Coordinating with others", "Planning a purchase"],
          correct: 0,
          explanation: "The speaker is discussing the need to make a decision about which gift to choose.",
          level: 3,
          vocabularyIds: ["entscheiden", "wählen"]
        },
        {
          type: "tts",
          audioText: "Ich erinnere mich nicht mehr an den genauen Preis, den ich gestern gesehen habe.",
          translation: "I don't remember the exact price I saw yesterday anymore.",
          topics: ["Expressing uncertainty", "Admitting a memory lapse", "Comparing prices", "Seeking information"],
          correct: 0,
          explanation: "The speaker doesn't remember the exact price they saw yesterday.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "tts",
          audioText: "Ich verstehe nicht, warum dieser Artikel so viel kostet. Können Sie es mir erklären?",
          translation: "I don't understand why this item costs so much. Can you explain it to me?",
          topics: ["Questioning a price", "Asking for justification", "Expressing confusion", "Requesting explanation"],
          correct: 0,
          explanation: "The speaker doesn't understand the high price and is asking for an explanation.",
          level: 3,
          vocabularyIds: ["verstehen", "erklären"]
        },
        {
          type: "tts",
          audioText: "Wir haben erfolgreich alle Geschenke für Weihnachten gekauft, obwohl es schwierig war, die richtigen zu finden.",
          translation: "We successfully bought all the gifts for Christmas, although it was difficult to find the right ones.",
          topics: ["Reporting completion", "Describing shopping success", "Sharing achievements", "Expressing satisfaction"],
          correct: 0,
          explanation: "The speaker is reporting successful completion of Christmas shopping despite challenges.",
          level: 3,
          vocabularyIds: ["erfolgreich", "kaufen"]
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
          topics: ["Describing a sports hobby", "Discussing athletics", "Sharing interests", "Making small talk"],
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
          topics: ["Sharing a reading hobby", "Describing interests", "Making small talk", "Discussing free time"],
          correct: 0,
          explanation: "The speaker is talking about their hobby of reading books.",
          level: 1,
          vocabularyIds: ["hobby", "lesen"]
        },
        {
          type: "tts",
          audioText: "Ich höre gerne Musik, wenn ich entspanne.",
          translation: "I like to listen to music when I relax.",
          topics: ["Describing music preferences", "Sharing interests", "Making small talk", "Discussing entertainment"],
          correct: 0,
          explanation: "The speaker is talking about listening to music as a hobby.",
          level: 1,
          vocabularyIds: ["hören"]
        },
        {
          type: "tts",
          audioText: "Ich sehe gerne Filme am Wochenende.",
          translation: "I like to watch movies on the weekend.",
          topics: ["Describing entertainment habits", "Discussing movie preferences", "Sharing weekend routine", "Recommending films"],
          correct: 0,
          explanation: "The speaker is talking about watching movies as a hobby.",
          level: 1,
          vocabularyIds: ["sehen"]
        },
        {
          type: "tts",
          audioText: "Ich mache gerne Sport, um fit zu bleiben.",
          translation: "I like to do sports to stay fit.",
          topics: ["Describing fitness habits", "Discussing health routines", "Sharing hobbies", "Making exercise plans"],
          correct: 0,
          explanation: "The speaker is talking about doing sports as a hobby.",
          level: 1,
          vocabularyIds: ["machen", "sport"]
        },
        {
          type: "tts",
          audioText: "Meine Freizeit verbringe ich gerne mit Lesen.",
          translation: "I like to spend my free time reading.",
          topics: ["Describing leisure time", "Answering about hobbies", "Sharing interests", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about spending free time reading.",
          level: 1,
          vocabularyIds: ["lesen"]
        },
        {
          type: "tts",
          audioText: "Ich spiele gerne Fußball mit meinen Freunden.",
          translation: "I like to play soccer with my friends.",
          topics: ["Describing a sports hobby", "Discussing athletics", "Sharing interests", "Making small talk"],
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
          sentence: "Letztes Wochenende habe ich ein gutes ___ gelesen, das mir sehr gefallen hat.",
          options: ["Buch", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Buch' means book - last weekend I read a good book that I liked very much. This uses past tense and relative clause (das).",
          translation: "Last weekend I read a good book that I liked very much.",
          level: 2,
          vocabularyIds: ["buch", "lesen"]
        },
        {
          type: "missing-word",
          sentence: "Gestern bin ich im Park ___, weil das Wetter schön war.",
          options: ["gelaufen", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'gelaufen' means ran/walked - yesterday I ran in the park because the weather was nice. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I ran in the park because the weather was nice.",
          level: 2,
          vocabularyIds: ["laufen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne schwimmen gehen, wenn ich Zeit habe.",
          options: ["möchte", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'möchte' means would like - I would like to go swimming when I have time. This uses a modal verb and subordinate clause (wenn).",
          translation: "I would like to go swimming when I have time.",
          level: 2,
          vocabularyIds: ["gehen", "schwimmen"]
        },
        {
          type: "missing-word",
          sentence: "Gestern habe ich ___ Gitarre gespielt, weil ich Zeit hatte.",
          options: ["gerne", "viel", "oft", "nie"],
          correct: 0,
          explanation: "'gerne' means gladly - yesterday I played guitar gladly because I had time. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I played guitar gladly because I had time.",
          level: 2,
          vocabularyIds: ["spielen"]
        },
        {
          type: "tts",
          audioText: "Gestern habe ich Gitarre gespielt, weil ich in meiner Freizeit üben wollte.",
          translation: "Yesterday I played guitar because I wanted to practice in my free time.",
          topics: ["Describing a past hobby activity", "Explaining practice routine", "Sharing music interests", "Talking about free time"],
          correct: 0,
          explanation: "The speaker is describing a past activity using past tense and subordinate clause (weil).",
          level: 2,
          vocabularyIds: ["spielen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern im Fitnessstudio ___, obwohl ich müde war.",
          options: ["trainiert", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'trainiert' means trained - yesterday I trained at the gym although I was tired. This uses past tense and subordinate clause (obwohl).",
          translation: "Yesterday I trained at the gym although I was tired.",
          level: 2,
          vocabularyIds: ["trainieren"]
        },
        {
          type: "missing-word",
          sentence: "Gestern habe ich ___ Videospiele gespielt, weil ich Zeit hatte.",
          options: ["gerne", "viel", "oft", "nie"],
          correct: 0,
          explanation: "'gerne' means gladly - yesterday I played video games gladly because I had time. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I played video games gladly because I had time.",
          level: 2,
          vocabularyIds: ["spielen"]
        },
        {
          type: "missing-word",
          sentence: "Ich ___ gerne wandern gehen, wenn das Wetter schön ist.",
          options: ["möchte", "esse", "trinke", "schlafe"],
          correct: 0,
          explanation: "'möchte' means would like - I would like to go hiking when the weather is nice. This uses a modal verb and subordinate clause (wenn).",
          translation: "I would like to go hiking when the weather is nice.",
          level: 2,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern ___ kochen gelernt, weil ich es lernen wollte.",
          options: ["gerne", "viel", "oft", "nie"],
          correct: 0,
          explanation: "'gerne' means gladly - yesterday I learned to cook gladly because I wanted to learn it. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I learned to cook gladly because I wanted to learn it.",
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
          topics: ["Sharing a creative hobby", "Describing artistic interests", "Discussing photography", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about their hobby of photography.",
          level: 2,
          vocabularyIds: ["hobby"]
        },
        {
          type: "tts",
          audioText: "Am Wochenende spiele ich gerne Fußball mit meinen Freunden.",
          translation: "On weekends I like to play soccer with my friends.",
          topics: ["Describing weekend routine", "Sharing sports hobbies", "Inviting to play", "Discussing fitness"],
          correct: 0,
          explanation: "The speaker is talking about playing football with friends on weekends.",
          level: 2,
          vocabularyIds: ["spielen", "wochenende"]
        },
        {
          type: "tts",
          audioText: "Ich gehe gerne wandern in den Bergen.",
          translation: "I like to go hiking in the mountains.",
          topics: ["Describing outdoor hobbies", "Sharing nature interests", "Discussing hiking trips", "Recommending trails"],
          correct: 0,
          explanation: "The speaker is talking about hiking as a hobby.",
          level: 2,
          vocabularyIds: ["gehen"]
        },
        {
          type: "tts",
          audioText: "Ich trainiere regelmäßig im Fitnessstudio.",
          translation: "I train regularly at the gym.",
          topics: ["Describing fitness routine", "Discussing health goals", "Sharing gym habits", "Making exercise plans"],
          correct: 0,
          explanation: "The speaker is talking about regular gym training.",
          level: 2,
          vocabularyIds: ["trainieren"]
        },
        {
          type: "tts",
          audioText: "Meine Hobbys sind Lesen und Musik hören.",
          translation: "My hobbies are reading and listening to music.",
          topics: ["Introducing hobbies", "Sharing personal interests", "Making small talk", "Answering about free time"],
          correct: 0,
          explanation: "The speaker is talking about their hobbies.",
          level: 2,
          vocabularyIds: ["hobby", "lesen", "hören"]
        },
        {
          type: "tts",
          audioText: "Ich besuche gerne Konzerte und Theateraufführungen.",
          translation: "I like to visit concerts and theater performances.",
          topics: ["Describing entertainment habits", "Discussing live music", "Sharing cultural interests", "Recommending events"],
          correct: 0,
          explanation: "The speaker is talking about visiting cultural events.",
          level: 2,
          vocabularyIds: ["besuchen"]
        }
      ],
      [
        // Level 3 exercises
        {
          type: "missing-word",
          sentence: "Ich habe vergessen, wie man dieses Instrument ___.",
          options: ["spielt", "lernt", "übt", "besucht"],
          correct: 0,
          explanation: "'spielt' means plays - I forgot how to play this instrument.",
          translation: "I forgot how to play this instrument.",
          level: 3,
          vocabularyIds: ["vergessen", "spielen"]
        },
        {
          type: "missing-word",
          sentence: "Wir müssen ___ treffen, welches Hobby wir gemeinsam ausüben sollen.",
          options: ["entscheiden", "lernen", "üben", "besuchen"],
          correct: 0,
          explanation: "'entscheiden' means to decide - we need to decide which hobby we should pursue together.",
          translation: "We need to decide which hobby we should pursue together.",
          level: 3,
          vocabularyIds: ["entscheiden"]
        },
        {
          type: "missing-word",
          sentence: "Können Sie mir ___ erklären, wie ich besser Klavier spielen kann?",
          options: ["erklären", "lernen", "üben", "besuchen"],
          correct: 0,
          explanation: "'erklären' means to explain - can you explain to me how I can play piano better?",
          translation: "Can you explain to me how I can play piano better?",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "missing-word",
          sentence: "Ich kann mich nicht ___ an die Regeln dieses Spiels.",
          options: ["erinnern", "lernen", "üben", "besuchen"],
          correct: 0,
          explanation: "'erinnern' means to remember - I can't remember the rules of this game.",
          translation: "I can't remember the rules of this game.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "missing-word",
          sentence: "Ich verstehe nicht, warum mein Hobby so ___ ist.",
          options: ["kompliziert", "einfach", "interessant", "langweilig"],
          correct: 0,
          explanation: "'kompliziert' means complicated - I don't understand why my hobby is so complicated.",
          translation: "I don't understand why my hobby is so complicated.",
          level: 3,
          vocabularyIds: ["verstehen", "kompliziert"]
        },
        {
          type: "tts",
          audioText: "Ich habe vergessen, wie man diese bestimmte Technik beim Malen anwendet.",
          translation: "I forgot how to apply this specific technique in painting.",
          topics: ["Expressing a memory lapse", "Admitting difficulty", "Talking about skills", "Seeking help"],
          correct: 0,
          explanation: "The speaker forgot how to apply a specific painting technique.",
          level: 3,
          vocabularyIds: ["vergessen"]
        },
        {
          type: "tts",
          audioText: "Wir müssen uns entscheiden, welches Musikinstrument wir lernen möchten.",
          translation: "We need to decide which musical instrument we want to learn.",
          topics: ["Making a decision", "Planning to learn something", "Discussing options", "Choosing a hobby"],
          correct: 0,
          explanation: "The speaker is discussing the need to decide which instrument to learn.",
          level: 3,
          vocabularyIds: ["entscheiden", "lernen"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir erklären, wie ich meine Fotografie-Fähigkeiten verbessern kann?",
          translation: "Can you explain to me how I can improve my photography skills?",
          topics: ["Asking for advice", "Seeking improvement tips", "Requesting guidance", "Wanting to learn"],
          correct: 0,
          explanation: "The speaker is asking for advice on improving photography skills.",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "tts",
          audioText: "Ich erinnere mich nicht mehr an alle Schritte dieser Tanzchoreographie.",
          translation: "I don't remember all the steps of this dance choreography anymore.",
          topics: ["Expressing uncertainty", "Admitting a memory lapse", "Talking about dance", "Needing practice"],
          correct: 0,
          explanation: "The speaker doesn't remember all the dance steps.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "tts",
          audioText: "Ich verstehe nicht, warum dieses Hobby so schwierig zu erlernen ist.",
          translation: "I don't understand why this hobby is so difficult to learn.",
          topics: ["Expressing confusion", "Questioning difficulty", "Talking about challenges", "Seeking understanding"],
          correct: 0,
          explanation: "The speaker doesn't understand why the hobby is so difficult to learn.",
          level: 3,
          vocabularyIds: ["verstehen", "schwierig"]
        },
        {
          type: "tts",
          audioText: "Wir haben erfolgreich ein Konzert organisiert, obwohl es sehr kompliziert war.",
          translation: "We successfully organized a concert, although it was very complicated.",
          topics: ["Reporting success", "Describing challenges", "Organizing events", "Expressing satisfaction"],
          correct: 0,
          explanation: "The speaker is reporting successful organization of a concert despite complications.",
          level: 3,
          vocabularyIds: ["erfolgreich", "organisieren"]
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
          topics: ["Introducing a pet", "Describing a pet", "Sharing personal details", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about their dog.",
          level: 1,
          vocabularyIds: ["hund"]
        },
        {
          type: "tts",
          audioText: "Ich liebe meinen Hund sehr. Er ist mein bester Freund.",
          translation: "I love my dog very much. He is my best friend.",
          topics: ["Expressing affection for a pet", "Describing pet bond", "Sharing feelings", "Discussing pets"],
          correct: 0,
          explanation: "The speaker is expressing love for their dog.",
          level: 1,
          vocabularyIds: ["lieben", "hund"]
        },
        {
          type: "tts",
          audioText: "Mein Hund läuft gerne im Park.",
          translation: "My dog likes to run in the park.",
          topics: ["Describing pet behavior", "Discussing pet exercise", "Sharing routines", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about their dog running in the park.",
          level: 1,
          vocabularyIds: ["hund", "laufen"]
        },
        {
          type: "tts",
          audioText: "Ich füttere meinen Hund jeden Tag.",
          translation: "I feed my dog every day.",
          topics: ["Describing pet care", "Discussing feeding routines", "Sharing responsibilities", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about feeding their dog.",
          level: 1,
          vocabularyIds: ["füttern", "hund"]
        },
        {
          type: "tts",
          audioText: "Mein Hund ist sehr groß und braun.",
          translation: "My dog is very large and brown.",
          topics: ["Describing a pet", "Sharing pet details", "Making small talk", "Answering questions"],
          correct: 0,
          explanation: "The speaker is describing their dog.",
          level: 1,
          vocabularyIds: ["hund", "groß"]
        },
        {
          type: "tts",
          audioText: "Ich habe einen Hund und eine Katze.",
          translation: "I have a dog and a cat.",
          topics: ["Describing pets", "Introducing animals", "Sharing personal details", "Making small talk"],
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
          topics: ["Introducing a pet", "Describing a pet", "Sharing personal details", "Making small talk"],
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
          sentence: "Gestern habe ich im Zoo viele ___ gesehen, die sehr interessant waren.", 
          options: ["Tiere", "Häuser", "Autos", "Stühle"],
          correct: 0,
          explanation: "'Tiere' means animals - yesterday I saw many animals at the zoo that were very interesting. This uses past tense and relative clause (die).",
          translation: "Yesterday I saw many animals at the zoo that were very interesting.",
          level: 2,
          vocabularyIds: ["tier"]
        },
        {
          type: "tts",
          audioText: "Gestern bin ich in den Zoo gegangen, um die Tiere zu sehen, die ich sehr mag.",
          translation: "Yesterday I went to the zoo to see the animals that I like very much.",
          topics: ["Describing a past visit", "Sharing animal interests", "Talking about favorite animals", "Recalling experiences"],
          correct: 0,
          explanation: "The speaker is describing a past visit using past tense, infinitive clause (um...zu), and relative clause (die).",
          level: 2,
          vocabularyIds: ["tier", "sehen"]
        },
        {
          type: "missing-word",
          sentence: "Der ___, den ich gestern gesehen habe, fliegt durch die Luft.",
          options: ["Vogel", "Hund", "Katze", "Fisch"],
          correct: 0,
          explanation: "'Vogel' means bird - The bird that I saw yesterday flies through the air. This uses a relative clause (den) and past tense.",
          translation: "The bird that I saw yesterday flies through the air.",
          level: 2,
          vocabularyIds: ["vogel"]
        },
        {
          type: "missing-word",
          sentence: "Gestern habe ich ein ___ im Zoo gesehen, das sehr groß war.",
          options: ["Pferd", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Pferd' means horse - yesterday I saw a horse at the zoo that was very large. This uses past tense and relative clause (das).",
          translation: "Yesterday I saw a horse at the zoo that was very large.",
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
          topics: ["Describing pet behavior", "Sharing observations", "Making small talk", "Discussing pets"],
          correct: 0,
          explanation: "The speaker is talking about their cat's sleeping habits.",
          level: 2,
          vocabularyIds: ["katze"]
        },
        {
          type: "tts",
          audioText: "Ich beobachte gerne Vögel im Park.",
          translation: "I like to observe birds in the park.",
          topics: ["Describing a nature hobby", "Sharing interests", "Discussing birdwatching", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about bird watching.",
          level: 2,
          vocabularyIds: ["vogel", "beobachten"]
        },
        {
          type: "tts",
          audioText: "Der Zoo hat viele verschiedene Tiere aus aller Welt.",
          translation: "The zoo has many different animals from all over the world.",
          topics: ["Describing a place", "Discussing a zoo visit", "Sharing experiences", "Recommending an outing"],
          correct: 0,
          explanation: "The speaker is talking about the variety of animals at the zoo.",
          level: 2,
          vocabularyIds: ["tier"]
        },
        {
          type: "tts",
          audioText: "Mein Hund ist sehr gut trainiert und folgt allen Befehlen.",
          translation: "My dog is very well trained and follows all commands.",
          topics: ["Describing pet training", "Expressing pride", "Sharing achievements", "Discussing obedience"],
          correct: 0,
          explanation: "The speaker is talking about their well-trained dog.",
          level: 2,
          vocabularyIds: ["hund"]
        },
        {
          type: "tts",
          audioText: "Ich füttere die Vögel jeden Morgen im Garten.",
          translation: "I feed the birds every morning in the garden.",
          topics: ["Describing a morning routine", "Sharing nature hobbies", "Discussing wildlife care", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about feeding birds.",
          level: 2,
          vocabularyIds: ["vogel", "füttern"]
        },
        {
          type: "tts",
          audioText: "Gestern war ich im Zoo und habe Elefanten, Löwen und Giraffen gesehen.",
          translation: "Yesterday I was at the zoo and saw elephants, lions, and giraffes.",
          topics: ["Sharing a recent experience", "Describing an outing", "Discussing animals seen", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about seeing animals at the zoo.",
          level: 2,
          vocabularyIds: ["tier", "sehen"]
        },
        {
          type: "tts",
          audioText: "Meine Katze schläft gerne auf dem Sofa.",
          translation: "My cat likes to sleep on the sofa.",
          topics: ["Describing pet behavior", "Sharing observations", "Making small talk", "Discussing pets"],
          correct: 0,
          explanation: "The speaker is talking about their cat liking to sleep on the sofa.",
          level: 2,
          vocabularyIds: ["katze", "schlafen"]
        }
      ],
      [
        // Level 3 exercises
        {
          type: "missing-word",
          sentence: "Ich habe vergessen, wie man diesen Tiernamen auf Deutsch ___.",
          options: ["ausspricht", "sieht", "hört", "füttert"],
          correct: 0,
          explanation: "'ausspricht' means pronounces - I forgot how to pronounce this animal name in German.",
          translation: "I forgot how to pronounce this animal name in German.",
          level: 3,
          vocabularyIds: ["vergessen"]
        },
        {
          type: "missing-word",
          sentence: "Wir müssen ___ treffen, welches Tier wir als Haustier wählen sollen.",
          options: ["entscheiden", "kaufen", "besuchen", "füttern"],
          correct: 0,
          explanation: "'entscheiden' means to decide - we need to decide which animal we should choose as a pet.",
          translation: "We need to decide which animal we should choose as a pet.",
          level: 3,
          vocabularyIds: ["entscheiden", "wählen"]
        },
        {
          type: "missing-word",
          sentence: "Können Sie mir ___ erklären, wie man sich richtig um dieses Tier kümmert?",
          options: ["erklären", "kaufen", "besuchen", "füttern"],
          correct: 0,
          explanation: "'erklären' means to explain - can you explain to me how to properly care for this animal?",
          translation: "Can you explain to me how to properly care for this animal?",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "missing-word",
          sentence: "Ich kann mich nicht ___ an den Namen dieses Tieres, das ich gestern gesehen habe.",
          options: ["erinnern", "kaufen", "besuchen", "füttern"],
          correct: 0,
          explanation: "'erinnern' means to remember - I can't remember the name of this animal I saw yesterday.",
          translation: "I can't remember the name of this animal I saw yesterday.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "missing-word",
          sentence: "Ich verstehe nicht, warum dieses Tier so ___ ist.",
          options: ["selten", "häufig", "groß", "klein"],
          correct: 0,
          explanation: "'selten' means rare - I don't understand why this animal is so rare.",
          translation: "I don't understand why this animal is so rare.",
          level: 3,
          vocabularyIds: ["verstehen"]
        },
        {
          type: "tts",
          audioText: "Ich habe vergessen, wie man die verschiedenen Tierarten auf Deutsch nennt.",
          translation: "I forgot how to name the different animal species in German.",
          topics: ["Expressing a memory lapse", "Admitting difficulty", "Learning vocabulary", "Seeking help"],
          correct: 0,
          explanation: "The speaker forgot how to name different animal species in German.",
          level: 3,
          vocabularyIds: ["vergessen"]
        },
        {
          type: "tts",
          audioText: "Wir müssen uns entscheiden, welches Tier wir im Zoo besuchen möchten, da wir nicht genug Zeit für alle haben.",
          translation: "We need to decide which animal we want to visit at the zoo, since we don't have enough time for all of them.",
          topics: ["Making a decision", "Planning a zoo visit", "Discussing time constraints", "Prioritizing activities"],
          correct: 0,
          explanation: "The speaker is discussing the need to decide which animals to visit due to time constraints.",
          level: 3,
          vocabularyIds: ["entscheiden", "besuchen"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir erklären, wie man sich richtig um einen Hund kümmert?",
          translation: "Can you explain to me how to properly care for a dog?",
          topics: ["Asking for pet care advice", "Seeking information", "Requesting guidance", "Learning about animals"],
          correct: 0,
          explanation: "The speaker is asking for advice on how to care for a dog.",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "tts",
          audioText: "Ich erinnere mich nicht mehr an den Namen des Tieres, das ich im Zoo gesehen habe.",
          translation: "I don't remember the name of the animal I saw at the zoo anymore.",
          topics: ["Expressing uncertainty", "Admitting a memory lapse", "Talking about zoo visits", "Needing help"],
          correct: 0,
          explanation: "The speaker doesn't remember the name of an animal they saw at the zoo.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "tts",
          audioText: "Ich verstehe nicht, warum einige Tiere so selten geworden sind.",
          translation: "I don't understand why some animals have become so rare.",
          topics: ["Expressing confusion", "Questioning conservation", "Talking about endangered species", "Seeking understanding"],
          correct: 0,
          explanation: "The speaker doesn't understand why some animals have become rare.",
          level: 3,
          vocabularyIds: ["verstehen"]
        },
        {
          type: "tts",
          audioText: "Wir haben erfolgreich ein Tierheim besucht und viele interessante Tiere gesehen, obwohl es sehr emotional war.",
          translation: "We successfully visited an animal shelter and saw many interesting animals, although it was very emotional.",
          topics: ["Reporting a visit", "Describing experiences", "Sharing emotions", "Talking about animal welfare"],
          correct: 0,
          explanation: "The speaker is reporting a successful visit to an animal shelter despite emotional challenges.",
          level: 3,
          vocabularyIds: ["erfolgreich", "besuchen"]
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
          topics: ["Describing work schedule", "Answering about availability", "Making small talk", "Discussing work-life"],
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
          topics: ["Describing work schedule", "Answering about availability", "Making small talk", "Discussing work-life"],
          correct: 0,
          explanation: "The speaker is talking about working Monday to Friday in the office.",
          level: 1,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "tts",
          audioText: "Meine Arbeit ist sehr interessant und macht mir Spaß.",
          translation: "My work is very interesting and I enjoy it.",
          topics: ["Describing job satisfaction", "Sharing opinions about work", "Making small talk", "Discussing career"],
          correct: 0,
          explanation: "The speaker is talking about enjoying their work.",
          level: 1,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich gehe jeden Morgen zur Arbeit.",
          translation: "I go to work every morning.",
          topics: ["Describing daily commute", "Discussing morning routine", "Making small talk", "Answering questions"],
          correct: 0,
          explanation: "The speaker is talking about their daily commute to work.",
          level: 1,
          vocabularyIds: ["gehen", "arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich komme um fünf Uhr von der Arbeit nach Hause.",
          translation: "I come home from work at five o'clock.",
          topics: ["Describing work schedule", "Making evening plans", "Discussing availability", "Coordinating times"],
          correct: 0,
          explanation: "The speaker is talking about their work schedule.",
          level: 1,
          vocabularyIds: ["kommen", "arbeit", "haus"]
        },
        {
          type: "tts",
          audioText: "Meine Arbeit beginnt um acht Uhr morgens.",
          translation: "My work starts at eight o'clock in the morning.",
          topics: ["Describing work schedule", "Answering about start time", "Discussing morning routine", "Coordinating times"],
          correct: 0,
          explanation: "The speaker is talking about their work start time.",
          level: 1,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich arbeite gerne mit meinen Kollegen zusammen.",
          translation: "I like to work together with my colleagues.",
          topics: ["Expressing job satisfaction", "Describing workplace culture", "Making small talk", "Discussing teamwork"],
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
          sentence: "Gestern bin ich ins Büro ___, obwohl ich krank war.",
          options: ["gegangen", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'gegangen' means went - yesterday I went to the office although I was sick. This uses past tense and subordinate clause (obwohl).",
          translation: "Yesterday I went to the office although I was sick.",
          level: 2,
          vocabularyIds: ["gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern mit meinen Kollegen ___, weil wir ein Projekt abschließen mussten.",
          options: ["gearbeitet", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'gearbeitet' means worked - yesterday I worked with my colleagues because we had to finish a project. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I worked with my colleagues because we had to finish a project.",
          level: 2,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "tts",
          audioText: "Ich habe gestern als Lehrerin an einer Grundschule gearbeitet, weil ich eine Vertretung machen musste.",
          translation: "Yesterday I worked as a teacher at an elementary school because I had to substitute.",
          topics: ["Describing past work", "Explaining work circumstances", "Sharing work experiences", "Talking about responsibilities"],
          correct: 0,
          explanation: "The speaker is describing past work using past tense and subordinate clause (weil).",
          level: 2,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "missing-word",
          sentence: "Meine Arbeit, ___ ich seit fünf Jahren mache, ist sehr interessant.",
          options: ["die", "und", "oder", "aber"],
          correct: 0,
          explanation: "'die' means which/that - My work, which I've been doing for five years, is very interesting. This uses a relative clause.",
          translation: "My work, which I've been doing for five years, is very interesting.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe einen neuen ___, den ich letzte Woche bekommen habe.",
          options: ["Job", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Job' means job - I have a new job that I got last week. This uses a relative clause (den) and past tense.",
          translation: "I have a new job that I got last week.",
          level: 2,
          vocabularyIds: ["haben", "arbeit"]
        },
        {
          type: "missing-word",
          sentence: "Gestern habe ich um neun Uhr ___, obwohl ich müde war.",
          options: ["begonnen", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'begonnen' means started - yesterday I started at nine o'clock although I was tired. This uses past tense and subordinate clause (obwohl).",
          translation: "Yesterday I started at nine o'clock although I was tired.",
          level: 2,
          vocabularyIds: ["beginnen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern um fünf Uhr ___, weil ich früh nach Hause gehen wollte.",
          options: ["geendet", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'geendet' means finished - yesterday I finished at five o'clock because I wanted to go home early. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I finished at five o'clock because I wanted to go home early.",
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
          topics: ["Discussing work obligations", "Expressing early morning plans", "Mentioning important meetings", "Setting expectations"],
          correct: 0,
          explanation: "The speaker is talking about going to the office and a meeting with their boss.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich arbeite gerne mit meinen Kollegen zusammen.",
          translation: "I like to work together with my colleagues.",
          topics: ["Expressing job satisfaction", "Describing workplace culture", "Making small talk", "Discussing teamwork"],
          correct: 0,
          explanation: "The speaker is saying they enjoy working with their colleagues.",
          level: 2,
          vocabularyIds: ["arbeiten"]
        },
        {
          type: "tts",
          audioText: "Mein Beruf ist sehr erfüllend und macht mir viel Freude.",
          translation: "My profession is very fulfilling and brings me a lot of joy.",
          topics: ["Expressing job satisfaction", "Sharing career opinions", "Discussing work fulfillment", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about their fulfilling career.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich habe heute viele wichtige Aufgaben zu erledigen.",
          translation: "I have many important tasks to complete today.",
          topics: ["Discussing workload", "Explaining busy schedule", "Prioritizing tasks", "Making excuses"],
          correct: 0,
          explanation: "The speaker is talking about having many tasks at work.",
          level: 2,
          vocabularyIds: ["arbeit"]
        },
        {
          type: "tts",
          audioText: "Ich mache um zwölf Uhr Mittagspause.",
          translation: "I take a lunch break at twelve o'clock.",
          topics: ["Describing lunch routine", "Making lunch plans", "Discussing schedule", "Coordinating meetups"],
          correct: 0,
          explanation: "The speaker is talking about their lunch break schedule.",
          level: 2,
          vocabularyIds: ["machen"]
        },
        {
          type: "tts",
          audioText: "Mein Arbeitsplatz ist sehr modern und gut ausgestattet.",
          translation: "My workplace is very modern and well-equipped.",
          topics: ["Describing workplace", "Expressing satisfaction", "Making small talk", "Sharing opinions"],
          correct: 0,
          explanation: "The speaker is describing their workplace.",
          level: 2,
          vocabularyIds: ["arbeit"]
        }
      ],
      [
        // Level 3 exercises
        {
          type: "missing-word",
          sentence: "Ich habe vergessen, was mein Chef mir ___ hat.",
          options: ["erklärt", "gearbeitet", "getroffen", "verlassen"],
          correct: 0,
          explanation: "'erklärt' means explained - I forgot what my boss explained to me.",
          translation: "I forgot what my boss explained to me.",
          level: 3,
          vocabularyIds: ["vergessen", "erklären"]
        },
        {
          type: "missing-word",
          sentence: "Wir müssen ___ treffen, welches Projekt wir zuerst bearbeiten sollen.",
          options: ["entscheiden", "arbeiten", "treffen", "verlassen"],
          correct: 0,
          explanation: "'entscheiden' means to decide - we need to decide which project we should work on first.",
          translation: "We need to decide which project we should work on first.",
          level: 3,
          vocabularyIds: ["entscheiden"]
        },
        {
          type: "missing-word",
          sentence: "Können Sie mir ___ erklären, wie ich diese Aufgabe besser erledigen kann?",
          options: ["erklären", "arbeiten", "treffen", "verlassen"],
          correct: 0,
          explanation: "'erklären' means to explain - can you explain to me how I can complete this task better?",
          translation: "Can you explain to me how I can complete this task better?",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "missing-word",
          sentence: "Ich kann mich nicht ___ an den Namen meines Kollegen.",
          options: ["erinnern", "arbeiten", "treffen", "verlassen"],
          correct: 0,
          explanation: "'erinnern' means to remember - I can't remember my colleague's name.",
          translation: "I can't remember my colleague's name.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "missing-word",
          sentence: "Ich verstehe nicht, warum diese Aufgabe so ___ ist.",
          options: ["kompliziert", "einfach", "wichtig", "unwichtig"],
          correct: 0,
          explanation: "'kompliziert' means complicated - I don't understand why this task is so complicated.",
          translation: "I don't understand why this task is so complicated.",
          level: 3,
          vocabularyIds: ["verstehen", "kompliziert"]
        },
        {
          type: "tts",
          audioText: "Ich habe vergessen, was mein Chef mir gestern erklärt hat. Können Sie es mir noch einmal sagen?",
          translation: "I forgot what my boss explained to me yesterday. Can you tell me again?",
          topics: ["Expressing a memory lapse", "Asking for repetition", "Admitting confusion", "Seeking clarification"],
          correct: 0,
          explanation: "The speaker forgot what their boss explained and is asking for it to be repeated.",
          level: 3,
          vocabularyIds: ["vergessen", "erklären"]
        },
        {
          type: "tts",
          audioText: "Wir müssen uns entscheiden, welches Projekt wir zuerst bearbeiten sollen, da wir nicht genug Zeit für alle haben.",
          translation: "We need to decide which project we should work on first, since we don't have enough time for all of them.",
          topics: ["Making a work decision", "Prioritizing tasks", "Discussing time management", "Coordinating work"],
          correct: 0,
          explanation: "The speaker is discussing the need to decide which project to prioritize.",
          level: 3,
          vocabularyIds: ["entscheiden"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir erklären, wie ich diese komplizierte Aufgabe besser verstehen kann?",
          translation: "Can you explain to me how I can better understand this complicated task?",
          topics: ["Asking for help", "Seeking clarification", "Requesting explanation", "Expressing difficulty"],
          correct: 0,
          explanation: "The speaker is asking for help understanding a complicated task.",
          level: 3,
          vocabularyIds: ["erklären", "verstehen"]
        },
        {
          type: "tts",
          audioText: "Ich erinnere mich nicht mehr an alle Details des Meetings, das wir gestern hatten.",
          translation: "I don't remember all the details of the meeting we had yesterday anymore.",
          topics: ["Expressing uncertainty", "Admitting a memory lapse", "Talking about meetings", "Needing notes"],
          correct: 0,
          explanation: "The speaker doesn't remember all the meeting details.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "tts",
          audioText: "Ich verstehe nicht, warum diese Arbeit so schwierig zu erledigen ist.",
          translation: "I don't understand why this work is so difficult to complete.",
          topics: ["Expressing confusion", "Questioning difficulty", "Talking about challenges", "Seeking understanding"],
          correct: 0,
          explanation: "The speaker doesn't understand why the work is so difficult.",
          level: 3,
          vocabularyIds: ["verstehen", "schwierig"]
        },
        {
          type: "tts",
          audioText: "Wir haben erfolgreich das Projekt abgeschlossen, obwohl es sehr kompliziert war.",
          translation: "We successfully completed the project, although it was very complicated.",
          topics: ["Reporting success", "Describing challenges", "Completing work", "Expressing satisfaction"],
          correct: 0,
          explanation: "The speaker is reporting successful project completion despite complications.",
          level: 3,
          vocabularyIds: ["erfolgreich"]
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
          topics: ["Reporting feeling unwell", "Seeking sympathy", "Explaining absence", "Asking for help"],
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
          topics: ["Reporting illness", "Explaining symptoms", "Seeking help", "Requesting time off"],
          correct: 0,
          explanation: "The speaker is saying they don't feel well and are sick.",
          level: 1,
          vocabularyIds: ["fühle", "krank"]
        },
        {
          type: "tts",
          audioText: "Ich bin gesund und fühle mich sehr gut.",
          translation: "I am healthy and feel very good.",
          topics: ["Expressing good health", "Reassuring someone", "Answering health questions", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about being healthy.",
          level: 1,
          vocabularyIds: ["gesund", "fühle"]
        },
        {
          type: "tts",
          audioText: "Ich sollte mehr Sport treiben, um gesund zu bleiben.",
          translation: "I should do more sports to stay healthy.",
          topics: ["Discussing health goals", "Making resolutions", "Seeking motivation", "Acknowledging habits"],
          correct: 0,
          explanation: "The speaker is talking about staying healthy through exercise.",
          level: 1,
          vocabularyIds: ["gesund"]
        },
        {
          type: "tts",
          audioText: "Ich gehe zum Arzt, weil ich mich krank fühle.",
          translation: "I'm going to the doctor because I feel sick.",
          topics: ["Explaining a doctor visit", "Discussing health concerns", "Making appointments", "Seeking treatment"],
          correct: 0,
          explanation: "The speaker is talking about going to the doctor.",
          level: 1,
          vocabularyIds: ["krank", "fühle"]
        },
        {
          type: "tts",
          audioText: "Gesundes Essen ist wichtig für meinen Körper.",
          translation: "Healthy food is important for my body.",
          topics: ["Discussing nutrition", "Giving health advice", "Sharing wellness beliefs", "Making recommendations"],
          correct: 0,
          explanation: "The speaker is talking about the importance of healthy eating.",
          level: 1,
          vocabularyIds: ["gesund", "essen"]
        },
        {
          type: "tts",
          audioText: "Ich schlafe genug, um gesund zu bleiben.",
          translation: "I sleep enough to stay healthy.",
          topics: ["Discussing sleep habits", "Describing health routines", "Answering wellness questions", "Making small talk"],
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
          sentence: "Gestern bin ich zum ___ gegangen, weil ich mich nicht gut gefühlt habe.",
          options: ["Arzt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Arzt' means doctor - yesterday I went to the doctor because I didn't feel well. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I went to the doctor because I didn't feel well.",
          level: 2,
          vocabularyIds: ["arzt"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern ___ gegen die Kopfschmerzen genommen, die ich hatte.",
          options: ["Medizin", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Medizin' means medicine - yesterday I took medicine for the headache that I had. This uses past tense and relative clause (die).",
          translation: "Yesterday I took medicine for the headache that I had.",
          level: 2,
          vocabularyIds: ["medizin", "schmerz"]
        },
        {
          type: "missing-word",
          sentence: "Sport ist gut für die Gesundheit, ___ ich jeden Tag mache.",
          options: ["die", "und", "oder", "aber"],
          correct: 0,
          explanation: "'die' means which/that - Sports are good for health, which I do every day. This uses a relative clause.",
          translation: "Sports are good for health, which I do every day.",
          level: 2,
          vocabularyIds: ["gesundheit", "gesund"]
        },
        {
          type: "tts",
          audioText: "Gestern bin ich zum Arzt gegangen, weil ich eine Vorsorgeuntersuchung machen musste.",
          translation: "Yesterday I went to the doctor because I had to have a preventive check-up.",
          topics: ["Describing a past doctor visit", "Explaining health appointments", "Sharing health experiences", "Talking about medical care"],
          correct: 0,
          explanation: "The speaker is describing a past doctor visit using past tense and subordinate clause (weil).",
          level: 2,
          vocabularyIds: ["arzt", "gehen"]
        },
        {
          type: "missing-word",
          sentence: "Ich bin gestern zum Arzt ___, obwohl ich keine Zeit hatte.",
          options: ["gegangen", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'gegangen' means went - yesterday I went to the doctor although I didn't have time. This uses past tense and subordinate clause (obwohl).",
          translation: "Yesterday I went to the doctor although I didn't have time.",
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
          topics: ["Describing symptoms", "Seeking help", "Explaining discomfort", "Requesting medication"],
          correct: 0,
          explanation: "The speaker is talking about having a headache and needing to go to the hospital.",
          level: 2,
          vocabularyIds: ["krankenhaus", "schmerz", "krank"]
        },
        {
          type: "tts",
          audioText: "Ich fühle mich heute viel besser. Die Medizin hat geholfen.",
          translation: "I feel much better today. The medicine helped.",
          topics: ["Reporting recovery", "Expressing relief", "Reassuring others", "Thanking for concern"],
          correct: 0,
          explanation: "The speaker is saying they feel much better today and the medicine helped.",
          level: 2,
          vocabularyIds: ["fühle", "medizin"]
        },
        {
          type: "tts",
          audioText: "Regelmäßiger Sport ist wichtig für eine gute Gesundheit.",
          translation: "Regular exercise is important for good health.",
          topics: ["Giving health advice", "Discussing wellness", "Sharing fitness beliefs", "Making recommendations"],
          correct: 0,
          explanation: "The speaker is talking about the importance of regular exercise.",
          level: 2,
          vocabularyIds: ["gesundheit", "sport"]
        },
        {
          type: "tts",
          audioText: "Ich nehme täglich Vitamine, um gesund zu bleiben.",
          translation: "I take vitamins daily to stay healthy.",
          topics: ["Making a purchase decision", "Completing a transaction", "Choosing an item", "Finalizing selection"],
          correct: 0,
          explanation: "The speaker is talking about taking vitamins for health.",
          level: 2,
          vocabularyIds: ["gesund", "medizin"]
        },
        {
          type: "tts",
          audioText: "Mein Arzt hat mir geraten, mehr Wasser zu trinken.",
          translation: "My doctor advised me to drink more water.",
          topics: ["Discussing doctor's advice", "Following medical recommendations", "Sharing health tips", "Making lifestyle changes"],
          correct: 0,
          explanation: "The speaker is talking about doctor's advice.",
          level: 2,
          vocabularyIds: ["arzt"]
        },
        {
          type: "tts",
          audioText: "Ich achte darauf, genug Schlaf zu bekommen.",
          translation: "I make sure to get enough sleep.",
          topics: ["Discussing sleep habits", "Prioritizing rest", "Sharing wellness routines", "Giving advice"],
          correct: 0,
          explanation: "The speaker is talking about getting enough sleep for health.",
          level: 2,
          vocabularyIds: ["schlafen", "gesund"]
        }
      ],
      [
        // Level 3 exercises
        {
          type: "missing-word",
          sentence: "Können Sie mir ___ erklären, was diese Medizin bewirkt?",
          options: ["erklären", "nehmen", "besuchen", "verstehen"],
          correct: 0,
          explanation: "'erklären' means to explain - can you explain to me what this medicine does?",
          translation: "Can you explain to me what this medicine does?",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe vergessen, wann ich die Medizin ___ soll.",
          options: ["nehmen", "erklären", "verstehen", "besuchen"],
          correct: 0,
          explanation: "'nehmen' means to take - I forgot when I should take the medicine.",
          translation: "I forgot when I should take the medicine.",
          level: 3,
          vocabularyIds: ["vergessen"]
        },
        {
          type: "missing-word",
          sentence: "Wir müssen ___ treffen, ob wir zum Arzt gehen sollen.",
          options: ["entscheiden", "nehmen", "besuchen", "verstehen"],
          correct: 0,
          explanation: "'entscheiden' means to decide - we need to decide whether we should go to the doctor.",
          translation: "We need to decide whether we should go to the doctor.",
          level: 3,
          vocabularyIds: ["entscheiden"]
        },
        {
          type: "missing-word",
          sentence: "Ich kann mich nicht ___ an die Anweisungen des Arztes.",
          options: ["erinnern", "nehmen", "besuchen", "verstehen"],
          correct: 0,
          explanation: "'erinnern' means to remember - I can't remember the doctor's instructions.",
          translation: "I can't remember the doctor's instructions.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "missing-word",
          sentence: "Ich verstehe nicht, warum diese Behandlung so ___ ist.",
          options: ["kompliziert", "einfach", "wichtig", "unwichtig"],
          correct: 0,
          explanation: "'kompliziert' means complicated - I don't understand why this treatment is so complicated.",
          translation: "I don't understand why this treatment is so complicated.",
          level: 3,
          vocabularyIds: ["verstehen", "kompliziert"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir bitte erklären, was diese Medizin bewirkt und wie ich sie einnehmen soll?",
          translation: "Can you please explain to me what this medicine does and how I should take it?",
          topics: ["Asking for medical information", "Seeking medication instructions", "Requesting clarification", "Understanding treatment"],
          correct: 0,
          explanation: "The speaker is asking for an explanation about medication.",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "tts",
          audioText: "Ich habe vergessen, wann ich die Medizin nehmen soll. Können Sie mir helfen?",
          translation: "I forgot when I should take the medicine. Can you help me?",
          topics: ["Expressing a memory lapse", "Asking for help", "Admitting confusion", "Seeking medication schedule"],
          correct: 0,
          explanation: "The speaker forgot when to take medicine and is asking for help.",
          level: 3,
          vocabularyIds: ["vergessen"]
        },
        {
          type: "tts",
          audioText: "Wir müssen uns entscheiden, ob wir eine zweite Meinung von einem anderen Arzt einholen sollen.",
          translation: "We need to decide whether we should get a second opinion from another doctor.",
          topics: ["Making a medical decision", "Considering options", "Discussing treatment", "Seeking additional advice"],
          correct: 0,
          explanation: "The speaker is discussing the need to decide about getting a second medical opinion.",
          level: 3,
          vocabularyIds: ["entscheiden"]
        },
        {
          type: "tts",
          audioText: "Ich erinnere mich nicht mehr an alle Anweisungen, die der Arzt mir gegeben hat.",
          translation: "I don't remember all the instructions the doctor gave me anymore.",
          topics: ["Expressing uncertainty", "Admitting a memory lapse", "Talking about medical visits", "Needing written instructions"],
          correct: 0,
          explanation: "The speaker doesn't remember all the doctor's instructions.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "tts",
          audioText: "Ich verstehe nicht, warum diese Behandlung so kompliziert und teuer ist.",
          translation: "I don't understand why this treatment is so complicated and expensive.",
          topics: ["Expressing confusion", "Questioning medical costs", "Talking about treatment", "Seeking understanding"],
          correct: 0,
          explanation: "The speaker doesn't understand why the treatment is complicated and expensive.",
          level: 3,
          vocabularyIds: ["verstehen", "kompliziert"]
        },
        {
          type: "tts",
          audioText: "Wir haben erfolgreich eine gesunde Lebensweise organisiert, obwohl es anfangs sehr schwierig war.",
          translation: "We successfully organized a healthy lifestyle, although it was very difficult at first.",
          topics: ["Reporting success", "Describing lifestyle changes", "Organizing health routines", "Expressing satisfaction"],
          correct: 0,
          explanation: "The speaker is reporting successful organization of a healthy lifestyle despite initial difficulties.",
          level: 3,
          vocabularyIds: ["erfolgreich", "organisieren"]
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
          topics: ["Describing school routine", "Discussing education", "Making small talk", "Answering about schedule"],
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
          explanation: "'Schule' means school and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
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
          explanation: "'Schule' means school and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
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
          explanation: "'Schule' means school and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
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
          topics: ["Describing school routine", "Discussing education", "Making small talk", "Answering about schedule"],
          correct: 0,
          explanation: "The speaker is saying they go to school every day and learn a lot.",
          level: 1,
          vocabularyIds: ["gehen", "schule", "lernen"]
        },
        {
          type: "tts",
          audioText: "Meine Schule ist sehr groß und hat viele Schüler.",
          translation: "My school is very large and has many students.",
          topics: ["Describing school size", "Sharing school details", "Making small talk", "Answering questions"],
          correct: 0,
          explanation: "The speaker is describing their school.",
          level: 1,
          vocabularyIds: ["schule", "groß"]
        },
        {
          type: "tts",
          audioText: "Ich lerne gerne neue Sprachen in der Schule.",
          translation: "I like to learn new languages at school.",
          topics: ["Describing academic interests", "Discussing language learning", "Sharing goals", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about learning languages at school.",
          level: 1,
          vocabularyIds: ["lernen", "schule"]
        },
        {
          type: "tts",
          audioText: "Ich komme um drei Uhr von der Schule nach Hause.",
          translation: "I come home from school at three o'clock.",
          topics: ["Describing school schedule", "Making afternoon plans", "Coordinating pickup", "Answering questions"],
          correct: 0,
          explanation: "The speaker is talking about their school schedule.",
          level: 1,
          vocabularyIds: ["kommen", "schule", "haus"]
        },
        {
          type: "tts",
          audioText: "Die Schule beginnt um acht Uhr morgens.",
          translation: "School starts at eight o'clock in the morning.",
          topics: ["Giving schedule information", "Discussing school routine", "Answering time questions", "Coordinating drop-off"],
          correct: 0,
          explanation: "The speaker is talking about school start time.",
          level: 1,
          vocabularyIds: ["schule"]
        },
        {
          type: "tts",
          audioText: "Ich habe viele Freunde in der Schule.",
          translation: "I have many friends at school.",
          topics: ["Describing social life", "Discussing school experience", "Sharing happiness", "Making small talk"],
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
          sentence: "Ich habe gestern viel ___, weil ich nächste Woche eine Prüfung habe.",
          options: ["gelernt", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'gelernt' means studied - yesterday I studied a lot because I have an exam next week. This uses past tense and subordinate clause (weil).",
          translation: "Yesterday I studied a lot because I have an exam next week.",
          level: 2,
          vocabularyIds: ["lernen"]
        },
        {
          type: "tts",
          audioText: "Mein Lehrer, der den Unterricht sehr gut erklärt, hat mir gestern beim Lernen geholfen.",
          translation: "My teacher, who explains the lesson very well, helped me with learning yesterday.",
          topics: ["Describing a past experience", "Praising a teacher", "Sharing school memories", "Expressing gratitude"],
          correct: 0,
          explanation: "The speaker is describing a past experience using a relative clause (der) and past tense.",
          level: 2,
          vocabularyIds: ["lehrer", "lernen"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern mit einem ___ geschrieben, den ich geschenkt bekommen habe.", 
          options: ["Stift", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stift' means pen/pencil - yesterday I wrote with a pen that I received as a gift. This uses past tense and relative clause (den).",
          translation: "Yesterday I wrote with a pen that I received as a gift.",
          level: 2,
          vocabularyIds: ["stift", "schreiben"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern ein ___ gelesen, das sehr interessant war.",
          options: ["Buch", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Buch' means book - yesterday I read a book that was very interesting. This uses past tense and relative clause (das).",
          translation: "Yesterday I read a book that was very interesting.",
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
          topics: ["Describing school schedule", "Discussing homework load", "Making study plans", "Coordinating times"],
          correct: 0,
          explanation: "The speaker is talking about having classes and homework.",
          level: 2,
          vocabularyIds: ["schule", "lernen"]
        },
        {
          type: "tts",
          audioText: "Mein Lehrer erklärt die Mathematik sehr gut. Ich verstehe alles.",
          translation: "My teacher explains mathematics very well. I understand everything.",
          topics: ["Praising a teacher", "Discussing quality of lessons", "Sharing school experiences", "Expressing gratitude"],
          correct: 0,
          explanation: "The speaker is saying their teacher explains math very well and they understand everything.",
          level: 2,
          vocabularyIds: ["lehrer", "verstehen"]
        },
        {
          type: "tts",
          audioText: "Ich studiere an der Universität und lerne viele interessante Fächer.",
          translation: "I study at the university and learn many interesting subjects.",
          topics: ["Describing university education", "Introducing oneself", "Discussing major", "Making small talk"],
          correct: 0,
          explanation: "The speaker is talking about studying at university.",
          level: 2,
          vocabularyIds: ["universität", "lernen"]
        },
        {
          type: "tts",
          audioText: "Ich verbringe viel Zeit in der Bibliothek, um für meine Prüfungen zu lernen.",
          translation: "I spend a lot of time in the library to study for my exams.",
          topics: ["Describing study habits", "Discussing exam preparation", "Sharing student life", "Explaining study routine"],
          correct: 0,
          explanation: "The speaker is talking about studying in the library.",
          level: 2,
          vocabularyIds: ["lernen"]
        },
        {
          type: "tts",
          audioText: "Meine Hausaufgaben sind sehr wichtig für meine Noten.",
          translation: "My homework is very important for my grades.",
          topics: ["Discussing academic priorities", "Explaining study time", "Setting boundaries", "Making excuses"],
          correct: 0,
          explanation: "The speaker is talking about the importance of homework.",
          level: 2,
          vocabularyIds: ["schule"]
        },
        {
          type: "tts",
          audioText: "Ich schreibe nächste Woche eine wichtige Prüfung in Deutsch.",
          translation: "I'm writing an important exam in German next week.",
          topics: ["Discussing upcoming exams", "Expressing exam stress", "Making study plans", "Sharing news"],
          correct: 0,
          explanation: "The speaker is talking about an upcoming exam.",
          level: 2,
          vocabularyIds: ["schreiben"]
        }
      ],
      [
        // Level 3 exercises
        {
          type: "missing-word",
          sentence: "Können Sie mir ___ erklären, wie ich diese Aufgabe lösen kann?",
          options: ["erklären", "lernen", "schreiben", "lesen"],
          correct: 0,
          explanation: "'erklären' means to explain - can you explain to me how I can solve this task?",
          translation: "Can you explain to me how I can solve this task?",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe vergessen, was ich für die Prüfung ___ soll.",
          options: ["lernen", "erklären", "verstehen", "schreiben"],
          correct: 0,
          explanation: "'lernen' means to study - I forgot what I should study for the exam.",
          translation: "I forgot what I should study for the exam.",
          level: 3,
          vocabularyIds: ["vergessen", "lernen"]
        },
        {
          type: "missing-word",
          sentence: "Wir müssen ___ treffen, welches Fach wir wählen sollen.",
          options: ["entscheiden", "lernen", "schreiben", "lesen"],
          correct: 0,
          explanation: "'entscheiden' means to decide - we need to decide which subject we should choose.",
          translation: "We need to decide which subject we should choose.",
          level: 3,
          vocabularyIds: ["entscheiden", "wählen"]
        },
        {
          type: "missing-word",
          sentence: "Ich kann mich nicht ___ an die Formel, die der Lehrer erklärt hat.",
          options: ["erinnern", "lernen", "schreiben", "lesen"],
          correct: 0,
          explanation: "'erinnern' means to remember - I can't remember the formula the teacher explained.",
          translation: "I can't remember the formula the teacher explained.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "missing-word",
          sentence: "Ich verstehe nicht, warum diese Aufgabe so ___ ist.",
          options: ["schwierig", "einfach", "wichtig", "unwichtig"],
          correct: 0,
          explanation: "'schwierig' means difficult - I don't understand why this task is so difficult.",
          translation: "I don't understand why this task is so difficult.",
          level: 3,
          vocabularyIds: ["verstehen", "schwierig"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir bitte erklären, wie ich diese mathematische Aufgabe lösen kann?",
          translation: "Can you please explain to me how I can solve this math problem?",
          topics: ["Asking for help", "Seeking explanation", "Requesting clarification", "Understanding homework"],
          correct: 0,
          explanation: "The speaker is asking for help understanding how to solve a math problem.",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "tts",
          audioText: "Ich habe vergessen, was ich für die Prüfung lernen soll. Können Sie mir helfen?",
          translation: "I forgot what I should study for the exam. Can you help me?",
          topics: ["Expressing a memory lapse", "Asking for help", "Admitting confusion", "Seeking study guidance"],
          correct: 0,
          explanation: "The speaker forgot what to study and is asking for help.",
          level: 3,
          vocabularyIds: ["vergessen", "lernen"]
        },
        {
          type: "tts",
          audioText: "Wir müssen uns entscheiden, welches Fach wir im nächsten Semester wählen sollen.",
          translation: "We need to decide which subject we should choose next semester.",
          topics: ["Making an academic decision", "Planning course selection", "Discussing options", "Choosing subjects"],
          correct: 0,
          explanation: "The speaker is discussing the need to decide which subject to choose.",
          level: 3,
          vocabularyIds: ["entscheiden", "wählen"]
        },
        {
          type: "tts",
          audioText: "Ich erinnere mich nicht mehr an alle Formeln, die der Lehrer gestern erklärt hat.",
          translation: "I don't remember all the formulas the teacher explained yesterday anymore.",
          topics: ["Expressing uncertainty", "Admitting a memory lapse", "Talking about lessons", "Needing notes"],
          correct: 0,
          explanation: "The speaker doesn't remember all the formulas from yesterday's lesson.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "tts",
          audioText: "Ich verstehe nicht, warum diese Aufgabe so schwierig zu lösen ist.",
          translation: "I don't understand why this task is so difficult to solve.",
          topics: ["Expressing confusion", "Questioning difficulty", "Talking about homework", "Seeking understanding"],
          correct: 0,
          explanation: "The speaker doesn't understand why the task is so difficult.",
          level: 3,
          vocabularyIds: ["verstehen", "schwierig"]
        },
        {
          type: "tts",
          audioText: "Wir haben erfolgreich das Schulprojekt abgeschlossen, obwohl es sehr kompliziert war.",
          translation: "We successfully completed the school project, although it was very complicated.",
          topics: ["Reporting success", "Describing challenges", "Completing assignments", "Expressing satisfaction"],
          correct: 0,
          explanation: "The speaker is reporting successful completion of a school project despite complications.",
          level: 3,
          vocabularyIds: ["erfolgreich"]
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
          topics: ["Describing a famous city", "Sharing geographical knowledge", "Giving information", "Making comparisons"],
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
          explanation: "'Stadt' means city and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
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
          explanation: "'Stadt' means city and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
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
          explanation: "'Stadt' means city and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
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
          explanation: "'Stadt' means city and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
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
          explanation: "'Stadt' means city and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
          translation: "The city is new.",
          level: 1,
          vocabularyIds: ["stadt", "neu"]
        },
        {
          type: "tts",
          audioText: "Ich wohne in einer großen Stadt.",
          translation: "I live in a large city.",
          topics: ["Describing living situation", "Introducing where you live", "Discussing urban life", "Making small talk"],
          correct: 0,
          explanation: "The speaker is saying they live in a large city.",
          level: 1,
          vocabularyIds: ["wohnen", "stadt"]
        },
        {
          type: "tts",
          audioText: "München ist eine sehr schöne Stadt in Bayern.",
          translation: "Munich is a very beautiful city in Bavaria.",
          topics: ["Praising a city", "Describing location", "Recommending Bavaria", "Sharing travel impressions"],
          correct: 0,
          explanation: "The speaker is praising Munich as a beautiful city.",
          level: 1,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Ich gehe gerne in die Stadt, um einzukaufen.",
          translation: "I like to go to the city to go shopping.",
          topics: ["Describing shopping preferences", "Discussing city visits", "Sharing leisure activities", "Recommending areas"],
          correct: 0,
          explanation: "The speaker is talking about going to the city for shopping.",
          level: 1,
          vocabularyIds: ["gehen", "stadt"]
        },
        {
          type: "tts",
          audioText: "Die Stadt hat viele interessante Sehenswürdigkeiten.",
          translation: "The city has many interesting sights.",
          topics: ["Describing tourist attractions", "Recommending sightseeing", "Sharing travel tips", "Giving tourist information"],
          correct: 0,
          explanation: "The speaker is talking about city attractions.",
          level: 1,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Ich komme aus einer kleinen Stadt im Norden.",
          translation: "I come from a small city in the north.",
          topics: ["Introducing where you're from", "Describing location", "Sharing personal background", "Answering where you live"],
          correct: 0,
          explanation: "The speaker is introducing where they come from.",
          level: 1,
          vocabularyIds: ["kommen", "stadt"]
        },
        {
          type: "tts",
          audioText: "Die Straßen in der Stadt sind sehr belebt.",
          translation: "The streets in the city are very busy.",
          topics: ["Describing city atmosphere", "Sharing urban observations", "Discussing city life", "Giving impressions"],
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
          sentence: "Ich habe diese Stadt sehr ___, als ich sie besucht habe.",
          options: ["geliebt", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'geliebt' means loved - I loved this city very much when I visited it. This uses past tense and subordinate clause (als).",
          translation: "I loved this city very much when I visited it.",
          level: 2,
          vocabularyIds: ["lieben", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die Stadt, ___ ich letztes Jahr besucht habe, hat viele Sehenswürdigkeiten.",
          options: ["die", "und", "oder", "aber"],
          correct: 0,
          explanation: "'die' means which/that - The city that I visited last year has many sights. This uses a relative clause and past tense.",
          translation: "The city that I visited last year has many sights.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Hamburg, das ich letztes Jahr besucht habe, ist eine wunderschöne Hafenstadt im Norden Deutschlands.",
          translation: "Hamburg, which I visited last year, is a beautiful port city in the north of Germany.",
          topics: ["Describing a past visit", "Praising a city", "Sharing travel memories", "Recommending destinations"],
          correct: 0,
          explanation: "The speaker is describing a past visit using a relative clause (das) and past tense.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe gestern die Stadt ___, die ich schon lange sehen wollte.",
          options: ["besucht", "gegessen", "getrunken", "geschlafen"],
          correct: 0,
          explanation: "'besucht' means visited - yesterday I visited the city that I had wanted to see for a long time. This uses past tense and relative clause (die).",
          translation: "Yesterday I visited the city that I had wanted to see for a long time.",
          level: 2,
          vocabularyIds: ["besuchen", "stadt"]
        },
        {
          type: "missing-word",
          sentence: "Die ___ ist sehr lebendig.",
          options: ["Stadt", "Haus", "Auto", "Stuhl"],
          correct: 0,
          explanation: "'Stadt' means city and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
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
          explanation: "'Stadt' means city and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
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
          explanation: "'Stadt' means city and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
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
          explanation: "'Stadt' means city and uses the feminine article 'die'. The other options don't work: 'Haus' and 'Auto' are neuter (das), and 'Stuhl' is masculine (der).",
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
          topics: ["Expressing city appreciation", "Recommending a place", "Sharing travel impressions", "Discussing favorites"],
          correct: 0,
          explanation: "The speaker is expressing love for a city and mentioning museums and restaurants.",
          level: 2,
          vocabularyIds: ["stadt", "lieben"]
        },
        {
          type: "tts",
          audioText: "Köln ist bekannt für seinen Dom und die Karnevalsfeiern.",
          translation: "Cologne is known for its cathedral and carnival celebrations.",
          topics: ["Describing famous landmarks", "Giving tourist information", "Sharing historical facts", "Recommending sightseeing"],
          correct: 0,
          explanation: "The speaker is talking about Cologne's famous landmarks.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Ich erkunde gerne neue Städte und entdecke ihre Kultur.",
          translation: "I like to explore new cities and discover their culture.",
          topics: ["Describing a hobby", "Sharing travel interests", "Discussing cultural exploration", "Expressing wanderlust"],
          correct: 0,
          explanation: "The speaker is describing their hobby of exploring cities.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Die Altstadt ist der schönste Teil der Stadt mit vielen historischen Gebäuden.",
          translation: "The old town is the most beautiful part of the city with many historical buildings.",
          topics: ["Recommending a neighborhood", "Describing city areas", "Giving tourist advice", "Sharing impressions"],
          correct: 0,
          explanation: "The speaker is talking about the old town area.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Ich plane eine Reise nach Frankfurt, um die Stadt zu besichtigen.",
          translation: "I'm planning a trip to Frankfurt to visit the city.",
          topics: ["Discussing travel plans", "Sharing vacation ideas", "Making arrangements", "Expressing excitement"],
          correct: 0,
          explanation: "The speaker is talking about planning a city visit.",
          level: 2,
          vocabularyIds: ["stadt", "reisen"]
        },
        {
          type: "tts",
          audioText: "Die Stadt bietet viele kulturelle Veranstaltungen und Festivals.",
          translation: "The city offers many cultural events and festivals.",
          topics: ["Describing city attractions", "Recommending activities", "Discussing local events", "Making suggestions"],
          correct: 0,
          explanation: "The speaker is talking about city cultural offerings.",
          level: 2,
          vocabularyIds: ["stadt"]
        },
        {
          type: "tts",
          audioText: "Diese Stadt ist sehr schön. Ich möchte hier bleiben.",
          translation: "This city is very beautiful. I want to stay here.",
          topics: ["Expressing city admiration", "Discussing travel desires", "Sharing impressions", "Making decisions"],
          correct: 0,
          explanation: "The speaker is saying the city is very beautiful and they want to stay here.",
          level: 2,
          vocabularyIds: ["stadt", "schön"]
        }
      ],
      [
        // Level 3 exercises
        {
          type: "missing-word",
          sentence: "Können Sie mir ___ erklären, wie ich zu dieser Sehenswürdigkeit komme?",
          options: ["erklären", "besuchen", "sehen", "verlassen"],
          correct: 0,
          explanation: "'erklären' means to explain - can you explain to me how to get to this sight?",
          translation: "Can you explain to me how to get to this sight?",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "missing-word",
          sentence: "Ich habe vergessen, wie diese Stadt ___ heißt.",
          options: ["wirklich", "eigentlich", "vielleicht", "wahrscheinlich"],
          correct: 0,
          explanation: "'wirklich' means really/actually - I forgot what this city is really called.",
          translation: "I forgot what this city is really called.",
          level: 3,
          vocabularyIds: ["vergessen"]
        },
        {
          type: "missing-word",
          sentence: "Wir müssen ___ treffen, welche Stadt wir besuchen sollen.",
          options: ["entscheiden", "besuchen", "sehen", "verlassen"],
          correct: 0,
          explanation: "'entscheiden' means to decide - we need to decide which city we should visit.",
          translation: "We need to decide which city we should visit.",
          level: 3,
          vocabularyIds: ["entscheiden", "besuchen"]
        },
        {
          type: "missing-word",
          sentence: "Ich kann mich nicht ___ an den Namen der Straße, wo ich gestern war.",
          options: ["erinnern", "besuchen", "sehen", "verlassen"],
          correct: 0,
          explanation: "'erinnern' means to remember - I can't remember the name of the street where I was yesterday.",
          translation: "I can't remember the name of the street where I was yesterday.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "missing-word",
          sentence: "Ich verstehe nicht, warum diese Stadt so ___ ist.",
          options: ["berühmt", "unbekannt", "klein", "groß"],
          correct: 0,
          explanation: "'berühmt' means famous - I don't understand why this city is so famous.",
          translation: "I don't understand why this city is so famous.",
          level: 3,
          vocabularyIds: ["verstehen", "berühmt"]
        },
        {
          type: "tts",
          audioText: "Können Sie mir bitte erklären, wie ich zu den wichtigsten Sehenswürdigkeiten dieser Stadt komme?",
          translation: "Can you please explain to me how to get to the most important sights of this city?",
          topics: ["Asking for directions", "Requesting tourist information", "Planning sightseeing", "Seeking guidance"],
          correct: 0,
          explanation: "The speaker is asking for directions to the city's main sights.",
          level: 3,
          vocabularyIds: ["erklären"]
        },
        {
          type: "tts",
          audioText: "Ich habe vergessen, wie diese historische Stadt wirklich heißt. Können Sie mir helfen?",
          translation: "I forgot what this historical city is really called. Can you help me?",
          topics: ["Expressing a memory lapse", "Asking for help", "Admitting confusion", "Seeking information"],
          correct: 0,
          explanation: "The speaker forgot the city's name and is asking for help.",
          level: 3,
          vocabularyIds: ["vergessen"]
        },
        {
          type: "tts",
          audioText: "Wir müssen uns entscheiden, welche Stadt wir in unserem nächsten Urlaub besuchen sollen.",
          translation: "We need to decide which city we should visit on our next vacation.",
          topics: ["Making a travel decision", "Planning a vacation", "Discussing destinations", "Choosing a city"],
          correct: 0,
          explanation: "The speaker is discussing the need to decide which city to visit.",
          level: 3,
          vocabularyIds: ["entscheiden", "besuchen"]
        },
        {
          type: "tts",
          audioText: "Ich erinnere mich nicht mehr an den Namen der Straße, wo ich gestern das beste Restaurant gefunden habe.",
          translation: "I don't remember the name of the street where I found the best restaurant yesterday anymore.",
          topics: ["Expressing uncertainty", "Admitting a memory lapse", "Talking about restaurants", "Needing directions"],
          correct: 0,
          explanation: "The speaker doesn't remember the street name where they found a restaurant.",
          level: 3,
          vocabularyIds: ["erinnern"]
        },
        {
          type: "tts",
          audioText: "Ich verstehe nicht, warum diese Stadt so berühmt für ihre Architektur ist.",
          translation: "I don't understand why this city is so famous for its architecture.",
          topics: ["Expressing confusion", "Questioning reputation", "Talking about architecture", "Seeking understanding"],
          correct: 0,
          explanation: "The speaker doesn't understand why the city is famous for architecture.",
          level: 3,
          vocabularyIds: ["verstehen", "berühmt"]
        },
        {
          type: "tts",
          audioText: "Wir haben erfolgreich eine Stadtrundfahrt organisiert, obwohl es sehr kompliziert war, alle Sehenswürdigkeiten zu besuchen.",
          translation: "We successfully organized a city tour, although it was very complicated to visit all the sights.",
          topics: ["Reporting success", "Describing challenges", "Organizing tours", "Expressing satisfaction"],
          correct: 0,
          explanation: "The speaker is reporting successful organization of a city tour despite complications.",
          level: 3,
          vocabularyIds: ["erfolgreich", "organisieren"]
        }
      ]
    ]
  }
};
